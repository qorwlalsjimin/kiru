import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import "./mainscreen.scss"
import "./footer_black.css"
import "./marquee.js"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CustomEase from "gsap/CustomEase";
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import { Parallax } from "react-parallax";

// import SmoothScroll from "./SmoothScroll";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MomentumSlider from 'momentum-slider';


gsap.registerPlugin(ScrollToPlugin,CustomEase,ScrollTrigger );




export const Mainscreen = () => {




  //fullpage
  // gsap.registerPlugin(ScrollTrigger);
  // gsap.registerPlugin(ScrollToPlugin);
  
  // let sections = gsap.utils.toArray("#panner");
  
  // function goToSection(i) {
  //   gsap.to(window, {
  //     scrollTo: { y: i * window.innerHeight, autoKill: false, ease: "Power3.easeInOut" },
  //     duration: 0.85
  //   });
  // }
  
  
  // sections.forEach((eachPanel, i) => {
    
  
  //   ScrollTrigger.create({
  //     trigger: eachPanel,
  //     onEnter: () => goToSection(i)
  //   });
  
  //   ScrollTrigger.create({
  //     trigger: eachPanel,
  //     start: "bottom bottom",
  //     onEnterBack: () => goToSection(i)
  //   });
  // });


  //scrollsmooth
 



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
// const slidersContainerRef = useRef(null);
// const paginationItemsRef = useRef([]);

// useEffect(() => {
//   // Initializing the numbers slider
//   const msNumbers = new MomentumSlider({
//     el: slidersContainerRef.current,
//     cssClass: 'ms--numbers',
//     range: [1, 4],
//     rangeContent: function (i) {
//       return '#0' + i;
//     },
//     style: {
//       transform: [{ scale: [0.4, 1] }],
//       opacity: [0, 1]
//     },
//     interactive: false
//   });

//   // Initializing the titles slider
//   const titles = [
//     '개량한복',
//     '전통한복',
//     '악세서리',
//     '신발'
//   ];
//   const msTitles = new MomentumSlider({
//     el: slidersContainerRef.current,
//     cssClass: 'ms--titles',
//     range: [0, 3],
//     rangeContent: function (i) {
//       return '<h3>' + titles[i] + '</h3>';
//     },
//     vertical: true,
//     reverse: true,
//     style: {
//       opacity: [0, 1]
//     },
//     interactive: false
//   });

//   // Initializing the links slider
//   const msLinks = new MomentumSlider({
//     el: slidersContainerRef.current,
//     cssClass: 'ms--links',
//     range: [0, 3],
//     rangeContent: function () {
//       return '<a class="ms-slide__link"> </a>';
//     },
//     vertical: true,
//     interactive: false
//   });

//   // Get pagination items
//   const paginationItems = Array.from(paginationItemsRef.current);

//   // Initializing the images slider
//   const msImages = new MomentumSlider({
//     // Element to append the slider
//     el: slidersContainerRef.current,
//     // CSS class to reference the slider
//     cssClass: 'ms--images',
//     // Generate the 4 slides required
//     range: [0, 3],
//     rangeContent: function () {
//       return '<div class="ms-slide__image-container"><div class="ms-slide__image"></div></div>';
//     },
//     // Syncronize the other sliders
//     sync: [msNumbers, msTitles, msLinks],
//     // Styles to interpolate as we move the slider
//     style: {
//       '.ms-slide__image': {
//         transform: [{ scale: [1.5, 1] }]
//       }
//     },
//     // Update pagination if slider change
//     change: function (newIndex, oldIndex) {
//       if (typeof oldIndex !== 'undefined') {
//         paginationItems[oldIndex].classList.remove('pagination__item--active');
//       }
//       paginationItems[newIndex].classList.add('pagination__item--active');
//     }
//   });

//   // Select corresponding slider item when a pagination button is clicked
//   const handlePaginationClick = (e) => {
//     if (e.target.matches('.pagination__button')) {
//       const index = paginationItems.indexOf(e.target.parentNode);
//       msImages.select(index);
//     }
//   };

//   paginationItems.forEach((item) => {
//     item.addEventListener('click', handlePaginationClick);
//   });

//   return () => {
//     paginationItems.forEach((item) => {
//       item.removeEventListener('click', handlePaginationClick);
//     });
//   };
// }, []);

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





//let reveal = document.querySelectorAll(".object") 

// reveal.forEach( (el) => {
//   let headings = el.querySelectorAll("h1, .num")
//   let btn = el.querySelector(".btn")
  
//   let tl = gsap.timeline ()
//   .from(headings, {x:-180, stagger:0.05, opacity:0, duration:1, ease:"power3.out"})
//   .from(btn, {x:-80, opacity:0, duration:1, ease:"power3.out"},'-=0.6')
  
//   ScrollTrigger.create ({
// 		  trigger: el,
// 			start: "center 100%", 
//       end:"top 50%",
// 			markers: true,
// 			toggleActions: "play none none reverse ",
//       animation:tl
//       })
// })

  

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

  
  
// const carousel = document.querySelector(".carousel");

// const leftArrow = document.querySelector(".left-arrow");
// const rightArrow = document.querySelector(".right-arrow");

// let currentIndex = 0;
// let prevIndex;
// const images = document.querySelectorAll(".carousel-image");

// const totalImages = Object.keys(images).length;


// const imageWidth = 520;

// leftArrow.addEventListener("click", () => {
//   prevIndex = currentIndex;
//   currentIndex = (currentIndex - 1 + totalImages) % totalImages;
//   carousel.style.transform = `translateX(-${imageWidth}px)`;
//   carousel.insertBefore(images[currentIndex], carousel.firstChild);

//   setTimeout(() => {
//     carousel.style.transform = "";
//     carousel.classList.add("sliding-transition");
    
//   }, 10);

//   setTimeout(() => {
//     carousel.classList.remove("sliding-transition");
//   }, 490);
// });

// rightArrow.addEventListener("click", () => {
//   carousel.classList.add("sliding-transition");

//   prevIndex = currentIndex;
//   currentIndex = (currentIndex + 1) % totalImages;

//   carousel.style.transform = `translateX(-${imageWidth}px)`;
 

//   setTimeout(() => {
//     carousel.appendChild(images[prevIndex]);
//     carousel.classList.remove("sliding-transition");
//     carousel.style.transform = "";
//   }, 500);
// });


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

  gsap.set(revealElement2, { transformOrigin: "top", y: "850px", opacity: 0 });
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





const revealRef3 = useRef(null);
const divRef3 = useRef(null);

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  const revealElement = revealRef3.current;
  const divElement = divRef3.current;

  gsap.set(revealElement, { transformOrigin: "top", y:"1500px", scale: 0, opacity: 0 });
  gsap.set(divElement, { opacity: 0 });

  ScrollTrigger.create({
    trigger: revealElement,
    start: "top center",
    onEnter: () => {
      gsap.to(revealElement, { scale: 1, opacity: 1, duration: 1, ease: "power3.out" });
      gsap.to(divElement, { opacity: 1, duration: 1, ease: "power3.out", delay: 1 });
    },
    onLeaveBack: () => {
      gsap.to(revealElement, { scale: 0, opacity: 0, duration: 1, ease: "power3.out" });
      gsap.to(divElement, { opacity: 0, duration: 1, ease: "power3.out" });
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



//  gsap.from('.studioshot h1', 1.4, {
//   delay: 1,
// opacity:0,
//   y: 250,
//   skewY: 20,
//   stagger: .8,
  
// }

//line move


//page_5




//scroll



  return (
    <div>
      {/* <SmoothScroll> */}
  
         
       {/* <FullPage  ref={fullPageRef} >
      
        <Slide> */}
          
    
         
            <section className="page_1 panner" id='panner'  >
              <img src="/images/Subtract.png" className='people1' alt="" />
            </section>
            
        {/* </Slide>


    <Slide> */}
    
      <section className="page_2 panner " id='panner'>
      <button class="scrollToTopBtn">☝️</button>


        <h1 className='choice'>Category</h1>



        <div className="waalll"></div>

        {/* <article className='caru'>
          <div className="carousel-container">
            <div className="carousel">
              <img src="images/mask.png" alt="Image 1" className='carousel-image' />
              <img src="images/mask1.png" alt="Image 2" className='carousel-image' />
              <img src="images/mask3.png" alt="Image 3" className='carousel-image' />
              <img src="images/mask4.png" alt="Image 4" className='carousel-image' />
            </div>
            <button className="arrow-button left-arrow"><img src="images/left-129.png" alt="" /></button>
            <button className="arrow-button right-arrow"><img src="images/right-128.png" alt="" /></button>
          </div>
        </article> */}


      
            
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
                <div ref={objectRefs.current[1]} className="untact object" data-value={10} data-rotate={15}  >
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
                            
           

                <article class = "reveal3" ref={revealRef3}>
                <div ref={objectRefs.current[2]} className="collaboration object" data-value={12} data-rotate={-15}  >
                  <div className="figure-content" id='f3'>
                      <h1 className="_03 num" ref={divRef3}>#03</h1>
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

              <div className="studioshot" id='quote' >
                <h1>studio<br/>shot</h1>
            
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
          <Link to="/main_kimono"> <h1 className=' skimono' >기모노 보러가기</h1></Link>
         
          </div>
      
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
