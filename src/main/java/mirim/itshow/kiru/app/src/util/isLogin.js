import { getCookie } from "./cookie";

const isLogin = () => {
    if(!getCookie('is_login')) {
      alert("접근 할 수 없는 페이지입니다.");
      window.location.replace('/');
    }
  };
export default isLogin;