package mirim.itshow.kiru.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HeartController {
    @GetMapping("/heart")
    public String heartList(){
        return "heart/heart_list";
    }
}