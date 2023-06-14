import styles from "./detail.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Detail2 from "./Detail2"
import axios from "axios";
import "./Combobox.js"
import "./detail.css"
import { CartList } from "../cart/CartList";
import { TotalCart } from "../cart/TotalCart";
import Util from '../../util/productUtil'

import CustomSelect from "./CustomSelect.js";
import { getCookie } from "../../util/cookie";

export const Detail = ({ cart, setCart }) => {
  
  /* 변수 선언 */
  const { id } = useParams(); //상품 id

  const [product, setProduct] = useState(null); //상품 정보

  const [count, setCount] = useState(1); //장바구니에 담을 상품 수량

  const [startDate, setStartDate] = useState(''); //대여 시작일

  const [endDate, setEndDate] = useState(''); //대여 마감일

  const [selectedColor, setSelectedColor] = useState(''); // 색상

  const colorData = { // 색상표
    "황색": "#F6CF7A",
    "옥색": "#6bd4b9",
    "적색": "#a61010",
    "자색": "#6B3FA0",
    "분홍색": "#FF8AC3",
    "연두색": "#AAD975",
    "연보라색": "#bfb0e3",
    "청색": "#4161dc",
    "백색": "#FFFFFF",
    "남색": "#1c4587",
    "흑색": "#000000",
    "청회색": "#9599b9",
    "녹색": "#539538",
    "회색": "#c3c4c8",
    "천청색": "#D5C9DD",
    "갈색": "#9a5e0a",
    "주황색": "#ff9900"
  };

  const [size, setSize] = useState(''); //사이즈

  //박스 수량 
  const [selectedOptions, setSelectedOptions] = useState({});
  const [totalCount, setTotalCount] = useState(1);
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
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchItem();
  }, []);


  /* 상품 수량 조절 */
  // const handleQuantity = (type) => {
  //   if (type === "plus") { // +버튼
  //     setCount(count + 1);
  //   } else if (type === "minus") { // -버튼 
  //     if (count === 1) return;
  //     setCount(count - 1);
  //   }
  // };

  /* 장바구니에 중복된 물건을 담을 때 */
  // const setQuantity = (id, quantity) => {
  //   const found = cart.filter((el) => el.id === id)[0];
  //   const idx = cart.indexOf(found);
  //   const cartItem = {
  //     id: product.id,
  //     image: product.image,
  //     name: product.name,
  //     quantity: quantity,
  //     price: product.price,
  //     provider: product.provider,
  //   };
  //   setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)]);
  // };

  /* 장바구니에 상품 추가 */
  const handleCart = () => {
    alert("장바구니에 추가되었습니다!");
    const appended = []
    for (const size of Object.keys(selectedOptions)) {

      appended.push(
        {
          id: product.itemId,
          image: product.imageUrl[0],
          name: product.name,
          quantity: count,
          price: product.price,
          provider: product.provider,
          brand: product.brand,
          size: size,
          quantity: selectedOptions[size].count,
          color: product.color,
          startDate,
          endDate
        }
      )
    }
    console.log(appended)
    setCart(cart => cart.concat(appended));
  };

  /* 알 수 없음 */
  // const handleOptionSelection = (e) => {
  //   const { name, value } = e.target;
  //   setSelectedOptions((prevSelectedOptions) => ({
  //     ...prevSelectedOptions,
  //     [name]: {
  //       value,
  //       count: 1,
  //     },
  //   }));
  // };


  /* 상품 수량 조절 */
  const handleQuantityChange = (name, action) => {
    setSelectedOptions((prevSelectedOptions) => {
      const updatedOptions = { ...prevSelectedOptions };
      const option = updatedOptions[name];
      if (option) {
        const updatedCount = action === 'plus' ? option.count + 1 : option.count - 1;
        updatedOptions[name] = {
          ...option,
          count: updatedCount >= 0 ? updatedCount : 0,
        };
        calculateTotalCount(updatedOptions);
      }
      return updatedOptions;
    });
  };

  /* 총합 금액 계산 */
  const calculateTotalCount = (options) => {
    let totalCount = 0;
    Object.values(options).forEach((option) => {
      totalCount += option.count;
    });
    setTotalCount(totalCount);
  };

  
  /* 상품 정보에서 색상 데이터를 가져오기 */
  const colors = product.color;

  /* 색상 선택 */
  const handleColorClick = (color) => {
    setSelectedColor(color);
  };


  /* 사이즈 선택 */
  useEffect(() => {
    const selectedSize = size;
    setTotalCount(0); //Reset totalCount when size is selected
    setSelectedOptions((prevSelectedOptions) => {
      const updatedOptions = { ...prevSelectedOptions };
      const option = updatedOptions[selectedSize];
      if (option) {
        option.count += 1;
      } else {
        updatedOptions[selectedSize] = {
          value: selectedSize,
          count: 1,
        };
      }
      calculateTotalCount(updatedOptions);
      setShowTotalInfo(true);
      return updatedOptions;
    });
  },[size]);

  /* 선택한 상품 박스 지우기 */
  const handleBoxClose = (size) => {
    setSelectedOptions((prevSelectedOptions) => {
      const updatedOptions = { ...prevSelectedOptions };
      delete updatedOptions[size];
      calculateTotalCount(updatedOptions);
      return updatedOptions;
    });
  };


  /* 대여 날짜 선택 */
  const handleStartDateChange = (e) => {
    //debugger;
    setStartDate(e.target.value);
  };

  /* 반납 날짜 선택 */
  const handleEndDateChange = (e) => {
    //debugger;
    setEndDate(e.target.value);
  };


  /* product 객체 유효성 검사 */
  if (!product || !product.color || !Array.isArray(product.color)) {
    return null; // 또는 에러 메시지를 표시하거나 기본값을 반환할 수 있습니다.
  }

  return (
    product && (
      <>
        <main className={styles.main}>

          {/* 대표 이미지 */}
          <section className={styles.product}>
            <div className={styles.product_img}>
              <img src={product.imageUrl[0]} alt="product" />
            </div>
          </section>

          {/* 상품 정보 */}
          <section className={styles.product}>
            <div className={styles.product_info}>
              <p className={styles.seller_store}>{product.provider}</p>
              <p className={styles.product_name}>{product.name}  </p>
              
              {/* 즐겨찾기 */}
              <div className="heart">
                <img src="/images/star.svg" alt="" />
              </div>

              {/* 상품 가격 */}
              <span className={styles.price}>
                {Util.convertPrice(product.price + "")}
                <span className={styles.unit}>원</span>
              </span>

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
                    className={`color-box ${selectedColor === color ? 'selected' : ''}`}
                    style={{ backgroundColor: colorData[color] }}
                    onClick={() => handleColorClick(color)}
                  >
                    <p key={index} className="color-name" style={{ visibility: selectedColor === color || index === 0 ? 'visible' : 'hidden' }}>
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
                {/* <div className={styles.delivery}> */}
                <i className="ri-information-line"></i>  <p>사이즈 정보</p>
              </div>
              
              {/* select 박스 */}
              <div>
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
                    <input type="date" id="start" name="trip-start" value={startDate} min="2023-06-01" max="2023-07-31" onChange={handleStartDateChange} />
                    <i className="ri-subtract-fill"></i>
                    <input type="date" id="start" name="trip-start" value={endDate} min="2023-06-01" max="2023-07-31" onChange={handleEndDateChange} />
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}

            {/* hr bar */}

            {Object.keys(selectedOptions).map((size) => {
              const option = selectedOptions[size];
              return option.count !== 0 ? (
                <div key={size}>
                  <div className="allBox">
                    <div className="select_color_size">
                      {selectedColor && (
                        <>
                          <span> {selectedColor}</span>
                          <span>{colorData[selectedColor]}</span>
                        </>
                      )} / {option.value}</div>
                    <div className="pricesmall">
                      {Util.convertPrice(product.price * option.count)}원  <i className="ri-close-line" onClick={() => handleBoxClose(size)}></i>
                    </div>

                    <div className="countbtn">
                      <button className="m" onClick={() => handleQuantityChange(size, "minus")}>-</button>
                      <div className="countBox">
                        <span>{option.count}</span>
                      </div>
                      <button className="p" onClick={() => handleQuantityChange(size, "plus")}>+</button>
                    </div>
                  </div>
                </div>
              ) : null;
            })}

            {totalCount > 0 && showTotalInfo && (
              <div className={styles.sum}>
                <span className={styles.total}>
                  총 수량 <span className={styles.total_count}>{totalCount}개</span>
                </span>
                <div className={styles.total_info}>
                  <span className={styles.total_price}>
                    <span className={styles.total_unit}>
                      <div className="datedata">
                        {startDate} - {endDate}
                      </div>
                      총 대여료 </span>
                    {Util.convertPrice(product.price * totalCount)}원
                  </span>
                </div>
              </div>

            )}

            {/* </div> */}

            {/* <div className={styles.line}></div> */}
            <div className="detailbtn">
              <div className={styles.btn}>
                <button className={styles.btn_buy}>대여신청하기</button>
                <button
                  className={styles.btn_cart}
                  onClick={() => {
                    handleCart();
                  }}
                >
                  장바구니
                </button>
              </div>
            </div>
          </section>
        </main>

        <section>
          <p id="detailImg">상세 이미지</p>
          <p id="d">* 사용하시는 기기의 해상도에 따라 실제 상품 색감과 다르게 보일 수 있습니다.</p>
          <div className="detailimg">
            <img src={product.imageUrl[0]} alt="product" />
            <img src={product.imageUrl[1]} alt="product" />
            <img src={product.imageUrl[2]} alt="product" />
          </div>

        </section>
        <Detail2 />
      </>
    )
  );
};
