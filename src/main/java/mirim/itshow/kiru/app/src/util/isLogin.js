import { getCookie } from "./cookie";

const isLogin = () => {
  if (!!getCookie('access_token')) {
    //접근 가능
  } else {
    //접근 불가능
    alert("접근 할 수 없는 페이지입니다.");
    window.location.replace('/');
  }
};
export default isLogin;