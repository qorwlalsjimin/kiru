import React from 'react'
import "./footer.css"

const Footer = () => {
    return (

        <footer className="two">

            <div className="footerall">

                <div className="ma">
                    <ul className="flex-container">

                        <div className="bold">
                            <li className="bo"><span style={{ fontWeight: "bold" }}>도와드릴까요?</span></li>

                            <div className="fontsize">
                                <li><a href="#"><i className="ri-phone-fill"></i>전화 문의</a></li>
                                <li><a href="#"><i className="ri-mail-line"></i>문의하기</a></li>
                                <li><a href="#"><i className="ri-map-pin-fill"></i>수거함 찾기</a></li>
                            </div>


                        </div>

                        <div className="bold">
                            <li className="bo"><span style={{ fontWeight: "bold" }}>거래</span></li>

                            <div className="fontsize">
                                <li><a href="#">주문 내역</a></li>
                                <li><a href="#">반품&환불</a></li>
                                <li><a href="#">FAQ</a></li>
                            </div>

                        </div>


                        <div className="bold">
                            <li className="bo"><span style={{ fontWeight: "bold" }}>입점 브랜드</span></li>
                            <div className="fontsize">
                                <li><a href="#">기모노 브랜드</a></li>
                                <li><a href="#">한복 브랜드</a></li>
                            </div>
                        </div>

                        <div className="bold">
                            <li className="bo"><span style={{ fontWeight: "bold" }}>법적 고지 및 이용약관</span></li>
                            <div className="fontsize">
                                <li><a href="#">이용약관</a></li>
                                <li><a href="#">개인정보 처리방침</a></li>
                                <li><a href="#">사업자정보확인</a></li>
                                <li><a href="#">판매 약관</a></li>
                            </div>

                        </div>

                    </ul>
                </div>

                {/* <hr/> */}

                <div className="hrr">
                    <div className="hr"></div>
                </div>

                <div className="footunder">
                    <div className="logogery_img">
                        <img src="images/logogrey.png" alt="" />
                    </div>

                    <p>회사명: 키루. 사업자등록번호:123-45-6789. 대표자: 백서영. 개인정보 보호책임자: 장선영이사. 통신판매신고번호: 2017-서울강남-04082. <br />
                        주소: 서울시 강남구 압구정로 439 06010. 고객센터 서비스 센터: 080-522-7199. 이메일: mirim@kiru.com. 법적고지  및 이용약관. <br />
                        호스팅 서비스: WIIT. 구매안전서비스: NHN한국 사이버결제 주식회사에 가입하여 고객님의 안전한 거래를 보장하고 있습니다.</p>

                    <div className="icon2">
                        <i className="ri-instagram-fill"></i>
                        <i className="ri-youtube-fill"></i>
                        <i className="ri-facebook-fill"></i>
                        <i className="ri-tiktok-fill"></i>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
