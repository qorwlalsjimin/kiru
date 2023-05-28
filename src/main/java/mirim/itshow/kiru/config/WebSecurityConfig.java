//package mirim.itshow.kiru.config;
//import lombok.RequiredArgsConstructor;
//import mirim.itshow.kiru.service.MemberService;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.builders.WebSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
//
//@RequiredArgsConstructor
//@EnableWebSecurity //Spring Security 활성화
//@Configuration
//public class WebSecurityConfig extends WebSecurityConfigurerAdapter { //설정파일로 사용하기 위해 상속 받아야함
//    private final MemberService memberService; //유저 정보가 있는 클래스
//
//    // 인증을 무시할 경로 설정
//    @Override
//    public void configure(WebSecurity web) throws Exception {
//        web.ignoring().antMatchers("/app/**", ""); //TODO 잘 모르겠음
//    }
//
//    // http 관련 인증 설정
//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http.formLogin()
//                .loginPage("/member/login")
//                .defaultSuccessUrl("/")
//                .usernameParameter("memberid")
////                .failureUrl("/member/login/error")
//                .and()
//                .logout()
//                .logoutRequestMatcher(new AntPathRequestMatcher("/member/logout"))
//                .logoutSuccessUrl("/");
//
//        http.authorizeRequests()
//                .mvcMatchers("/css/**", "/js/**", "/img/**").permitAll()
//                .mvcMatchers("/", "/member/**", "/item/**").permitAll()
//                .mvcMatchers("/admin/**").hasRole("ADMIN")
//                .anyRequest().authenticated()
//        ;
//
//    }
//
//    //로그인할때 필요한 정보를 가져옴
//    @Override
//    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//        auth.userDetailsService(memberService) //유저 정보 지정
//                //해당 서비스(userService)에서는 UserDetailsService를 implements해서
//                //loadUserByUsername() 구현해야 함
//                .passwordEncoder(new BCryptPasswordEncoder());
//    }
//}