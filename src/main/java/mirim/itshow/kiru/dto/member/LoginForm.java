package mirim.itshow.kiru.dto.member;

import lombok.Data;

@Data
public class LoginForm {
    private String inputid; //사용자 입력 id
    private String inputpw; //사용자 입력 pw
}