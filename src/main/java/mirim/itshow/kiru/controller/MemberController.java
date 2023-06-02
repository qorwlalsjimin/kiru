package mirim.itshow.kiru.controller;

import lombok.RequiredArgsConstructor;
import mirim.itshow.kiru.dto.MemberResponseDto;
import mirim.itshow.kiru.service.MemberService;
import mirim.itshow.kiru.util.SecurityUtil;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/member")
public class MemberController {
    /* 회원 정보 조회 */
    private final MemberService memberService; //회원 찾는 로직

    /**
     * SecurityUtil이 가지고 있는(인증 받았다는 뜻) 회원 정보 찾기
     * @return MemberResponseDto
     */
    @GetMapping("/me")
    public ResponseEntity<MemberResponseDto> findMemberInfoById() {
        return ResponseEntity.ok(memberService.findMemberInfoById(
                SecurityUtil.getCurrentMemberId()) //내 정보 가져오기
        );
    }

    /**
     * GET으로 받은 메일로 회원 찾기
     * @param email
     * @return MemberResponseDto
     */
    @GetMapping("/{email}")
    public ResponseEntity<MemberResponseDto> findMemberInfoByEmail(@PathVariable String email) {
        return ResponseEntity.ok(memberService.findMemberInfoByEmail(email));
    }
}