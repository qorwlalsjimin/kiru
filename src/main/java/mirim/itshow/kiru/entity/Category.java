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
    @Column
    private Long category_id; //카테고리 고유 id
    private Long idParent; //부모 카테고리 id

    @Column(nullable = false, length = 10)
    private String title; //카테고리 이름


    public Category(long category_id, long idParent, String title) {
        this.category_id = category_id;
        this.idParent = idParent;
        this.title = title;
    }
}
