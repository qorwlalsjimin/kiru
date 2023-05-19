package mirim.itshow.kiru.service;

import mirim.itshow.kiru.dao.MemberRepository;
import mirim.itshow.kiru.dto.LoginForm;
import mirim.itshow.kiru.entity.Member;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.Optional;

@Service
@Transactional //TODO 왜 쓰는지 모름
public class MemberService {
    private final MemberRepository memberRepository;
    private final Logger log = LoggerFactory.getLogger(MemberService.class);

    @Autowired //하나면 생략 가능함
    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    /**
     * 회원 가입
     */
    public Member join(Member member){
        validateDuplicateMember(member);
        System.out.println("회원가입 성공");
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
            log.info("login service", "등록된 아이디가 없습니다.");
            System.out.println("로그인 실패: 등록된 아이디가 없습니다.");
            return null;
        }

        String dataPw = dataMember.getMemberpw();
        if(!inputPw.equals(dataPw)){
            log.info("login service", "비밀번호가 틀렸습니다.");
            System.out.println("로그인 실패: 비밀번호가 틀렸습니다. input: "+inputPw+" DB: "+dataPw);
            return null;
        }

        System.out.println("로그인 성공");

        return memberRepository.findByMemberid(inputId);
    }

}
