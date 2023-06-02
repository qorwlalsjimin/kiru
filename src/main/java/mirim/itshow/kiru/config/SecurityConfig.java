package mirim.itshow.kiru.config;

import lombok.RequiredArgsConstructor;
import mirim.itshow.kiru.jwt.JwtAccessDeniedHandler;
import mirim.itshow.kiru.jwt.JwtAuthenticationEntryPoint;
import mirim.itshow.kiru.jwt.TokenProvider;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@RequiredArgsConstructor
public class SecurityConfig {
    private final TokenProvider tokenProvider; //
    private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
    private final JwtAccessDeniedHandler jwtAccessDeniedHandler;

    /*
    * Spring Security 의 가장 기본적인 설정이며 JWT 를 사용하지 않더라도
    * 이 설정은 기본으로 들어갑니다.
(2022. 11. 23 추가) Spring Security 의 WebSecurityConfigurerAdapter 가 deprecated 되어 이에 맞게 SecurityConfig 파일의 수정이 있었습니다.
* */

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    // h2 database 테스트가 원활하도록 관련 API 들은 전부 무시
    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return (web) -> web.ignoring()
                .antMatchers("/h2-console/**", "/favicon.ico");
    }

    //TODO
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
            // CSRF 설정 Disable
        http.csrf().disable()

            // exception handling 할 때 우리가 만든 클래스를 추가
            .exceptionHandling()
            .authenticationEntryPoint(jwtAuthenticationEntryPoint)
            .accessDeniedHandler(jwtAccessDeniedHandler)

            // h2-console 을 위한 설정을 추가
            .and()
            .headers() //응답 헤더
            .frameOptions() //커스텀 허용
            .sameOrigin() //같은 곳에서 오는 요청들을 허락

            // 시큐리티는 기본적으로 세션을 사용
            // 여기서는 세션을 사용하지 않기 때문에 세션 설정을 Stateless 로 설정
            .and()
            .sessionManagement()
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS)

            // 로그인, 회원가입 API 는 토큰이 없는 상태에서 요청이 들어오기 때문에 permitAll 설정
            .and()
            .authorizeRequests() //인가 요청
            .antMatchers("**").permitAll() // "/auth/**" api 요청들은 권한 상관없이 모두 허용
//            .antMatchers("/auth/**", "/api/item/**").permitAll() // "/auth/**" api 요청들은 권한 상관없이 모두 허용
            .anyRequest().authenticated()   // 나머지 API 는 전부 인증 필요

            // JwtFilter 를 addFilterBefore 로 등록했던 JwtSecurityConfig 클래스를 적용
            .and()
            .apply(new JwtSecurityConfig(tokenProvider));

        return http.build();
    }
}
