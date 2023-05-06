package mirim.itshow.kiru.entity;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor //기본 생성자
@Data
@Entity //엔티티
@Table(name = "member")
public class Member {
    @Id //primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto_increment
    @Column(name = "id")
    private Long id; //사용자 식별 id

    @Column(nullable = false, length = 30) // column 조건
    private String memberid; //사용자 입력 id(이메일)

    @Column(nullable = false, length = 20)
    private String memberpw; //사용자 입력 pw

    @Column(nullable = false, length = 15)
    private String name; //사용자 이름(최대 5글자)

    @Column(nullable = false, length = 60)
    private String address; //사용자 주소

    @Column(nullable = false, length = 11)
    private String phone; //사용자 전화번호

    @Column
    private LocalDateTime create_timestamp; //사용자 가입 시간



}
