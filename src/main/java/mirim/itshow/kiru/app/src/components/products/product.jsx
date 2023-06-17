import { Link } from "react-router-dom";
import styles from "./product.module.css";
import axios from 'axios';
import { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import Util from '../../util/productUtil'
import { ReactComponent as StarSvg } from "../../svgfiles/star.svg"
import { ReactComponent as StarPurple } from '../../svgfiles/star_purple.svg';
import { getCookie } from "../../util/cookie";

export const Product = ({ product }) => {

  const item = product;
  const [isHeart, setIsHeart] = useState((!!getCookie('accessToken')) ? item.heart : false); //즐겨찾기 유무 (이렇게 안 해주면 로그인 안 해도 즐겨찾기가 보인다)
  // console.log(product);

  const svgStyles = {
    cursor: "pointer",
    marginTop: "-43px"
  }

  /* 즐겨찾기에 추가 */
  const navigate = useNavigate();
  const heartHandle = (itemId) => {
    if (!(!!getCookie('accessToken'))) {
      alert('로그인 후 이용해주세요.');
      navigate('/login_form');
      return;
    }

    try {
      if (isHeart) { //즐겨찾기 해제
        const response = axios.delete(`/api/heart/delete/${itemId}`,
          {
            headers: {
              'Authorization': `Bearer ${getCookie("accessToken")}`
            }
          }
        ); 
        setIsHeart(false)

      } else { //즐겨찾기 추가
        const response = axios.post('/api/heart/new', { "itemId": itemId },
          {
            headers: {
              'Authorization': `Bearer ${getCookie("accessToken")}`
            }
          }
        );    
        setIsHeart(true)
      }
    } catch (e) {
      alert('로그인 후 사용해주세요.');
      if (e.response.status === 401) {
        alert('로그인 후 사용해주세요.');
        navigate("/login_form");
      }
    }
  }

  return (
    product && (
      <div className={styles.product}>
        <Link to={`/product/${item.itemId}`}>
          {/* 이미지 */}
          <div className={styles.product_image}>
            {/* 대표 이미지 */}
            <img src={item.imageUrl[0]} alt="product" />
          </div>

        </Link>
        {/* 즐겨찾기 버튼 */}
        <div className={styles.star_icon} onClick={heartHandle.bind(this, item.itemId)} style={svgStyles}>
          <i>{(isHeart) ? <StarPurple /> : <StarSvg />}</i>
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

      </div>
    )
  );
};
