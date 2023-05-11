import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
// import { Link } from "react-router-dom"
import './join_form.css'
import './script.js'
// import ReactDom from 'react-dom';
import PopupDom from './PopupDom';
import PopupPostCode from './PopupPostCode';
// import axios from 'axios';
import DaumPostcode from "react-daum-postcode";



const Join_form = (props) => {
  const [group, setGroup] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    lastName: '',
    firstName: '',
    phone: '',
    address: '',
    address2:'',
    showPassword: false,
    showPassword2: false
  });

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
  
  // const [setPhone ] = useState("");

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

  // //phone
  // const handlePhoneChange = (event) => {
  //   const regex = /^[0-9\b -]{0,13}$/;
  //   if (regex.test(event.target.value)) {
  //     setPhone(event.target.value);
     
  //   }
  // };


  // useEffect(() => {
  //   if (group.phone.length === 10) {
  //     setPhone(group.phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
  //   }
  //   if (group.phone.length === 13) {
  //     setPhone(group.phone.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
  //   }
  // }, [group.phone]);


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
    // setGroup(Join);2
    navigate('/api/member/Join'); //데이터 보낼 주소
  }



//주소 검색

const [isPopupOpen, setIsPopupOpen] = useState(false)
 
	// 팝업창 열기
    const openPostCode = () => {
        setIsPopupOpen(true)
    }
 
	// 팝업창 닫기
    const closePostCode = () => {
        setIsPopupOpen(false)
    }



  return (
   <> 
    <section className="content">
    <div className="logintext">
        <Link to="/Login_form"><button><h1>login</h1></button> </Link>
        <Link to="/Join_form"><button className="bsi"><h1>sign up</h1> </button> </Link>
        </div>
        <div className="form">
    <form onSubmit={handleSubmit}>

    <h4 className="ment">계정을 생성하여 더 빠른 온라인 결제 혜택을 누려보세요.</h4>
    <p className="must">*필수 항목</p>
   
    <h3 className="font">아이디 설정</h3>
      
      {/* <input id="email" type="text" value={email} onChange={handleEmailChange} required /> @ <input id="email2" type='text' disabled={isDisabled}/> 
      <select name='select_email' onChange={selectEmail}>
        <option value={""}>선택</option>
        <option value={"naver.com"}>naver.com</option>
        <option value={"gmail.com"}>gmail.com</option>
      </select> */}
<div className="form">

<input type="text" className="mail1" name='email' id="email" placeholder="이메일*" value={group.email} onChange={handleChange} required/> @ 
<input type="text" className="mail2" name="emailInput" value={selectedEmail} disabled={isDisabled} />
       
<select name="email" className="mail3"  onChange={handleEmailChange2}>
        <option value="">선택</option>
        <option value="naver.com">naver.com</option>
        <option value="gmail.com">gmail.com</option>
      </select>
      

      <br />

    <div className="pass">
      <input id="password" name='password' placeholder="비밀번호*" type={group.showPassword ? "text" : "password"} value={group.password} onChange={handleChange} required />
      <p><i className="ri-eye-fill" name='showPassword' onClick={handleToggleShowPassword}>
      {showPassword ? "" : ""}
      </i></p>
      <p className="passment">비밀번호는 6-18자여야 합니다</p>
      <br />
    
      <input id="password-confirm" className="passcon" name='passwordConfirm' placeholder="비밀번호 확인*" type={group.showPassword2 ? "text" : "password"} value={group.passwordConfirm} onChange={handleChange} required />
      <p><i className="ri-eye-fill" name='showPassword2' onClick={handleToggleShowPassword2}>
      {showPassword2 ? "" : ""}
      </i></p>
      <br />
      </div>

      <h3 className="font">개인정보</h3>
     

      <input id="last-name" className="fname" name="lastName" placeholder="성*" type="text" value={group.lastName} onChange={handleChange} required />
      <input id="first-name" className="lname" name="firstName" placeholder="이름*" type="text" value={group.firstName} onChange={handleChange} required />
      <br />
      
      <select id="phone" className="fname" value={group.phone} onChange={handleChange} required>
         {/* 한국 */}
        <option value="+82">+82</option> 
         {/* 일본 */}
        <option value="+81">+81</option>
         {/* 미국 */}
        <option value="+01">+01</option>

      </select>
      <input type="text" className="lname" name="phone" placeholder="휴대전화번호*" value={group.phone} onChange={handleChange}  required />
      <br />

      <h3 className="font">주소</h3>

      <div className="ads">
      <input id="address" className="address" name="address" type="text" value={group.address} onChange={handleChange} required /> 
      <button type="button"  onClick={openPostCode} >주소검색</button>
     
            <div id='popupDom'>
                {isPopupOpen && (
                   
                <PopupDom>
                   <PopupPostCode onClose={closePostCode} />
               </PopupDom>


                )}
            </div>

            {/* <div>
            <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />
            
            <button type='button' onClick={() => {props.onClose()}} className='postCode_btn'>닫기</button>
        </div> */}
      </div>

      <div className="pass">

      <input id="address" className="address" name="address" type="text" value={group.address} onChange={handleChange} required /> 
      <br />
      <input id="address" className="address" name="address2" placeholder="상세주소"  type="text" value={group.address2} onChange={handleChange} required /> 
      </div>

      <br />

      </div>

      <div className="sibtn">
      <button type="submit" >회원가입하기</button>
      </div>


      
      
    </form>
    </div>
    </section>
    </>
  )
};

export default Join_form;
