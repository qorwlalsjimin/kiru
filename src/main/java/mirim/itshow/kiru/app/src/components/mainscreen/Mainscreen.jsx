import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import "./mainscreen.css"
import "./footer_black.css"
import "./marquee.js"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CustomEase from "gsap/CustomEase";
// import { animateScroll as scroll } from 'react-scroll';
// import { useFullPage } from 'react-scroll-full-page';

import { FullPage, Slide } from 'react-full-page';
import Header from "../header/topNavigationBar/topNavigationBar"



gsap.registerPlugin(CustomEase);
gsap.registerPlugin(ScrollTrigger);

export const Mainscreen = (products, setProducts, handleNavClick) => {
  const [currentCard, setCurrentCard] = useState(0);
  const cards = document.querySelectorAll('.card');
  const [ignoreClick, setIgnoreClick] = useState(false);

  function cardShift() {
  let cardCount = 0;
    let index = currentCard - 2;
    if (index < 0) {
      index = cards.length + index;
    }

    while (cardCount < cards.length) {
      cards[index].classList.remove('p1', 'p2', 'p3', 'p4', 'hidden');
      if (cardCount < cards.length) { //?
        cards[index].classList.add('p' + (cardCount + 1));
         cards[index].classList.add('visible'); // 추가: 이미지가 보이도록 함
      } else {
        cards[index].classList.add('hidden');
      }
      cardCount = cardCount + 1;
      index = index + 1;
      if (index > cards.length - 1) {
        index = 0;
      }
      
    }
  }

  function triggerClick(card) {
    cardShift(card);
    setIgnoreClick(true);
    setTimeout(function () {
      setIgnoreClick(false);
    }, 400);
  }

  function handleLeftClick() {
    if (ignoreClick) return;
    let card = currentCard - 1;
    if (card < 0) {
      card = cards.length - 1;
    }
    setCurrentCard(card);
    triggerClick(card);
  }

  function handleRightClick() {
    if (ignoreClick) return;
    let card = currentCard + 1;
    if (card > cards.length - 1) {
      card = 0;
    }
    setCurrentCard(card);
    triggerClick(card);
  }

  //fullpage
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const fullpage = containerRef.current;
      const sections = sectionsRef.current;

      const currentSection = Math.floor(fullpage.scrollTop / window.innerHeight);
      sections.forEach((section, index) => {
        if (index === currentSection) {
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
    };

    const fullpage = containerRef.current;

    if (fullpage) {
      fullpage.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => {
      if (fullpage) {
        fullpage.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  // page_4

 
  
  return (
    <div>
     
     <div className="fullpage">
         
       <FullPage>
      
        <Slide>
          

            <section className="page_1" ref={(ref) => sectionsRef.current[0] = ref}>
              <img src="/images/Subtract.png" className='people1' alt="" />
            </section>
        </Slide>

             
    <Slide>
          <section className="page_2 sectionPin">
          <h1 className='choice'>Category</h1>



          {/* <div className="containerdy">
          <div className="card"><div className="s"><h4>#4 악세사리</h4><img src="/images/mask3.png" className='carousel-icon' alt="" /></div></div>
              <div className="card"> <div className="s"><h4>#1 개량한복</h4><img src="/images/mask.png" className='carousel-icon' alt="" /></div></div>
              <div className="card"><div className="s"><h4>#2 전통한복</h4> <img src="/images/mask1.png"className='carousel-icon' alt="" /></div></div>
              <div className="card"> <div className="s"><h4>#3 신발</h4><img src="/images/mask4.png" className='carousel-icon'alt="" /></div></div>
            </div> */}
        
          <div className="tie">
            <div className="ps">
              <h2>전통한복</h2><br />
              <h4 style={{ color: "#424242" }}>전통 한복에 비해 편하고<br />
                활동하기 쉬운 기능적이면서도<br />
                한복의 전통성을 느낄 수 있는 한복입니다.</h4>
            </div>
            <div className="nextbtn">
              <img src="/images/left.svg" alt="" className="prev-button" id="aleft" onClick={handleLeftClick} />
              <img src="/images/right.svg" alt="" className="next-button" id="aright" onClick={handleRightClick} />

            </div>
            </div>

        <div className="Linearbar"></div>
          </section>
          </Slide>
     
            <Slide>
            
             <section className="page_3" style={{ backgroundColor: "#F5DCEA" }}></section>
             
              </Slide>
        

          <Slide>
          <section className="page_4" style={{ backgroundColor: "#6D16DC" }}>

            

            <div className="wall" >
              <div className="openevent">#open event 컨셉 사진의 주인공이 되어 보세요!</div>

              <div className="studioshot" >
                <h1>studio</h1>
                <h1>shot</h1>
              </div>
              
              <div className="wall-item">

                <div className="line1" >
                  <div className="bacgroundcar">
                    <div className="border-card" id='pink'>
                      <img src="/images/card3.png" alt="" />
                    </div>
                  </div>

                  <div className="bacgroundcar">
                    <div className="border-card" id='pink'>
                      <img src="/images/card1.png" alt="" />
                    </div>
                  </div>

                  <div className="bacgroundcar">
                  <div className="border-card" id='blue'>
                  <img src="https://thumb.sixshop.kr/uploadedFiles/73034/default/image_1647481197591.jpg?width=2500" alt="" />
                  </div>
                  </div>

                  <div className="bacgroundcar">
                  <div className="border-card" id='pink'>
                  <img src="/images/card1.png" alt="" />
                  </div>
                  </div>
              
               

                  <div className="bacgroundcar">
                  <div className="border-card" id='green'>
                  <img src="/images/card2.png" alt="" />
                  </div>
                  </div>

               

              </div>


              <div className="line2">

             
                  <div className="bacgroundcar">
                  <div className="border-card" id='green'>
                  <img src="/images/card4.png" alt="" />
                  </div>
                  </div>

           

                  <div className="bacgroundcar">
                  <div className="border-card" id='pink'>
                  <img src="/images/card3.png" alt="" />
                  </div>
                  </div>

                  <div className="bacgroundcar">
                  <div className="border-card" id='pink'>
                  <img src="/images/card5.png" alt="" />
                  </div>
                  </div>


                  <div className="bacgroundcar">
                  <div className="border-card" id='blue'>
                  <img src="https://thumb.sixshop.kr/uploadedFiles/73034/default/image_1647481198148.jpg?width=2500" alt="" />
                  </div>
                  </div>


              <div className="bacgroundcar">
                  <div className="border-card" id='green'>
                  <img src="/images/card2.png" alt="" />
                  </div>

                  </div>

              </div>
            </div>

            </div>
          </section>
          </Slide> 

          <Slide>
          <section className='page_5'>
            <h1 className='title Merchandise'>Merchandise</h1>
          </section>
          </Slide>

          <Slide>
          <section className='page_6'>

            <div className="titleh1">

              <h1 className='title'>Partner</h1>

              <div className="middletitle">
                <h2>국내 유명 브랜드들과</h2><img src="/images/logo_white.png" className='logo_white' alt="" />
                <h2>  가 함께하고 있습니다.</h2>
              </div>
            </div>


            {/* <div class="slider">
        <div class="slide-track">
		<div class="slide">
			<img src="https://t3.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/Aay/image/t5G9QrwYFAOD3fif7IQAa6D0Ppg" height="200" width="200" alt="" />
		</div>
		<div class="slide">
			<img src="https://t3.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/Aay/image/t5G9QrwYFAOD3fif7IQAa6D0Ppg" height="200" width="200" alt="" />
		</div>
		<div class="slide">
			<img src="https://t3.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/Aay/image/t5G9QrwYFAOD3fif7IQAa6D0Ppg" height="200" width="200" alt="" />
		</div>
		<div class="slide">
			<img src="https://t3.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/Aay/image/t5G9QrwYFAOD3fif7IQAa6D0Ppg" height="200" width="200" alt="" />
		</div>
		<div class="slide">
			<img src="https://t3.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/Aay/image/t5G9QrwYFAOD3fif7IQAa6D0Ppg" height="200" width="200" alt="" />
		</div>
		<div class="slide">
			<img src="https://t3.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/Aay/image/t5G9QrwYFAOD3fif7IQAa6D0Ppg" height="200" width="200" alt="" />
		</div>
		<div class="slide">
			<img src="https://t3.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/Aay/image/t5G9QrwYFAOD3fif7IQAa6D0Ppg" height="200" width="200" alt="" />
		</div>
		<div class="slide">
			<img src="https://t3.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/Aay/image/t5G9QrwYFAOD3fif7IQAa6D0Ppg" height="200" width="200" alt="" />
		</div>
		<div class="slide">
			<img src="https://t3.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/Aay/image/t5G9QrwYFAOD3fif7IQAa6D0Ppg" height="200" width="200" alt="" />
		</div>
		<div class="slide">
			<img src="https://t3.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/Aay/image/t5G9QrwYFAOD3fif7IQAa6D0Ppg" height="200" width="200" alt="" />
		</div>
		<div class="slide">
			<img src="https://t3.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/Aay/image/t5G9QrwYFAOD3fif7IQAa6D0Ppg" height="200" width="200" alt="" />
		</div>
		<div class="slide">
			<img src="https://t3.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/Aay/image/t5G9QrwYFAOD3fif7IQAa6D0Ppg" height="200" width="200" alt="" />
		</div>
		<div class="slide">
			<img src="https://t3.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/Aay/image/t5G9QrwYFAOD3fif7IQAa6D0Ppg" height="200" width="200" alt="" />
		</div>
		<div class="slide">
			<img src="https://t3.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/Aay/image/t5G9QrwYFAOD3fif7IQAa6D0Ppg" height="200" width="200" alt="" />
		</div>
	</div>
        </div>


        <div class="slider2">
	<div class="slide-track">
		<div class="slide">
			<img src="https://t3.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/Aay/image/t5G9QrwYFAOD3fif7IQAa6D0Ppg" height="200" width="200" alt="" />
		</div>
		<div class="slide">
			<img src="https://t3.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/Aay/image/t5G9QrwYFAOD3fif7IQAa6D0Ppg" height="200" width="200" alt="" />
		</div>
		<div class="slide">
			<img src="https://t3.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/Aay/image/t5G9QrwYFAOD3fif7IQAa6D0Ppg" height="200" width="200" alt="" />
		</div>
		<div class="slide">
			<img src="https://t3.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/Aay/image/t5G9QrwYFAOD3fif7IQAa6D0Ppg" height="200" width="200" alt="" />
		</div>
		<div class="slide">
			<img src="https://t3.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/Aay/image/t5G9QrwYFAOD3fif7IQAa6D0Ppg" height="200" width="200" alt="" />
		</div>
		<div class="slide">
			<img src="https://t3.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/Aay/image/t5G9QrwYFAOD3fif7IQAa6D0Ppg" height="200" width="200" alt="" />
		</div>
		<div class="slide">
			<img src="https://t3.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/Aay/image/t5G9QrwYFAOD3fif7IQAa6D0Ppg" height="200" width="200" alt="" />
		</div>
		<div class="slide">
			<img src="https://t3.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/Aay/image/t5G9QrwYFAOD3fif7IQAa6D0Ppg" height="200" width="200" alt="" />
		</div>
		<div class="slide">
			<img src="https://t3.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/Aay/image/t5G9QrwYFAOD3fif7IQAa6D0Ppg" height="200" width="200" alt="" />
		</div>
		<div class="slide">
			<img src="https://t3.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/Aay/image/t5G9QrwYFAOD3fif7IQAa6D0Ppg" height="200" width="200" alt="" />
		</div>
		<div class="slide">
			<img src="https://t3.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/Aay/image/t5G9QrwYFAOD3fif7IQAa6D0Ppg" height="200" width="200" alt="" />
		</div>
		<div class="slide">
			<img src="https://t3.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/Aay/image/t5G9QrwYFAOD3fif7IQAa6D0Ppg" height="200" width="200" alt="" />
		</div>
		<div class="slide">
			<img src="https://t3.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/Aay/image/t5G9QrwYFAOD3fif7IQAa6D0Ppg" height="200" width="200" alt="" />
		</div>
		<div class="slide">
			<img src="https://t3.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/Aay/image/t5G9QrwYFAOD3fif7IQAa6D0Ppg" height="200" width="200" alt="" />
		</div>
	</div>
        </div> */}



          </section>
          </Slide>

          <Slide>
          <section className='page_7'>

         <div className="showkimono">
          <Link to="/main_kimono"> <h1 className=' skimono' >기모노 보러가기</h1></Link>
         
          </div>
          {/* <h1 className="kimono">기모노 보러가기</h1> */}

          </section>
          </Slide>

            <Slide>
          <footer className="two">

            <div className="footerall2">

              <div className="ma">
                <ul className="flex-container">

                  <div className="bold">
                    <li className="bo"><span style={{ fontWeight: "bold" }}>도와드릴까요?</span></li>

                    <div className="fontsizee">
                      <li><a href="#"><i className="ri-phone-fill"></i>전화 문의</a></li>
                      <li><a href="#"><i className="ri-mail-line"></i>문의하기</a></li>
                      <li><a href="#"><i className="ri-map-pin-fill"></i>수거함 찾기</a></li>
                    </div>


                  </div>

                  <div className="bold">
                    <li className="bo"><span style={{ fontWeight: "bold" }}>거래</span></li>

                    <div className="fontsizee">
                      <li><a href="#">주문 내역</a></li>
                      <li><a href="#">반품&환불</a></li>
                      <li><a href="#">FAQ</a></li>
                    </div>

                  </div>




                  <div className="bold">
                    <li className="bo"><span style={{ fontWeight: "bold" }}>입점 브랜드</span></li>
                    <div className="fontsizee">
                      <li><a href="#">기모노 브랜드</a></li>
                      <li><a href="#">한복 브랜드</a></li>
                    </div>


                  </div>

                  <div className="bold">
                    <li className="bo"><span style={{ fontWeight: "bold" }}>법적 고지 및 이용약관</span></li>
                    <div className="fontsizee">
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
                <div className="hr_white"></div>
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
          </Slide>
         
      
         
          </FullPage>
          
          </div>
          </div>

  )
}
