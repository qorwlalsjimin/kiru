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

    @OneToOne
    @JoinColumn(name = "id")
    private Member member_id; //사용자 id(fk)

}
