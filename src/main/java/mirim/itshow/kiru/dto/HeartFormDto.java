package mirim.itshow.kiru.dto;

import lombok.Data;

import javax.persistence.Column;

@Data
public class HeartFormDto {

    @Column
    private Long itemId;

}
