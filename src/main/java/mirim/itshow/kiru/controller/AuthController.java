package mirim.itshow.kiru.controller;

import lombok.RequiredArgsConstructor;
import mirim.itshow.kiru.dto.*;
import mirim.itshow.kiru.service.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    /**
     * 회원가입 / 로그인 / 재발급 을 처리하는 API 입니다.
     * SecurityConfig 에서 /auth/** 요청은 전부 허용했기 때문에 토큰 검증 로직을 타지 않습니다.
     * MemberRequestDto 에는 사용자가 로그인 시도한 ID / PW String 이 존재합니다.
     * TokenRequestDto 에는 재발급을 위한 AccessToken / RefreshToken String 이 존재합니다.
     */
    private final AuthService authService;

    /**
     * 회원가입
     * @param joinRequestDto
     * @return ResponseEntity<MemberResponseDto>
     */
    @PostMapping("/signup")
    public ResponseEntity<MemberResponseDto> signup(@RequestBody JoinRequestDto joinRequestDto) {
        return ResponseEntity.ok(authService.signup(joinRequestDto));
    }

    /**
     * 로그인
     * @param loginRequestDto
     * @return
     */
    @PostMapping("/login")
    public ResponseEntity<TokenDto> login(@RequestBody LoginRequestDto loginRequestDto) {
        return ResponseEntity.ok(authService.login(loginRequestDto));
    }

    /**
     * 재발급
     * @param tokenRequestDto
     * @return
     */
    @PostMapping("/reissue")
    public ResponseEntity<TokenDto> reissue(@RequestBody TokenRequestDto tokenRequestDto) {
        return ResponseEntity.ok(authService.reissue(tokenRequestDto));
    }
}
