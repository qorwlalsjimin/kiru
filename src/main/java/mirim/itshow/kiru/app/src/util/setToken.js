import axios from "axios";
import { getCookie, setCookie } from "./cookie";

/* 보류!!! 시간 남으면 하자 */
const setToken = async (state) => {
    // HEADER에 토큰 설정
    axios.defaults.headers.common['Authorization'] = getCookie('accessToken')
    
    // 만료시간이 지났을 경우, RefreshToken을 이용하여 AccessToken 재발급
    var expiredTime = getCookie('expiredTime')
    var diffTime = new Date().getTime() - expiredTime;
    if (diffTime < 10000){
        axios.defaults.headers.common['Authorization'] = getCookie('refreshToken')
        let postToken = {
            "accessToken": getCookie('accessToken'),
            "refreshToken": getCookie('refreshToken')
        }
        await axios.post('/auth/reissue', postToken).then(
            (res) => {
                setCookie('accessToken', res.data.data.accessToken)
                setCookie('expiredTime', res.data.data.accessTokenExpiresIn)
                axios.defaults.headers.common['Authorization'] =  getCookie('accessToken')
          },
          (err) => {
              // Login 페이지로 리디렉션
          }
        ) 
    }
    return new Promise(function(resolve, reject) {
        resolve(true)
    });
}
  
export default setToken;