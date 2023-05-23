import styles from "./detail.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { getProducts } from "../../service/fetcher";
import Detail2 from "./detail2"
import axios from "axios";

export const Detail = ({ convertPrice, cart, setCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [count, setCount] = useState(1);

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
    const cartItem = {
      id: product.id,
      image: product.image,
      name: product.name,
      quantity: count,
      price: product.price,
      provider: product.provider,
    };
    const found = cart.find((el) => el.id === cartItem.id);
    if (found) setQuantity(cartItem.id, found.quantity + count);
    else setCart([...cart, cartItem]);
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
              <img src={product.image} alt="product" />
            </div>
          </section>
          <section className={styles.product}>
            <div className={styles.product_info}>
              <p className={styles.seller_store}>{product.provider}</p>
              <p className={styles.product_name}>{product.name}  <i className="ri-star-line"></i></p>
            

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

            {/* <select onchange="showValue(this)" name="likeLanguage" id="" class="pl">
            <option value="0" selected>사이즈를 선택하세요</option>
            <option value="S"> {product.size[0]}</option>
            <option value="M">{product.size[1]}</option>
            <option value="L">{product.size[2]}</option>
 
        </select> */}
           


            {/* </div> */}

            {/* hr bar */}
            {/* <div className={styles.line}></div> */}

            <div className={styles.amount}>
              {/* <img
                className={styles.minus}
                src="/images/icon-minus-line.svg"
                alt="minus"
                
              /> */}
              <div className={styles.amount}>
            <i className="ri-subtract-fill "
            onClick={() => handleQuantity("minus")}
          
            ></i>
</div>



              <div className={styles.count}>
                <span>{count}</span>
              </div>

              {/* <img
                className={styles.plus}
                src="/images/icon-plus-line.svg"
                alt="plus"
                onClick={() => handleQuantity("plus")}
              />
            </div> */}
          <div className={styles.plus}>
            <i className="ri-add-line"
            onClick={() => handleQuantity("plus")}
        
            ></i>

            <span className="pricesmall">
                  {convertPrice(product.price * count)}

                  
                  <span className="won">원</span>
                </span>

                <div className="Close">
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
                <span className={styles.sum_price}>총 대여료</span>
              </div>

              <div className={styles.total_info}>
               



                <span className={styles.total_price}>
                  {convertPrice(product.price * count)}

                  
                  <span className={styles.total_unit}>원</span>
                </span>
              </div>
            </div>

            <div className={styles.btn}>
              <button className={styles.btn_buy}>대여하기</button>
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

        <Detail2 />
      </>
    )
  );
};
