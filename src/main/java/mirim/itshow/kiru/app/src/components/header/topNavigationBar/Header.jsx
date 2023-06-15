import "./header.css"
import "./search_modal.css"
import { Link, Navigate, Routes, Router, Route, useNavigate } from "react-router-dom";
import { ProductList } from "../../product_list/ProductList"
import { Mainscreen } from "../../mainscreen/Mainscreen";
import { useEffect, useRef, useState } from "react";
import SearchModal from "./SearchModal";
import { getCookie, removeCookie } from "../../../util/cookie";
import RecentSearchList from "./RecentSearchList";
import { Grid } from "semantic-ui-react";


//svg
import { ReactComponent as SearchSvg } from "../../../svgfiles/search.svg";
import { ReactComponent as StarSvg } from "../../../svgfiles/star.svg";
import { ReactComponent as CartSvg } from "../../../svgfiles/cart.svg";
import { ReactComponent as MemberSvg } from "../../../svgfiles/member.svg";


const Header = ({ handleNavClick, setShowMainscreen, setProducts, products }) => {
  let [isBrand, setIsBrand] = useState(true);

  /* 검색어 */
  const [keyword, setKeyword] = useState("");

  /* 최근 검색 목록 */
  let [recentKeywords, setRecentKeywords] = useState(["전통한복"]);

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
    let keyword = e.target.value;
    console.log(keyword);
  };

  /* 검색 기능 */
  function searchHandle(e) {
    console.log("흐응?");
    console.log(recentKeywords);
    console.log(e.target.value);
    setRecentKeywords(...recentKeywords, keyword);
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
                    <form className="search_area" onSubmit={searchHandle}>
                      <Grid>
                        <Grid.Column width={12}>
                          <div>
                            <img
                              className="search_input"
                              src="images/search_input.png"
                            />
                            <input onChange={handleChange} name="keyword"></input>
                          </div>
                        </Grid.Column>
                        <Grid.Column width={4}>
                          <span className="submit_text">검색</span>
                        </Grid.Column>
                      </Grid>
                    </form>
                    {/* --search_area */}
        
                    {/* result_list */}
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
            <li onClick={navHandler}><Link to="/category/120/all"><button>개량</button></Link></li>
            <li onClick={navHandler}><Link to="/category/110/all"><button >전통</button></Link></li>
            <li onClick={navHandler}><Link to="/category/130/all"><button >신발</button></Link></li>
            <li onClick={navHandler}><Link to="/category/140/all"><button >악세사리</button></Link></li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Mainscreen />} />
          <Route path="/category/:cid/:cname" element={<ProductList products={products} setProducts={setProducts} isBrand={isBrand} setIsBrand={setIsBrand} />} />
        </Routes>

      </header>
    </>
  )
}

export default Header


