import styles from "./main.module.css";
import { useEffect, useState } from "react";
import  EventBanner  from "../eventBanner/eventBanner";
import {topNavigationBar} from "../header/topNavigationBar/topNavigationBar"
import { Product } from "../products/product";
import axios from 'axios';
import "../header/topNavigationBar/header.css"
import Header from "../header/topNavigationBar/topNavigationBar"
// import { getProducts } from "../../service/fetcher";

export const Main = ({ convertPrice, products, setProducts }) => {
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [selectedNav, setSelectedNav] = useState('');
 
  useEffect(() => {
    fetchData('/api/item/item_list/110');
  }, []);

  const handleShowMore = () => {
    setVisibleProducts(products);
    setShowMore(true);
  };
  
  const handleNavClick = (nav, fetchData) => {
    let url = '';

    if (nav === '전통한복') {
      url = '/api/item/item_list/110';
    } else if (nav === '개량한복') {
      url = '/api/item/item_list/120';
    } else if (nav === '신발') {
      url = '/api/item/item_list/130';
    } else if (nav === '악세사리') {
      url = '/api/item/item_list/140';
    } else if (nav === '세트') {
      url = '/api/item/item_list/150';
    }

    setSelectedNav(nav);
    fetchData(url);
  };

  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      setProducts(response.data);
      setVisibleProducts(response.data.slice(0, 16));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };



  return (
    <>
        {/* <Header setProducts={setProducts} handleNavClick={handleNavClick} /> */}

      <div>
        <div className='Banner'>
          <h2> 전통한복</h2>

          <div className="selection">

            <div className="cloum c1">
              <i className="ri-checkbox-blank-circle-fill"></i>
              All
            </div>

            <div className="cloum c2">
              <i className="ri-checkbox-blank-circle-fill"></i>
              Best
            </div>

            <div className="cloum c3">
              <i className="ri-checkbox-blank-circle-fill"></i>
              Brand
            </div>

          </div>
        </div>

    
        <ul>
          <main className={styles.flex_wrap}>
            {visibleProducts.map((product) => {
              return (
                <Product
                  key={`key-${product.id}`}
                  product={product}
                  convertPrice={convertPrice}
                />
              );
            })}
          </main>
        </ul>

        {!showMore && products.length > 16 && (
        <button className={styles.show_more} onClick={handleShowMore}>
          더보기
        </button>
      )}
      </div>


      {/* <div className={styles.filter}>
        <p onClick={() => sortProduct("recent")}>최신순</p>
        <p onClick={() => sortProduct("row")}>낮은 가격</p>
        <p onClick={() => sortProduct("high")}>높은 가격</p>
      </div> */}
      {/* <main className={styles.flex_wrap}>
        {products.map((product) => {
          return (
            <Product
              key={`key-${product.id}`}
              product={product}
              convertPrice={convertPrice}
            />
          );
        })}
      </main> */}
    </>
  );
};
