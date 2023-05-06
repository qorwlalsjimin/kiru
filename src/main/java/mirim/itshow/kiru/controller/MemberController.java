package mirim.itshow.kiru.controller;

import org.springframework.web.bind.annotation.GetMapping;
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
