import $ from "jquery";
import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

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