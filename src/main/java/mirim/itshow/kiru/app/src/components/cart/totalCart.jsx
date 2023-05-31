import styles from "./cart.module.css";
import { useEffect } from "react";
// import styles from "../product_detail/detail.module.css"


export const TotalCart = ({ total, setTotal, cart, convertPrice, found }) => {
  useEffect(() => {
    if (found) {
      const temp = found.filter((item) => item.length !== 0);
      const sum = temp.map((item) => item[0].price * item[0].quantity);
      const reducer = (acc, cur) => acc + cur;
      if (sum.length === 0) {
        setTotal(0);
        return;
      }
      const itemTotal = sum.reduce(reducer);
      setTotal(itemTotal);
    } else {
      setTotal(0);
    }
  }, [cart, total, found, setTotal]);

  return (
    <>
     <div>
        <button><i class="ri-arrow-left-s-line"></i>쇼핑계속하기</button>

    </div>
    <div className={styles.total}>
      <div className={styles.total_price}>
        <p className={styles.cart_product_total_price}>총 수량 {convertPrice(total)}개</p>
      
      </div>
    
      <div className={styles.sale}>
        <p className={styles.cart_product_sale}>대여기간</p>
        {/* <p className={styles.cart_product_sale_price}>0원</p> */}
      </div>
    
     

      <div className={styles.payment}>
      
      총 대여료 <p className={styles.cart_prouct_payment}>ㅤ{convertPrice(total)}</p>원
     
      </div>
    </div>

    <div className="btn">
    <div className={styles.btn}>
            <button className={styles.btn_cart}>선택 상품 주문</button>
              <button className={styles.btn_buy}>전체 상품 주문</button>
            </div>
    </div>
  
    </>
  );
};
