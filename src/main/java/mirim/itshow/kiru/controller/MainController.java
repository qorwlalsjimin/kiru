package mirim.itshow.kiru.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/main/hanbok")
    public String hanbokPage(){
        return "main/main_hanbok";
    }

    @GetMapping("/main/kimono")
    public String kimonoPage(){
        return "main/main_kimono";
    }
}
