package mirim.itshow.kiru.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import mirim.itshow.kiru.entity_domain.Member;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class MemberResponseDto {
    private String memberEmail; //이메일

    public static MemberResponseDto of(Member member) {
        return new MemberResponseDto(member.getMemberEmail());
    }
}
