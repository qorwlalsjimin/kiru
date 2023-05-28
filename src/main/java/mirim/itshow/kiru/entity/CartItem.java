package mirim.itshow.kiru.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import mirim.itshow.kiru.dto.cart.CartForm;
import mirim.itshow.kiru.entity.enum_col.Country;
import mirim.itshow.kiru.entity.enum_col.Size;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@NoArgsConstructor //기본 생성자
@Data
@Entity //엔티티
@Table
public class CartItem {
    @Id //primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto_increment
    @Column
    private Long cartItemId; //장바구니 상품 id(pk)

    @ManyToOne
    @JoinColumn
    private Cart cart; //장바구니 id(fk)

    @ManyToOne
    @JoinColumn(name = "item_id")
    private Item item; //상품 id(fk)

    @Column(nullable = false, length = 200)
    private String color; //색상

    @Enumerated(EnumType.STRING)
    @Type(type = "size_enum_type")
    private Size size; //옷&신발 사이즈

    @Column
    private int amount; //수량

    @Column(nullable = false)
    private LocalDate startDate; //대여 시작일
    private LocalDate endDate; //대여 종료일

    @Column
    private boolean checked=true; //장바구니 페이지에서 체크됐는지

    @Column
    private LocalDateTime createTimestamp; //장바구니에 넣은 시간

    public static CartItem createCart(CartForm form, Item item, Cart cart){
        CartItem cartItem = new CartItem();
        cartItem.setCartItemId(form.getCartItemId());

        cartItem.setCart(cart);
        cartItem.setItem(item);

        cartItem.setColor(form.getColor());
        cartItem.setSize(form.getSize());
        cartItem.setAmount(form.getAmount());

        cartItem.setStartDate(form.getStartDate());
        cartItem.setEndDate(form.getEndDate());

        return cartItem;
    }
}