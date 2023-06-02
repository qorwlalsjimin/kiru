package mirim.itshow.kiru.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import mirim.itshow.kiru.entity_domain.Member;
import mirim.itshow.kiru.entity_domain.enum_col.Authority;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class JoinRequestDto {
    //회원가입 Form

    private String memberEmail; //사용자 입력 id
    private String memberPw; //사용자 입력 pw
    private String name; //사용자 이름(최대 5글자)
    private String address; //사용자 주소
    private String phone; //사용자 전화번호


    public Member toMember(PasswordEncoder passwordEncoder) {
        return Member.builder()
                .memberEmail(memberEmail)
                .memberPw(passwordEncoder.encode(memberPw))
                .authority(Authority.ROLE_USER)
                .name(name)
                .address(address)
                .phone(phone)
                .build();
    }

    public UsernamePasswordAuthenticationToken toAuthentication() {
        return new UsernamePasswordAuthenticationToken(memberEmail, memberPw);
    }
}