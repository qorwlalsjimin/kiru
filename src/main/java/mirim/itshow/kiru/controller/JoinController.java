package mirim.itshow.kiru.controller;

import mirim.itshow.kiru.dto.JoinForm;
import mirim.itshow.kiru.entity.Member;
import mirim.itshow.kiru.service.MemberService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

@RestController
@RequestMapping("/api")
public class JoinController {

    private MemberService memberService;
//    private SessionManager sessionManager;
    private final Logger log = LoggerFactory.getLogger(JoinController.class);

    @Autowired
    public JoinController(MemberService memberService) {
        this.memberService = memberService;
    }

    /**
     * 회원가입
     */
    @GetMapping(value = "/member/join")
    public void joinForm(){
        //할 일 없음
    }

    //회원 등록
    @PostMapping("/member/join")
    public ResponseEntity<Member> join(@RequestBody JoinForm joinForm) throws URISyntaxException {
        System.out.println(joinForm.toString());
        System.out.println(joinForm.getAddress());
        Member member = Member.createMember(joinForm);
        memberService.join(member); //서비스의 join()를 통해 DB에 등록

        System.out.println("요기요기 "+ResponseEntity.created(new URI("/api/member/join/" + member.getId()))
                .body(member));

        return ResponseEntity.created(new URI("/api/member/join/" + member.getId()))
                .body(member);
    }


}