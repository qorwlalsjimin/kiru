package mirim.itshow.kiru.service;

import mirim.itshow.kiru.dao.CartItemRepository;
import mirim.itshow.kiru.dao.CartRepository;
import mirim.itshow.kiru.dao.ItemRepository;
import mirim.itshow.kiru.dao.MemberRepository;
import mirim.itshow.kiru.dto.cart.CartForm;
import mirim.itshow.kiru.dto.cart.CartUpdateForm;
import mirim.itshow.kiru.entity.Cart;
import mirim.itshow.kiru.entity.CartItem;
import mirim.itshow.kiru.entity.Item;
import mirim.itshow.kiru.entity.Member;
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
    private final ItemRepository itemRepository;
    private final CartRepository cartRepository;
    private final MemberRepository memberRopository;

    @Autowired
    public CartService(CartItemRepository cartItemRepository, ItemRepository itemRepository, CartRepository cartRepository, MemberRepository memberRopository) {
        this.cartItemRepository = cartItemRepository;
        this.itemRepository = itemRepository;
        this.cartRepository = cartRepository;
        this.memberRopository = memberRopository;
    }

    /**
     * 상품 등록
     */
    public CartItem addCart(CartForm form, String memberid){
//        checkDuplication(form);
        Item item = itemRepository.findById(form.getItemId()).get();
        Member member = memberRopository.findByMemberid(memberid);
        Cart cart = cartRepository.findByMember(member);
        if(cart == null){
            cart = Cart.createCart(member);
            cartRepository.save(cart);
        }
        CartItem cartItem = CartItem.createCart(form, item, cart);
        return cartItemRepository.save(cartItem);
    }

    private void checkDuplication(CartForm cartForm){
        Optional<CartItem> dbItem = cartItemRepository.findById(cartForm.getItemId());
        System.out.println(cartForm.getItemId());
        //상품 종류&색상 체크도 같이 해야 함
        if(dbItem != null){
            throw new IllegalStateException("이미 등록되어 있는 상품입니다. 또 등록하시겠습니까?");
        }
    }

    /**
     * 장바구니 데이터 출력
     */
    // 한복, 기모노 따로 목록 보여주기
    public List<CartItem> selectByCountry(Country HanbokOrKimono){
        return cartItemRepository.findByItem_Country(HanbokOrKimono);
    }

    // 특정 아이디를 가진 장바구니 상품 보여주기
    public Optional<CartItem> findById(Long id){
        return cartItemRepository.findById(id);
    }

    // 금액 총 합계
    public List<Integer> selectTotalPrice(){
        List<CartItem> hanbokList = cartItemRepository.findByItem_Country(Country.hanbok);
        List<CartItem> kimonoList = cartItemRepository.findByItem_Country(Country.kimono);

        int hanbokTotal = hanbokList.stream().filter(i -> i.isChecked()).mapToInt(i -> i.getItem().getPrice()).sum();
        int kimonoTotal = kimonoList.stream().filter(i -> i.isChecked()).mapToInt(i -> i.getItem().getPrice()).sum();

        return Arrays.asList(hanbokTotal, kimonoTotal);
    }

    /**
     * 상품 업데이트
     */
    public CartItem updateCart(CartUpdateForm cartForm){
//        Item item = itemRepository.findById(cartForm.getItemId()).get();
//        Cart cart = cartRepository.findById(cartForm.getCartItemId()).get();
//        CartItem cartItem = CartItem.createCart(cartForm, item, cart);
        System.out.println("확인해보시오 "+cartForm.getCartItemId());
        CartItem cartItem = cartItemRepository.findById(cartForm.getCartItemId()).get();
        return cartItemRepository.save(cartItem); // 원래 있는 id면 update해줌
    }

    /**
     * 상품 삭제
     */
    public void deleteById(Long id){
        cartItemRepository.deleteById(id);
    }
}
