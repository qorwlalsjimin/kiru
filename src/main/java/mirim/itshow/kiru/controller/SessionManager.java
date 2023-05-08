package mirim.itshow.kiru.controller;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;
import java.util.Map;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentMap;

/**
 * 세션 관리 (Session management)
 * Not a Controller
 * using at MemberController
 * reference: https://develop-writing.tistory.com/87?category=894269
 */
public class SessionManager {
    private static final String SESSION_COOKIE_NAME = "id"; //사용자 식별 id (이메일 x)
    private Map<String, Object> sessionStore = new ConcurrentHashMap<>();

    /**
      * 세션 생성
      */
    public void createSession(Object value, HttpServletResponse response){
        //세션 id를 생성하고, 값을 세션에 저장
        String sessionId = UUID.randomUUID().toString();
        sessionStore.put(sessionId, value);

        //쿠키 생성
        Cookie mySessionCookie = new Cookie(SESSION_COOKIE_NAME, sessionId);
        response.addCookie(mySessionCookie);
    }

    /**
     * 세션 조회
     */
    public Object getSession(HttpServletRequest request){
        Cookie sessionCookie = findCookie(request,SESSION_COOKIE_NAME);
        if(sessionCookie != null){
            sessionStore.remove(sessionCookie.getValue());
        }
        return sessionStore.get(sessionCookie.getValue());
    }

    /**
     * 세션 만료
     */
    public void expire(HttpServletRequest request){
        Cookie sessionCookie = findCookie(request, SESSION_COOKIE_NAME);
        if(sessionCookie != null)
            sessionStore.remove(sessionCookie.getValue());
    }

    private Cookie findCookie(HttpServletRequest request, String cookieName) {
        return Arrays.stream(request.getCookies())
                .filter(cookie -> cookie.getName().equals(cookieName))
                .findAny()
                .orElse(null);
    }
}
