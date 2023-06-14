import styles from "./cart.module.css";
import { useEffect, useState } from "react";
import React, { useContext } from 'react';
// import styles from "../product_detail/detail.module.css"
import "./cart.css"
// import Detail from "../product_detail/detail";
import { DetailContext } from "../product_detail/Detail";
import Util from '../../util/productUtil'


export const TotalCart = ({ total, setTotal, cart,found, startDate, endDate}) => {
  const [totalQuantity, setTotalQuantity] = useState(0); // 누적된 총 수량 값
 
  
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
      // setTotalQuantity(0);
    }

  }, [cart, total, found, setTotal]);


  useEffect(() => {
    if (found) {
      const temp = found.filter((item) => item.length !== 0);
      const sum = temp.reduce((acc, cur) => acc + cur[0].quantity, 0);

      setTotalQuantity(sum);
    } else {
      setTotalQuantity(0);
    }
  }, [cart, found]);


  console.log("sd" +  startDate); console.log("ed" +  endDate);
  return (
    
    <>
      
     <div className="shop_">
        <button><i className="ri-arrow-left-s-line"></i>쇼핑계속하기</button>

    </div>

      <div className={styles.total}>
        <div className="totalfont">

        <div className="totalcount">
          <p className={styles.cart_product_total_price}>총 수량 {totalQuantity}개</p>

        </div>

       
          {  }
          <p className={styles.cart_product_sale}>
            
            대여기간 <span className="star_end">{startDate}-{endDate}</span>

          </p>

        <div className={styles.payment}>

        <p>총 대여료 <div className={styles.cart_prouct_payment}> {Util.convertPrice(total)}</div>원</p>
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