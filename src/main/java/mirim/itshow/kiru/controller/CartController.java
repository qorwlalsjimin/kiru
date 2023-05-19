package mirim.itshow.kiru.controller;

import mirim.itshow.kiru.dto.CartForm;
import mirim.itshow.kiru.dto.MemberForm;
import mirim.itshow.kiru.entity.Cart;
import mirim.itshow.kiru.entity.CartItem;
import mirim.itshow.kiru.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;

@RestController
@RequestMapping("/api")
public class CartController {

    CartService cartService;

    @Autowired
    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @GetMapping("/cart")
    public String cartList(){
        return "cart/cart_list";
    }

    @PostMapping("/cart/new")
    public ResponseEntity<CartItem> cartNew(@RequestBody CartForm form) throws URISyntaxException {
        CartItem cartItem = CartItem.createCart(form);
        cartService.addCart(cartItem);
        System.out.println("장바구니: 장바구니 상품 등록 '"+cartItem.getItemName()+"'");
        return ResponseEntity.created(new URI("/api/cart/new" + cartItem.getCartItemId()))
                .body(cartItem);
    }
}
