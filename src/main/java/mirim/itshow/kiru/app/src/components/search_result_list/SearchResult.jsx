import styles from "../product_list/product_list.module.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { getCookie } from "../../util/cookie";
import { Product } from "../products/Product";

export default function SearchResult() {
    let [keyword, setKeyword] = useState(useParams().keyword);

    const [products, setProducts] = useState([]);
  
    // 파라미터로 받아온 카테고리 id, All/Best/Brand
    let [cname, setCname] = useState('all');
  
    // 카테고리 목록
    let [categorys, setCategorys] = useState(["전체"]);
  
  
    // 카테고리 목록 가져오기
    async function categoryDatas() {
      try {
        // api 데이터 받아오기
        const response = await axios.get(`/api/item/category/100`, {
          headers: {
            'Authorization': `Bearer ${getCookie("accessToken")}` // header에 토큰 추가
          }
        });
  
        // 데이터 저장
        setCategorys(...categorys, response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
  
    // 상품 목록 조회
    // let fetchUrl = `/api/item/search/꽃`;
  let fetchUrl = `/api/item/search/${keyword}`;
    // 상품 데이터 가져오기
    useEffect(() => {
      const fetchData = async (url) => {
        const response = await axios.get(url, {
          headers: {
            'Authorization': `Bearer ${getCookie("accessToken")}`
          }
        });
        // const response = await axios.api(url); //TODO
        // setProducts(response.data);
        setProducts(response.data);
      };
  
      fetchData(fetchUrl);
    }, [cname]);

  
    // 브랜드 목록 클릭
    function brandHandler(brandId) {
      setCname(`brand/${brandId}`);
    }
  
  
    return (
      <>
        <div>
          <div className='Banner'>
            <h2 className="category_title">
              {keyword}
            </h2>
          </div>
  
          {/* 브랜드 목록 */}
          <nav className={`brand_nav`}>
            {Object.values(categorys).map((brand) => {
              return (
                <span key={brand.categoryId} onClick={brandHandler.bind(this, brand.categoryId)} style={{ marginRight: "10px" }}>{brand.title}</span>
              );
            })}
          </nav>
  
          {/* 상품 목록 */}
          <ul>
            <main  className={styles.flex_wrap}>
              {products.map((product) => {
                console.log("product: " + product);
                return (
                  <Product
                    key={`key-${product.itemId}`}
                    product={product} //여기서 에러남
                  />
                );
              })}
            </main>
          </ul>
        </div>
      </>
    );
}