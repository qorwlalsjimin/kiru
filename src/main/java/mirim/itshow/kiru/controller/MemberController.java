package mirim.itshow.kiru.controller;

import mirim.itshow.kiru.model.MemberRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api")
public class MemberController {

    @GetMapping("/member/login")
    public String login(){
        return "member/login_form.html";
    }


}
