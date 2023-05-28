package mirim.itshow.kiru.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import mirim.itshow.kiru.dto.member.JoinForm;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor //기본 생성자
@Data
@Entity //엔티티
@Table
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

    //TODO 프론트에서 null로 옴
    @Column
    private LocalDateTime createTimestamp; //사용자 가입 시간

    public static Member createMember(JoinForm joinForm){
        Member member = new Member();
        member.setMemberid(joinForm.getMemberid());
        member.setMemberpw(joinForm.getMemberpw());
        member.setName(joinForm.getName());
        member.setAddress(joinForm.getAddress());
        member.setPhone(joinForm.getPhone());
        return member;
    }

}