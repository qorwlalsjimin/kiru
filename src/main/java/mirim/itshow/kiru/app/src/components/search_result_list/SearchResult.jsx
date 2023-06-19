import styles from "../product_list/product_list.module.css";
import "./search_result.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { ReactComponent as Danger } from "../../svgfiles/danger.svg";
import axios from "axios";
import Footer from "../footer/Footer";
import { getCookie } from "../../util/cookie";
import { Product } from "../products/product";


export default function SearchResult() {
  // 파라미터로 받아온 키워드
  let keyword = useParams().keyword;
  console.log("검색화면에서 키워드", useParams());

  const [products, setProducts] = useState([]);

  // 파라미터로 받아온 카테고리 id, All/Best/Brand
  let [cname, setCname] = useState('all');

  // 카테고리 목록
  let [categorys, setCategorys] = useState(["전체"]);

  // 검색 결과 있는지 없는지
  let [makeHidden, setMakeHidden] = useState(true);


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

      if ((response.data.length || 0) > 0) {
        setMakeHidden(true);
      }
      else if ((response.data.length || 0) < 1) {
        setMakeHidden(false);
      }

      // const response = await axios.api(url); //TODO
      // setProducts(response.data);
      setProducts(response.data);
    };

    fetchData(fetchUrl);
  }, [cname, keyword]);


  // 브랜드 목록 클릭
  function brandHandler(brandId) {
    setCname(`brand/${brandId}`);
  }

  useEffect(() => {
    console.log("다시 나와줘");
    // window.location.reload();
  }, [keyword]);


  return (
    <>
      <div>
        <div className='Banner'>
          <h2 className="category_title" style={{ marginBottom: "65px" }}>
            "{keyword}"
          </h2>
        </div>

        {/* 브랜드 목록 */}
        {/* <nav className={`brand_nav`}>
            {Object.values(categorys).map((brand) => {
              return (
                <span key={brand.categoryId} onClick={brandHandler.bind(this, brand.categoryId)} style={{ marginRight: "10px" }}>{brand.title}</span>
              );
            })}
          </nav> */}

        {/* 상품 목록 */}
        <ul>
          <main className={styles.flex_wrap}>
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

        {/* 검색 결과 없을때 */}
        <div className={`notice ${makeHidden ? "notice_hidden" : ""}`}>
          <Danger />
          <h2>검색 결과가 없습니다.</h2>
          <h3>검색어나 카테고리 설정을 변경해보세요.</h3>
        </div>
      </div>
      <Footer />
    </>
  );
}