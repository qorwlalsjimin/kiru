package mirim.itshow.kiru.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import mirim.itshow.kiru.dto.cart.CartForm;
import mirim.itshow.kiru.entity.enum_col.Country;
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
    @JoinColumn
    private Item itemId; //상품 id(fk)

    @Column
    private String imgUrl; //상품 이미지 주소
    private String itemName; //상품 이름
    private int price; // 상품 금액
    private String brand; // 브랜드 이름

    @Column(nullable = false, length = 200)
    private String color; //색상

//    @Enumerated(EnumType.STRING)
//    @Type(type = "size_enum_type")
//private Size size; //옷&신발 사이즈
    @Column
    private String size; //옷&신발 사이즈
    private int amount; //수량

    @Enumerated(EnumType.STRING)
    @Type(type = "size_enum_type")
    private Country country; //Hanbok, Kimono

    @Column(nullable = false)
    private LocalDate startDate; //대여 시작일
    private LocalDate endDate; //대여 종료일

    @Column
    private boolean checked=true; //장바구니 페이지에서 체크됐는지

    @Column
    private LocalDateTime createTimestamp; //장바구니에 넣은 시간

    public static CartItem createCart(CartForm form){
        CartItem cartItem = new CartItem();
        cartItem.setCartItemId(form.getCartItemId());

        cartItem.setImgUrl(form.getImgUrl());
        cartItem.setItemName(form.getItemName());
        cartItem.setPrice(form.getPrice());
        cartItem.setBrand(form.getBrand());

        cartItem.setColor(form.getColor());
        cartItem.setSize(form.getSize());
        cartItem.setAmount(form.getAmount());

        cartItem.setCountry(form.getCountry());

        cartItem.setStartDate(form.getStartDate());
        cartItem.setEndDate(form.getEndDate());

        return cartItem;
    }
}
