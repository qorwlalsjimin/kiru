import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import "./mainscreen.css"
import "./footer_black.css"
import "./marquee.js"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CustomEase from "gsap/CustomEase";
import { Parallax } from "react-parallax";
import ScrollToPlugin  from 'gsap/ScrollToPlugin';
// import { Tween } from "gsap/Tween";


gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(CustomEase);
gsap.registerPlugin(ScrollTrigger);



export const Mainscreen = () => {



  //fullpage
//   gsap.registerPlugin(ScrollTrigger);
//   gsap.registerPlugin(ScrollToPlugin);
  
//   let sections = gsap.utils.toArray("#panner");
  
//   function goToSection(i) {
//     gsap.to(window, {
//       scrollTo: { y: i * window.innerHeight, autoKill: false, ease: "Power3.easeInOut" },
//       duration: 0.85
//     });
//   }
  
  
//   sections.forEach((eachPanel, i) => {
    
  
//     ScrollTrigger.create({
//       trigger: eachPanel,
//       onEnter: () => goToSection(i)
//     });
  
//     ScrollTrigger.create({
//       trigger: eachPanel,
//       start: "bottom bottom",
//       onEnterBack: () => goToSection(i)
//     });
//   });


//slide
// const slidesRef = useRef(null);
// const xOffsetRef = useRef(0);
// const isMouseInRef = useRef(false);

// useEffect(() => {
//   const slides = slidesRef.current;

//   const translate = () => {
//     let offsetIncrementor = isMouseInRef.current ? 0.05 : 0.2;
//     let xOffset = xOffsetRef.current;
//     if (xOffset >= 258 * 7) xOffset = 0;
//     else xOffset = xOffset + offsetIncrementor;
//     xOffsetRef.current = xOffset;
//     slides.style.transform = `translateX(-${xOffset}px)`;
//   };

//   const intervalId = setInterval(translate, 0);

//   const handleMouseOver = () => {
//     isMouseInRef.current = true;
//   };

//   const handleMouseOut = () => {
//     isMouseInRef.current = false;
//   };

//   slides.addEventListener('mouseover', handleMouseOver);
//   slides.addEventListener('mouseout', handleMouseOut);

//   return () => {
//     clearInterval(intervalId);
//     slides.removeEventListener('mouseover', handleMouseOver);
//     slides.removeEventListener('mouseout', handleMouseOut);
//   };
// }, []);


//page_2

//     let panelsSection = document.querySelector("#panels"),
//         panelsContainer = document.querySelector("#panels-container"),
//         tween;
//     document.querySelectorAll(".anchor").forEach((anchor) => {
//         anchor.addEventListener("click", function (e) {
//             console.log("click");
//             e.preventDefault();
//             let targetElem = document.querySelector(e.target.getAttribute("href")),
//                 y = targetElem;
//             if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
//                 let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
//                     totalMovement = cont.scrollWidth - window.innerWidth;
//                 y = Math.round(
//                     tween.scrollTrigger.start +
//                     (targetElem.offsetLeft / totalMovement) * totalScroll
//                 );
//             }
//             gsap.to(window, {
//                 scrollTo: {
//                     y: y,
//                     autoKill: false
//                 },
//                 duration: 1
//             });
//         });
//     });






const cont = document.querySelector("#panels-container");
const panels = gsap.utils.toArray("#panels-container .panel");

/*
tween = gsap.to(panels, {
  x: () => -1 * (cont.scrollWidth - window.innerWidth),
  ease: "none",
  scrollTrigger: {
    trigger: "#panels-container",
    pin: true,
    start: "top top",
    scrub: 1,
    end: () => "+=" + (cont.scrollWidth - window.innerWidth),
    onUpdate: (self) => {
     console.log(self.progress)
    }
  }
});*/








  

//   const containerRef = useRef(null);
//   const sectionsRef = useRef([]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const fullpage = containerRef.current;
//       const sections = sectionsRef.current;

//       const currentSection = Math.floor(fullpage.scrollTop / window.innerHeight);
//       sections.forEach((section, index) => {
//         if (index === currentSection) {
//           section.classList.add('active');
//         } else {
//           section.classList.remove('active');
//         }
//       });
//     };

//     const fullpage = containerRef.current;

//     if (fullpage) {
//       fullpage.addEventListener('scroll', handleScroll);
//       handleScroll();
//     }

//     return () => {
//       if (fullpage) {
//         fullpage.removeEventListener('scroll', handleScroll);
//       }
//     };
//   }, []);

  // page_4
 
//   useEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);

//     const line1 = document.querySelector('.line1');
//     const line2 = document.querySelector('.line2');

//     gsap.set(line1, { y: '100%' });
//     gsap.set(line2, { y: '-100%' });

//     gsap.registerPlugin(ScrollTrigger);
//     gsap.to(line1, {
//       y: '0%',
//       duration: 3,
//       delay: 4,
//       scrollTrigger: {
//         trigger: '.page_4',
//         start: 'top center',
//         end: 'center center',
//         scrub: 2 ,// Adjust the scrub value to slow down the animation (0.5 = slower)
//         onUpdate: (self) => {
//             if (self.direction === 1) {
//               gsap.set(line1, { y: '0%' });
//             }
//           }

//       }
//     });

//     gsap.to(line2, {
//       y: '0%',
//       duration: 3,
//       delay: 4,
//       scrollTrigger: {
//         trigger: '.page_4',
//         start: 'top center',
//         end: 'center center',
//         scrub: 2 ,// Adjust the scrub value to slow down the animation (0.5 = slower)
//         onUpdate: (self) => {
//             if (self.direction === 1) {
//               gsap.set(line2, { y: '0%' });
//             }
//           }
//       }
//     });
//   }, []);

const line1Ref = useRef(null);
  const line2Ref = useRef(null);

  useEffect(() => {
    const line1 = line1Ref.current;
    const line2 = line2Ref.current;

    gsap.set(line1, { y: '100%' });
    gsap.set(line2, { y: '-100%' });

    gsap.to(line1, {
      y: '0%',
      duration: 3,
      delay: 4,
      scrollTrigger: {
        trigger: '.page_4',
        start: 'top center',
        end: 'center center',
        scrub: 2,
        onUpdate: (self) => {
          if (self.direction === 1) {
            gsap.set(line1, { y: '0%' });
          }
        },
      },
    });

    gsap.to(line2, {
      y: '0%',
      duration: 3,
      delay: 4,
      scrollTrigger: {
        trigger: '.page_4',
        start: 'top center',
        end: 'center center',
        scrub: 2,
        onUpdate: (self) => {
          if (self.direction === 1) {
            gsap.set(line2, { y: '0%' });
          }
        },
      },
    });
  }, []);

  
//line move


//page_5




//scroll



  return (
    <div>
     
  
         
       {/* <FullPage  ref={fullPageRef} >
      
        <Slide> */}
          
        

    

            <section className="page_1 panner" id='panner'  >
              <img src="/images/Subtract.png" className='people1' alt="" />
            </section>
            
        {/* </Slide>


    <Slide> */}
    
          <section className="page_2 panner " id='panner'> 
          <h1 className='choice'>Category</h1>

        

   
          {/* <div className="containerdy">
          <div className="card"><div className="s"><h4>#4 악세사리</h4><img src="/images/mask3.png" className='carousel-icon' alt="" /></div></div>
              <div className="card"> <div className="s"><h4>#1 개량한복</h4><img src="/images/mask.png" className='carousel-icon' alt="" /></div></div>
              <div className="card"><div className="s"><h4>#2 전통한복</h4> <img src="/images/mask1.png"className='carousel-icon' alt="" /></div></div>
              <div className="card"> <div className="s"><h4>#3 신발</h4><img src="/images/mask4.png" className='carousel-icon'alt="" /></div></div>
            </div> */}

            

            
    {/* </main> */}





                      {/* </div> */}
                  {/* </div> */}
        
          <div className="tie">
            <div className="ps">
              <h2>전통한복</h2><br />
              <h4 style={{ color: "#424242" }}>전통 한복에 비해 편하고<br />
                활동하기 쉬운 기능적이면서도<br />
                한복의 전통성을 느낄 수 있는 한복입니다.</h4>
            </div>
           
            </div>



        <div className="Linearbar"></div>

            



          </section>

        
         
          {/* </Slide>
     
            <Slide> */}
            
             <section className="page_3 panner " id="map" style={{ backgroundColor: "#F5DCEA" }}></section>
            
              {/* </Slide>
        
       
          <Slide  >
           */}
          <section className="page_4 panner " style={{ backgroundColor: "#6D16DC" }}>

            

            <div className="wall" >
              <div className="openevent">#open event 컨셉 사진의 주인공이 되어 보세요!</div>

              <div className="studioshot" >
                <h1>studio</h1>
                <h1>shot</h1>
              </div>
              
              <div className="wall-item">
                
             
                <div className="line1"  ref={line1Ref} >
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
            

            
              <div className="line2"  ref={line2Ref}>

             
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
          <div className="divider"></div>
          {/* </Slide> 
          


          <Slide> */}
          <section className='page_5 panner '>

            <h4 className='open'>#open event</h4>
            
            <h1 className='title Merchandise'>Merchandise</h1>

            <div className="eventps">

                              <h4>한복과 기모노를 구매하면<br />
                                  와펜 굿즈를 증정해드립니다!</h4>
                          </div>


            <div className="title-wrap">
                       
            </div>

          </section>
          {/* </Slide>

          <Slide> */}
          <section className='page_6 panner '>

            <div className="titleh1">

              <h1 className='partner'>Partner</h1>

              <div className="middletitle">
                <h2>국내 유명 브랜드들과
                <img src="/images/logo_white.png" className='logo_white' alt="" />
                가 함께하고 있습니다.</h2>
              </div>

              </div>
              {/* <div className="contain"  ref={slidesRef}>
                  <div className="slid-er">
                      <div className="slides" id="slides" >
                          <div className="slided">
                              <div className="slide-content">
                                  <a href="https://www.pinterest.com/pin/42502790224869685/" target="_blank">
                                      <img src="https://i.pinimg.com/originals/e2/16/b0/e216b0f9c1cda3f4b5cdf44fee26060d.jpg" loading="lazy" />
                                      <div className="button-container">
                                          <span className="button">Download</span>
                                      </div>
                                  </a>
                              </div>
                          </div>
                          <div className="slided">
                              <div className="slide-content">
                                  <a href="https://www.pinterest.com/pin/15833036179887216/" target="_blank">
                                      <img src="https://i.pinimg.com/originals/fd/d7/cc/fdd7ccccc4b74cea4f15ba1702ef8813.jpg" loading="lazy" />
                                      <div className="button-container">
                                          <span className="button">Download</span>
                                      </div>
                                  </a>
                              </div>
                          </div>
                          <div className="slided">
                              <div className="slide-content">
                                  <a href="https://www.pinterest.com/pin/125045327144436605/" target="_blank">
                                      <img src="https://i.pinimg.com/originals/fb/4a/d5/fb4ad589b0cefbc990524e03e7e39eef.jpg" loading="lazy" />
                                      <div className="button-container">
                                          <span className="button">Download</span>
                                      </div>
                                  </a>
                              </div>
                          </div>
                          <div className="slided">
                              <div className="slide-content">
                                  <a href="https://www.pinterest.com/pin/413909022012674906/?mt=login" target="_blank">
                                      <img src="https://i.pinimg.com/originals/84/2e/46/842e46400117c1c04a19591d28fd8c18.png" loading="lazy" />
                                      <div className="button-container">
                                          <span className="button">Download</span>
                                      </div>
                                  </a>
                              </div>
                          </div>
                          <div className="slided">
                              <div className="slide-content">
                                  <a href="https://www.pinterest.com/pin/amelie-poulain-audrey-tautou--407857309977538667/" target="_blank">
                                      <img src="https://i.pinimg.com/236x/46/a6/3e/46a63ed5171192f262780b550ca1ca62--chez-elle-audrey-tautou.jpg" loading="lazy" />
                                      <div className="button-container">
                                          <span className="button">Download</span>
                                      </div>
                                  </a>
                              </div>
                          </div>
                          <div className="slided">
                              <div className="slide-content">
                                  <a href="https://www.pinterest.com/pin/703617141757346153/?mt=login" target="_blank">
                                      <img src="https://i.pinimg.com/236x/5f/b4/d0/5fb4d05431e64e17fa8d7ae3040657f3.jpg" loading="lazy" />
                                      <div className="button-container">
                                          <span className="button">Download</span>
                                      </div>
                                  </a>
                              </div>
                          </div>
                          <div className="slided">
                              <div className="slide-content">
                                  <a href="https://www.pinterest.com/pin/307933693249401885/" target="_blank">
                                      <img src="https://i.pinimg.com/originals/cc/c7/3d/ccc73d8fba861806354424eab2e620cc.jpg" loading="lazy" />
                                      <div className="button-container">
                                          <span className="button">Download</span>
                                      </div>
                                  </a>
                              </div>
                          </div>

                          <div className="slided">
                              <div className="slide-content">
                                  <a href="https://www.pinterest.com/pin/42502790224869685/" target="_blank">
                                      <img src="https://i.pinimg.com/originals/e2/16/b0/e216b0f9c1cda3f4b5cdf44fee26060d.jpg" loading="lazy" />
                                      <div className="button-container">
                                          <span className="button">Download</span>
                                      </div>
                                  </a>
                              </div>
                          </div>
                          <div className="slided">
                              <div className="slide-content">
                                  <a href="https://www.pinterest.com/pin/15833036179887216/" target="_blank">
                                      <img src="https://i.pinimg.com/originals/fd/d7/cc/fdd7ccccc4b74cea4f15ba1702ef8813.jpg" loading="lazy" />
                                      <div className="button-container">
                                          <span className="button">Download</span>
                                      </div>
                                  </a>
                              </div>
                          </div>
                          <div className="slided">
                              <div className="slide-content">
                                  <a href="https://www.pinterest.com/pin/125045327144436605/" target="_blank">
                                      <img src="https://i.pinimg.com/originals/fb/4a/d5/fb4ad589b0cefbc990524e03e7e39eef.jpg" loading="lazy" />
                                      <div className="button-container">
                                          <span className="button">Download</span>
                                      </div>
                                  </a>
                              </div>
                          </div>
                          <div className="slided">
                              <div className="slide-content">
                                  <a href="https://www.pinterest.com/pin/413909022012674906/?mt=login" target="_blank">
                                      <img src="https://i.pinimg.com/originals/84/2e/46/842e46400117c1c04a19591d28fd8c18.png" loading="lazy" />
                                      <div className="button-container">
                                          <span className="button">Download</span>
                                      </div>
                                  </a>
                              </div>
                          </div>
                          <div className="slided">
                              <div className="slide-content">
                                  <a href="https://www.pinterest.com/pin/amelie-poulain-audrey-tautou--407857309977538667/" target="_blank">
                                      <img src="https://i.pinimg.com/236x/46/a6/3e/46a63ed5171192f262780b550ca1ca62--chez-elle-audrey-tautou.jpg" loading="lazy" />
                                      <div className="button-container">
                                          <span className="button">Download</span>
                                      </div>
                                  </a>
                              </div>
                          </div>
                          <div className="slided">
                              <div className="slide-content">
                                  <a href="https://www.pinterest.com/pin/703617141757346153/?mt=login" target="_blank">
                                      <img src="https://i.pinimg.com/236x/5f/b4/d0/5fb4d05431e64e17fa8d7ae3040657f3.jpg" loading="lazy" />
                                      <div className="button-container">
                                          <span className="button">Download</span>
                                      </div>
                                  </a>
                              </div>
                          </div>
                          <div className="slided">
                              <div className="slide-content">
                                  <a href="https://www.pinterest.com/pin/307933693249401885/" target="_blank">
                                      <img src="https://i.pinimg.com/originals/cc/c7/3d/ccc73d8fba861806354424eab2e620cc.jpg" loading="lazy" />
                                      <div className="button-container">
                                          <span className="button">Download</span>
                                      </div>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div> */}



           


            



          </section>
          {/* </Slide>

          <Slide> */}
          <section className='page_7 panner '>

         <div className="showkimono">
          <Link to="/main_kimono"> <h1 className=' skimono' >기모노 보러가기</h1></Link>
         
          </div>
          {/* <h1 className="kimono">기모노 보러가기</h1> */}

          </section>
          {/* </Slide>

            <Slide> */}
          <footer className="two" >

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
          {/* </Slide>
         
      
         
          </FullPage> */}
          
                  </div>
            
     
  )
}
