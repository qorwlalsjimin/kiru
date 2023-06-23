import "./detail.css"

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import axios from "axios";

import Util from '../../util/productUtil'
import "./combobox.js"
import { getCookie } from "../../util/cookie";

import CustomSelect from "./CustomSelect.js";
import Detail2 from "./detail2"

import { ReactComponent as Star } from '../../svgfiles/star.svg';
import { ReactComponent as StarPurple } from '../../svgfiles/star_purple.svg';
import { ReactComponent as DateLine } from '../../svgfiles/date_line.svg';
import useDidMountEffect from "../../hooks/useDidMountEffect";
import Footer from "../footer/Footer";


export const Detail = ({ cart, setCart }) => {

  const navigate = useNavigate();

  /* 변수 선언 */
  const { id } = useParams(); //상품 id

  const isShoes = (id >= 48 && id <= 53); //신발 상품인지
  const [imgIndex, setImgIndex] = useState(0);

  const [isHeart, setIsHeart] = useState(false); //즐겨찾기 유무

  const [product, setProduct] = useState(null); //상품 정보

  const [count, setCount] = useState(1); //장바구니에 담을 상품 수량
  const [startDate, setStartDate] = useState(''); //대여 시작일
  const [endDate, setEndDate] = useState(''); //대여 마감일
  const [selectedColor, setSelectedColor] = useState(''); // 색상
  const [isClickColor, setIsClickColor] = useState(false); //색상 선택됐는지 아닌지
  const [isClickSize, setIsClickSize] = useState(true); //사이즈 선택됐는지 아닌지

  const colorData = { // 색상표
    "황색": "#F6CF7A",
    "옥색": "#6bd4b9",
    "적색": "#a61010",
    "분홍": "#FF8AC3",
    "연두": "#AAD975",
    "보라": "#bfb0e3",
    "자색": "#800080",
    "청색": "#4161dc",
    "백색": "#F5F5DC",
    "남색": "#1c4587",
    "흑색": "#000000",
    "감색": "#9599b9",
    "녹색": "#539538",
    "회색": "#c3c4c8",
    "천청": "#A1CCE2",
    "갈색": "#9a5e0a",
    "주황": "#ff9900",
    "황갈": "#f3cf98"
  };

  const [size, setSize] = useState(''); //사이즈

  const [isComplete, setIsComplete] = useState(false); //컬러, 사이즈 다 선택됐는지

  //박스 수량 
  const [nowOptions, setNowOptions] = useState({}); //지금 선택되고 있는 옵션

  const [selectedOptions, setSelectedOptions] = useState({}); //지금까지 선택한 옵션들
  const [totalCount, setTotalCount] = useState(0);
  const [showTotalInfo, setShowTotalInfo] = useState(false);


  /* 상품 정보 가져오기 */
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`/api/item/${id}`, {
          headers: {
            'Authorization': `Bearer ${getCookie("accessToken")}`
          }
        });
        setProduct(response.data); //상품 정보
        setIsHeart(response.data.heart); //즐겨찾기 유무
      } catch (error) {
        console.error(error);
      }
    };

    fetchItem();
  }, []);

  /* 이미지 선택 */
  const imgHandle = (index) => {
    setImgIndex(index);
  }

  /* 상품 수량 조절 */
  const handleQuantityChange = (size, action) => { //사이즈, plus/minus
    // console.log("handleQuantityChange");
    setSelectedOptions((prevSelectedOptions) => { //박스 하나의 정보
      const updatedOptions = { ...prevSelectedOptions };
      // console.log("업데이트된 옵션", updatedOptions, prevSelectedOptions);
      const option = updatedOptions[size];
      // console.log("옵션: ", option);
      if (option) {
        const updatedCount = action === 'plus' ? option.count + 1 : option.count - 1;
        updatedOptions[size] = {
          ...option,
          count: updatedCount >= 1 ? updatedCount : 1, // 1 이하로는 수정 조절 못함
        };
        calculateTotalCount(updatedOptions); //총합 계산
      }
      return updatedOptions;
    });
  };

  /* 총합 금액 계산 */
  const calculateTotalCount = (options) => {
    // console.log("calculateTotalCount")
    // console.log(options);
    // console.log(selectedOptions);
    let totalCount = 0;
    // console.log("금액 계산 나와", options);
    Object.values(options).forEach((option) => {
      totalCount += option.count;
    });
    // console.log("여기", selectedOptions);
    setTotalCount(totalCount);
  };

  /* 색상 선택 */
  const handleColorClick = (color) => {
    // 1. 색 선택했다고 체크
    setIsClickColor(true);

    // 2. useState color에 값 넣기 
    setSelectedColor(color);

    // 3. 색상을 처음 선택했으면 객체를 만들고
    console.log("★새로운 옵션")
    let option;
    try {
      if (!!nowOptions.itemId == false) { //색상 처음 선택
        option = {
          itemId: id,
          size: '',
          color: color,
          count: 1,
          price: product.price
        }
        setNowOptions(option);

        // 4. 사이즈  먼저 선택했으면 객체에 값 업데이트
      } else { //사이즈 선택하고 넘어옴
        setNowOptions({ ...nowOptions, color: color });
      }
    } catch (err) {
      console.log("itemId가 없습니다.");
    }


    // 5. 컬러랑 사이즈 둘 다 있으면 둘 다 선택했다고 체크
    if (!!color && !!size) { setIsComplete(true); }
    else { setIsComplete(false) };
  };


  /* 사이즈 선택 */
  useEffect(() => {
    // 1. size 값 있을때만 사이즈 클릭했다고 체크
    if (size !== undefined) {
      setIsClickSize(true);
    }

    // 2. 사이즈를 처음 선택했으면 객체를 만들고
    // console.log("★새로운 옵션")
    let option;
    try {
      if (!!nowOptions.itemId == false) {  //사이즈 처음 선택
        option = {
          itemId: id,
          size: size,
          color: '',
          count: 1,
          price: product.price
        }
        setNowOptions(option); //현재 옵션 세팅
        if (!!size && !(!!selectedColor)) //사이즈 선택, 컬러는 없을때
        {
          
          }

        // 3. 색상 먼저 선택했으면 객체에 값 업데이트
      } else { //색상 선택하고 넘어옴
        setNowOptions({ ...nowOptions, size: size });
      }
    } catch (err) {
      console.log("itemId가 없습니다.");
    }


    // 4. 색상과 사이즈 모두 있으면 모두 체크했다고 체크
    if (!!selectedColor && !!size) { setIsComplete(true); }
    else { setIsComplete(false) };
  }, [size]);


  /* 색상, 사이즈 모두 선택했을때 */
  let [optionKey, setOptionKey] = useState(0);
  useEffect(() => {
    //두번째 옵션은 여기를 아예 안 들어옴
    if (isComplete) {
      //1. 원래 있던 옵션들에 지금 쓰던 옵션 추가
      let isAlert = false;
      Object.values(selectedOptions).map((option) => {
        if (option.color === nowOptions.color && option.size === nowOptions.size) {
          alert('이미 선택한 옵션입니다.')
          console.log("안 됨", option.color, option.size, nowOptions.color, nowOptions.size);
          handleReset();
          isAlert = true;
        }
      })
      if (!isAlert) {
        setSelectedOptions((prevOptions) => ({
          ...prevOptions,
          [optionKey]: nowOptions,
        }));
        setOptionKey(optionKey + 1);
        handleReset();
        setTotalCount(totalCount + 1);
      } else {
        console.log(isAlert);
      }

      //2. 모두 선택 안 됐을때 color, size, nowOptions null로 초기화
    } else {
      handleReset();
    }
  }, [isComplete]);


  /* nowOptions 값 변경될때 - 모두 없어졌을때 */
  useEffect(() => {
    // if (Object.keys(nowOptions).length === 0) console.log("현재 옵션 없음")
  }, [nowOptions])

  /* 옵션 선택 리셋 */
  const handleReset = () => {
    setNowOptions({});
    setSize(null);
    setSelectedColor(null);
  };

  /* 선택한 상품 박스 지우기 */
  const handleBoxClose = (size) => {
    // console.log("handleBoxClose");
    setSelectedOptions((selectedOptions) => {
      const updatedOptions = { ...selectedOptions };
      // console.log(updatedOptions);
      delete updatedOptions[size];
      calculateTotalCount(updatedOptions);
      return updatedOptions;
    });
  };


  /* 대여 날짜 선택 */
  const handleStartDateChange = (e) => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    const todayFormattedDate = `${year}-${month}-${day}`;
    
    if (e.target.value < todayFormattedDate) window.alert('올바른 날짜를 선택해주세요.')
    else setStartDate(e.target.value);

    console.log(e.target.value, todayFormattedDate)
  };

  /* 반납 날짜 선택 */
  const handleEndDateChange = (e) => {
    //debugger;
    if (e.target.value < startDate) {
      window.alert('올바른 날짜를 선택해주세요.')
    }
    else {
      setEndDate(e.target.value);
    }
  };


  /* product 객체 유효성 검사 */
  if (!product || !product.color || !Array.isArray(product.color)) {
    return null; // 또는 에러 메시지를 표시하거나 기본값을 반환할 수 있습니다.
  }


  /* 상품 정보에서 색상 데이터를 가져오기 */
  const colors = product.color;


  /* 즐겨찾기에 추가 */
  const heartHandle = (itemId) => {
    if (!(!!getCookie('accessToken'))) {
      alert('로그인 후 이용해주세요.');
      navigate('/login_form');
      return;
    }

    try {
      if (isHeart) { //즐겨찾기 해제
        const response = axios.delete(`/api/heart/delete/${itemId}`,
          {
            headers: {
              'Authorization': `Bearer ${getCookie("accessToken")}`
            }
          }
        );
        setIsHeart(false)

      } else { //즐겨찾기 추가
        const response = axios.post('/api/heart/new', { "itemId": itemId },
          {
            headers: {
              'Authorization': `Bearer ${getCookie("accessToken")}`
            }
          }
        );
        setIsHeart(true)
      }
    } catch (e) {
      alert('로그인 후 사용해주세요.');
      if (e.response.status === 401) {
        alert('로그인 후 사용해주세요.');
        navigate("/login_form");
        window.scrollTo({ top: 0 });
      }
    }
  }

  /* 장바구니에 상품 추가 */
  const handleCart = () => {

    if (Object.keys(selectedOptions).length === 0) {
      alert('옵션을 선택해주세요.');
      return;
    }
    // console.log("장바구니 추가", selectedOptions);

    //로컬스토리지 생성 및 값 삽입
    if (product.country === 'hanbok') {
      // 로컬스토리지의 장바구니 가져오기
      const carts_hanbok = JSON.parse(localStorage.getItem("carts_hanbok")) || []; //한복

      // 장바구니에 담을 값 준비 (추가로 필요한 정보 추가)
      let index = 0;

      // 중복 체크
      let updateOptions = Object.values(selectedOptions).map((detailOption) => {
        return { name: product.name, image: product.imageUrl[0], ...detailOption, brand: product.brand, price: product.price, startDate: startDate, endDate: endDate }
      })
      carts_hanbok.push(...updateOptions);

      // 로컬스토리지에 보내기
      localStorage.setItem("carts_hanbok", JSON.stringify(carts_hanbok));

    } else if (product.country === 'kimono') {
      // 로컬스토리지의 장바구니 가져오기
      const carts_kimono = JSON.parse(localStorage.getItem("carts_kimono")) || []; //기모노
      // console.log("원래 있던거", carts_kimono);

      // 장바구니에 담을 값 준비 (추가로 필요한 정보 추가)
      let index = 0;
      let updateOptions = Object.values(selectedOptions).map((option) => {
        return { name: product.name, image: product.imageUrl[0], ...option, brand: product.brand, price: product.price }
      })
      carts_kimono.push(...updateOptions);

      // 로컬스토리지에 보내기
      localStorage.setItem("carts_hanbok", JSON.stringify(carts_kimono));
    }

    alert("장바구니에 추가되었습니다!");
    setTimeout(() => {
      navigate("/cart");
    }, 500);
  };

  function buyBtnHandle() {
    if (!(!!getCookie('accessToken'))) {
      alert('로그인 후 이용해주세요.');
      navigate('/login_form');
      return;
    }

    if (Object.keys(selectedOptions).length !== 0 && !!startDate && !!endDate) {
      setSelectedOptions({});
      setTotalCount(0);
      navigate('/rent_form');
    }
    else
      if(!(!!startDate) || !(!!endDate)) window.alert('날짜를 선택해주세요.');
      else window.alert('옵션을 선택해주세요.');
  }

  return (
    product && (
      <div className="detail_all"> {/* 가장 큰 태그 */}
        {/* 상품 정보 */}
        <main className="main"> {/* 내용 전체가 들어갈 태그 */}
          <div className="product_information">

            {/* 대표 이미지 */}
            <section className="product_img_container">
              <div className="product_img">
                <div className="size"><img src={product.imageUrl[imgIndex]} className="img_represent" /></div>
                <img src="/images/shadow.png" className={isShoes ? "img_shadow_shoes" : "img_shadow"} />
              </div>

              <div className="product_img_bottom">
                <div className="size" onClick={imgHandle.bind(this, '0')}><img src={product.imageUrl[0]} /></div>
                <div className="size" onClick={imgHandle.bind(this, '1')}><img src={product.imageUrl[1]} /></div>
                <div className="size" onClick={imgHandle.bind(this, '2')}><img src={product.imageUrl[2]} /></div>
              </div>
            </section>

            {/* 상품 정보 */}
            <section className="product_info_container">
              <div className="product_info">

                <div className="product_title">
                  <p className="product_name">{product.name}</p>

                  {/* 즐겨찾기 */}
                  {/* <div className="heart" onClick={heartHandle.bind(this, id)}> */}
                  <div className="heart" onClick={heartHandle.bind(this, id)}>
                    {(isHeart) ? <StarPurple /> : <Star />}
                  </div>
                </div>

                {/* 상품 가격 */}
                <div className="price">
                  <span>{Util.convertPrice(product.price + "")}원</span>
                </div>

                {/* 상품 설명 */}
                <div className="description">
                  <p>{product.description}</p>
                </div>

                {/* 색상 선택 */}
                <div className="colorchose">
                  <p>색상을 선택해주세요</p>
                </div>
                <div className="colorpick">
                  {colors.map((color, index) => (
                    <div
                      key={index}
                      className={`color_box ${selectedColor === color ? 'selected' : ''}`}
                      style={{ backgroundColor: colorData[color] }}
                      onClick={() => handleColorClick(color)}
                    >
                      <div className={`${(selectedColor === color) ? "white_circle" : ''}`}>&nbsp;</div>
                      <p key={index} className="color_name" style={{ visibility: selectedColor === color || index === 0 ? 'visible' : 'hidden' }}>
                        {color}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 선택 */}
              <div className="inputboxs">
                {/* 사이즈 */}
                <div className="sizeinfo">
                  <i className="ri-information-line"></i>  <p>사이즈 정보</p>
                </div>

                {/* select 박스 */}
                <div className="select">
                  <CustomSelect
                    listOpen
                    resetThenSet={() => { }}
                    list={[
                      {
                        id: 1,
                        title: "S"
                      },
                      {
                        id: 2,
                        title: "M"
                      },
                      {
                        id: 3,
                        title: "L"
                      }
                    ]}
                    size={size}
                    setSize={setSize}
                  />
                </div>

                {/* 날짜 */}
                <div className="date">
                  <div className="dateBox">
                    <div className="renttitle">
                      대여 기간
                    </div>

                    <div className="datedate">
                      <input type="date" id="start" name="start" value={!!startDate ? startDate : "대여시작일"} min="2023-06-01" max="2023-07-31" onChange={handleStartDateChange} />
                      <div className="line_wrapper"><DateLine className="line" /></div>
                      <input type="date" id="end" name="end" value={endDate} min="2023-06-01" max="2023-07-31" onChange={handleEndDateChange} />
                    </div>
                  </div>
                </div>
              </div>

              {!!Object.keys(selectedOptions).length ? <div className="hr"></div> : <></>}

              {/* 선택한 상품 박스 */}
              {Object.keys(selectedOptions).map((selectedOption, index) => {
                const option = selectedOptions[selectedOption]; //박스 하나
                // return (true) ? (
                return ('count' in option) ? (
                  // 사이즈 별로
                  <div key={index}>
                    <div className="allBox">
                      <div className="left">
                        {/* 색상 */}
                        <div className="select_color_size">
                          <div className="circle" style={{ backgroundColor: `${colorData[option.color]}` }}>&nbsp;</div>
                          <span>
                            {option && (
                              <>
                                {option.color}
                              </>
                            )} {`/ ${option.size}`}
                          </span>
                        </div>


                        {/* 수량 조절 */}
                        <div className="countbtn">
                          <button className="m" onClick={() => handleQuantityChange(selectedOption, "minus")}>-</button>
                          <div className="countBox">
                            <span>{option.count}</span>
                          </div>
                          <button className="m" onClick={() => handleQuantityChange(selectedOption, "plus")}>+</button>
                        </div>
                      </div>

                      {/* 가격 */}
                      <div className="right">
                        <div className="pricesmall">
                          {Util.convertPrice(product.price * option.count)}원
                          <i className="ri-close-line" onClick={() => handleBoxClose(selectedOption)}></i>
                        </div>

                      </div>

                    </div>
                  </div>
                ) : null;
              })}

              {totalCount > 0 && (
                <div className="sum">
                  {/* 총 수량 */}
                  <span className="total_count">총 수량 {totalCount}개</span>
                  {/* 정보 */}
                  <div className="total_info">

                    <div className="datedata">
                      {!!endDate.replaceAll('-', '.') && startDate.replaceAll('-', '.')} {!!endDate && <div className="line"><DateLine /></div>} {endDate.replaceAll('-', '.')}
                    </div>
                    <span className="total_price">
                      총 대여료 <span className="bold">{Util.convertPrice(product.price * totalCount)}원</span>
                      {/* 총 대여료 <span className="bold">39,000원</span> */}
                    </span>
                  </div>
                </div>

              )}

              <div className="detailbtn">
                <div className="btn">
                  <button className="btn_buy" onClick={buyBtnHandle}>대여신청하기</button>
                  <button className="btn_cart" onClick={() => { handleCart(); }}>장바구니</button>
                </div>
              </div>
            </section>
          </div>
        </main>

        {/* 상품 설명 */}
        <div className="detail_information">
          <div className="detail_container">
            <div className="text">
              <p className="ment">상세 이미지</p>
              <p className="ex">* 사용하시는 기기의 해상도에 따라 실제 상품 색감과 다르게 보일 수 있습니다.</p>
            </div>
            <div className="detailimg">
              {/* 이미지들 */}
              <img src={product.imageUrl[0]} alt="product" />
              {/* <div className="wrapper"><img src={product.imageUrl[0]} alt="product" /></div> */}
              <p className="ex_bottom" style={{ color: "#454545" }}>{(product.description).split("").map((a) => (a === ".") ? <br /> : a)}</p>
              <div className="wrapper"><img src={product.imageUrl[1]} alt="product" /></div>
              <div className="wrapper"><img src={product.imageUrl[2]} alt="product" /></div>
            </div>

            {/* 사이즈 설명 */}
            <div className="size">
              <p>
                사이즈<br />
                Size : Free ( 44 - 66 )<br />
                총 길이 ( 말기 포함 ) : 123cm<br />
                말기 : 17cm<br />
                말기 폭 : 112cm<br />
                Fabric : Polyester 100%
              </p>
            </div>


            {/* 리뷰 */}
            <Detail2 />
          </div>

        </div>

        {/* 푸터 */}
        <div className="footer">
          <Footer />
        </div>
      </div>
    )
  );
};
