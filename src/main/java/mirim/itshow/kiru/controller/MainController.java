package mirim.itshow.kiru.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {
//TODO: 한복/기모노 나눌지 정하기
    @GetMapping("/main/hanbok")
    public String hanbokPage(){
        return "main/main_hanbok";
    }

    @GetMapping("/main/kimono")
    public String kimonoPage(){
        return "main/main_kimono";
    }
}
