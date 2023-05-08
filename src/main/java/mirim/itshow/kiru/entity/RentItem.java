package mirim.itshow.kiru.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@NoArgsConstructor //기본 생성자
@Data
@Entity //엔티티
@Table(name = "rent_item")
public class RentItem {
    @Id
    @GeneratedValue
    @Column(name = "rent_item_id")
    private Long id; //대여 상품 식별자 id(pk)

    @ManyToOne
    @JoinColumn(name="item_id")
    private Item itemId; //상품 id(fk) TODO: FK로 꼭 해야하나?

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id")
    private Rent rent;

    @Column(nullable = false)
    private LocalDate startDate; //대여 시작일

    @Column(nullable = false)
    private LocalDate endDate; //대여 종료일

    @Column(nullable = false)
    private int payTotal; //결제 금액
}
