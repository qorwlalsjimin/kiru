package mirim.itshow.kiru.service;

import mirim.itshow.kiru.dao.MemberRepository;
import mirim.itshow.kiru.entity.Member;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.Optional;

@Service
@Transactional
public class MemberService {
    private final MemberRepository memberRepository;

    @Autowired //하나면 생략 가능함
    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    /**
     * 회원 가입
     */
    public Member join(Member member){
        validateDuplicateMember(member);

        return memberRepository.save(member);
    }

    //회원 중복 확인
    private void validateDuplicateMember(Member member){
        Member findmember = memberRepository.findByMemberid(member.getMemberid());
        if(findmember != null){
            throw new IllegalStateException("이미 가입된 회원입니다.");
        }
    }

}
