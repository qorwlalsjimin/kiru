import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getCookie } from "../../util/cookie";
import './join_form.css'
import Modal from "./Modal";


const Join_form = (props) => {
  const navigate = useNavigate();
  const [group, setGroup] = useState({
    email: '', //이메일
    password: '', //비밀번호
    passwordConfirm: '', //비밀번호 확인
    lastName: '', //성
    firstName: '', //이름
    phone: '', //전화번호
    address: '', //주소
    address2: '' ///상세주소
  });

  console.log(group);

  //주소 검색 modal
  const [isOpen, setIsOpen] = useState(false);
  const onClickButton = () => {
    setIsOpen(true);
  };


  //Email 
  const [selectedEmail, setSelectedEmail] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  function handleEmailChange2(event) {
    const { name, value } = event.target;
    setGroup({ ...group, [name]: value });
    if (value !== "") {
      setIsDisabled(true);
      setSelectedEmail(value);
    } else {
      setIsDisabled(false);
      setSelectedEmail("");
    }
  }


  //비밀번호
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);


  //비밀번호 보이게 하기
  function handleToggleShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleToggleShowPassword2() {
    setShowPassword2(!showPassword2);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name == "emailInput") setGroup({ ...group, [name]: value })
    else setGroup({ ...group, [name]: value })
  }


  //제출
  const handleSubmit = async (event) => {
    event.preventDefault();

    let submitForm = {
      "memberEmail": group.email + "@" + group.emailInput,
      "memberPw": group.password,
      "name": group.lastName + group.firstName,
      "address": group.address,
      "phone": group.phone
    }

    try {
      //응답 성공 
      const response = await axios.post('/auth/signup', submitForm,
        {
          headers: {
            'Authorization': `Bearer ${getCookie("is_login")}`
          }
        }
      );
      console.log(response);
      setTimeout(() => {
        alert("회원가입이 완료되었습니다.");
        navigate("/Login_form");
      }, 500);
    } catch (error) {
      //응답 실패
      alert("회원가입 실패");
      console.error(error);
    }
  }

  return (
    <>
      <section className="content">
        <div className="logintext">
          <Link to="/Login_form"><button><h1>Login</h1></button> </Link>
          <Link to="/Join_form"><button className="bsi"><h1>Sign up</h1> </button> </Link>
        </div>
        <div className="form">
          <form onSubmit={handleSubmit}>

            <p className="ment2">계정을 생성하여 더 빠른 온라인 결제 혜택을 누려보세요.</p>
            <p className="must">* 필수 항목</p>

            <h3 className="font">아이디 설정</h3>

            <div className="form">

              <input type="text" className="mail1" name='email' id="email" placeholder="이메일*" defaultValue={group.email} onChange={handleChange} required /> @
              <input type="text" className="mail2" name="emailInput" defaultValue={selectedEmail} disabled={isDisabled} onChange={handleChange} />

              <select name="emailInput" className="mail3" onChange={handleEmailChange2}>
                <option defaultValue="">선택</option>
                <option defaultValue="naver.com">naver.com</option>
                <option defaultValue="gmail.com">gmail.com</option>
              </select>


              <br />

              <div className="pass">
                <input id="password" name='password' placeholder="비밀번호*" type={showPassword ? "text" : "password"} defaultValue={group.password} onChange={handleChange} required />
                <p><i className="ri-eye-fill" name='showPassword' onClick={handleToggleShowPassword}>
                  {showPassword ? "" : ""}
                </i></p>
                <p className="passment">비밀번호는 6-18자여야 합니다</p>
                <br />

                <input id="password-confirm" className="passcon" name='passwordConfirm' placeholder="비밀번호 확인*" type={showPassword2 ? "text" : "password"} defaultValue={group.passwordConfirm} onChange={handleChange} required />
                <p><i className="ri-eye-fill" name='showPassword2' onClick={handleToggleShowPassword2}>
                  {showPassword2 ? "" : ""}
                </i></p>
                <br />
              </div>

              <h3 className="font">개인정보</h3>


              <input id="last-name" className="fname" name="lastName" placeholder="성*" type="text" defaultValue={group.lastName} onChange={handleChange} required />
              <input id="first-name" className="lname" name="firstName" placeholder="이름*" type="text" defaultValue={group.firstName} onChange={handleChange} required />
              <br />

              <select id="phone" className="fname" defaultValue={group.phone} onChange={handleChange} required>
                {/* 한국 */}
                <option defaultValue="+82">+82</option>
                {/* 일본 */}
                <option defaultValue="+81">+81</option>
                {/* 미국 */}
                <option defaultValue="+01">+01</option>

              </select>
              <input type="text" className="lname" name="phone" placeholder="휴대전화번호*" defaultValue={group.phone} onChange={handleChange} required />
              <br />

              <h3 className="font">주소</h3>

              <div className="ads">
                <input id="address" className="address1" name="address" type="text" placeholder="우편번호" defaultValue={group.address} onChange={handleChange} />
                <button type="button" onClick={onClickButton} >주소검색</button>
                {isOpen && (<Modal
                  open={isOpen}
                  onComplete={(address) => setGroup(group => ({ ...group, address }))}
                  onClose={() => {
                    setIsOpen(false);
                  }}
                />)}
              </div>

              <div className="pass">

                <input id="address" className="address2" name="address" type="text" placeholder="주소" defaultValue={group.address} onChange={handleChange} />  {/**value={setInputAddressValue} */}
                <br />
                <input id="address" className="address3" name="address2" placeholder="상세주소" type="text" defaultValue={group.address2} onChange={handleChange} />
              </div>

              <br />



              <div className="agree allsection">
                <input type="checkbox" />  <p>전체 선택</p>
              </div>

              <div className="bar"></div>

              <div className="otheragree">

                <div className="agree ag1">
                  <input type="checkbox" />   <p>본인은 <span style={{ textDecoration: "underline" }}> 개인정보처리방침</span>을 읽고 이에 동의합니다. </p>
                </div>

                <div className="agree ag2">
                  <input type="checkbox" />   <p>개인정보의 수집 및 이용에 대한 동의 (필수) </p> <p style={{ textDecoration: "underline" }}>상세보기</p>
                </div>

                <div className="agree ag3">
                  <input type="checkbox" />   <p>개인정보의 제 3자 제공 동의 (선택)</p> <p style={{ textDecoration: "underline" }}>상세보기</p>
                </div>

              </div>
            </div>

            <div className="sibtn">
              <button type="submit" >회원가입 하기</button>
            </div>
          </form>
        </div>
      </section>
      {/* <Footer /> */}
    </>

  )
};

export default Join_form;
