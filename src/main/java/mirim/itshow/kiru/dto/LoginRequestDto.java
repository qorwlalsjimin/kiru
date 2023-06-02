package mirim.itshow.kiru.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import mirim.itshow.kiru.entity_domain.Member;
import mirim.itshow.kiru.entity_domain.enum_col.Authority;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class LoginRequestDto {
    //로그인 Form

    private String email;
    private String password;

    public Member toMember(PasswordEncoder passwordEncoder) {
        return Member.builder()
                .memberEmail(email)
                .memberPw(passwordEncoder.encode(passwordEncoder.encode(password))) //암호화
                .authority(Authority.ROLE_USER)
                .build();
    }

    public UsernamePasswordAuthenticationToken toAuthentication() {
        return new UsernamePasswordAuthenticationToken(email, password);
    }
}
