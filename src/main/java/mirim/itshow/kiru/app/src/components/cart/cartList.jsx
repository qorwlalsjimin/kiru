import styles from "./cart.module.css";
import "../product_detail/detail"

export const CartList = ({
  cart,
  convertPrice,
  checkLists,
  handleQuantity,
  handleRemove,
  handleCheckList,
  selectedOptions, totalCount
}) => {


  // debugger;
  // console.log(cart)

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
{/* 
<section className={styles.cart_product_list}>
      <input
        type="checkbox"
        id={cart.id}
        onChange={(e) => {
          handleCheckList(e.currentTarget.checked, `${cart.id}`);
        }}
        checked={checkLists.includes(`${cart.id}`) ? true : false}
      />
여기서 객체가 하나씩 생겨날 때마다 인풋을 누르면 선택할 수 있는데, 이 인풋 버튼을 누르면 생성된 객체 모두가 선택되지 않고 각각의 객체만 선택하도록 코드를 수정해줘  */}


      <div className={styles.cart_product_wrap}>
        <div className={styles.cart_product_image}>
          <img src={cart.image} alt="product-img" />
        </div>


        <div className={styles.cart_product_info}>
          {/* <p className={styles.seller_store}>{cart.provider}</p> */}
          <p className={styles.product_name}>{cart.name}</p>

        
          <span>{cart.size}</span>
         
          {/* <p className={styles.product_name}>{cart.size}</p> */}

          
          {/* <p className={styles.delivery}>택배배송 / 무료배송</p> */}
        </div>
      </div>


      <div className={styles.ri2}>
      <div className={styles.ri}>
          <span>  {cart.brand}</span>         
          <span>{cart.quantity} </span>
          <span> {convertPrice(cart.price)}원</span>
          
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


        {/* {Object.keys(selectedOptions).map((size) => {
          const option = selectedOptions[size];
          return (
            <li key={size}>
              {size}: {option.count}개
            </li>
          );
        })} */}



         
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
