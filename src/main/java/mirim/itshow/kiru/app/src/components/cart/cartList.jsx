import styles from "./cart.css";
import Util from '../../util/productUtil';
import { ReactComponent as Unchecked } from '../../svgfiles/unchecked_cart.svg';
import { ReactComponent as Checked } from '../../svgfiles/checked_cart.svg';

export const CartList = ({
  cart,
  checkLists,
  handleQuantity,
  handleRemove,
  handleCheckList,
  quantity,
  selectedColor
}) => {

  // 카트가 없는 경우 null 반환
  if (!cart) {
    return null;
  }

  const id = `box_${cart.id}`; // 고유한 id 값 생성

  return (
    <section className="cart_product_list">
      <div className="le_row">

        {/* 체크박스 */}
        <Unchecked />

        {/* 이미지 */}
        <div className="cart_product_image">
          <img src={cart.image} alt="product-img" />
        </div>

        {/* 옵션 */}
        <div className="cart_product_info">
          <p className="product_name">{cart.name}</p>
          {console.log(cart)}
          <span className="product_option"> {cart.color} / {cart.size}</span>
        </div>

      </div>

      <div className="ri_row">
          <span>{cart.brand}</span>
          <span>{cart.quantity}<br/><button className="btn_change">옵션/수량 변경</button></span>
          <span>{Util.convertPrice(cart.price)}원</span>
      </div>
    </section>
  );
};
