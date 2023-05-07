package mirim.itshow.kiru.controller;

import mirim.itshow.kiru.dto.MemberFormDto;
import mirim.itshow.kiru.entity.Member;
import mirim.itshow.kiru.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.net.URISyntaxException;

@RestController
@RequestMapping("/api")
public class MemberController {

    private MemberService memberService;

    @Autowired
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    /**
     * 로그인
     */
    @GetMapping("/member/login")
    public String login(){
        return "member/login_form.html";
    }


    /**
     * 회원가입
     */
    @GetMapping(value = "/member/join")
    public void joinForm(){
        //리액트랑 통신
    }

    @PostMapping("/member/join")
    public ResponseEntity<Member> join(MemberFormDto memberFormDto) throws URISyntaxException {
        Member member = Member.createMember(memberFormDto);

        memberService.join(member);

        return ResponseEntity.created(new URI("/api/member/" + member.getId()))
                .body(member);
    }

}
