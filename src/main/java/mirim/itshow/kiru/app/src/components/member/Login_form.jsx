import './login_form.css';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';


const Login_form = () => {
  const [group, setGroup] = useState({
    inputid: '',
    inputpw: '',
    rememberID: false
  });

  const navigate = useNavigate();
  const { id } = useParams();

  console.log(group)

  /*
useEffect(() => {
  if (id !== 'new') {
    fetch(`/Login_form/${id}`) //데이터 받는 주소
      .then(response => response.json())
      .then(data => setGroup(data));
  }
}, [id, setGroup]);*/


  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [rememberID, setRememberID] = useState(false);

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };


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


/*
  fetch(`http://localhost:3000/Login_form`, { //이 주소에서 실행
    method: (group.id) ? 'PUT' : 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(group)
  });*/
  // setGroup(login);
  // navigate('/api/member/Login'); //데이터 보낼 주소


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("제출할때");

// api/group/id로 데이터 보내기?
    await fetch(`/Loin_form`, { //이 주소에서 실행
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(group)
    });
    // setGroup(login);
    navigate('/api/member/Login'); //데이터 보낼 주소
  }




  return (
    <>
      <section className="content">

        <div className="logintext">
          <Link to="/Login_form"><button className='blo'><h1>login</h1></button> </Link>
          <Link to="/Join_form"><button><h1>sign up</h1> </button> </Link>
        </div>
        <form onSubmit={handleSubmit}>
        <h4 className="ment">kiru.com에 방문해주셔서 감사합니다.</h4>
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
              아이디 기억하기
            </div>
          </label>
          <br />
          <div className="loginbtn">
            <button onClick={handleLogin}>로그인</button>
          </div>
          
        </div>
        </form>
      </section>
    </>
  )
};

export default Login_form;