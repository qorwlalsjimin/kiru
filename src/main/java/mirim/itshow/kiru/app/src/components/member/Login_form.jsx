import './login_form.css';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Footer from '../footer/Footer';
import axios from 'axios';
import { getCookie, setCookie } from '../../util/cookie';

const Login_form = () => {
  const navigate = useNavigate();

  // 로그인 폼
  const [group, setGroup] = useState({
    inputid: '',
    inputpw: '',
    rememberID: false
  });

  /* input 받기 */
  const handleChange = (event) => {
    const { name, value } = event.target
    setGroup(group => ({ ...group, [name]: value }))
  }

  /* 아이디 기억하기 */
  // const handleRememberIDChange = (event) => {
  //   setRememberID(event.target.checked);
  // };

  /* 비밀번호 찾기 */
  const handleFindPassword = () => {
    // Handle find password logic here
  };

  /* 제출 */
  const handleSubmit = async (event) => {
    event.preventDefault();

    let submitForm = {
      "email": group.inputid,
      "password": group.inputpw
    }
    console.log(submitForm);

    try {
      //응답 성공 
      const response = await axios.post('/auth/login',
        submitForm,
        {headers: {
          'Authorization': `Bearer ${getCookie("accessToken")}`
        }}
      );
      
      //토큰 받기
      let accessToken = response.data.accessToken;
      let expiredTime = response.data.accessTokenExpiresIn;
      let refreshToken = response.data.refreshToken;
      setCookie("accessToken", `${accessToken}`);
      setCookie("expiredTime", `${expiredTime}`);
      setCookie("refreshToken", `${refreshToken}`);

      setTimeout(() => {
        alert(`${submitForm.email}님 환영합니다`);
        navigate("/Mainscreen");
      }, 500);
    } catch (error) {
      //응답 실패
      if (error.response.status === 401) {
        alert('로그인 실패하였습니다. 아이디/비밀번호를 확인해주세요');
      }
      console.error(error);
    }
  }


  return (
    <>
      <section className="content">
        {/* 로그인, 회원가입 선택 */}
        <div className="logintext">
          <Link to="/Login_form"><button className='blo'><h1>Login</h1></button> </Link>
          <Link to="/Join_form"><button><h1>Sign up</h1> </button> </Link>
        </div>

        {/* 로그인 폼 */}
        <form onSubmit={handleSubmit}>
          <p className="ment">kiru에 방문해주셔서 감사합니다.</p>
          <div className="form">
            <input type="email" id='text' name='inputid' placeholder="이메일/휴대폰 번호" value={group.email} onChange={handleChange} />
            <br />

            <input type="password" id='text' name='inputpw' placeholder="비밀번호" value={group.password} onChange={handleChange} />
            <br />
            <div className='findpass'>
              <button onClick={handleFindPassword}>비밀번호 찾기<i className="ri-arrow-right-s-line"></i></button>
            </div>
            <br />

            <label>
              <div className="idremem">
                <input type="checkbox" checked={group.rememberID} onChange={handleChange} />
                {/* <i className="ri-checkbox-blank-circle-line"></i> */}
                <p>아이디 기억하기</p>
              </div>
            </label>
            <br />

            <div className="loginbtn">
              <button type="submit">로그인</button>
            </div>

          </div>
        </form>
      </section>

      <Footer />
    </>

  )
};

export default Login_form;