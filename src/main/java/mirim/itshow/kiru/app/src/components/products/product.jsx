import { Link } from "react-router-dom";
import styles from "./product.module.css";
import axios from 'axios';
import { useEffect, useState } from "react";
import { useLocation, useParams  } from "react-router-dom";
import Util from '../../util/productUtil'
import {ReactComponent as StarSvg} from "../../svgfiles/star.svg"

export const Product = ({ product }) => {
  // const [products, setProducts] = useState([]);
  const { cid } = useParams();

  const item = product;
  


{/* <Route path="/category/:cid" element={<Main categoryId={cid} />} /> */}

  return (
    product && (
      <div className={styles.product}>
        <Link to={`/product/${item.itemId}`}>
          <div className={styles.product_image}>
            {/* 대표이미지 배열 0방 */}
            {/* console.log(item) */}
            <img src={item.imageUrl[0]} alt="product" />
            <i><StarSvg/></i>

          </div>
        </Link>
        <div className={styles.store}>
          <span>{item.brand}</span>
        </div>

        <div className={styles.product_name}>
          <span>{item.name}</span>
        </div>

        <div className={styles.product_price}>
          <span className={styles.price}>{Util.convertPrice(item.price)}</span>
          <span className={styles.unit}>원</span>
        </div>
      </div>
    )
  );
};
