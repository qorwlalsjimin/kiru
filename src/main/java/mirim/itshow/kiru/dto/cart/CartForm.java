package mirim.itshow.kiru.dto.cart;

import lombok.Data;
import mirim.itshow.kiru.entity.Item;
import mirim.itshow.kiru.entity.enum_col.Country;
import mirim.itshow.kiru.entity.enum_col.Size;

import java.time.LocalDate;

@Data
public class CartForm {
    private Long cartItemId; //장바구니 상품 고유 번호 != 상품 고유 번호

    private Long itemId; //상품 id

    private String color; //색상
    private Size size; //사이즈
    private int amount; //수량

    private LocalDate startDate; //대여 시작일
    private LocalDate endDate; //대여 종료일
}
