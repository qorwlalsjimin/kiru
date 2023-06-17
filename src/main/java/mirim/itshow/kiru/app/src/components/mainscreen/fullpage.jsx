import React from 'react'

import { Link } from 'react-router-dom';
import "./mainscreen.css"
import "./footer_black.css"
import "./marquee.js"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CustomEase from "gsap/CustomEase";
import { Parallax } from "react-parallax";
import { Element, scroller } from 'react-scroll'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// import { FullPage, Slide } from 'react-full-page';
import Header from "../header/topNavigationBar/topNavigationBar"

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(CustomEase);
gsap.registerPlugin(ScrollTrigger);



const fullpage = () => {
  return (
    <div>
          <section class="panel red">
              <p>This is page 1</p>
          </section>
          <section class="panel green">
              <p>This is page 2</p>
          </section>
          <section class="panel blue">
              <p>This is page 3</p>
          </section>
          <section class="panel orange">
              <p>This is page 4</p>
          </section>




    </div>
  )
}

export default fullpage