import { useNavigate } from 'react-router-dom';
import { CartList } from "./cartList";
import EmptyNotice from './EmptyNotice';
import { TotalCart } from "./totalCart";

export default function CartItem({ country, cart, total, setTotal, found }) {
  const navigate = useNavigate();
  console.log(country+" "+cart+" "+total);

    return (
        <div className="country_content">
        {/* 한복 or 기모노 */}
        <div className="categorytitle">
          <h2>{country}</h2>
        </div>

        {/* 테이블 전체 */}
        <div className="cart_title_wrap">
          {/* 테이블 헤더 */}
          <div className="tab_title">
            {/* 왼쪽 열 제목 */}
            <div className="le">
              <span>상품정보</span>
            </div>

            {/* 오른쪽 열 제목 */}
            <div className="ri">
              <span>브랜드</span>
              <span>수량</span>
              <span>상품금액</span>
            </div>
          </div>

          {/* 테이블 바디 */}

          {/* 하나의 행 */}
          {/* 장바구니에 담은 상품들 */}
          {/* {cart.length !== 0 ? ( */}
          {cart !== null ? (
            Object.values(cart).map((cart, idx) => {
              return (
                <CartList
                  key={`key-${cart.idx}`}
                  cart={cart}
                  setTotal={setTotal}
                  total={total}
                />
              );
            })
          ) : (<EmptyNotice />)}
        </div>

        {/* 쇼핑 계속하기 */}
        {cart !== null && (<div className="cart_continue_btn_wrap">
          <button className="continue_btn" onClick={()=>{navigate(-1)}}>&#60; 쇼핑 계속하기</button>
        </div>)}
        

        {/* 총합 */}
        {/* {cart.length !== 0 ? ( */}
        {cart !== null ? (
          <TotalCart
            cart={cart}
            total={total}
            setTotal={setTotal}
            found={found}
          />
        ) : (
          ""
        )}
      </div>
    )
}