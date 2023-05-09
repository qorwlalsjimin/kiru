import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
// import { Link } from "react-router-dom"
import './join_form.css'
import './script.js'
// import axios from 'axios';



const Join_form = ()=>{

  const Join = {
  email: '',
  password: '',
  passwordConfirm: '',
  lastName: '',
  firstName: '',
  phone: '',
  address: '',
  showPassword: false,
  showPassword2: false
 
  };

const [group, setGroup] = useState(Join);

const navigate = useNavigate();
const { id } = useParams();


useEffect(() => {
  if (id !== 'new') {
    fetch(`/Join_form/${id}`) //데이터 받는 주소
      .then(response => response.json())
      .then(data => setGroup(data));
  }
}, [id, setGroup]);



  //Email 
    const [selectedEmail, setSelectedEmail] = useState("");
    const [isDisabled, setIsDisabled ] = useState(false);
  
    function handleEmailChange2(event) {
      const value = event.target.value;
      if (value !== "") {
        setIsDisabled(true);
        setSelectedEmail(value);
      } else {
        setIsDisabled(false);
        setSelectedEmail("");
      }
    }

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };

  const [showPassword, setShowPassword ] = useState(false);
  const [showPassword2, setShowPassword2 ] = useState(false);
  
  const [setPhone ] = useState("");

  //비밀번호 보이게 하기
  function handleToggleShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleToggleShowPassword2() {
    setShowPassword2(!showPassword2);
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setGroup({ ...group, [name]: value })
  }

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
   
  // };

  // const handlePasswordConfirmChange = (event) => {
  //   setPasswordConfirm(event.target.value);
  // };

  // const handleLastNameChange = (event) => {
  //   setLastName(event.target.value);
  // };

  // const handleFirstNameChange = (event) => {
  //   setFirstName(event.target.value);
  // };

  //phone
  const handlePhoneChange = (event) => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(event.target.value)) {
      setPhone(event.target.value);
    }
  };


  useEffect(() => {
    if (Join.phone.length === 10) {
      setPhone(Join.phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    }
    if (Join.phone.length === 13) {
      setPhone(Join.phone.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
    }
  }, [Join.phone]);


  // const handleAddressChange = (event) => {
  //   setAddress(event.target.value);
  // };

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("제출할때");

// api/group/id로 데이터 보내기?
    await fetch(`/Join_form`, { //이 주소에서 실행
      method: (group.id) ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(group)
    });
    setGroup(Join);
    navigate('/api/member/Join'); //데이터 보낼 주소
  }











  return (
   <> 
    <section className="content">
    <div className="logintext">
        <Link to="/Login_form"><button><h1>login</h1></button> </Link>
        <Link to="/Join_form"><button><h1>sign up</h1> </button> </Link>
        </div>
        <div className="form">
    <form onSubmit={handleSubmit}>
   
    <h3>아이디 설정</h3>
      
      {/* <input id="email" type="text" value={email} onChange={handleEmailChange} required /> @ <input id="email2" type='text' disabled={isDisabled}/> 
      <select name='select_email' onChange={selectEmail}>
        <option value={""}>선택</option>
        <option value={"naver.com"}>naver.com</option>
        <option value={"gmail.com"}>gmail.com</option>
      </select> */}

<input type="text" id="email" placeholder="이메일*" value={Join.email} onChange={handleChange} required/> @ 
<input type="text" name="emailInput" value={selectedEmail} disabled={isDisabled} />
       
<select name="email" onChange={handleEmailChange2}>
        <option value="">선택</option>
        <option value="naver.com">naver.com</option>
        <option value="gmail.com">gmail.com</option>
      </select>
      

      <br />

    
      <input id="password" placeholder="비밀번호*" type={Join.showPassword ? "text" : "password"} value={Join.password} onChange={handleChange} required />
      <i class="ri-eye-fill" onClick={handleToggleShowPassword}>
      {showPassword ? "" : ""}
      </i>
      <br />
    
      <input id="password-confirm" placeholder="비밀번호 확인*" type={Join.showPassword2 ? "text" : "password"} value={Join.passwordConfirm} onChange={handleChange} required />
      <i class="ri-eye-fill" onClick={handleToggleShowPassword2}>
      {showPassword2 ? "" : ""}
      </i>
      <br />


      <h3>개인정보</h3>
     
      <input id="last-name" placeholder="성*" type="text" value={Join.lastName} onChange={handleChange} required />

      
      <input id="first-name" placeholder="이름*" type="text" value={Join.firstName} onChange={handleChange} required />
      <br />
      
      <select id="phone" value={Join.phone} onChange={handlePhoneChange} required>
         {/* 한국 */}
        <option value="+82">+82</option> 
         {/* 일본 */}
        <option value="+81">+81</option>
         {/* 미국 */}
        <option value="+01">+01</option>

      </select>
      <input type="text"  placeholder="휴대전화번호*" value={Join.phone} onChange={handlePhoneChange}  required />
      <br />

      <h3>주소</h3>
      
      <input id="address" type="text" value={Join.address} onChange={handleChange} required />
      <button>주소검색</button>
      <br />




      <button type="submit" >회원가입</button>



      
      
    </form>
    </div>
    </section>
    </>
  )
};

export default Join_form;
