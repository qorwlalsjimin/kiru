package mirim.itshow.kiru.jwt;

import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import lombok.extern.slf4j.Slf4j;
import mirim.itshow.kiru.dto.TokenDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.stream.Collectors;

@Slf4j
@Component
public class TokenProvider {
    //JWT 토큰에 관련된 암호화, 복호화, 검증 로직은 다 이곳에서 이루어집니다.

    private static final String AUTHORITIES_KEY = "auth";
    private static final String BEARER_TYPE = "Bearer";
    private static final long ACCESS_TOKEN_EXPIRE_TIME = 1000 * 60 * 30 * 20;            // 30분 * 20 = 600분 10시간
    private static final long REFRESH_TOKEN_EXPIRE_TIME = 1000 * 60 * 60 * 24 * 7;  // 7일

    private final Key key;

    /**
     * application.yml 에 정의해놓은 jwt.secret 값을 가져와서
     * JWT 를 만들 때 사용하는 암호화 키값을 생성합니다.
     * @param secretKey
     */
    public TokenProvider(@Value("${jwt.secret}") String secretKey) {
        byte[] keyBytes = Decoders.BASE64.decode(secretKey);
        this.key = Keys.hmacShaKeyFor(keyBytes);
    }

    /**
     * 유저 정보를 넘겨받아서 Access Token 과 Refresh Token 을 생성합니다.
     * 넘겨받은 유저 정보의 authentication.getName() 메소드가 username 을 가져옵니다.
     * 저는 username 으로 Member ID 를 저장했기 때문에 해당 값이 설정될 겁니다.
     * Access Token 에는 유저와 권한 정보를 담고 Refresh Token 에는 아무 정보도 담지 않습니다.
     *
     * @param authentication
     * @return
     */
    public TokenDto generateTokenDto(Authentication authentication) {
        // 권한들 가져오기
        String authorities = authentication.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.joining(","));

        long now = (new Date()).getTime(); //초 단위로 저장됨

        // Access Token 생성
        Date accessTokenExpiresIn = new Date(now + ACCESS_TOKEN_EXPIRE_TIME);
        String accessToken = Jwts.builder()
                .setSubject(authentication.getName())       // payload "sub": "회원 식별 id"
                .claim(AUTHORITIES_KEY, authorities)        // payload "auth": "ROLE_USER"
                .setExpiration(accessTokenExpiresIn)        // payload "exp": 1516239022 (예시)
                .signWith(key, SignatureAlgorithm.HS512)    // header "alg": "HS512"
                .compact();

        // Refresh Token 생성
        Date refreshTokenExpiresIn = new Date(now + REFRESH_TOKEN_EXPIRE_TIME);
        String refreshToken = Jwts.builder()
                .setExpiration(refreshTokenExpiresIn)
                .signWith(key, SignatureAlgorithm.HS512)
                .compact();

        return TokenDto.builder()
                .grantType(BEARER_TYPE)
                .accessToken(accessToken)
                .accessTokenExpiresIn(accessTokenExpiresIn.getTime())
                .refreshToken(refreshToken)
                .build();
    }

    /**
     * JWT 토큰을 복호화하여 토큰에 들어 있는 정보를 꺼냅니다.
     * Access Token 에만 유저 정보를 담기 때문에 명시적으로 accessToken 을 파라미터로 받게 했습니다.
     * Refresh Token 에는 아무런 정보 없이 만료일자만 담았습니다.
     *
     * UserDetails 객체를 생성해서 UsernamePasswordAuthenticationToken 형태로 리턴하는데 SecurityContext 를 사용하기 위한 절차라고 생각하면 됩니다..
     * 사실 좀 불필요한 절차라고 생각되지만 SecurityContext 가 Authentication 객체를 저장하기 때문에 어쩔수 없습니다.
     * @param accessToken
     * @return
     */
    public Authentication getAuthentication(String accessToken) {
        // 토큰 복호화
        Claims claims = parseClaims(accessToken);

        if (claims.get(AUTHORITIES_KEY) == null) {
            throw new RuntimeException("권한 정보가 없는 토큰입니다.");
        }

        // 클레임에서 권한 정보 가져오기
        Collection<? extends GrantedAuthority> authorities =
                Arrays.stream(claims.get(AUTHORITIES_KEY).toString().split(","))
                        .map(SimpleGrantedAuthority::new)
                        .collect(Collectors.toList());

        // UserDetails 객체를 만들어서 Authentication 리턴
        UserDetails principal = new User(claims.getSubject(), "", authorities);

        return new UsernamePasswordAuthenticationToken(principal, "", authorities);
    }

    /**
     *  만료된 토큰이어도 정보를 꺼내기 위해서 따로 분리했
     * @param accessToken
     * @return
     */
    private Claims parseClaims(String accessToken) {
        try {
            return Jwts.parserBuilder()
                    .setSigningKey(key).build()
                    .parseClaimsJws(accessToken)
                    .getBody();
        } catch (ExpiredJwtException e) {
            return e.getClaims();
        }
    }

    /**
     * 토큰 정보를 검증합니다.
     * Jwts 모듈이 알아서 Exception 을 던져줍니다.
     * @param token
     * @return
     */
    public boolean validateToken(String token) {
        System.out.println("검증할 토큰"+token);
        try {
            //Jwts 클래스로 비밀키를 전달하고 토큰으로 클레임을 만들 수 있다면 true 반환
            Jwts.parserBuilder().setSigningKey(key).build()
                    .parseClaimsJws(token);
            return true;

            //아니라면 상황에 맞춰 Exception을 발생시킨다 (Jwts 모듈이 알아서 해준다)
        } catch (io.jsonwebtoken.security.SecurityException | MalformedJwtException e) {
            log.info("잘못된 JWT 서명입니다.");
        } catch (ExpiredJwtException e) {
            log.info("만료된 JWT 토큰입니다.");
        } catch (UnsupportedJwtException e) {
            log.info("지원되지 않는 JWT 토큰입니다.");
        } catch (IllegalArgumentException e) {
            log.info("JWT 토큰이 잘못되었습니다.");
        }
        return false;
    }

}
