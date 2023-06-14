import styles from "./cart.module.css";
import "../product_detail/Detail"
import Util from '../../util/productUtil'

export const CartList = ({
  cart,
  checkLists,
  handleQuantity,
  handleRemove,
  handleCheckList,
  quantity,
  selectedColor
}) => {

  if (!cart) {
    return null;
  }
  // debugger;
  // console.log(cart)
  //상태를 만들고 input에서 선택된 

  const id = `box_${cart.id}`; // 고유한 id 값 생성

 
  return (

    <section className={styles.cart_product_list}>
       


       
       <input
        type="checkbox"
        id={id}
      
        onChange={(e) => {
          handleCheckList(e.currentTarget.checked, `${cart.id}`);
        }}
        checked={checkLists.includes(`${cart.id}`) ? true : false}
      /> 
   
       {cart && checkLists.includes(`${cart.id}`) && (
        <i className="ri-check-line" style={{ position: "absolute", top: "45%", left: "2.6%", transform: "translate(-50%, -50%)" }}></i>
      )} 

   
        <>

      <div className={styles.cart_product_wrap}>
        <div className={styles.cart_product_image}>
          <img src={cart.image} alt="product-img" />
        </div>

  
        <div className={styles.cart_product_info}>
          <p className={styles.product_name}>{cart.name}</p>
       
          <span> {selectedColor} / {cart.size}</span>
        </div>
      </div>


      <div className={styles.ri2}>
      <div className={styles.ri}>
          <span>  {cart.brand}</span>         
          <span>{cart.quantity} </span>
          <span> {Util.convertPrice(cart.price)}원</span>
          
          </div>
          </div>


      <div className={styles.cart_product_count}>
        <div className={styles.count}>
        </div>

      </div>
      <div className={styles.cart_product_price}> </div>

      </>

    </section>
   
  );
};
