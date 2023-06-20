import styles from "./product_list.module.css";
import "../header/header.css"
import "./brand_nav.css"
import "./product_list.css"
import { useEffect, useState } from "react";
import { Product } from "../products/product";

import axios from 'axios';
import Footer from "../footer/Footer";
import { useParams } from "react-router-dom";
import { getCookie } from "../../util/cookie";
import setToken from "../../util/setToken";

export const ProductList = ({ products, setProducts, isBrand, setIsBrand }) => {

  const [visibleProducts, setVisibleProducts] = useState([]);
  const [showMore, setShowMore] = useState(false);

  // 파라미터로 받아온 카테고리 id, All/Best/Brand
  let paramCid = useParams().cid;
  let paramCname = useParams().cname;
  let [cid, setCid] = useState(paramCid);
  let [cname, setCname] = useState(paramCname);

  // 상품 목록 조회
  let fetchUrl = `/api/item/item_list/${cid}/`;
  
  // 악세사리 상품 목록인지
  let [isAcc, setIsAcc] = useState(cid==140 ? true : false);

  // 브랜드 목록
  let [brands, setBrands] = useState({ "": "" });

  // Sort기준 nav 클릭했는지
  let [isAllActive, setIsAllActive] = useState(true);
  let [isBestActive, setIsBestActive] = useState(false);
  let [isBrandActive, setIsBrandActive] = useState(false);

  // 브랜드 nav 클릭했는지
  let [isBrandsActive, setIsBrandsActive] = useState([true, false, false, false]);

  // parameter의 값을 useState로 쓰기 위함
  useEffect(() => {
    setCid(paramCid);
    setCname(paramCname);
  }, [paramCid, paramCname]);

  // 카테고리별 브랜드 목록 가져오기
  async function brandDatas() {
    try {
      // api 데이터 받아오기
      const response = await axios.get(`/api/item/item_list/${cid}/brand`, {
        headers: {
          'Authorization': `Bearer ${getCookie("accessToken")}` // header에 토큰 추가
        }
      });

      // 데이터 저장
      setBrands(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  // 상품 데이터 가져오기
  useEffect(() => {
    fetchUrl = `/api/item/item_list/${cid}/` + cname;
    const fetchData = async (url) => {
      try {
        if (cname != "brand") { //브랜드가 아닐때
          const response = await axios.get(url, {
            headers: {
              'Authorization': `Bearer ${getCookie("accessToken")}`
            }
          });
          // const response = await axios.api(url); //TODO
          setProducts(response.data);
          setVisibleProducts(response.data.slice(0, 16));
        } else { //브랜드일때
          // const response = await axios.api(`${url}/${(Number(cid) + 1)}`);
          // setToken();
          const response = await axios.get(`${url}/${(Number(cid) + 1)}`, {
            headers: {
              'Authorization': `Bearer ${getCookie("accessToken")}`
            }
          });
          setProducts(response.data);
          setVisibleProducts(response.data.slice(0, 16));
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(fetchUrl);

    // 악세서리인지 아닌지 판단
    setIsAcc(cid == 140 ? true : false);
    
  }, [cid, cname]);

  // 더보기 버튼 클릭
  const handleShowMore = () => {
    setVisibleProducts(products);
    setShowMore(true);
  };

  // All Best Brand 클릭
  function categoryHandler(param) {
    setCname(param); //all, best, brand로 바꿈

    //TODO 코드 줄이기
    switch (param) {
      case "all":
        setIsAllActive(true);
        setIsBestActive(false);
        setIsBrandActive(false);

        setIsBrand(true);
        break;
      case "best":
        setIsAllActive(false);
        setIsBestActive(true);
        setIsBrandActive(false);

        setIsBrand(true);
        break;
      case "brand":
        setIsAllActive(false);
        setIsBestActive(false);
        setIsBrandActive(true);

        setIsBrand(false);
        break;
      default:
        break;
    }
    brandDatas(); //브랜드 목록 가져오기
  }

  // 브랜드 목록 클릭
  function brandHandler(brandId, index) {
    // console.log(index);
    setCname(`brand/${brandId}`);
    let copy = isBrandsActive;

    copy[index] = true; //선택한 거

    Object.values(isBrandsActive).map((brand, other) => { //선택 안 한 거
      if (other != index) copy[other] = false;
    })

    setIsBrandsActive(copy);


    console.log(isBrandsActive);
  }

  // console.log("products" + products)
  // if (products) {
  //   console.log(products.length)
  //   console.log(showMore);
  //   console.log("???" + (products && !showMore && products.length > 16));
  // }

  return (
    <>
      <div>
        <div className='Banner'>
          <h2 className="category_title">
            {cid === '120' && '개량한복'}
            {cid === '110' && '전통한복'}
            {cid === '130' && '신발'}
            {cid === '140' && '악세사리'}
          </h2>

          {/* All Best Brand 정렬 */}
          <div className="selection">
            <div className={`cloum c1 ${isAllActive && "active_sort"}`} onClick={categoryHandler.bind(this, 'all')}>
              <i className="ri-checkbox-blank-circle-fill"></i><br />
              All
            </div>

            <div className={`cloum c2 ${isBestActive && "active_sort"}`} onClick={categoryHandler.bind(this, 'best')}>
              <i className="ri-checkbox-blank-circle-fill"></i><br />
              Best
            </div>

            <div className={`cloum c3 ${isBrandActive && "active_sort"}`} onClick={categoryHandler.bind(this, 'brand')}>
              <i className="ri-checkbox-blank-circle-fill"></i><br />
              Brand
            </div>

          </div>
        </div>

        {/* 브랜드 목록 */}
        <nav className={`brand_nav ${isBrand && "is_brand"}`}>
          {Object.values(brands).map((brand, index) => {
            // console.log(isBrandActive[1], `${isBrandActive[index] && "active_brand"}`);
            return (
              <span key={brand.categoryId} className={`${isBrandsActive[index] && "active_brand"}`} onClick={brandHandler.bind(this, brand.categoryId, index)} style={{ marginRight: "54px" }}>{brand.title}</span>
            );
          })}
        </nav>

        {/* 상품 목록 */}
        <ul>
          <main className={styles.flex_wrap}>
            {visibleProducts.map((product) => {
              // console.log("여기 product: " + Object.values(product));
              return (
                <Product
                  isAcc = {isAcc}
                  key={`key-${product.itemId}`}
                  product={product} //여기서 에러남
                />
              );
            })}
          </main>
        </ul>

        {/* 더보기 */}
        {products && !showMore && products.length > 16 && (
          <div className={styles.show_more} >
            <span className={styles.show_more_text} onClick={handleShowMore}>
              더보기
            </span>
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};
