package mirim.itshow.kiru.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import mirim.itshow.kiru.dto.member.JoinForm;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@NoArgsConstructor //기본 생성자
@Data
@Entity //엔티티
@Table
public class Member implements UserDetails {
    @Id //primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto_increment
    @Column(name = "id")
    private Long id; //사용자 식별 id

    @Column(nullable = false, length = 30) // column 조건
    private String memberid; //사용자 입력 id(이메일)

    @Column(nullable = false, length = 20)
    private String memberpw; //사용자 입력 pw

    @Column(nullable = false, length = 15)
    private String name; //사용자 이름(최대 5글자)

    @Column(nullable = false, length = 60)
    private String address; //사용자 주소

    @Column(nullable = false, length = 11)
    private String phone; //사용자 전화번호

    @Column
    private String auth = "USER";

    //TODO 프론트에서 null로 옴
    @Column
    private LocalDateTime createTimestamp; //사용자 가입 시간

    public static Member createMember(JoinForm joinForm){
        Member member = new Member();
        member.setMemberid(joinForm.getMemberid());
        member.setMemberpw(joinForm.getMemberpw());
        member.setName(joinForm.getName());
        member.setAddress(joinForm.getAddress());
        member.setPhone(joinForm.getPhone());
        return member;
    }


    /** 추상 메서드 구현 **/
    //사용자의 권한을 콜렉션 형태로 반환
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Set<GrantedAuthority> roles = new HashSet<>();
        roles.add(new SimpleGrantedAuthority(auth)); //관리자 계정 없어서 바로 USER 넣게 함
        return roles;
    }

    //비밀번호 반환
    @Override
    public String getPassword() {
        return getPassword();
    }

    //사용자 입력 id(이메일) 반환
    @Override
    public String getUsername() {
        return memberid;
    }

    //계정 만료되었는지
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    //계정 잠궈져있는지
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    //비밀번호 만료되었는지
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    //계정 사용 가능한지
    @Override
    public boolean isEnabled() {
        return true;
    }
}
