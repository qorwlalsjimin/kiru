import styles from "./cart.module.css";

export const CartList = ({
  cart,
  convertPrice,
  checkLists,
  handleQuantity,
  handleRemove,
  handleCheckList,
  selectedOptions, totalCount
}) => {

 



    // selectedOptions가 undefined 또는 null인 경우 빈 객체로 초기화
    const options = selectedOptions || {};


  console.log(cart)
  
  return (
    <section className={styles.cart_product_list}>
      <input
        type="checkbox"
        id={cart.id}
        onChange={(e) => {
          handleCheckList(e.currentTarget.checked, `${cart.id}`);
        }}
        checked={checkLists.includes(`${cart.id}`) ? true : false}
      />
      <div className={styles.cart_product_wrap}>
        <div className={styles.cart_product_image}>
          <img src={cart.image} alt="product-img" />
        </div>


        <div className={styles.cart_product_info}>
          {/* <p className={styles.seller_store}>{cart.provider}</p> */}
          <p className={styles.product_name}>{cart.name}</p>
          <p className={styles.product_name}>{cart.brand}</p>
          {/* {Object.keys(options).map((size, index) => (
          <li key={size}>
            {size}: {options[size]?.count}개 / {options[size]?.value}
          </li>
        ))} */}
      
      



         
          {/* <p className={styles.product_name}>{cart.size}</p> */}

          
          {/* <p className={styles.delivery}>택배배송 / 무료배송</p> */}
        </div>
      </div>





      <div className={styles.cart_product_count}>
        {/* <img
          className={styles.minus}
          src="/images/icon-minus-line.svg"
          alt="minus"
          onClick={() => {
            handleQuantity("minus", cart.id, cart.quantity - 1);
          }}
        /> */}

        <div className={styles.count}>
         {/* {cart.quantity} */}
         <span>{cart.totalCount ?? 0}</span>
        </div>

        {/*수량 조절  */}
        {/* <img
          className={styles.plus}
          src="/images/icon-plus-line.svg"
          alt="plus"
          onClick={() => handleQuantity("plus", cart.id, cart.quantity + 1)}
        /> */}

      </div>
      <div className={styles.cart_product_price}>
        <p className={styles.total_price}></p>
        <p className={styles.price}>{convertPrice(cart.price)}원</p>
        {/* <button className={styles.btn_submit}>주문하기</button> */}
      </div>



          
          {/* 전체 상품 삭제 */}

      {/* <div
        className={styles.product_remove}
        onClick={() => handleRemove(cart.id)}
      >
       <button>전체상품삭제</button>
      </div> */}
       
    </section>
    
  );
};
