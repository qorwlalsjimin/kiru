import "./cart.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CartList } from "./cartList";
import { TotalCart } from "./totalCart";
import CartItem from "./CartItem";
import Footer from "../footer/Footer";
export const Cart = ({ cart, setCart }) => {

  // 로컬스토리지에 있는 장바구니 가져오기
  let cartHanbok = JSON.parse(localStorage.getItem('carts_hanbok'));
  let cartKimono = JSON.parse(localStorage.getItem('carts_kimono'));

  // 총 가격 상태와 체크된 상품 목록을 관리하는 상태
  const [total, setTotal] = useState(0);
  const [checkLists, setCheckLists] = useState([]);

  // 모든 상품이 체크되었는지 여부 확인
  const isAllChecked =
    cart.length === checkLists.length && checkLists.length !== 0;

  // 체크된 상품을 찾아 해당 상품 정보 반환
  const found = checkLists.map((checkList) =>
    cart.filter((el) => el.id === parseInt(checkList))
  );

  // 수량 변경 처리 함수
  const handleQuantity = (type, id, quantity) => {
    const found = cart.filter((el) => el.id === id)[0];
    const idx = cart.indexOf(found);

    if (type === "plus") {
      const cartItem = {
        id: found.id,
        image: found.image,
        name: found.name,
        quantity: quantity,
        price: found.price,
        provider: found.provider,
      };
      setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)]);
    } else {
      if (quantity === 0) return;
      const cartItem = {
        id: found.id,
        image: found.image,
        name: found.name,
        quantity: quantity,
        price: found.price,
        provider: found.provider,
      };
      setCart([...cart.slice(0, idx), cartItem, ...cart.slice(idx + 1)]);
    }
  };

  // 상품 제거 처리 함수
  const handleRemove = (id) => {
    setCart(cart.filter((cart) => cart.id !== id));
    setCheckLists(checkLists.filter((check) => parseInt(check) !== id));
  };

  // 체크 목록 관리 함수
  const handleCheckList = (checked, id) => {
    if (checked) {
      setCheckLists([...checkLists, id]);
    } else {
      setCheckLists(checkLists.filter((check) => check !== id));
    }
  };

  // 전체 선택/해제 처리 함수
  const handleCheckAll = (checked) => {
    if (checked) {
      const checkItems = [];
      cart.map((cart) => checkItems.push(`${cart.id}`));
      setCheckLists(checkItems);
    } else {
      setCheckLists([]);
    }
  };

  // 주문 버튼
  let navigate = useNavigate();
  function rentHandle() {
    navigate("/rent_form");
  }

  return (
    <>
      <div className="cart_container">
        <div className="cart_content">

          {/* 장바구니 타이틀 */}
          <div className="header">
            <h2>장바구니</h2>
          </div>

          {/* 장바구니 상품 묶음 */}
          <CartItem country="한복" cart={cartHanbok} total={total} setTotal={setTotal} found={found} />
          <div style={{height: "63px"}}>&nbsp;</div>
          <CartItem country="기모노" cart={cartKimono} total={total} setTotal={setTotal} found={found} />
          
          {/* 구분선 */}
          <div className="hr"></div>

          {/* 버튼 */}
          <div className="cart_btns">
            <div className="left">
              <button>선택 상품 삭제</button>
              <button>선택 상품 즐겨찾기</button>
            </div>
            <div className="right">
              <button className="select">선택 상품 주문</button>
              <button className="all">전체 상품 주문</button>
              {/* <button className="all" onClick={rentHandle}>전체 상품 주문</button> */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};