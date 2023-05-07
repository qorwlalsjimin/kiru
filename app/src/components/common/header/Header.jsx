import React from 'react'
import "./header.css"
import "./gsap.js"
import { Link } from "react-router-dom"
import { nav } from  "../../../data/Data"


const Header = () => {
  return (
    <>
      <header>
  
        <div className="container">
    
          <div className='global'>
              <i class="ri-global-line"></i> 한국어
          </div>

          <div className="logo">
              <img src="./images/logo.png" alt="" />
          </div>
          
            <div className="toggle">
       
              <i class="ri-search-line"></i>
              <i class="ri-star-line"></i>
              <i class="ri-shopping-cart-2-line"></i>
                <div className="icon-container">
                  <i class="ri-user-line"></i>
                    <p class="icon-text">로그인·회원가입</p>
                </div>
            </div>
        </div>
        <div className="nav">
      <ul className="flex">
                    {nav.map((list, index) => (
                        <li key={index}>
                            <Link to={list.path}>{list.text}</Link>
                        </li>
                    ))}
                </ul>
      </div>


      </header>
      
 

    
    </>
  )
}

export default Header
