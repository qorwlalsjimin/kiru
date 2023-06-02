package mirim.itshow.kiru.service;

import lombok.RequiredArgsConstructor;
import mirim.itshow.kiru.dao.MemberRepository;
import mirim.itshow.kiru.entity_domain.Member;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final MemberRepository memberRepository;

    /**
     * loadUserByUsername 메소드를 오버라이드 하는데
     * 여기서 넘겨받은 UserDetails 와 Authentication 의 패스워드를
     * 비교하고 검증하는 로직을 처리합니다.
     *
     * 물론 DB 에서 username 을 기반으로 값을 가져오기 때문에
     * 아이디 존재 여부도 자동으로 검증 됩니다.
     *
     * loadUserByUsername 메소드를 어디서 호출하는지 내부를 타고 들어가봅니다.
     * @param username the username identifying the user whose data is required.
     * @return
     * @throws UsernameNotFoundException
     */
    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserDetails userDetails;
        try{
            userDetails = createUserDetails(memberRepository.findByMemberEmail(username));
        }catch (Exception e){
            throw new UsernameNotFoundException(username + " -> 데이터베이스에서 찾을 수 없습니다.");
        }
        return userDetails;
    }

    // DB 에 User 값이 존재한다면 UserDetails 객체로 만들어서 리턴
    private UserDetails createUserDetails(Member member) { //회원 엔티티 받아서
        GrantedAuthority grantedAuthority = new SimpleGrantedAuthority(member.getAuthority().toString());
        //회원의 권한을 가져와 GrantedAuthority 객체를 만든다

        return new User(
                String.valueOf(member.getId()), // username으로 회원 식별 id 넘김
                member.getMemberPw(), // 암호화된 비밀번호
                Collections.singleton(grantedAuthority) //권한 넘기기
        );
    }
}
