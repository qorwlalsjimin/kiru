package mirim.itshow.kiru.service;

import mirim.itshow.kiru.dao.MemberRepository;
import mirim.itshow.kiru.dto.LoginForm;
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

    /**
    * 로그인
    */
    public Member login(String inputId, String inputPw){

        Member dataMember = memberRepository.findByMemberid(inputId);
        if(dataMember == null){ //일치하는 아이디가 없다면
            System.out.println("등록된 아이디가 없습니다");
            return null;
        }

        String dataPw = dataMember.getMemberpw();
        if(inputPw != dataPw){
            System.out.println("비밀번호가 틀렸습니다.");
            return null;
        }

        return memberRepository.findByMemberid(inputId);
    }

}
