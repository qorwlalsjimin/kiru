import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import "./mainscreen.scss"
import "./footer_black.css"
import "./marquee.js"
import { gsap } from 'gsap';
import $ from "jquery";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Draggable } from "gsap/Draggable";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { CCarousel, CCarouselItem, CImage } from '@coreui/bootstrap-react'
// import Carousel from 'react-bootstrap/Carousel';

// import SmoothScroll from "./SmoothScroll";
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import MomentumSlider from 'momentum-slider';


gsap.registerPlugin(ScrollToPlugin,CustomEase,ScrollTrigger,Draggable );

export const Mainscreen = () => {




//page_2





const cont = document.querySelector("#panels-container");
const panels = gsap.utils.toArray("#panels-container .panel");



//page_3
const objectRefs = useRef([]);

const parallax = (e) => {
  objectRefs.current.forEach((objectRef) => {
    const move = objectRef.current;
    if (!move) return;

    const moving_value = move.getAttribute('data-value');
    const rect = move.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = ((e.clientX - centerX) * moving_value) / 250;
    const y = ((e.clientY - centerY) * moving_value) / 250;

    const rotate_value = move.getAttribute('data-rotate');
    move.style.transform = `translateX(${x}px) translateY(${y}px) rotate(${rotate_value}deg)`;
  });
};

useEffect(() => {
  objectRefs.current = Array.from({ length: 3 }, (_, index) => objectRefs.current[index] || React.createRef());

  document.addEventListener('mousemove', parallax);

  return () => {
    document.removeEventListener('mousemove', parallax);
  };
}, []);








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

  
  


useEffect(() => {
  

  const revealElement = document.querySelector(".reveal");
  const divElement = document.querySelector("._01");

  gsap.set(revealElement, { transformOrigin: "top", y:"200px", x: "-100%", opacity: 0 });
  gsap.set(divElement, { opacity: 0, y: 50 });

  ScrollTrigger.create({
    trigger: revealElement,
    start: "top center",
    onEnter: () => {
      gsap.to(revealElement, { x: 0, opacity: 1, duration: 1, ease: "power3.out" });
      gsap.to(divElement, { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 1 });
    },
    onLeaveBack: () => {
      gsap.to(revealElement, { x: "-100%", opacity: 0, duration: 1, ease: "power3.out" });
      gsap.to(divElement, { opacity: 0, y: 50, duration: 1, ease: "power3.out" });
    },
  });
}, []);



useEffect(() => {

  const revealElement2 = document.querySelector(".reveal2");
  const divElement2 = document.querySelector("._02");

  gsap.set(revealElement2, { transformOrigin: "top", y: "810px", opacity: 0 });
  gsap.set(divElement2, { opacity: 0, y: 50 }); //숫자가 처음에 보이는지 마는지

  ScrollTrigger.create({
    trigger: revealElement2,
    start: "top center",
    onEnter: () => {
      gsap.to(revealElement2, { x: 0, opacity: 1, duration: 1, ease: "power3.out" });
      gsap.to(divElement2, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", delay: 1 });
    },
    onLeaveBack: () => {
      gsap.to(revealElement2, { x: "100%", opacity: 0, duration: 1, ease: "power3.out" });
      gsap.to(divElement2, { opacity: 0, y: 50, duration: 0.5, ease: "power3.out" });
    },
  });
}, []);


useEffect(() => {

  const revealElement3 = document.querySelector(".reveal3");
  const divElement3 = document.querySelector("._03");

  gsap.set(revealElement3, { transformOrigin: "top", y:"1300px", x: "50px", opacity: 0 });
  gsap.set(divElement3, { opacity: 0, y: 50 });

  ScrollTrigger.create({
    trigger: revealElement3,
    start: "top center",
    onEnter: () => {
      gsap.to(revealElement3, { x: 0, opacity: 1, duration: 1, ease: "power3.out" });
      gsap.to(divElement3, { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 1 });
    },
    onLeaveBack: () => {
      gsap.to(revealElement3, { x: "-100%", opacity: 0, duration: 1, ease: "power3.out" });
      gsap.to(divElement3, { opacity: 0, y: 50, duration: 1, ease: "power3.out" });
    },
  });
}, []);






gsap.fromTo(".openevent",1.4, {
  y: 50,
  opacity: 0,
  ease: "power3.out",
}, {
  scrollTrigger: {
    trigger: ".page_4",
    start: "top center",
    ease: "power3.out"
  },
  y: 0,
  opacity: 1,
  ease: "power3.out"
});


//slide

const images = [
  { src: "/images/slide1.png", description: "전통 한복에 비해 편하고\n활동하기 쉬운 기능적이면서도\n한복의 전통성을 느낄 수 있는 한복입니다.", description2: "개량한복" },
  { src: "https://i.ibb.co/N6rX4t5/sidle2.png", description: "한복은 우아한 곡선과 단아함, 기품과 화려함이\n조화롭게 어우러져 있는 고려시대부터\n전해 내려오는 대한민국의 고유한 의복입니다.", description2: "전통한복" },
  { src: "/images/slide3.png", description: "한국 전통 악세사리는 오랫동안 한국의\n문화와 역사를 반영하는 아름다운 소품으로\n사랑받아온 물건들입니다.", description2: "악세사리" },
  { src: "/images/slide4.png", description: "간결하고 우아하며 전통적인 분위기를 담고 있습니다.\n자연친화적인 재료를 사용하여서 발을\n편안하게 감싸줍니다.", description2: "신발" }
];

const [currentSlide, setCurrentSlide] = useState(0);

const handlePrevClick = () => {
  setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
};

const handleNextClick = () => {
  setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
};


//to top 
const [showButton, setShowButton] = useState(false);

useEffect(() => {
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  });
}, []);

