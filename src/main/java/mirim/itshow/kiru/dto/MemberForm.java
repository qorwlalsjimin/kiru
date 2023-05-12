package mirim.itshow.kiru.dto;

import lombok.Data;

@Data
public class MemberForm {
    private String memberid; //사용자 입력 id
    private String memberpw; //사용자 입력 pw
    private String name; //사용자 이름(최대 5글자)
    private String address; //사용자 주소
    private String phone; //사용자 전화번호
}
