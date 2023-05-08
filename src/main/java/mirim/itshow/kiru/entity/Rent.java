package mirim.itshow.kiru.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import mirim.itshow.kiru.entity.enum_col.Status;

import javax.persistence.*;
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
    @Column(name = "rent_id")
    private Long rentId; //대여 id(pk)

    @ManyToOne
    @JoinColumn(name="id")
    private Member memberId; //사용자 id(fk)

    @Column
    private LocalDateTime createTimestamp; //대여 신청 시간

    @Enumerated(EnumType.STRING)
    private Status status; //대여 상태

    @OneToMany(mappedBy = "rent", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<RentItem> rentItems = new ArrayList<>();


}
