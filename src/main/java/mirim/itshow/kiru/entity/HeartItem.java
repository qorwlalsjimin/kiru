package mirim.itshow.kiru.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import mirim.itshow.kiru.dao.HeartRepository;
import mirim.itshow.kiru.dao.ItemRepository;
import mirim.itshow.kiru.dto.HeartForm;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@Table
public class HeartItem {
    @Id //primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto_increment
    @Column
    private Long heartItemId; //즐겨찾기 상품 식별자 id(pk)


    @ManyToOne
    @JoinColumn
    private Heart heart; //즐겨찾기 id(fk)

    @ManyToOne
    @JoinColumn
    private Item item; //상품 id(fk)

    @Column
    private LocalDateTime createTimestamp; //즐겨찾기한 시간

    public HeartItem(Heart heart, Item item){
        this.heart = heart;
        this.item = item;
    }

    public static HeartItem createHeartItem(Item item, Heart heart) {
        HeartItem heartItem = new HeartItem();
        heartItem.setHeart(heart);
        heartItem.setItem(item);
        return heartItem;
    }
}
