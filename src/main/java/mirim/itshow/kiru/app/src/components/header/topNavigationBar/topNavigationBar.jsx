// import styles from "./topNavigationBar.module.css";
import { Link } from "react-router-dom";
import {nav} from "../../../data/Data"
import "./header.css"
import "./script"
import { useEffect, useState } from "react";
import axios from 'axios';


const Header = ({setProducts, handleNavClick}) => {


  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  const handleClick = (nav) => {
    handleNavClick(nav, fetchData);
  };


  // const handleNavClick = (nav) => {
  //   let url = '';

  //   if (nav === '전통한복') {
  //     url = '/api/item/item_list/110';
  //   } else if (nav === '개량한복') {
  //     url = '/api/item/item_list/120';
  //   } else if (nav === '신발') {
  //     url = '/api/item/item_list/130';
  //   } else if (nav === '악세사리') {
  //     url = '/api/item/item_list/140';
  //   } else if (nav === '세트') {
  //     url = '/api/item/item_list/150';
  //   }

  //   setSelectedNav(nav);
  //   fetchData(url);
  // };

  return (
    <>
      <header>

        <div className="container">

          <div className='global'>
            <i className="ri-global-line"></i> 한국어
          </div>

          <div className="logo">
          <Link to="/main">      <img src="/images/logo.png" alt="" /></Link>
          </div>

          <div className="toggle">

            <i className="ri-search-line"></i>
            <i className="ri-star-line"></i>
            <Link to="/cart">   <i className="ri-shopping-cart-2-line"></i></Link>
            
              <Link to="/login_form"> <i className="ri-user-line"></i></Link>
              {/* <p className="icon-text">로그인·회원가입</p> */}
            {/* </div> */}
          </div>
        </div>

        {/* <div className="nav"> */}
          {/* <ul className="flex"> */}
            {/* {nav.map((list, index) => (
              <li key={index}>
                <Link to={list.path}>{list.text}</Link>
              </li> */}
            {/* ))} */}
          {/* </ul> */}
        {/* </div> */}




        

        <div className="nav">
        <ul className="flex">
          <li>
            <button onClick={() => handleClick('전통한복')}>전통</button>
          </li>
          <li>
            <button onClick={() => handleClick('개량한복')}>개량</button>
          </li>
          <li>
            <button onClick={() => handleClick('신발')}>신발</button>
          </li>
          <li>
            <button onClick={() => handleClick('악세사리')}>악세사리</button>
          </li>
          <li>
            <button onClick={() => handleClick('세트')}>세트</button>
          </li>
        </ul>
        </div>








      </header>




    </>
  )
}

export default Header


