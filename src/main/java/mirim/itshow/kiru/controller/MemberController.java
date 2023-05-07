package mirim.itshow.kiru.controller;

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
@RequestMapping("api")
public class MemberController {

    private MemberService memberService;

    @Autowired
    public MemberController(MemberService memberService) {
        this.memberService = memberService;
    }

    @GetMapping("/member/login")
    public String login(){
        return "member/login_form.html";
    }

    @PostMapping("/member/join")
    public ResponseEntity<Member> join(Member memberForm) throws URISyntaxException {
        Member member = new Member();
        member.setName(memberForm.getName());

        memberService.join(member);

        return ResponseEntity.created(new URI("/api/group/" + member.getId()))
                .body(member);
    }

}
