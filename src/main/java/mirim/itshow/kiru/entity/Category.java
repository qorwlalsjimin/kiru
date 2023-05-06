package mirim.itshow.kiru.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor //기본 생성자
@Data
@Entity //엔티티
@Table(name = "category")
public class Category {
    @Id //primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto_increment
    @Column(name = "category_id")
    private Long id; //카테고리 고유 id

    @Column(nullable = false, length = 60) // column 조건
    private Long id_parent; //부모 카테고리 id

    @Column(nullable = false, length = 10)
    private String title; //카테고리 이름

}
