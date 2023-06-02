package mirim.itshow.kiru.entity_security;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@NoArgsConstructor
@Table
@Entity
public class RefreshToken {
    //TODO 생성/수정 시간을 추가하여 배치 작업으로 만료된 토큰들을 삭제해줘야 함
    @Id
    @Column
    private String key; //Member ID 값

    @Column
    private String value; //Refresh Token

    //생성자
    @Builder
    public RefreshToken(String key, String value) {
        this.key = key;
        this.value = value;
    }

    //토큰 값 update
    public RefreshToken updateValue(String token) {
        this.value = token;
        return this;
    }
}
