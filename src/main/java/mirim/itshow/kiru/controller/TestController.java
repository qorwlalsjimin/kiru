package mirim.itshow.kiru.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class TestController {
    @GetMapping("/api/hello")
    public String hello(){
        return "하이^^"+new Date();
    }
}
