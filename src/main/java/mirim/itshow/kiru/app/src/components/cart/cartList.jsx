import styles from "./cart.css";
import Util from '../../util/productUtil';
import { ReactComponent as Unchecked } from '../../svgfiles/unchecked_cart.svg';
import { ReactComponent as Checked } from '../../svgfiles/checked_cart.svg';
import { useState } from "react";

export const CartList = ({
  cart,
  setTotal,
  total
}) => {

  const [isChecked, setIsChecked] = useState(false);

  // 카트가 없는 경우 null 반환
  if (!cart) {
    return null;
  }else{
    setTotal(total + cart.price * cart.count);
  }

  function radioHandle() {
    setIsChecked(!isChecked);
  }

  return (
    <section className="cart_product_list">
      <div className="le_row">

        {/* 체크박스 */}
        {isChecked?<Checked onClick={radioHandle}/>:<Unchecked onClick={radioHandle}/>}

        {/* 이미지 */}
        <div className="cart_product_image">
          <img src={cart.image} alt="product-img" />
        </div>

        {/* 옵션 */}
        <div className="cart_product_info">
          <p className="product_name">{cart.name}</p>
          <span className="product_option"> {cart.color} / {cart.size}</span>
        </div>

      </div>

      <div className="ri_row">
          <span>{cart.brand}</span>
          <span>{cart.count}<br/><button className="btn_change">옵션/수량 변경</button></span>
          <span>{Util.convertPrice(cart.price * cart.count)}원</span>
      </div>
    </section>
  );
};
