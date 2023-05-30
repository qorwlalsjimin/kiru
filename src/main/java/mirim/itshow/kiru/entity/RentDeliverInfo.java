package mirim.itshow.kiru.entity;

import lombok.Data;
import lombok.NoArgsConstructor;
import mirim.itshow.kiru.controller.json.DeliverInfoJson;
import mirim.itshow.kiru.entity.enum_col.Size;

import javax.persistence.*;
import java.time.LocalDate;

@NoArgsConstructor //기본 생성자
@Data
@Entity //엔티티
@Table
public class RentDeliverInfo {
    @Id
    @GeneratedValue
    @Column
    private Long id; //배송 정보 식별자 id(pk)

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn
    private Rent rent; //대여 프로세스 하나

    @Column
    private String country;
    private String address;
    private String name;
    private String phone;
    private String email;

    public static RentDeliverInfo createRentDeliverInfo(DeliverInfoJson json, Rent rent){
        RentDeliverInfo entity = new RentDeliverInfo();
        entity.setRent(rent);
        entity.setCountry(json.getCountry());
        entity.setAddress(json.getAddress());
        entity.setName(json.getName());
        entity.setPhone(json.getPhone());
        entity.setEmail(json.getEmail());
        return entity;
    }
}
