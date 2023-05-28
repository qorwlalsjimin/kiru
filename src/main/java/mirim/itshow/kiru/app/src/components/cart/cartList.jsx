import styles from "./cart.module.css";

export const CartList = ({
  cart,
  convertPrice,
  checkLists,
  handleQuantity,
  handleRemove,
  handleCheckList,
}) => {


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
          <p className={styles.product_name}>{cart.size}</p>

          
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
          <span>{cart.quantity}</span>
        </div>
{/*         
        <img
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
