import { Link } from "react-router-dom";
import styles from "./product.module.css";
import axios from 'axios';
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Util from '../../util/productUtil'
import { ReactComponent as StarSvg } from "../../svgfiles/star.svg"

export const Product = ({ product }) => {

  const item = product;

  function heartHandler({itemId}) {
    console.log(itemId);
  }

  return (
    product && (
      <div className={styles.product}>
        <Link to={`/product/${item.itemId}`}>
          {/* 이미지 */}
          <div className={styles.product_image}>
            {/* 대표 이미지 */}
            <img src={item.imageUrl[0]} alt="product" />

            {/* 즐겨찾기 버튼 */}
            <i><StarSvg onClick={heartHandler.bind(this, product.itemId)}/></i>
          </div>

          {/* 브랜드 이름 */}
          <div className={styles.store}>
            <span>{item.brand}</span>
          </div>

          {/* 상품 이름 */}
          <div className={styles.product_name}>
            <span>{item.name}</span>
          </div>

          {/* 상품 가격 */}
          <div className={styles.product_price}>
            <span className={styles.price}>{Util.convertPrice(item.price)}</span>
            <span className={styles.unit}>원</span>
          </div>

        </Link>
      </div>
    )
  );
};
