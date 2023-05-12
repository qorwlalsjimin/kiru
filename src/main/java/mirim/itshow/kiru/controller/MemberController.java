package mirim.itshow.kiru.controller;

import mirim.itshow.kiru.dto.LoginForm;
import mirim.itshow.kiru.dto.MemberForm;
import mirim.itshow.kiru.entity.Member;
import mirim.itshow.kiru.service.MemberService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;

@RestController
@RequestMapping("/api")
public class MemberController {

    private MemberService memberService;
    private SessionManager sessionManager;
    private final Logger log = LoggerFactory.getLogger(MemberController.class);

    @Autowired
    public MemberController(MemberService memberService) {
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
    public ResponseEntity<Member> join(@RequestBody MemberForm memberForm) throws URISyntaxException {
        System.out.println(memberForm.toString());
        System.out.println(memberForm.getAddress());
        Member member = Member.createMember(memberForm);
        memberService.join(member); //서비스의 join()를 통해 DB에 등록

        System.out.println("요기요기 "+ResponseEntity.created(new URI("/api/member/join/" + member.getId()))
                .body(member));

        return ResponseEntity.created(new URI("/api/member/join/" + member.getId()))
                .body(member);
    }


}