// This function will scroll the window to the top 
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // for smoothly scrolling
  });
};


//scroll

  function goProductHandle() {

    window.scrollTo({ top: 0 });
  }


  return (
    <div>
   
            <section className="page_1 panner" id='panner'  >
           
            <div id="marqeeu" className='japankore'>
              <div id="box_non">
          <div class="box-area">
            <div class="logo-b">
            <a ><img  src="images/w3.png" alt="" />
              </a>
              <a ><img  src="images/image3211.png" alt="" />
              </a>
              <a ><img id='wafont' src="images/korea.png" alt="" />
              </a>
              
              <a ><img src="images/w4.png" alt="" />
              </a>
              <a ><img id='wafont' src="images/korea.png" alt="" />
              </a>
              <a ><img src="images/image3244.png" alt="" />
              </a>
              
              <a ><img  src="images/w3.png" alt="" />  </a>
              
              <a ><img src="images/w2.png" alt="" />
              </a>
            </div>


            <div class="logo-b">
            <a ><img  src="images/w3.png" alt="" />
              </a>
              <a ><img  src="images/image3211.png" alt="" />
              </a>
              <a ><img id='wafont' src="images/korea.png" alt="" />
              </a>
              <a ><img src="images/w4.png" alt="" />
              </a>
              <a ><img id='wafont' src="images/korea.png" alt="" />
              </a>
              <a ><img src="images/image3244.png" alt="" />
              </a>
              
              <a ><img  src="images/w3.png" alt="" />  </a>
              
              <a ><img src="images/w2.png" alt="" />
              </a>
            </div>
          
          </div>
        </div>

        <div id="box_non">
          <div class="box-area">
            <div class="logo-b2">

              <a ><img  id='wafont' src="images/ja.png" alt="" />
              </a>
              <a ><img src="images/wa4.png" alt="" />
              </a>

             
              <a ><img src="images/wa3.png" alt="" />
              </a>
             
              <a ><img src="images/image3099.png" alt="" />
              </a>
              <a ><img src="images/wa2.png" alt="" />
              </a>
              <a ><img src="images/wa3.png" alt="" />
              </a>
              <a ><img  id='wafont' src="images/ja.png" alt="" />
              </a>
              <a ><img src="images/image3222.png" alt="" />
              </a>
            </div>


            <div class="logo-b2">
            <a ><img  id='wafont' src="images/ja.png" alt="" />
              </a>
              <a ><img src="images/wa4.png" alt="" />
              </a>

             
              <a ><img src="images/wa3.png" alt="" />
              </a>
             
              <a ><img src="images/image3099.png" alt="" />
              </a>
              <a ><img src="images/wa2.png" alt="" />
              </a>
              <a ><img src="images/wa3.png" alt="" />
              </a>
              <a ><img  id='wafont' src="images/ja.png" alt="" />
              </a>
              <a ><img src="images/image3222.png" alt="" />
              </a>

            </div>
          
          </div>
        </div>

        </div>




            </section>
            
     
    
      <section className="page_2 panner " id='panner'>

        {/* to top scroll */}
        <div className="scroll__container">
          {showButton && (
            <button id="top" onClick={scrollToTop} className="back-to-top">
          Top
            </button>
          )}
        </div>



      <div className="carousell">
        <h1 className='choice'>Category</h1>

        <div className="carousel-container">
        <Carousel
          selectedItem={currentSlide}
          showThumbs={false}
          showStatus={false}
          showArrows={false} // 화살표 제거
          showIndicators={false} // 점(닷) 제거
          infiniteLoop
          autoPlay
          interval={3000}
          onChange={(index) => setCurrentSlide(index)}
        >
          {images.map((image, index) => (
            <div key={index}>
              <img src={image.src} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="carousel-ps">
  {images.map((image, index) => (
    <div
      key={index}
      className={`fade-in ${currentSlide === index ? "active" : ""}`}
      style={{ display: currentSlide === index ? "block" : "none", fontWeight:"bold" }}
    >
      <div className='categorytitle'>
        {image.description2.split('\n').map((line, i) => (
          <React.Fragment key={i}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>

      <p className='categoryps'>
        {image.description.split('\n').map((line, i) => (
          <React.Fragment key={i}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
      
    </div>
  ))}
</div>

      {/* 버튼 코드 */}
      <div className="carousel-controls">
        <img
          src="/images/Vector155.svg"
          className="left"
          alt="Previous"
          onClick={handlePrevClick}
        />
        <img
          src="/images/Vector156.svg"
          className="right"
          alt="Next"
          onClick={handleNextClick}
        />
      </div>


     
</div>




      

        <div className="bobar">
        <img className='Vector' src="images/Vector.png" alt="" />
          <img className='Line' src="images/Line.png" alt="" />
         
        </div>






          </section>

        
         
          {/* </Slide>
     
            <Slide> */}
            
             <section className="page_3 panner " id="map" >
            
          
             <article class = "reveal">
                <div ref={objectRefs.current[0]}  className="travel object" data-value={15} data-rotate={-18} >
                <div className="figure-content" id='f1'>
                    <h1  className="_01 num">#01</h1>
                  <h1 className="_01-title">TRAVEL</h1>
                  <h1 className="figure-ps">한복과 기모노를 입고<br/>  즐거운 여행을 떠나보세요!</h1>
                </div>
                </div>
               </article>
                            

               <article class = "reveal2">             
                <div ref={objectRefs.current[1]} className="untact object" data-value={20} data-rotate={15}  >
                  <div className="figure-content" id='f2'>
                      <h1 className="_02 num">#02</h1>
                      <h1 className="_02-title">UNTACT&nbsp;SURVICE</h1>
                      <h1 className="figure-ps">한국이나 일본 숙소에서 받고 <br /> 역에서 반납해주세요!</h1>
                  </div>
                </div>
                <div className="backtext btt">
                      <h1 className='_02-title'>UNTACT&nbsp;SURVICE</h1>
                </div>
                </article>
                            
           

                <article class = "reveal3" >
                <div ref={objectRefs.current[2]} className="collaboration object" data-value={12} data-rotate={-15}  >
                  <div className="figure-content" id='f3'>
                      <h1 className="_03 num" >#03</h1>
                      <h1 className="_03-title">COLLABORATION</h1>
                      <h1 className="figure-ps">당신의 취향에 맞는 <br/> 한복과 기모노를 선택해보세요</h1>
                  </div>
                </div>
                <div className="backtext2 btt">
                <h1 className="_03-title">COLLABORATION</h1>
             
                </div>
                </article>
                            

             </section>
            


            
          <section className="page_4 panner " style={{ backgroundColor: "#6D16DC" }}>

            

            <div className="wall" >
              <div className="openevent">#open event 컨셉 사진의 주인공이 되어 보세요!</div>



                <h1 className='studioshot' > studio<br/>shot</h1>
            

              
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
          한복과 기모노를 구매하면<br />
          와펜 굿즈를 증정해드립니다!
        </div>


       <div className="img">
        <img src="/images/Frame2.png" className='wa frame2' data-value={-3} alt="" />
        <img src="/images/Frame3.png" className='wa frame3' data-value={6} alt="" />
        <img src="/images/Frame4.png" className='wa frame4' data-value={4} alt="" />
        <img src="/images/Frame8.png" className='wa frame8' data-value={5} alt="" />
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
              
              <div id="marqeeu">
              <div id="box">
          <div class="box-area">
            <div class="logo-top">
              <a href=""><img src="images/brand1.png" alt="" />
              </a>
              <a href=""><img src="images/brand2.png" alt="" />
              </a>
              <a href=""><img src="images/brand3.png" alt="" />
              </a>
              <a href=""><img src="images/brand4.png" alt="" />
              </a>
              <a href=""><img src="images/brand5.png" alt="" />
              </a>
              <a href=""><img src="images/brand6.png" alt="" />
              </a>
              <a href=""><img src="images/brand7.png" alt="" />
              </a>
              <a href=""><img src="images/brand8.png" alt="" />
              </a>
              <a href=""><img src="images/brand9.png" alt="" />
              </a>
              <a href=""><img src="images/brand10.png" alt="" />
              </a>

            </div>


            <div class="logo-top">
              <a href=""><img src="images/brand1.png" alt="" />
              </a>
              <a href=""><img src="images/brand2.png" alt="" />
              </a>
              <a href=""><img src="images/brand3.png" alt="" />
              </a>
              <a href=""><img src="images/brand4.png" alt="" />
              </a>
              <a href=""><img src="images/brand5.png" alt="" />
              </a>
              <a href=""><img src="images/brand6.png" alt="" />
              </a>
              <a href=""><img src="images/brand7.png" alt="" />
              </a>
              <a href=""><img src="images/brand8.png" alt="" />
              </a>
              <a href=""><img src="images/brand9.png" alt="" />
              </a>
              <a href=""><img src="images/brand10.png" alt="" />
              </a>

            </div>
          
          </div>
        </div>

        <div id="box">
          <div class="box-area">
            <div class="logo-top2">
              <a href=""><img src="images/brand11.png" alt="" />
              </a>
              <a href=""><img src="images/brand12.png" alt="" />
              </a>
              <a href=""><img src="images/brand133.png" alt="" />
              </a>
              <a href=""><img src="images/001.png" alt="" />
              </a>
              <a href=""><img src="images/brand15.png" alt="" />
              </a>
              <a href=""><img src="images/002.png" alt="" />
              </a>
              <a href=""><img src="images/brand17.png" alt="" />
              </a>
              <a href=""><img src="images/brand18.png" alt="" />
              </a>
              <a href=""><img src="images/003.png" alt="" />
              </a>
              <a href=""><img src="images/brand20.png" alt="" />
              </a>

            </div>


            <div class="logo-top2">
              <a href=""><img src="images/brand11.png" alt="" />
              </a>
              <a href=""><img src="images/brand12.png" alt="" />
              </a>
              <a href=""><img src="images/brand133.png" alt="" />
              </a>
              <a href=""><img src="images/001.png" alt="" />
              </a>
              <a href=""><img src="images/brand15.png" alt="" />
              </a>
              <a href=""><img src="images/002.png" alt="" />
              </a>
              <a href=""><img src="images/brand17.png" alt="" />
              </a>
              <a href=""><img src="images/brand18.png" alt="" />
              </a>
              <a href=""><img src="images/003.png" alt="" />
              </a>
              <a href=""><img src="images/brand20.png" alt="" />
              </a>

            </div>
          
          </div>
        </div>

        </div>



        {/* <div id="box">
          <div class="box-area">
            <div class="logo-top2">
              <a href=""><img src="images/brand1.png" alt="" />
              </a>
              <a href=""><img src="images/brand2.png" alt="" />
              </a>
              <a href=""><img src="images/brand3.png" alt="" />
              </a>
              <a href=""><img src="images/brand4.png" alt="" />
              </a>
              <a href=""><img src="images/brand5.png" alt="" />
              </a>
              <a href=""><img src="images/brand6.png" alt="" />
              </a>
              <a href=""><img src="images/brand7.png" alt="" />
              </a>
              <a href=""><img src="images/brand8.png" alt="" />
              </a>
              <a href=""><img src="images/brand9.png" alt="" />
              </a>
              <a href=""><img src="images/brand10.png" alt="" />
              </a>

            </div>


            <div class="logo-top2">
              <a href=""><img src="images/brand1.png" alt="" />
              </a>
              <a href=""><img src="images/brand2.png" alt="" />
              </a>
              <a href=""><img src="images/brand3.png" alt="" />
              </a>
              <a href=""><img src="images/brand4.png" alt="" />
              </a>
              <a href=""><img src="images/brand5.png" alt="" />
              </a>
              <a href=""><img src="images/brand6.png" alt="" />
              </a>
              <a href=""><img src="images/brand7.png" alt="" />
              </a>
              <a href=""><img src="images/brand8.png" alt="" />
              </a>
              <a href=""><img src="images/brand9.png" alt="" />
              </a>
              <a href=""><img src="images/brand10.png" alt="" />
              </a>

            </div>
          
          </div>
        </div>
            */}


            



          </section>
          {/* </Slide>

          <Slide> */}
          <section className='page_7 panner '>

         <div className="showkimono">


        

             



              <img src="/images/Frame5.png" className='wa4'data-value={-6} alt="" />
              <img src="/images/Frame6.png"className='wa5' data-value={8} alt="" />
              <img src="/images/Frame7.png" className='wa6'data-value={-4} alt="" />



              </div>

              
          <Link to="/category/120/all">
        
          <h1 className=' skimono' onClick={()=>{window.scrollTo({ top: 0 });}} >한복 보러가기</h1>

          <div className="image-container">
          <img src="/images/Frame2.png" className='wa1' data-value={-3} alt="" />
          <img src="/images/Frame3.png"className='wa2' data-value={6} alt="" />
          <img src="/images/Frame4.png" className='wa3'data-value={4} alt="" />
          <img src="/images/Frame8.png"className='wa7' data-value={5} alt="" />
          <img src="/images/Frame9.png"className='wa8' data-value={-9} alt="" />
          <img src="/images/Frame10.png"className='wa9 ' data-value={-5} alt="" />
          <img src="/images/Frame10.png"className='wa10 ' data-value={-5} alt="" />
          <img src="/images/Frame2.png" className='wa11' data-value={-3} alt="" />
          <img src="/images/Frame3.png"className='wa12' data-value={6} alt="" />
          <img src="/images/Frame4.png" className='wa13'data-value={4} alt="" />
          <img src="/images/Frame5.png" className='wa14'data-value={-6} alt="" />
          <img src="/images/Frame6.png"className='wa15' data-value={8} alt="" />

              <img src="/images/Frame7.png" className='wa16'data-value={-4} alt="" />
              <img src="/images/Frame8.png"className='wa17' data-value={5} alt="" />
              <img src="/images/Frame9.png"className='wa18' data-value={-9} alt="" />
              <img src="/images/Frame10.png"className='wa19 ' data-value={-5} alt="" />


          </div>
          
          </Link>
         
      
      
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
          {/* </SmoothScroll> */}
                  </div>
            
     
  )
}
