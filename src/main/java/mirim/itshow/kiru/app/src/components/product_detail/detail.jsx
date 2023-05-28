import styles from "./detail.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { getProducts } from "../../service/fetcher";
import Detail2 from "./detail2"
import axios from "axios";
import "./combobox.js"

export const Detail = ({ convertPrice, cart, setCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [count, setCount] = useState(1);
  const [selected, setSelected] = useState({
    "S": 0,
    "M": 0,
    "L": 0
  });

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
    // debugger;
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



    /*
    const found = cart.find((el) => el.id === cartItem.id);
    if (found) setQuantity(cartItem.id, found.quantity + count);
    else setCart(cart => cart.concat(cartItem));*/
    setCart(cart => cart.concat(cartItem));
  };

  // useEffect(() => {
  //   getProducts().then((data) => {
  //     setProduct(
  //       data.data.products.find((product) => product.id === parseInt(id))
  //     );
  //   });
  // }, [id, product.price]);

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
              {product.color}
          



            {/* 설정 */}
            

            </div>

          <div className="sizeinfo">
            {/* <div className={styles.delivery}> */}
            <i class="ri-information-line"></i>  <p>사이즈 정보</p>
            </div>
            <div className="selectBox">
              <p className="sizetitle">사이즈</p>
            <div className="size">
            <select onChange={(e) => {
                const selectedSize = e.target.value;
                // console.log(selected[selectedSize])
                if(selectedSize in selected) {
                  setSelected(p => {
                    return { ...p, [selectedSize]: p[selectedSize] + count }
                  })
                }

            }} >
             
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
                  대여 기간</div>
                <div className="datedate">
                  <input type="date" id="start" name="trip-start" value="2023-07-22" min="2018-01-01" max="2018-12-31" />
                  <i className="ri-subtract-fill"></i>
                  <input type="date" id="start" name="trip-start" value="2023-07-22" min="2018-01-01" max="2018-12-31" />
                </div>
              </div>
            </div>

            {/* </div> */}

            {/* hr bar */}
            <div className={styles.line}>
             
           

            <div className="allBox">
{/* 
            <div className={styles.amount}>
              <div className={styles.amount}> */}
              <div>
                {
                  Object.keys(selected).map(size => {
                    return selected[size] !== 0 ? <div>사이즈 : {size}, 수량 : {selected[size]}</div> : null
                  })
                }
              </div>
              <div className="countbtn"> 

                <button className="m" onClick={() => handleQuantity("minus")}>-</button>
             
              {/* <div className={styles.count}> */}
              <div className="countBox">
              <span>{count}</span>
              </div>
              
              {/* </div> */}
              {/* <div className={styles.plus}> */}
                <button className="p"  onClick={() => handleQuantity("plus")}>+</button>
                {/* </div> */}
                   
              </div>

                <div className="pricesmall">
                  
                
                  {convertPrice(product.price * count)}
                 원
                
                 <i className="ri-close-line"></i>


                </div> 
          
                
              </div>
            </div>
      

            <div className={styles.line}></div>

            <div className={styles.sum}>
            <span className={styles.total}>
                  총 수량 <span className={styles.total_count}>{count}개</span>
                </span>
              <div>
                {/* <span className={styles.sum_price}>총 대여료</span> */}
              </div>

              <div className={styles.total_info}>
               



                <span className={styles.total_price}>
                <span className={styles.total_unit}>
                총 대여료 </span>
                  {convertPrice(product.price * count)}

                  
                <span className={styles.total_unit}>원</span>
                </span>
              </div>
            </div>

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
