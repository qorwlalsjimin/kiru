package mirim.itshow.kiru.controller;

import mirim.itshow.kiru.dto.member.JoinForm;
import mirim.itshow.kiru.entity.Member;
import mirim.itshow.kiru.service.MemberService;
import org.hibernate.mapping.Join;
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
    private SessionManager sessionManager;
    private final Logger log = LoggerFactory.getLogger(JoinController.class);

    @Autowired
    public JoinController(MemberService memberService) {
        this.memberService = memberService;
    }

    /**
     * 회원가입
     */

    //회원 등록
    @PostMapping("/member/join")
    public ResponseEntity<JoinForm> join(@RequestBody JoinForm joinForm) throws URISyntaxException {
        System.out.println(joinForm.toString());
        System.out.println(joinForm.getAddress());
        memberService.join(joinForm); //서비스의 join()를 통해 DB에 등록

        return ResponseEntity.created(new URI("/api/member/join/" + joinForm.getMemberid()))
                .body(joinForm);
    }


}
