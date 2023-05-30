import React from 'react'
import styles from "../product_detail/detail.module.css"
import "../product_detail/detail.css"


const btn = () => {
  return (
    <div>

        <div className={styles.btn}>
            <button className={styles.btn_cart}>장바구니</button>
              <button className={styles.btn_buy}>대여신청하기</button>
             
            </div>
    
      
    </div>
  )
}

export default btn
