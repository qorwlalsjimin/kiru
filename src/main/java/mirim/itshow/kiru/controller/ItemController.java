package mirim.itshow.kiru.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ItemController {
    
    //TODO: 상품 아이디 받아야됨
    @GetMapping("/item/item_list")
    public String item_list(){
        return "item/item_list";
    }
}
