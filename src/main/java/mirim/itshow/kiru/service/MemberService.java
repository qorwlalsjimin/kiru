package mirim.itshow.kiru.service;

import lombok.RequiredArgsConstructor;
import mirim.itshow.kiru.dao.MemberRepository;
import mirim.itshow.kiru.dto.MemberResponseDto;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class MemberService {
    /* 회원 조회 */
    private final MemberRepository memberRepository;

    //식별 id로 회원 찾기
    public MemberResponseDto findMemberInfoById(Long id) {
        return memberRepository.findById(id)//id로 회원 찾고
                .map(MemberResponseDto::of) //응답 DTO로 바꿔서 return
                .orElseThrow(() -> new RuntimeException("로그인 유저 정보가 없습니다."));
    }

    //이메일로 회원 찾기
    public MemberResponseDto findMemberInfoByEmail(String email) {
        MemberResponseDto dto;
        try{
            // Entity에서는 member id에 email이 들어감
            dto = MemberResponseDto.of(memberRepository.findByMemberEmail(email));
        }catch (Exception e){
            throw new RuntimeException("유저 정보가 없습니다.");
        }
        return dto;
    }
}