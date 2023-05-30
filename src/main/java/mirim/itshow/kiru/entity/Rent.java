package mirim.itshow.kiru.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import mirim.itshow.kiru.controller.json.RentJson;
import mirim.itshow.kiru.entity.enum_col.Status;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor //기본 생성자
@Data
@Entity //엔티티
@Table(name = "rent")
public class Rent {

    @Id //primary key
    @GeneratedValue(strategy = GenerationType.IDENTITY) //auto_increment
    @Column
    private Long rentId; //대여 id(pk)

    @ManyToOne
    @JoinColumn
    private Member member; //사용자 (fk)

    @Enumerated(EnumType.STRING)
    @Type(type = "status_enum_type")
    @Column
    private Status status; //대여 상태

//    @OneToMany(mappedBy = "rent", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
//    private List<RentItem> rentItems = new ArrayList<>(); //대여 상품들

    @Column
    private LocalDate startDate; //대여 시작일

    @Column
    private LocalDate endDate; //대여 종료일

    @Column
    private LocalDateTime createTimestamp; //대여 신청 시간

    public static Rent createRent(Member member) {
        Rent rent = new Rent();
        rent.setMember(member);

        return rent;
    }

//    public Rent createRent(RentJson json){
//
//    }

}
