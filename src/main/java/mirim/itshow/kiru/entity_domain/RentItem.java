package mirim.itshow.kiru.entity_domain;

import lombok.Data;
import lombok.NoArgsConstructor;
import mirim.itshow.kiru.controller.json.ItemsJson;
import mirim.itshow.kiru.entity_domain.enum_col.Size;

import javax.persistence.*;

@NoArgsConstructor //기본 생성자
@Data
@Entity //엔티티
@Table
public class RentItem {
    @Id
    @GeneratedValue
    @Column
    private Long rentItemId; //대여 상품 식별자 id(pk)

    @ManyToOne
    @JoinColumn
    private Item item; //상품 (fk) //브랜드 들어가있음


    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private Rent rent; //대여 프로세스 하나


    @Column
    private String color; //컬러

    @Column
    private Size size; //사이즈

    @Column
    private int amount; //수량

    public static RentItem createRentItem(ItemsJson json, Item item, Rent rent){
        RentItem entity = new RentItem();
        entity.setItem(item);
        entity.setRent(rent);
        entity.setColor(json.getColor());
        entity.setSize(json.getSize());
        entity.setAmount(json.getAmount());
        return entity;
    }

}
