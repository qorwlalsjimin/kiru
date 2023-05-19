package mirim.itshow.kiru.service;

import mirim.itshow.kiru.dao.CartItemRepository;
import mirim.itshow.kiru.dto.CartForm;
import mirim.itshow.kiru.entity.CartItem;
import mirim.itshow.kiru.entity.enum_col.Country;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class CartService {
    private final CartItemRepository cartItemRepository;

    @Autowired
    public CartService(CartItemRepository cartItemRepository) {
        this.cartItemRepository = cartItemRepository;
    }

    /**
     * 상품 등록
     */
    public CartItem addCart(CartItem cartItem){
        return cartItemRepository.save(cartItem);
    }

    /**
     * 장바구니 데이터 출력
     */
    // 한복, 기모노 따로 목록 보여주기
    public List<CartItem> selectByCountry(Country HanbokOrKimono){
        return cartItemRepository.findByCountry(HanbokOrKimono);
    }

    // 금액 총 합계
    public List<Integer> selectTotalPrice(){
        List<CartItem> hanbokList = cartItemRepository.findByCountry(Country.hanbok);
        List<CartItem> kimonoList = cartItemRepository.findByCountry(Country.kimono);

        int hanbokTotal = hanbokList.stream().filter(i -> i.isChecked()).mapToInt(i -> i.getPrice()).sum();
        int kimonoTotal = kimonoList.stream().filter(i -> i.isChecked()).mapToInt(i -> i.getPrice()).sum();

        return Arrays.asList(hanbokTotal, kimonoTotal);
    }
}
