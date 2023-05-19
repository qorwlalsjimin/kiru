package mirim.itshow.kiru.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import mirim.itshow.kiru.entity.enum_col.Size;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@Table(name="cart_item")
public class CartItem {
    @Id //primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto_increment
    @Column(name = "cart_item_id")
    private Long cartItemId; //장바구니 상품 id(pk)

    @ManyToOne
    @JoinColumn(name = "cart_id")
    private Cart cart; //장바구니 id(fk)

    @ManyToOne
    @JoinColumn(name = "item_id")
    private Item itemId; //상품 id(fk)

    @Column(nullable = false)
    private int count; //개수

    @Column(nullable = false, length = 200)
    private String color; //색상

    @Enumerated(EnumType.STRING)
    @Type(type = "size_enum_type")
    private Size size; //옷&신발 사이즈

    @Column(nullable = false)
    private LocalDate startDate; //대여 시작일

    @Column(nullable = false)
    private LocalDate endDate; //대여 종료일

    @Column
    private LocalDateTime createTimestamp; //장바구니에 넣은 시간
}
