package mirim.itshow.kiru.entity;

import lombok.*;
import mirim.itshow.kiru.entity.enum_col.Size;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

//@NoArgsConstructor //기본 생성자
@Data //TODO 엔티티에 @Data쓰면 set 남용 때문에 안 좋음
@Entity //엔티티
@Table(name = "item")
public class Item {

    @Id //primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto_increment
    @Column(name = "item_id")
    private Long itemId; //상품 고유 id

    @Column(nullable = false, length = 60) // column 조건
    private String name; //상품 이름

    @Column(nullable = false, length = 10)
    private int price; //1일 대여 가격

    @Column(nullable = false)
    private String description; //상품 설명

    @Column(columnDefinition = "text[]")
    @Type(type = "mirim.itshow.kiru.entity.hibernatesetting.CustomStringArrayType")
    private String[] imageUrl; //이미지 url

    @Column(columnDefinition = "text[]")
    @Type(type = "mirim.itshow.kiru.entity.hibernatesetting.CustomStringArrayType")
    private String[] color; //색상

    @Column(columnDefinition = "text[]")
    @Type(type = "mirim.itshow.kiru.entity.hibernatesetting.CustomStringArrayType")
    private String[] clothSize; //옷 사이즈

    @Column(columnDefinition = "text[]")
    @Type(type = "mirim.itshow.kiru.entity.hibernatesetting.CustomStringArrayType")
    private String[] shoesSize; //신발 사이즈

    @ManyToOne
    @JoinColumn(name = "category")
    private Category category; //카테고리 id

    @Column
    private String brand; //분류를 위한 브랜드명

    @Column
    private LocalDateTime createTimestamp; //상품 등록 날짜

    public Item(){}
    @Builder
    public Item(String name, int price, String description, String[] imageUrl, String[] color, String[] clothSize, String[] shoesSize, Category categoryId, String brand) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
        this.color = color;
        this.clothSize = clothSize;
        this.shoesSize = shoesSize;
        this.category = categoryId;
        this.brand = brand;
    }


}
