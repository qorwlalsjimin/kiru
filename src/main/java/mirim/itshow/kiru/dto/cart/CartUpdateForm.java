package mirim.itshow.kiru.dto.cart;

import lombok.Data;
import mirim.itshow.kiru.entity.enum_col.Size;

import java.time.LocalDate;

@Data
public class CartUpdateForm {
    private Long cartItemId; //장바구니 상품 고유 번호 != 상품 고유 번호

    private String color; //색상
    private Size size; //사이즈
    private int amount; //수량
}