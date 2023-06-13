import "./header.css"
import "./script"
import { Link, Navigate, Routes, Router, Route } from "react-router-dom";
import { Main } from "../../main/main"
import { Mainscreen } from "../../mainscreen/Mainscreen";


//svg
import { ReactComponent as SearchSvg } from "../../../svgfiles/search.svg";
import { ReactComponent as StarSvg } from "../../../svgfiles/star.svg";
import { ReactComponent as CartSvg } from "../../../svgfiles/cart.svg";
import { ReactComponent as MemberSvg } from "../../../svgfiles/member.svg";
import { useEffect, useRef, useState } from "react";
import SearchModal from "./SearchModal";


const Header = ({ handleNavClick, setShowMainscreen, setProducts, products }) => {
  let [isBrand, setIsBrand] = useState(true);
  function navHandler() {
    setIsBrand(true);
  }

  // 검색 Modal
  const [show, setShow] = useState(0);

  const open = (e) => {
    setShow(1);
  };

  const ref = useRef();

  useEffect(() => {
    const modlalClose = (e) => {
      if (show && ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", modlalClose);
    return () => {
      document.removeEventListener("mousedown", modlalClose);
    };
  }, [show]);


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
            <i><SearchSvg width={"20px"} onClick={open} /></i> {/* 검색 */}
            {/* 검색 Modal */}
            {show ? (
              <div className="search_modal" show={show} ref={ref}>
                <div className="modla-desk">
                  <div className="search_area">
                    <form>
                      <input></input>
                      <button type="submit">🔍</button>
                    </form>
                  </div>
                  {/* --search_area */}
                  <div className="result_area">
                    <ul>
                      <li>
                        <span>🔍</span>
                        <span>검색어</span>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;X</span>
                      </li>
                      <li>
                        <span>🔍</span>
                        <span>검색어</span>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;X</span>
                      </li>
                      <li>
                        <span>🔍</span>
                        <span>검색어</span>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;X</span>
                      </li>
                    </ul>
                  </div>{" "}
                  {/* --result_area */}
                </div>
              </div>
            ) : (
              <></>
            )}
            <i><Link to="/heart"><StarSvg /></Link></i> {/* 즐겨찾기 */}
            <i><Link to="/cart"><CartSvg width={"19px"} /></Link></i> {/* 장바구니 */}
            <i><Link to="/login_form"><MemberSvg width={"20px"} /></Link></i> {/* 로그인/회원가입 */}
          </div>
        </div>

        <div className="nav">
          <ul className="flex">
            <li onClick={navHandler}><Link to="/category/120/all"><button>개량</button></Link></li>
            <li onClick={navHandler}><Link to="/category/110/all"><button >전통</button></Link></li>
            <li onClick={navHandler}><Link to="/category/130/all"><button >신발</button></Link></li>
            <li onClick={navHandler}><Link to="/category/140/all"><button >악세사리</button></Link></li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Mainscreen />} />
          <Route path="/category/:cid/:cname" element={<Main products={products} setProducts={setProducts} isBrand={isBrand} setIsBrand={setIsBrand} />} />
        </Routes>

      </header>
    </>
  )
}

export default Header


