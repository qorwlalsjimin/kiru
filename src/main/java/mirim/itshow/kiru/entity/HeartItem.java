package mirim.itshow.kiru.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@Table
public class HeartItem {
    @Id //primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto_increment
    @Column(name = "heart_item_id")
    private Long heartItemId; //즐겨찾기 상품 식별자 id(pk)

    @ManyToOne
    @JoinColumn(name = "heart_id")
    private Cart cart; //즐겨찾기 id(fk)

    @ManyToOne
    @JoinColumn(name = "item_id")
    private Item item; //상품 id(fk)

    @Column
    private LocalDateTime createTimestamp; //즐겨찾기한 시간
}
