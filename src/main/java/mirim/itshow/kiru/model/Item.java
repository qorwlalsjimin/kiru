package mirim.itshow.kiru.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import mirim.itshow.kiru.model.enum_col.Size;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor //기본 생성자
@Data
@Entity //엔티티
@Table(name = "item")
public class Item {
    @Id //primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto_increment
    @Column(name = "item_id")
    private Long item_id; //상품 고유 id

    @Column(nullable = false, length = 60) // column 조건
    private String name; //상품 이름

    @Column(nullable = false, length = 10)
    private int price; //1일 대여 가격

    @Column(nullable = false)
    private String description; //상품 설명

    @Column(nullable = false, length = 200)
    private String image_url; //이미지 url

    @Column(nullable = false, length = 200)
    private String color; //색상

    @Column
    private Size cloth_size; //옷 사이즈

    @Column
    private int shoes_size; //신발 사이즈

    @ManyToOne
    @JoinColumn(name = "category_id")
    private Category category_id; //카테고리 id

    @Column
    private LocalDateTime create_timestamp; //상품 등록 날짜
}
