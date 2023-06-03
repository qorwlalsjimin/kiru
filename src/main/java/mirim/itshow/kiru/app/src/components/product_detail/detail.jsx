import styles from "./detail.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { getProducts } from "../../service/fetcher";
import Detail2 from "./detail2"
import axios from "axios";
import "./combobox.js"
import "./detail.css"
import { CartList } from "../cart/cartList";
import { TotalCart } from "../cart/totalCart";

export const Detail = ({ convertPrice, cart, setCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const [selected, setSelected] = useState({
    "S": 0,
    "M": 0,
    "L": 0
  });
    //date
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`/api/item/${id}`); // Replace 1 with the actual item ID
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchItem();
  }, []);




  // 상세페이지에서 물건 수량 조절
  const handleQuantity = (type) => {
    if (type === "plus") {
      setCount(count + 1);
    } else {
      if (count === 1) return;
      setCount(count - 1);
    }
  };

  // 장바구니에 중복된 물건을 담을 때 사용
  const setQuantity = (id, quantity) => {
    const found = cart.filter((el) => el.id === id)[0];
    const idx = cart.indexOf(found);
    const cartItem = {
      id: product.id,
      image: product.image,
      name: product.name,
      quantity: quantity,
      price: product.price,
      provider: product.provider,
    };
    setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)]);
  };

  const handleCart = () => {
    const appended = []
    for(const size of Object.keys(selectedOptions)) {
      
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
        debugger;
    }
    console.log(appended)
    /*
    const cartItem = {
      id: product.id,
      image: product.image,
      name: product.name,
      quantity: count,
      price: product.price,
      provider: product.provider,
      brand: product.brand,
      size: product.size,
      color: product.color
    };
    */


    /*
    const found = cart.find((el) => el.id === cartItem.id);
    if (found) setQuantity(cartItem.id, found.quantity + count);
    else setCart(cart => cart.concat(cartItem));*/
    setCart(cart => cart.concat(appended));
  };

  //박스 수량 
  const [selectedOptions, setSelectedOptions] = useState({});
  const [totalCount, setTotalCount] = useState(1);
  const [showTotalInfo, setShowTotalInfo] = useState(false);

  const handleOptionSelection = (e) => {
    const { name, value } = e.target;
    setSelectedOptions((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [name]: {
        value,
        count: 1,
      },
    }));
  };




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

  const calculateTotalCount = (options) => {
    let totalCount = 0;
    Object.values(options).forEach((option) => {
      totalCount += option.count;
    });
    setTotalCount(totalCount);
  };

  const handleSizeSelection = (e) => {
    const selectedSize = e.target.value;
    //setTotalCount(0); //Reset totalCount when size is selected
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
  };

  const handleBoxClose = (size) => {
    setSelectedOptions((prevSelectedOptions) => {
      const updatedOptions = { ...prevSelectedOptions };
      delete updatedOptions[size];
      calculateTotalCount(updatedOptions);
      return updatedOptions;
    });
  };
  


  const handleStartDateChange = (e) => {
    //debugger;
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    //debugger;
    setEndDate(e.target.value);
  };


  return (
    product && (
      <>
        <main className={styles.main}>
          <section className={styles.product}>
            <div className={styles.product_img}>
              <img src={product.imageUrl[0]} alt="product" />
            </div>
          </section>
          <section className={styles.product}>
            <div className={styles.product_info}>
              <p className={styles.seller_store}>{product.provider}</p>
              <p className={styles.product_name}>
                {product.name}  </p>

              <div className="heart">
                <i className="ri-star-line" id="star"></i>
              </div>

              <span className={styles.price}>
              

                {convertPrice(product.price + "")}
                <span className={styles.unit}>원</span>
              
              </span>

              <div className="description">

             
              <p>{product.description}</p>

              </div>

              <div className="colorchose">
              <p>색상을 선택해주세요</p>
            
              </div>
              <div className="colorpick">
              
               {product.color}



            </div>

            {/* <select onChange={(e) => {
                const selectedColor = e.target.value;
                // console.log(selected[selectedSize])
                if(selectedColor in selected) {
                  setSelected(p => {
                    return { selectedColor}
                  })
                }

            }} > */}



            {/* 설정 */}
            

            </div>

            <div className="inputboxs">

          <div className="sizeinfo">
            {/* <div className={styles.delivery}> */}
            <i class="ri-information-line"></i>  <p>사이즈 정보</p>
            </div>
            <div className="selectBox">
              <p className="sizetitle">사이즈</p>
            <div className="size">
            {/* <select onChange={(e) => {
                const selectedSize = e.target.value;
             
                if(selectedSize in selected) {
                  setSelected(p => {
                    return { ...p, [selectedSize]: p[selectedSize] + count }
                  })
                }

            }} > */}


          <select onChange={handleSizeSelection}>
             
            <option value="0" selected>
            {/* <p id="s_text1">사이즈</p> */}
            <p id="s_text2">사이즈를 선택해주세요</p>
 
           </option>
            <option value="S">{product.size[0]}</option>
            <option value="M">{product.size[1]}</option>
            <option value="L">{product.size[2]}</option>
 
          </select>
        </div>
      </div>   
            <div className="date">

              <div className="dateBox">
          
                <div className="renttitle">
             
                  대여 기간
                  </div>

                <div className="datedate">
                  <input type="date" id="start" name="trip-start" value={startDate} min="2023-06-01" max="2023-07-31" onChange={handleStartDateChange}/>
                  <i className="ri-subtract-fill"></i>
                  <input type="date" id="start" name="trip-start" value={endDate} min="2023-06-01" max="2023-07-31"   onChange={handleEndDateChange}/>
                </div>
              </div>
            </div>
            </div>  
            {/* </div> */}

            {/* hr bar */}
          
             
              {Object.keys(selectedOptions).map((size, index) => {
                
                const option = selectedOptions[size];
                return option.count !== 0 ? (
                  <>
             
                  <div className="allBox" key={size}>  
                    
                    <div> 수량 : {option.count} / {option.value}</div>

                    <div className="pricesmall">
                      {convertPrice(product.price*option.count)}원  <i className="ri-close-line" onClick={() => handleBoxClose(size)}></i>
                      </div>

                    <div className="countbtn">
                      <button className="m" onClick={() => handleQuantityChange(size, "minus")}>-</button>
                      <div className="countBox">
                        <span>{option.count}</span>
                      </div>
                      <button className="p" onClick={() => handleQuantityChange(size, "plus")}>+</button>
                     
                    </div>
                  

                      
                  </div>
                
                  </>
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
                          {convertPrice(product.price * totalCount)}원
                          
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
