package mirim.itshow.kiru.service;

import lombok.RequiredArgsConstructor;
import mirim.itshow.kiru.dao.UserRepository;
import mirim.itshow.kiru.dto.UserInfoDto;
import mirim.itshow.kiru.entity.UserInfo;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;
    /*
    * Spring Security 필수 메서드 구현
    *
    * @param email
    * @return UserDetails
    * @throws UsernameNotFoundException 유저가 없을 때 예외 발생
    * */
    @Override
    public UserInfo loadUserByUsername(String email) throws UsernameNotFoundException {
        return userRepository.findByEmail(email).orElseThrow(()->new UsernameNotFoundException(email));
    }

    /**
     * 회원 정보 저장
     *
     * @param infoDto 회원 정보가 들어있는 DTO
     * @return 저장되는 회원의 PK
     */
    public Long save(UserInfoDto infoDto){
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        infoDto.setPassword(encoder.encode(infoDto.getPassword())); //암호화

        return userRepository.save(UserInfo.builder()
                .email(infoDto.getEmail())
                .auth(infoDto.getAuth())
                .password(infoDto.getPassword()).build()).getCode();
    }
}
