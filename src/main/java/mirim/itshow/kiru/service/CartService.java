package mirim.itshow.kiru.service;

import mirim.itshow.kiru.dao.CartItemRepository;
import mirim.itshow.kiru.dto.CartForm;
import mirim.itshow.kiru.entity.CartItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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
}
