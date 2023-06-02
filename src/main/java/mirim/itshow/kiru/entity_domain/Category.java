package mirim.itshow.kiru.entity_domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor //기본 생성자
@Data
@Entity //엔티티
@Table(name = "category")
public class Category {
    @Id //primary key
    @Column
    private Long categoryId; //카테고리 고유 id
    private Long categoryPId; //부모 카테고리 id

    @Column(nullable = false)
    private String title; //카테고리 이름


    public Category(long categoryId, long idParent, String title) {
        this.categoryId = categoryId;
        this.categoryPId = idParent;
        this.title = title;
    }
}
