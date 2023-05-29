package mirim.itshow.kiru.dto;

import lombok.Data;

import javax.persistence.Column;

@Data
public class HeartForm {

    @Column
    private Long itemId;

}
