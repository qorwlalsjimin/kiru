package mirim.itshow.kiru.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CartController {
    @GetMapping("/cart")
    public String cartList(){
        return "cart/cart_list";
    }
}
