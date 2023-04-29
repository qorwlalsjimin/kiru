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

    @Column(nullable = false, length = 60) // column 조건
    private Long member_id; //사용자 id(fk) TODO

    @Column(nullable = false, length = 10)
    private Long item_id; //상품 id(fk) TODO

    @Column
    private LocalDateTime create_timestamp; //즐겨찾기한 시간
}
