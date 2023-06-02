package mirim.itshow.kiru.dto;

import lombok.Data;
import mirim.itshow.kiru.entity_domain.enum_col.Size;

@Data
public class RentFormDto {
    //상품 정보
    private Long itemId;
    private String color;
    private Size size;
    private int amount;
    private int totalPrice;

    //주문자 정보
    private String orderName;
    private String orderPhone;
    private String orderEmail;

    //배송 정보
    private String deliverCountry;
    private String deliverAddress;
    private String deliverName;
    private String deliverPhone;
    private String deliverEmail;

    //결제 방법
    private String payMethod;
}
