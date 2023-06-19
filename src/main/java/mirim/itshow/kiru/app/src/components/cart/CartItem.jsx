import { CartList } from "./cartList";
import { TotalCart } from "./totalCart";

export default function CartItem({country, cart, total, setTotal, found}) {
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
          {cart.length !== 0 ? (
            cart.map((cart, idx) => {
              return (
                <CartList
                  key={`key-${cart.id}`}
                  cart={cart}
                />
              );
            })
          ) : (<></>)}

          {/* <div className="not">
          <h2>장바구니에 담긴 상품이 없습니다.</h2>
          <p>원하는 상품을 장바구니에 담아보세요!</p>
        </div> */}

        </div>

        {/* 쇼핑 계속하기 */}
        <div className="cart_continue_btn_wrap">
          <button className="continue_btn">&#60; 쇼핑 계속하기</button>
        </div>

        {/* 총합 */}
        {cart.length !== 0 ? (
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