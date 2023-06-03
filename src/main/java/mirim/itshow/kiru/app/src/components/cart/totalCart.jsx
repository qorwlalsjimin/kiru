import styles from "./cart.module.css";
import { useEffect, useState } from "react";
// import styles from "../product_detail/detail.module.css"
import "./cart.css"
// import Detail from "../product_detail/detail";


export const TotalCart = ({ total, setTotal, cart, convertPrice,found, startDate, endDate, handleCheckList }) => {
  const [checkLists, setCheckLists] = useState([]); // 선택된 상품 ID 목록
  const [totalQuantity, setTotalQuantity] = useState(0); // 누적된 총 수량 값



  
  useEffect(() => {
    if (found) {
      const temp = found.filter((item) => item.length !== 0);
      const sum = temp.map((item) => item[0].price * item[0].quantity);
      const reducer = (acc, cur) => acc + cur;

         // 선택된 상품들의 수량 값 누적 계산
        //  const selectedCart = cart.filter((item) => checkLists.includes(item.id));
        //  const total = selectedCart.reduce((acc, curr) => acc + curr.quantity, 0);
        //  setTotalQuantity(total);
      

      if (sum.length === 0) {
        setTotal(0);
       
        return;
      }
      const itemTotal = sum.reduce(reducer);
      setTotal(itemTotal);
      } else {
      setTotal(0);
      // setTotalQuantity(0);
    }

  }, [cart, total, found, setTotal, checkLists]);

  return (
    
    <>
      
     <div className="shop_">
        <button><i class="ri-arrow-left-s-line"></i>쇼핑계속하기</button>

    </div>

    {/* <div className={styles.total}>
      <div className={styles.total_price}>
        <p className={styles.cart_product_total_price}>총 수량 {convertPrice(total)}개</p>
      
      </div>
    
      <div className={styles.sale}>
        <p className={styles.cart_product_sale}>대여기간</p>
     
      </div>
    
     

      <div className={styles.payment}>
      
      총 대여료 <p className={styles.cart_prouct_payment}>ㅤ{convertPrice(total)}</p>원
     
      </div>
    </div> */}


      <div className={styles.total}>
        <div className="totalfont">

        <div className="totalcount">
          <p className={styles.cart_product_total_price}>총 수량 {totalQuantity} 개</p>

        </div>

        <div className="star_end">
          {/* debugger; */}
          <p className={styles.cart_product_sale}>대여기간 {startDate}-{endDate} </p>
        
        </div>



        <div className={styles.payment}>

        <p>총 대여료 <div className={styles.cart_prouct_payment}> {convertPrice(total)}</div>원</p>
        </div>
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
