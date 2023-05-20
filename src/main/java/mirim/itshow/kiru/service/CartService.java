package mirim.itshow.kiru.service;

import mirim.itshow.kiru.dao.CartItemRepository;
import mirim.itshow.kiru.entity.CartItem;
import mirim.itshow.kiru.entity.enum_col.Country;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

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
    public CartItem saveCart(CartItem cartItem){
        checkDuplication(cartItem);
        return cartItemRepository.save(cartItem);
    }

    private void checkDuplication(CartItem cartItem){
        CartItem dbItem = cartItemRepository.findByItemName(cartItem.getItemName());
        if(dbItem != null){
            throw new IllegalStateException("이미 등록되어 있는 상품입니다. 또 등록하시겠습니까?");
        }
    }

    /**
     * 장바구니 데이터 출력
     */
    // 한복, 기모노 따로 목록 보여주기
    public List<CartItem> selectByCountry(Country HanbokOrKimono){
        return cartItemRepository.findByCountry(HanbokOrKimono);
    }

    // 특정 아이디를 가진 장바구니 상품 보여주기
    public Optional<CartItem> findById(Long id){
        return cartItemRepository.findById(id);
    }

    // 금액 총 합계
    public List<Integer> selectTotalPrice(){
        List<CartItem> hanbokList = cartItemRepository.findByCountry(Country.hanbok);
        List<CartItem> kimonoList = cartItemRepository.findByCountry(Country.kimono);

        int hanbokTotal = hanbokList.stream().filter(i -> i.isChecked()).mapToInt(i -> i.getPrice()).sum();
        int kimonoTotal = kimonoList.stream().filter(i -> i.isChecked()).mapToInt(i -> i.getPrice()).sum();

        return Arrays.asList(hanbokTotal, kimonoTotal);
    }

    /**
     * 상품 업데이트
     */
    public CartItem updateCart(CartItem cartItem){
        return cartItemRepository.save(cartItem); // 원래 있는 id면 update해줌
    }

    /**
     * 상품 삭제
     */
    public void deleteById(Long id){
        cartItemRepository.deleteById(id);
    }
}
