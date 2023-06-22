import "./header.css"
import "./search_modal.css"

//svg
import { ReactComponent as SearchArea } from "../../svgfiles/search_area.svg";
import { ReactComponent as Search } from "../../svgfiles/search.svg";
import { ReactComponent as StarSvg } from "../../svgfiles/star.svg";
import { ReactComponent as CartSvg } from "../../svgfiles/cart.svg";
import { ReactComponent as MemberSvg } from "../../svgfiles/member.svg";
import { ReactComponent as SearchWhite } from "../../svgfiles/search_white.svg";
import { ReactComponent as StarSvgWhite } from "../../svgfiles/star_white.svg";
import { ReactComponent as CartSvgWhite } from "../../svgfiles/cart_white.svg";
import { ReactComponent as MemberSvgWhite } from "../../svgfiles/member_white.svg";

import { ReactComponent as SearchGray } from "../../svgfiles/search_gray.svg";
import { ReactComponent as StarSvgGray } from "../../svgfiles/star_gray.svg";
import { ReactComponent as CartSvgGray } from "../../svgfiles/cart_gray.svg";
import { ReactComponent as MemberSvgGray } from "../../svgfiles/member_gray.svg";

import { Link, NavLink, useLocation, UseNavigate, Routes, Router, Route, useNavigate, useParams, useAsyncValue } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import RecentSearchList from "./RecentSearchList";
import { Grid } from "semantic-ui-react";
import { Mainscreen } from "../mainscreen/Mainscreen";
import { ProductList } from "../product_list/ProductList";
import { getCookie, removeCookie } from "../../util/cookie";
import SearchResult from "../search_result_list/SearchResult";
import axios from "axios";


