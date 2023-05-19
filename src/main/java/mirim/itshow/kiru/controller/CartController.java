package mirim.itshow.kiru.controller;

import mirim.itshow.kiru.dto.CartForm;
import mirim.itshow.kiru.dto.MemberForm;
import mirim.itshow.kiru.entity.Cart;
import mirim.itshow.kiru.entity.CartItem;
import mirim.itshow.kiru.entity.Item;
import mirim.itshow.kiru.entity.enum_col.Country;
import mirim.itshow.kiru.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class CartController {

    CartService cartService;

    @Autowired
    public CartController(CartService cartService) {
        this.cartService = cartService;
    }


    // 장바구니 목록
    @GetMapping("/cart/{country}")
    public Collection<CartItem> cartList(@PathVariable Country country){
        System.out.println("장바구니 "+country+" 목록 get");
        return cartService.selectByCountry(country);
    }

    // 한복, 기모노 상품 금액 합계
    @GetMapping("/cart/price_total")
    public ResponseEntity<?> priceTotal(){
        List<Integer> total = cartService.selectTotalPrice();
        return new ResponseEntity<List<Integer>>(cartService.selectTotalPrice(), HttpStatus.OK); //한복, 기모노 순서
    }

    //장바구니에 상품 등록
    @PostMapping("/cart/new")
    public ResponseEntity<CartItem> cartNew(@RequestBody CartForm form) throws URISyntaxException {
        CartItem cartItem = CartItem.createCart(form);
        cartService.addCart(cartItem);
        System.out.println("장바구니: 장바구니 상품 등록 '"+cartItem.getItemName()+"'");
        return ResponseEntity.created(new URI("/api/cart/new" + cartItem.getCartItemId()))
                .body(cartItem);
    }
}
