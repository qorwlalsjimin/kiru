import styles from "./cart.module.css";

export const CartHeader = ({ isAllChecked, handleCheckAll }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>장바구니</h1>
      </header>

      <input
            type="checkbox"
            checked={isAllChecked}
            onChange={(e) => handleCheckAll(e.target.checked)}
          />
      <h2>한복</h2>
      <div className={styles.cart_title_wrap}>
        <div className={styles.tab_title}>
         
       
          <div className={styles.le}>
          <span>상품정보</span>
          </div>

          <div className={styles.ri}>
          <span>브랜드</span>
          <span>수량</span>
          <span>상품금액</span>
          
          </div>
        
        </div>
      </div>
   
    </>
  );
};
