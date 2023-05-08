package mirim.itshow.kiru.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor //기본 생성자
@Data
@Entity //엔티티
@Table(name = "heart")
public class Heart {

    @Id //primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto_increment
    @Column(name = "heart_id")
    private Long heartId; //즐겨찾기 id(pk) - 장바구니와 같은 개념

    @OneToOne
    @JoinColumn(name="id")
    private Member memberId; //사용자 id(fk)

}
