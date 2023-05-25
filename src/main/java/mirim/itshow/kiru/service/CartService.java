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
        checkDuplication(form);
        Item item = itemRepository.findById(form.getItemId()).get(); //상품 id로 해당 상품 가져오기
        Member member = memberRopository.findByMemberid(memberid); //회원 정보
        Cart cart = cartRepository.findByMember(member); //회원이 가지고 있는 장바구니
        if(cart == null){ //장바구니가 없었다면
            cart = Cart.createCart(member); //새로 만들어준다
            cartRepository.save(cart);
        }
        CartItem cartItem = CartItem.createCart(form, item, cart); //장바구니에 상품 등록
        return cartItemRepository.save(cartItem); //DB에 저장
    }

    private void checkDuplication(CartForm cartForm){
        System.out.println("장바구니: 중복체크");
        Optional<CartItem> dbItem = cartItemRepository.findByItem_ItemId(cartForm.getItemId()); //form에 들어오는 상품 id로 cart_item 테이블에서 해당 row 가져오기
        //TODO 프론트에서 confirm yes no 받아서 처리
        //TODO 옵션 다르면 따로따로 해줘도 되는데, 옵션 똑같고 수량 추가하는 거면 어떻게 하지?

        //상품 종류&색상 체크도 같이 해야 함
        if(!dbItem.isEmpty()){
            throw new IllegalStateException("이미 등록되어 있는 상품입니다. 또 등록하시겠습니까?");
            //또 등록하면 에러 건너뛰게 하면 됨
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
        CartItem cartItem = cartItemRepository.findById(cartForm.getCartItemId()).get();

        cartItem.setColor(cartForm.getColor());
        cartItem.setAmount(cartForm.getAmount());
        cartItem.setSize(cartForm.getSize());

        return cartItemRepository.save(cartItem); // 원래 있는 id면 update해줌
    }

    /**
     * 상품 삭제
     */
    public void deleteById(Long id){
        cartItemRepository.deleteById(id);
    }
}
