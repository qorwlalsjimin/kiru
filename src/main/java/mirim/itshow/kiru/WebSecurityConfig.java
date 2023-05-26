package mirim.itshow.kiru;
import lombok.RequiredArgsConstructor;
import mirim.itshow.kiru.service.MemberService;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@RequiredArgsConstructor
@EnableWebSecurity //Spring Security 활성화
@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter { //설정파일로 사용하기 위해 상속 받아야함
    private final MemberService memberService; //유저 정보가 있는 클래스

    // 인증을 무시할 경로 설정
    @Override
    public void configure(WebSecurity web) throws Exception {
        web.ignoring().antMatchers("app/**"); //TODO 잘 모르겠음
    }

    // http 관련 인증 설정
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests() // 접근에 대한 인증 설정
                // antMatchers로 경로&권한 설정
                .antMatchers("/login", "/signup", "/user").permitAll() //누구나 접근 허용
                .antMatchers("/").hasRole("USER") //USER, ADMIN만 접근 가능
                .antMatchers("/admin").hasRole("ADMIN") //ADMIN만 접근 가능
                .anyRequest().authenticated() //나머지 요청들은 권한의 종류에 상관 없이 권한이 있어야 접근

                .and()
                .formLogin() // 로그인 설정
                .loginPage("/login") //로그인 페이지 링크
                .defaultSuccessUrl("/") //로그인 성공 후 리다이렉트할 주소

                .and()
                .logout() //로그아웃 설정
                .logoutSuccessUrl("/login") //로그아웃 성공시 리다이렉트 주소
                .invalidateHttpSession(true) //로그아웃 이후 세션 전체 삭제 여부
        ;
    }

    //로그인할때 필요한 정보를 가져옴
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(memberService) //유저 정보 지정
                //해당 서비스(userService)에서는 UserDetailsService를 implements해서
                //loadUserByUsername() 구현해야 함
                .passwordEncoder(new BCryptPasswordEncoder());
    }
}