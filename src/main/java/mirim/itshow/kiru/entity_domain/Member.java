package mirim.itshow.kiru.entity_domain;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import mirim.itshow.kiru.dto.JoinRequestDto;
import mirim.itshow.kiru.entity_domain.enum_col.Authority;

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

    @Column
    private Authority authority; //권한

    @Column(nullable = false) // column 조건
    private String memberEmail; //사용자 입력 id(이메일)

    @Column(nullable = false)
    private String memberPw; //사용자 입력 pw

    @Column(nullable = false)
    private String name; //사용자 이름(최대 5글자)

    @Column(nullable = false)
    private String address; //사용자 주소

    @Column(nullable = false)
    private String phone; //사용자 전화번호

    //TODO 프론트에서 null로 옴
    @Column
    private LocalDateTime createTimestamp; //사용자 가입 시간

    public static Member createMember(JoinRequestDto joinFormDto){
        Member member = new Member();
        member.setMemberEmail(joinFormDto.getMemberEmail());
        member.setMemberPw(joinFormDto.getMemberPw());
        member.setName(joinFormDto.getName());
        member.setAddress(joinFormDto.getAddress());
        member.setPhone(joinFormDto.getPhone());
        return member;
    }

    @Builder
    public Member(Authority authority, String memberEmail, String memberPw, String name, String address, String phone) {
        this.authority = authority;
        this.memberEmail = memberEmail;
        this.memberPw = memberPw;
        this.name = name;
        this.address = address;
        this.phone = phone;
    }

}