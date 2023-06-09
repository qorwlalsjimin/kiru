// import styles from "./topNavigationBar.module.css";
// import { Link, Navigate } from "react-router-dom";
import {nav} from "../../../data/Data"
import "./header.css"
import "./script"
import { Link, Navigate, Routes, Router, Route } from "react-router-dom";
import axios from 'axios';
// import Main from "../main/main";
import {Main} from "../../main/main"
// import { Redirect} from "react-router-dom";
import { Product } from "../../products/product";
import { Mainscreen } from "../../mainscreen/Mainscreen";


const Header = ({ handleNavClick, setShowMainscreen, setProducts, products}) => {
 
  return (
    <>
      <header>

        <div className="container">

          <div className='global'>
            <i className="ri-global-line"></i> 한국어
          </div>
         
          <div className="logo">
            <Link to="/Mainscreen">
              <img src="/images/logo.png" alt="" />
            </Link>
          </div>



          <div className="toggle">

            <i className="ri-search-line"></i>
            <i className="ri-star-line"></i>
            <Link to="/cart"><i className="ri-shopping-cart-2-line" style={{color:"black"}}></i></Link>
            <Link to="/login_form"> <i className="ri-user-line" style={{color:"black"}}></i></Link>

          </div>
        </div>


        
      
        <div className="nav">
        <ul className="flex">
           <li>
          <Link to="/category/120"><button>개량</button></Link>
          </li>
          <li>
          <Link to="/category/110"><button >전통</button></Link>
          </li>
         
          <li>
          <Link to="/category/130"><button >신발</button></Link>
          </li>
          <li>
          <Link to="/category/140"><button >악세사리</button></Link>
          </li>
       
        </ul>
        </div>
        <Routes>
        <Route path="/" element={<Mainscreen />} />
        <Route path="/category/:cid" element={<Main products={products} setProducts={setProducts}/>} />
      </Routes>
    
  

      </header>




    </>
  )
}

export default Header


