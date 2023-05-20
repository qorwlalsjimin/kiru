package mirim.itshow.kiru.dto.cart;

import lombok.Data;
import mirim.itshow.kiru.entity.enum_col.Country;

import java.time.LocalDate;

@Data
public class CartForm {
    private Long cartItemId; //장바구니 상품 고유 번호 != 상품 고유 번호

    private String imgUrl; //상품 이미지 주소
    private String itemName; //상품 이름
    private int price; // 상품 금액
    private String brand; // 브랜드 이름

    private String color; //색상
    private String size; //사이즈
    private int amount; //수량

    private Country country; //한복 or 기모노

    private LocalDate startDate; //대여 시작일
    private LocalDate endDate; //대여 종료일
}
