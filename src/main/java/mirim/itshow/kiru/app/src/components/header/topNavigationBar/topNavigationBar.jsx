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

//svg
import {ReactComponent as SearchSvg} from "../../../svgfiles/search.svg";
import {ReactComponent as StarSvg} from "../../../svgfiles/star.svg";
import {ReactComponent as CartSvg} from "../../../svgfiles/cart.svg";
import {ReactComponent as MemberSvg} from "../../../svgfiles/member.svg";


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

          {/* 우측 아이콘들 */}
          <div className="toggle">
            <i><SearchSvg width={"20px"}/></i> {/* 검색 */}
            <i><Link to="/heart"><StarSvg/></Link></i> {/* 즐겨찾기 */}
            <i><Link to="/cart"><CartSvg width={"19px"}/></Link></i> {/* 장바구니 */}
            <i><Link to="/login_form"><MemberSvg width={"20px"}/></Link></i> {/* 로그인/회원가입 */}
          </div>
        </div>

        <div className="nav">
        <ul className="flex">
          <li><Link to="/category/120"><button>개량</button></Link></li>
          <li><Link to="/category/110"><button >전통</button></Link></li>
          <li><Link to="/category/130"><button >신발</button></Link></li>
          <li><Link to="/category/140"><button >악세사리</button></Link></li>
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


