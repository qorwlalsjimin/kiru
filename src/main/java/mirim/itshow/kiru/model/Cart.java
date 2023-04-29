package mirim.itshow.kiru.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import mirim.itshow.kiru.model.enum_col.Size;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@NoArgsConstructor //기본 생성자
@Data
@Entity //엔티티
@Table(name = "cart")
public class Cart {

    @Id //primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto_increment
    @Column(name = "cart_id")
    private Long cart_id; //장바구니 상품 id(pk)

    @Column(nullable = false, length = 60) // column 조건
    private Long member_id; //사용자 id(fk) TODO

    @Column(nullable = false, length = 10)
    private Long item_id; //상품 id(fk) TODO

    @Column(nullable = false)
    private int count; //개수

    @Column(nullable = false, length = 200)
    private String color; //색상

    @Enumerated(EnumType.STRING)
    private Size cloth_size; //옷 사이즈

    @Column
    private int shoes_size; //신발 사이즈

    @Column(nullable = false)
    private LocalDate start_date; //대여 시작일

    @Column(nullable = false)
    private LocalDate end_date; //대여 종료일

    @Column
    private LocalDateTime create_timestamp; //장바구니에 넣은 시간
}
