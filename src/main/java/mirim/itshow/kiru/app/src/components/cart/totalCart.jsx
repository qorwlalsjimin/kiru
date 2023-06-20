import { useEffect, useState } from "react";
import React, { useContext } from 'react';
import "./cart.css"
import Util from '../../util/productUtil'
// import { ReactComonent as DateLine } from '../../svgfiles/date_line.svg';

export const TotalCart = ({ total, setTotal, cart, found, startDate, endDate }) => {
  const [totalQuantity, setTotalQuantity] = useState(0); // 누적된 총 수량 값
  setTotal(total);

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

  useEffect(() => {
    if (found) {
      const temp = found.filter((item) => item.length !== 0);
      const sum = temp.reduce((acc, cur) => acc + cur[0].quantity, 0);
      setTotalQuantity(sum);
    } else {
      setTotalQuantity(0);
    }
  }, [cart, found]);

  return (
    <>
      <div className="total">
        <div className="totalfont">
          <div className="totalcount">
            <p className="cart_product_total_price">총 수량 {totalQuantity}개</p>
          </div>

          {/* 대여기간 */}
          {/* startDate와 endDate를 출력 */}
          <p className="cart_product_sale">
            대여기간 <span className="star_end">2023.04.11 <img src="images/date_line.svg"/> 2023.04.12</span>
            {/* 대여기간 <span className="star_end">{startDate}-{endDate}</span> */}
          </p>

          <div className="payment">
            {/* 총 대여료 */}
            {/* total을 변환된 가격으로 출력 */}
            <p>총 대여료 <span className="cart_prouct_payment"> {Util.convertPrice(total)}</span>원</p>
          </div>
        </div>
      </div>
    </>
  );
};