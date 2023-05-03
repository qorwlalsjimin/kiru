package mirim.itshow.kiru.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@NoArgsConstructor //기본 생성자
@Data
@Entity //엔티티
@Table(name = "heart")
public class Heart {

    @Id //primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto_increment
    @Column(name = "heart_id")
    private Long heart_id; //즐겨찾기 상품 id(pk)

    @ManyToOne
    @JoinColumn(name="id")
    private Member member_id; //사용자 id(fk)

    @OneToMany
    @JoinColumn(name="item_id")
    private Item item_id; //상품 id(fk)

    @Column
    private LocalDateTime create_timestamp; //즐겨찾기한 시간
}
