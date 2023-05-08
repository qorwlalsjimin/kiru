import './login.css';
import React, { useState } from 'react';
import { Link } from "react-router-dom"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberID, setRememberID] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberIDChange = (event) => {
    setRememberID(event.target.checked);
  };

  const handleFindPassword = () => {
    // Handle find password logic here
  };

  const handleLogin = () => {
    // Handle login logic here
  };

  return (

  

    <div>
      <div className="logintext">
     <button><h1>login</h1></button> 
        <Link to="/Signup"><button><h1>sign up</h1> </button> </Link>
        </div>
      <label>Email</label>
      <input type="email" value={email} onChange={handleEmailChange} />
      <br />
      <label>Password</label>
      <input type="password" value={password} onChange={handlePasswordChange} />
      <br />
      <button onClick={handleFindPassword}>비밀번호 찾기</button>
      <br />
      <label>
        <input type="checkbox" checked={rememberID} onChange={handleRememberIDChange} />
        아이디 기억하기
      </label>
      <br />
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
};

export default Login;