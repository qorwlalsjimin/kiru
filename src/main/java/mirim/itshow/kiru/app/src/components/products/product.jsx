import { Link } from "react-router-dom";
import styles from "./product.module.css";
import axios from 'axios';
import { useEffect, useState } from "react";


export const Product = ({ product, convertPrice }) => {
  // const { name, description, price, imageUrl, color, size, brand } = product;
  // const [item, setItem] = useState(null);
  const item = product;

  /*
  console.log("?????")
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/items/item_list/120'); // Replace 1 with the actual item ID
        setItem(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchItem();
  }, []);

*/


  return (
    product && (
      <div className={styles.product}>
        <Link to={`/product/${item.itemId}`}>
          <div className={styles.product_image}>
            {/* 대표이미지 배열 0방 */}
            <img src={item.imageUrl[1]} alt="product" />
          </div>
        </Link>
        <div className={styles.store}>
          <span>{item.brand}</span>
        </div>

        <div className={styles.product_name}>
          <span>{item.name}</span>
        </div>

        <div className={styles.product_price}>
          <span className={styles.price}>{convertPrice(item.price)}</span>
          <span className={styles.unit}>원</span>
        </div>
      </div>
    )
  );
};
