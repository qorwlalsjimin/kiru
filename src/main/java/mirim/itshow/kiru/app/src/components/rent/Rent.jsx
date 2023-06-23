import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Next } from "../../svgfiles/next_icon.svg";
import { ReactComponent as DateLine } from "../../svgfiles/date_line.svg";
import { ReactComponent as Unchecked } from "../../svgfiles/unchecked.svg";
import { ReactComponent as Checked } from "../../svgfiles/checked.svg";
import { CartList } from "../cart/cartList";
import { TotalCart } from "../cart/totalCart";
import Footer from "../footer/Footer";
import "./rent.css";
import axios from "axios";
import { getCookie } from "../../util/cookie";

export default function Rent() {

    const [memberInfo, setMemberInfo] = useState({});

    const [country, setCountry] = useState('한국');

    const [payMethod, setPayMethod] = useState('신용카드');

    const [isAgree, setIsAgree] = useState(false);

    function countryHandle(country) {
        switch (country) {
            case '한국':
                setCountry('한국');
                break;
            case '일본':
                setCountry('일본');
                break;
        }
    }

    function payMethodHandle(method) {
        switch (method) {
            case '신용카드':
                setPayMethod('신용카드');
                break;
            case '계좌이체':
                setPayMethod('계좌이체');
                break;
            case '무통장 입금':
                setPayMethod('무통장 입금');
                break;
            case '휴대폰':
                setPayMethod('휴대폰');
                break;
            case '네이버':
                setPayMethod('네이버');
                break;
            case '카카오':
                setPayMethod('카카오');
                break;
            case '토스':
                setPayMethod('토스');
                break;
        }
    }



    function agreeHandle() {
        setIsAgree(!isAgree);    
    }

    const navigate = useNavigate();
    function rentHandle() {
        window.alert('대여 완료되었습니다.');
        window.scrollTo({ top: 0 });
        setTimeout(() => {
            navigate('/Mainscreen')
          }, 3000);
    }


    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`/api/member/me`, {
              headers: {
                'Authorization': `Bearer ${getCookie("accessToken")}` // header에 토큰 추가
              }
            });
      
              setMemberInfo(response.data);
              console.log(response.data)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        fetchData();
      }, []);

    return (
        <>
            <div className="rent_container">
                <div className="rent_content">

                    {/* 순서 nav */}
                    <div className="nav">
                        <div className="item active">대여신청하기<Next className="right" /></div>
                        <div className="item active">주문서 작성<Next className="right" /></div>
                        <div className="item">신청완료</div>
                    </div>

                    {/* 대여 상품 정보 */}

                    {/* 주문자 정보 */}
                    <h2 className="title">주문자 정보</h2>
                    <div className="user_infor table">
                        <div className="row name">
                            <div className="left">이름<span>*</span></div>
                            <div className="right">
                                <input type="text" name="name" value={memberInfo.name} />
                            </div>
                        </div>
                        <div className="row phone">
                            <div className="left">휴대전화<span>*</span></div>
                            <div className="right">
                                <input type="text" name="phone_h" value={memberInfo.phone ? memberInfo.phone.substring(0,3) : ""} />
                                <img className="date_line" src="images/date_line.svg" alt="" />
                                <input type="text" name="phone_b" value={memberInfo.phone ? memberInfo.phone.substring(3,7) : ""} />
                                <img className="date_line" src="images/date_line.svg" alt="" />
                                <input type="text" name="phone_t" value={memberInfo.phone ? memberInfo.phone.substring(7,11) : ""} />
                            </div>
                        </div>
                        <div className="row email">
                            <div className="left">이메일</div>
                            <div className="right">
                                <input type="text" name="email" value={memberInfo.memberEmail ? memberInfo.memberEmail.split('@')[0] : ""} />
                                <span>@</span>
                                <select name="email_fix" value={memberInfo.memberEmail}>
                                    <option value="naver.com">naver.com</option>
                                    <option value="gmail.com">gmail.com</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* 배송 정보 */}
                    <h2 className="title">배송 정보</h2>
                    <div className="deliv_infor table">
                        <div className="row address">
                            <div className="left">주소<span>*</span></div>
                            <div className="right">
                                <input type="text" name="address" value={memberInfo.address ? memberInfo.address : ""} />
                            </div>
                        </div>
                        <div className="row phone">
                            <div className="left">받는 분<span>*</span></div>
                            <div className="right">
                                <input type="text" name="given_user"  value={memberInfo.name ? memberInfo.name : ""}  />
                            </div>
                        </div>
                        <div className="row email">
                            <div className="left">휴대전화<span>*</span></div>
                            <div className="right">
                                <input type="text" name="phone_h"  value={memberInfo.phone ? memberInfo.phone.substring(0,3) : ""} />
                                <img className="date_line" src="images/date_line.svg" alt="" />
                                <input type="text" name="phone_b"  value={memberInfo.phone ? memberInfo.phone.substring(3,7) : ""} />
                                <img className="date_line" src="images/date_line.svg" alt="" />
                                <input type="text" name="phone_t"  value={memberInfo.phone ? memberInfo.phone.substring(7,11) : ""} />
                            </div>
                        </div>
                        <div className="row email">
                            <div className="left">이메일</div>
                            <div className="right">
                                <input type="text" name="email"  value={memberInfo.memberEmail ? memberInfo.memberEmail.split('@')[0] : ""}/>
                                <span>@</span>
                                <select name="email_fix"   value={memberInfo.memberEmail ? memberInfo.memberEmail.split('@')[1] : ""}>
                                    <option value="naver.com">naver.com</option>
                                    <option value="gmail.com">gmail.com</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* 결제 방법 */}
                    <h2 className="title">결제 방법</h2>
                    <div className="payment table">
                        <div className="row email">
                            <div className="left">결제 수단<span>*</span></div>
                            <div className="right">
                                <div className="country" >
                                    <span onClick={countryHandle.bind(this, '한국')}>{country=='한국' ? <Checked style={{marginRight: "6px "}} /> : <Unchecked style={{marginRight: "6px "}} />}한국 <br /></span>
                                    <span onClick={countryHandle.bind(this, '일본')}>{country=='한국' ? <Unchecked style={{marginRight: "6px "}} /> : <Checked style={{marginRight: "6px "}} />}일본 <br /></span>
                                </div>

                                <div className="payment_select">
                                    <div className="top">
                                        <div  className={`payment_method ${payMethod === '신용카드' ? "active" : ""}`}>신용카드</div>
                                        <div  className={`payment_method ${payMethod === '계좌이체' ? "active" : ""}`}>계좌이체</div>
                                        <div  className={`payment_method ${payMethod === '무통장 입금' ? "active" : ""}`}>무통장 입금</div>
                                        <div  className={`payment_method ${payMethod === '휴대폰' ? "active" : ""}`}>휴대폰</div>
                                    </div>
                                    <div className="bottom">
                                        <div  className={`payment_method ${payMethod === '네이버' ? "active" : ""}`}><img src="https://i.postimg.cc/sxXg4hKY/naverpay.png" alt="" /></div>
                                        <div  className={`payment_method ${payMethod === '카카오' ? "active" : ""}`}><img src="https://i.postimg.cc/hGWhRhPn/kakaopay.png" alt="" /></div>
                                        <div  className={`payment_method ${payMethod === '토스' ? "active" : ""}`}><img src="https://i.postimg.cc/KjHvq8sd/tosspay.png" alt="" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 총합 */}

                    {/* 동의 */}
                    <div className="agree">
                        <h3>주문 확인 및 동의</h3><br />
                        <p>주문하실 상품, 가격, 배송정보, 할인정보 등을 확인하였으며, 구매에 동의하시겠습니까?</p><br />

                        <div className="order_check_box" onClick={agreeHandle}>
                            {isAgree?<Checked className="radio_btn" />:<Unchecked className="radio_btn" />}동의합니다.
                        </div>
                    </div>

                    {/* 결제하기 버튼 */}
                    <div className="order_btn" onClick={rentHandle()}>
                        <button>대여하기</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}