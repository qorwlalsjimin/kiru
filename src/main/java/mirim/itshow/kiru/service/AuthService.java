package mirim.itshow.kiru.service;

import lombok.RequiredArgsConstructor;
import mirim.itshow.kiru.dao.MemberRepository;
import mirim.itshow.kiru.dao.RefreshTokenRepository;
import mirim.itshow.kiru.dto.*;
import mirim.itshow.kiru.entity_domain.Member;
import mirim.itshow.kiru.entity_security.RefreshToken;
import mirim.itshow.kiru.jwt.TokenProvider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
@Service
@RequiredArgsConstructor

public class AuthService {
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final TokenProvider tokenProvider;
    private final RefreshTokenRepository refreshTokenRepository;

    @Transactional
    public MemberResponseDto signup(JoinRequestDto joinRequestDto) { //회원 form 받고
        if (memberRepository.existsByMemberEmail(joinRequestDto.getMemberEmail())) { //등록되어있는 회원인지 확인
            throw new RuntimeException("이미 가입되어 있는 유저입니다");
        }

        Member member = joinRequestDto.toMember(passwordEncoder); //비밀번호 암호화해서 회원 등록
        return MemberResponseDto.of(memberRepository.save(member)); //Entity To DTO해서 응답 보내기
    }

    @Transactional
    public TokenDto login(LoginRequestDto loginRequestDto) {
        // 1. Login ID/PW 를 기반으로 AuthenticationToken 생성
        UsernamePasswordAuthenticationToken authenticationToken = loginRequestDto.toAuthentication();

        //아직 인증이 완료되지 않은 상태

        // 2. 실제로 검증 (사용자 비밀번호 체크) 이 이루어지는 부분
        //    authenticate 메서드가 실행이 될 때
        //    CustomUserDetailsService 에서 만들었던 loadUserByUsername 메서드가 실행됨
        Authentication authentication = authenticationManagerBuilder.getObject()
                .authenticate(authenticationToken); // 검증 안 된 id, pw로 만든 토큰을 보냄
        // AuthenticationManager에 authenticate() 메서드가 있다

        //인증 완료. authentication에는 회원 식별 id가 들어있다

        // 3. 인증 정보를 기반으로 JWT 토큰 생성
        TokenDto tokenDto = tokenProvider.generateTokenDto(authentication);
        //Access&Refresh Token 생성

        // 4. RefreshToken 저장
        RefreshToken refreshToken = RefreshToken.builder()
                .key(authentication.getName())
                .value(tokenDto.getRefreshToken())
                .build();
        refreshTokenRepository.save(refreshToken);

        // 5. 토큰 발급
        return tokenDto; // 권한, Access 토큰, Refresh 토큰, Access 토큰 만료 시간
    }

    @Transactional
    public TokenDto reissue(TokenRequestDto tokenRequestDto) {
        // Access & Refresh Token을 받는다

        // 1. Refresh Token 검증: 만료 여부 검사
        if (!tokenProvider.validateToken(tokenRequestDto.getRefreshToken())) {
            throw new RuntimeException("Refresh Token 이 유효하지 않습니다.");
        }

        // Refresh 토큰이 유효함

        // 2. Access Token 에서 Member ID 가져오기
        Authentication authentication = tokenProvider.getAuthentication(tokenRequestDto.getAccessToken());
        //getAuthentication()에서 복호화

        // 3. 저장소에서 Member ID 를 기반으로 Refresh Token 값 가져옴
        RefreshToken refreshToken = refreshTokenRepository.findByKey(authentication.getName())
                .orElseThrow(() -> new RuntimeException("로그아웃 된 사용자입니다."));

        // 4. 저장소와 클라이언트의 Refresh Token이 일치하는지 검사
        if (!refreshToken.getValue().equals(tokenRequestDto.getRefreshToken())) {
            throw new RuntimeException("토큰의 유저 정보가 일치하지 않습니다.");
        }

        // Refresh 토큰이 일치한다면

        // 5. 새로운 토큰 생성 (로그인했을때와 동일)
        TokenDto tokenDto = tokenProvider.generateTokenDto(authentication); //Access도, Refresh도 모두 다시 생성

        // 6. 저장소 정보 업데이트
        RefreshToken newRefreshToken = refreshToken.updateValue(tokenDto.getRefreshToken());
        refreshTokenRepository.save(newRefreshToken);
        //Refresh Token은 재사용하지 못하게 저장소에서 값을 갱신한다

        // 토큰 발급
        return tokenDto;
    }
}
