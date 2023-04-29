package mirim.itshow.kiru.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import mirim.itshow.kiru.model.enum_col.Status;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@NoArgsConstructor //기본 생성자
@Data
@Entity //엔티티
@Table(name = "rent")
public class Rent {

    @Id //primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto_increment
    @Column(name = "rent_id")
    private Long rent_id; //대여 id(pk)

    @Column
    private Long member_id; //사용자 id(fk) TODO

    @Column
    private Long item_id; //상품 id(fk) TODO

    @Column(nullable = false)
    private Status status; //대여 상태

    @Column(nullable = false)
    private LocalDate start_date; //대여 시작일

    @Column(nullable = false)
    private LocalDate end_date; //대여 종료일

    @Column(nullable = false)
    private int pay_total; //결제 금액

    @Column
    private LocalDateTime create_timestamp; //대여 신청 시간
}
