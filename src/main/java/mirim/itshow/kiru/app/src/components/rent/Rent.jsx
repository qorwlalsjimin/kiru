import React from "react";
import { ReactComponent as Next } from "../../svgfiles/next_icon.svg";
import { ReactComponent as DateLine } from "../../svgfiles/date_line.svg";
import { ReactComponent as Unchecked } from "../../svgfiles/unchecked.svg";
import { CartList } from "../cart/cartList";
import { TotalCart } from "../cart/totalCart";
import Footer from "../footer/Footer";
import "./rent.css";

export default function Rent() {

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
                                <input type="text" name="name" />
                            </div>
                        </div>
                        <div className="row phone">
                            <div className="left">휴대전화<span>*</span></div>
                            <div className="right">
                                <input type="text" name="phone_h" />
                                <img className="date_line" src="images/date_line.svg" alt="" />
                                <input type="text" name="phone_b" />
                                <img className="date_line" src="images/date_line.svg" alt="" />
                                <input type="text" name="phone_t" />
                            </div>
                        </div>
                        <div className="row email">
                            <div className="left">이메일</div>
                            <div className="right">
                                <input type="text" name="email" />
                                <span>@</span>
                                <select name="email_fix">
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
                                <input type="text" name="address_code" />
                                <input type="text" name="address" />
                                <input type="text" name="address_detail" />
                            </div>
                        </div>
                        <div className="row phone">
                            <div className="left">받는 분<span>*</span></div>
                            <div className="right">
                                <input type="text" name="given_user" />
                            </div>
                        </div>
                        <div className="row email">
                            <div className="left">휴대전화<span>*</span></div>
                            <div className="right">
                                <input type="text" name="phone_h" />
                                <img className="date_line" src="images/date_line.svg" alt="" />
                                <input type="text" name="phone_b" />
                                <img className="date_line" src="images/date_line.svg" alt="" />
                                <input type="text" name="phone_t" />
                            </div>
                        </div>
                        <div className="row email">
                            <div className="left">이메일</div>
                            <div className="right">
                                <input type="text" name="email" />
                                <span>@</span>
                                <select name="email_fix">
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
                                <div className="country">
                                    <Unchecked />한국 <br />
                                    <Unchecked />일본 <br />
                                </div>

                                <div className="payment_select">
                                    <div>
                                        <div className="payment_method">신용카드</div>
                                        <div className="payment_method">계좌이체</div>
                                        <div className="payment_method">무통장 입금</div>
                                        <div className="payment_method">휴대폰</div>
                                    </div>
                                    <div>
                                        <div className="payment_method"><img src="https://ibb.co/SvRFG4z" alt="" /></div>
                                        <div className="payment_method"><img src="https://ibb.co/r65nDJN" alt="" /></div>
                                        <div className="payment_method"><img src="https://ibb.co/FD2ZcvK" alt="" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 총합 */}
                    <div className="total">
                        <div className="totalfont">
                            <div className="totalcount">
                                <p className="cart_product_total_price">총 수량 2개</p>
                            </div>

                            {/* 대여기간 */}
                            {/* startDate와 endDate를 출력 */}
                            <p className="cart_product_sale">
                                대여기간 <span className="star_end">2023.04.11 <img src="images/date_line.svg" /> 2023.04.12</span>
                                {/* 대여기간 <span className="star_end">{startDate}-{endDate}</span> */}
                            </p>

                            <div className="payment">
                                {/* 총 대여료 */}
                                {/* total을 변환된 가격으로 출력 */}
                                <p>총 대여료 <span className="cart_prouct_payment"> 12355</span>원</p>
                            </div>
                        </div>
                    </div>

                    {/* 동의 */}
                    <div className="agree">
                        <h3>주문 확인 및 동의</h3><br />
                        <p>주문하실 상품, 가격, 배송정보, 할인정보 등을 확인하였으며, 구매에 동의하시겠습니까?</p><br />

                        <div className="order_check_box">
                            <Unchecked className="radio_btn" />동의합니다.
                        </div>
                    </div>

                    {/* 결제하기 버튼 */}
                    <div className="order_btn">
                        <button>결제하기</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}