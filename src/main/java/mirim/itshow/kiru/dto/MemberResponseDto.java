package mirim.itshow.kiru.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import mirim.itshow.kiru.entity_domain.Member;
import mirim.itshow.kiru.util.SecurityUtil;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class MemberResponseDto {
    private String name;
    private String phone;
    private String memberEmail; //이메일
    private String address;

    public static MemberResponseDto of(Member member) {
        return new MemberResponseDto(member.getName(), member.getPhone() ,member.getMemberEmail(), member.getAddress());
    }
}
