package mirim.itshow.kiru.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

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