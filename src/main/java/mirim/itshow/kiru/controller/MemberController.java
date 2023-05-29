package mirim.itshow.kiru.controller;

import mirim.itshow.kiru.dto.JoinForm;
import mirim.itshow.kiru.dto.LoginForm;
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
//    private SessionManager sessionManager;
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

    /**
     * 로그인
     */
    @GetMapping("/member/login")
    public void login_form(){
        //할 일 없음
    }

    @PostMapping(value="/member/login")
    public ResponseEntity<Member> login(@Valid @RequestBody LoginForm loginForm, BindingResult bindingResult, HttpServletResponse response){
        Member loginMember = memberService.login(loginForm.getInputid(), loginForm.getInputpw());
        System.out.print(loginForm.getInputid()+" "+loginForm.getInputpw());
        //로그인 실패
        if(loginMember == null){
            return ResponseEntity.notFound().build(); //TODO notFound()를 이렇게 써도 되는지
            //TODO 로그인페이지로 return
        }

        //로그인 성공
//        sessionManager.createSession(loginMember, response); //세션 생성
        //TODO 로그인 누르기 전 화면으로 return

        System.out.println("요기요기 "+ResponseEntity.ok().body("{id:"+loginMember.getId()+"}"));

        return ResponseEntity.ok().body(loginMember);
    }

    /**
     * 로그아웃
     * @param request
     */
    @PostMapping(value="/member/logout")
    public ResponseEntity<?> logout(HttpServletRequest request){
//        sessionManager.expire(request); //세션 완료
        return ResponseEntity.ok().build();
    }

}