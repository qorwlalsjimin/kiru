import "./header.css"
import "./search_modal.css"

//svg
import { ReactComponent as SearchSvg } from "../../svgfiles/search.svg";
import { ReactComponent as SearchArea } from "../../svgfiles/search_area.svg";
import { ReactComponent as StarSvg } from "../../svgfiles/star.svg";
import { ReactComponent as CartSvg } from "../../svgfiles/cart.svg";
import { ReactComponent as MemberSvg } from "../../svgfiles/member.svg";

import { Link, NavLink, UseNavigate, Routes, Router, Route, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import RecentSearchList from "./RecentSearchList";
import { Grid } from "semantic-ui-react";
import { Mainscreen } from "../mainscreen/Mainscreen";
import { ProductList } from "../product_list/ProductList";
import { getCookie, removeCookie } from "../../util/cookie";
import SearchResult from "../search_result_list/SearchResult";


const Header = ({ handleNavClick, setShowMainscreen, setProducts, products }) => {
  let [isBrand, setIsBrand] = useState(true);

  /* 검색어 */
  const [keyword, setKeyword] = useState("");

  /* 최근 검색 목록 */
  let [recentKeywords, setRecentKeywords] = useState(["전통한복", "원피스", "거들썬", "수궁화", "기모노"]);

  /* 모달창 유무 */
  const [show, setShow] = useState(0);

  /* 검색 아이콘 클릭했을때 */
  const open = (e) => {
    setShow(1);
  };

  const ref = useRef();


  /* 검색 모달창 */
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

  /* input 받기 */
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  /* 검색 기능 */
  function searchHandle(e) {
    console.log("추가", recentKeywords);
    navigate(`/result/${keyword}`)
    // navigate(`/result`)
  }

  /* nav 클릭 */
  function navHandler() {
    setIsBrand(true); // 브랜드 페이지 아님을 명시
  }


  /* 로그아웃 */
  const navigate = useNavigate();
  function logoutHandler(accessToken) {
    console.log(accessToken);
    let isLogin = !!accessToken;
    if (isLogin) {
      let isLogout = window.confirm('로그아웃하시겠습니까?');
      if (isLogout) {
        removeCookie('accessToken');
        window.location.reload();
      }
    } else {
      navigate("/Login_form");
    }
  }

  /* 로그아웃 */
  function starHandler(accessToken) {
    console.log(accessToken);
    let isLogin = !!accessToken;
    if (isLogin) {
      navigate("/heart");
    } else {
      window.alert('로그인 후 사용해주세요.');
      navigate("/Login_form");
    }
  }

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
            {show ? 
              (
                <div className="modal" show={show} ref={ref}>
                  <div className="modal-desk">
                    {/* search_area */}
                    <div className="search_area">
                      <Grid>
                        <Grid.Column width={12}>
                          <div>
                            <SearchArea className="search_input"/>
                            <input onChange={handleChange} name="keyword"></input>
                          </div>
                        </Grid.Column>
                        <Grid.Column width={4} style={{padding: "20px 13px 14px 18px"}}>
                          <span className="submit_text" onClick={searchHandle}>검색</span>
                        </Grid.Column>
                      </Grid>
                    </div>
                    {/* --search_area */}
        
                    {/* result_list */}
                    {/* {console.log(recentKeywords)} */}
                    <div className="result_area">
                      <ul className="search_list">
                        {Object.values(recentKeywords).map((keyword, index) => (
                          <RecentSearchList key={index} keyword={keyword} />
                        ))}
                      </ul>
                    </div>
                    {/* --result_list */}
                  </div>
                </div>
              ) 
            : <></>}
            <i><StarSvg onClick={starHandler.bind(this, getCookie('accessToken'))} /></i> {/* 즐겨찾기 */}
            <i><Link to="/cart"><CartSvg width={"19px"} /></Link></i> {/* 장바구니 */}
            <i><MemberSvg width={"20px"} onClick={logoutHandler.bind(this, getCookie('accessToken'))} /></i> {/* 로그인/회원가입 */}
          </div>
        </div>

        <div className="nav">
          <ul className="flex">
            <NavLink to="/category/120/all" className="category_name"><li onClick={navHandler}>개량</li></NavLink>
            <NavLink to="/category/110/all" className="category_name"><li onClick={navHandler}>전통</li></NavLink>
            <NavLink to="/category/130/all" className="category_name"><li onClick={navHandler}>신발</li></NavLink>
            <NavLink to="/category/140/all" className="category_name"><li onClick={navHandler}>악세사리</li></NavLink>
          </ul>
        </div>
        <Routes>
          {/* 메인 */}
          <Route path="/" element={<Mainscreen />} />

          {/* 상품 목록 */}
          <Route path="/category/:cid/:cname" element={<ProductList products={products} setProducts={setProducts} isBrand={isBrand} setIsBrand={setIsBrand} />} />
          
          {/* 검색 결과 */}
          <Route path='/result/:keyword' element={<SearchResult/>} />
        </Routes>

      </header>
    </>
  )
}

export default Header