const Header = ({ handleNavClick, setShowMainscreen, setProducts, products }) => {
  const ref = useRef();
  // 현재 페이지
  const location = useLocation();

  // 카테고리 목록
  let [categorys, setCategorys] = useState();

  // 쿠키
  let [country, setCountry] = useState(getCookie('country'));

  let [isBrand, setIsBrand] = useState(true);

  /* 검색어 */
  const [keyword, setKeyword] = useState("");

  /* 최근 검색 목록 */
  let [recentKeywords, setRecentKeywords] = useState(["전통한복", "원피스", "거들썬", "수궁화", "기모노"]);

  // 현재 페이지가 맨 위 페이지인지 여부를 상태로 관리합니다.
  const [isTopPage, setIsTopPage] = useState(location.pathname.includes('Main'));

  
  /* 모달창 유무 */
  const [show, setShow] = useState(0);

  /* url에 일본 있으면 일본으로 변경 */
  useEffect(() => {
    if (location.pathname.includes('kimono')) setCountry(200);
    else setCountry(100);
  }, [])

  /* 나라 바뀌었을때 */
  useEffect(() => {
    console.log("나라 바뀜", country);
    const fetchData = async () => {
      try {
        // api 데이터 받아오기
        const response = await axios.get(`/api/item/category/${country}`, {
          headers: {
            'Authorization': `Bearer ${getCookie("accessToken")}` // header에 토큰 추가
          }
        });
  
        // 데이터 저장
        console.log("카테고리:", response.data);
        setCategorys(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [country]);

    // 쿠키 값을 기반으로 Header를 조건부로 렌더링
  const renderHeader = () => {
      if (country===100) {
        return <ul className="flex">
        <NavLink to="/category/120/all" className="category_name"><li onClick={navHandler} className="left">개량</li></NavLink>
        <NavLink to="/category/110/all" className="category_name"><li onClick={navHandler} className="left">전통</li></NavLink>
        <NavLink to="/category/130/all" className="category_name"><li onClick={navHandler} className="left">신발</li></NavLink>
        <NavLink to="/category/140/all" className="category_name"><li onClick={navHandler}>악세사리</li></NavLink>
      </ul>;
      } else if (country===200) {
        return <ul className="flex">
        <NavLink to="/category/210/all" className="category_name"><li onClick={navHandler} className="left">기모노</li></NavLink>
        <NavLink to="/category/220/all" className="category_name"><li onClick={navHandler} className="left">유카타</li></NavLink>
        <NavLink to="/category/230/all" className="category_name"><li onClick={navHandler} className="left">신발</li></NavLink>
        <NavLink to="/category/240/all" className="category_name"><li onClick={navHandler}>악세사리</li></NavLink>
      </ul>;
      }
  };

  /* 검색 아이콘 클릭했을때 */
  const open = (e) => {
    setShow(1);
    
    // ref.current.focus(); //input 자동 선택
  };


  /* 검색 모달창 */
  useEffect(() => {
    const modalClose = (e) => {
      if (show && ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", modalClose);
    return () => {
      document.removeEventListener("mousedown", modalClose);
    };
  }, [show]);

  
  /* input 받기 */
  const handleChange = (e) => {
    // console.log("input: ", recentKeywords);
    let keyword = e.target.value;
    setKeyword(keyword);
  };

  /* 검색 기능 */
  function searchHandle(e) {
    // console.log("추가", keyword, recentKeywords);
    
    if (!!keyword) {
      setRecentKeywords(keywords => [...keywords, keyword]);
      console.log("헤더에서 키워드", keyword);
      setKeyword(keyword);
      navigate(`/result/${keyword}`);
    }
    else {
      window.alert('검색어를 입력해주세요.');
    }
    setShow(false);
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

  // 페이지 스크롤 이벤트 핸들러를 등록합니다.
  useEffect(() => {
    const handleScroll = () => {
      // 현재 스크롤 위치를 확인하여 맨 위 페이지 여부를 업데이트합니다.
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(location.pathname.includes('Main') && (scrollTop === 0 || scrollTop <= 1080))
      if (location.pathname.includes('Main') && (scrollTop === 0 || scrollTop <= 1080))// 어디까지 보라색일지 여기서!!
        setIsTopPage(true);
      else
        setIsTopPage(false);

      if (scrollTop === 1080) setIsTopPage(false);
      // console.log(scrollTop);
    };

    // 스크롤 이벤트를 등록합니다.
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트되면 스크롤 이벤트를 해제합니다.
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  /* 페이지 바뀔때. Main인 경우, 아닌 경우 */
  useEffect(() => {
    // console.log("쩝 ㅡㅡ", location)
    if (!location.pathname.includes('Main'))
      setIsTopPage(false);
    
  }, [location])
  
  /* 로고 클릭했을때 */
  function logoHandle() {
    setIsTopPage(true);
  }

  return (
    <>
      <header className={isTopPage ? "header_purple" : ''}>
        <div className="container">
          <div className='global'>
            <i className="ri-global-line"></i> 한국어
          </div>

          <div className="logo" onClick={logoHandle}>
            <Link to="/Mainscreen">
              
              <img src={`/images/${isTopPage?"kiru_white.svg":"logo.png"}`} alt="" />
            </Link>
          </div>

          {/* 우측 아이콘들 */}
          <div className="toggle">
            <i onClick={open}>{isTopPage?<SearchWhite/>:<Search/>}</i> {/* 검색 */}
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
                            <SearchArea className="search_input" style={{ fill: 'white' }}/>
                            <input onChange={handleChange} name="keyword"></input>
                          </div>
                        </Grid.Column>
                        <Grid.Column width={4} style={{ padding: "20px 13px 14px 18px" }}>
                          <span className="submit_text" onClick={searchHandle}>검색</span>
                        </Grid.Column>
                      </Grid>
                    </div>
                    {/* --search_area */}
        
                    {/* result_list */}
                    {/* {console.log(recentKeywords)} */}
                    <div className="result_area">
                      <ul className="search_list">
                        {Object.values(recentKeywords).reverse().splice(0, 5).map((keyword, index) => (
                          <RecentSearchList key={index} keyword={keyword} recentKeywords={recentKeywords} setRecentKeywords={setRecentKeywords} />
                        ))}
                      </ul>
                    </div>
                    {/* --result_list */}
                  </div>
                </div>
              ) 
            : <></>}
            <i onClick={starHandler.bind(this, getCookie('accessToken'))}>{isTopPage?<StarSvgWhite/>:<StarSvg/>}</i> {/* 즐겨찾기 */}
            <i><Link to="/cart">{isTopPage?<CartSvgWhite/>:<CartSvg/>}</Link></i> {/* 장바구니 */}
            <i onClick={logoutHandler.bind(this, getCookie('accessToken'))}>{isTopPage?<MemberSvgWhite/>:<MemberSvg/>}</i> {/* 로그인/회원가입 */}
          </div>
        </div>

        <div className="nav">
          <ul className="flex">
           {renderHeader()}  
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


