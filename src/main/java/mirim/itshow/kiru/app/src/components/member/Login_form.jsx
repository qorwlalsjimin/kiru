import './login_form.css';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Footer from '../footer/Footer';

const Login_form = () => {
  const [group, setGroup] = useState({
    inputid: '',
    inputpw: '',
    rememberID: false
  });

  const navigate = useNavigate();
  const { id } = useParams();

  console.log(group)


  


  const handleChange = (event) => {
    const { name, value } = event.target
    console.log(name, value, group)
    setGroup(group => ({ ...group, [name]: value }))
  }

  // const handleRememberIDChange = (event) => {
  //   setRememberID(event.target.checked);
  // };

  const handleFindPassword = () => {
    // Handle find password logic here
  };

  const handleLogin = () => {
    // Handle login logic here
  };



  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("제출할때");
    await fetch(`/api/member/Loin`, { //이 주소에서 실행
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "inputid": "",
        "inputpw": ""
    })
    });
  
  }


  return (
    <>
      <section className="content">

        <div className="logintext">
          <Link to="/Login_form"><button className='blo'><h1>Login</h1></button> </Link>
          <Link to="/Join_form"><button><h1>Sign up</h1> </button> </Link>
        </div>
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
            <button onClick={handleLogin}>로그인</button>
          </div>
          
        </div>
        </form>
      </section>

      <Footer />
    </>
    
  )
};

export default Login_form;