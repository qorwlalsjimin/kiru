package mirim.itshow.kiru.controller;

import mirim.itshow.kiru.dto.cart.CartForm;
import mirim.itshow.kiru.dto.cart.CartUpdateForm;
import mirim.itshow.kiru.entity.CartItem;
import mirim.itshow.kiru.entity.enum_col.Country;
import mirim.itshow.kiru.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.List;

@RestController
@RequestMapping("/api")
public class CartController {

    CartService cartService;

    @Autowired
    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    //C: 장바구니에 상품 등록
    @PostMapping("/cart/new")
    public ResponseEntity<?> newItem(@RequestBody CartForm form) throws URISyntaxException {
        try {
            cartService.addCart(form, "사용자이름..");
        }catch (IllegalStateException e){
            System.out.println("이미 등록되어 있는 상품인데, 또 등록하시겠습니까?");
        }
        System.out.println("장바구니: 장바구니 상품 등록 '"+form.getItemId()+"'");
        return ResponseEntity.created(new URI("/api/cart/new" + form.getCartItemId()))
                .body(form);
    }

    //R: 장바구니 목록
    @GetMapping("/cart/{country}")
    public Collection<CartItem> cartList(@PathVariable Country country){
        System.out.println("장바구니: "+country+" 목록 get");
        return cartService.selectByCountry(country);
    }

    //R: 한복, 기모노 상품 금액 합계
    @GetMapping("/cart/price_total")
    public ResponseEntity<?> priceTotal(){
        List<Integer> total = cartService.selectTotalPrice();
        System.out.println("장바구니: 금액 합계 (한복: "+total.get(0)+", 기모노: "+total.get(1)+")");
        return new ResponseEntity<List<Integer>>(cartService.selectTotalPrice(), HttpStatus.OK); //한복, 기모노 순서
    }

    //U: 옵션 수정
    @PutMapping("/cart/update")
    public ResponseEntity<?> updateItem(@RequestBody CartUpdateForm cartForm){
        System.out.println("장바구니: 옵션 변경");
        CartItem result = cartService.updateCart(cartForm);
        return ResponseEntity.ok().body(cartForm);
    }

    //D: 하나의 장바구니 상품 삭제
    @DeleteMapping("/cart/delete/{id}")
    public ResponseEntity<?> deleteItem(@PathVariable Long id){
        cartService.deleteById(id);
        System.out.println("장바구니: 삭제 ("+id+")");
        return ResponseEntity.ok().build();
    }
}