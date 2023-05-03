package mirim.itshow.kiru.model;

import javax.persistence.*;
import java.time.LocalDate;

public class RentItem {
    @Id
    @GeneratedValue
    @Column(name = "rent_item_id")
    private Long id;

    @OneToMany
    @JoinColumn(name="item_id")
    private Item item_id; //상품 id(fk)

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "order_id")
    private Rent rent;

    @Column(nullable = false)
    private LocalDate start_date; //대여 시작일

    @Column(nullable = false)
    private LocalDate end_date; //대여 종료일

    @Column(nullable = false)
    private int pay_total; //결제 금액
}
