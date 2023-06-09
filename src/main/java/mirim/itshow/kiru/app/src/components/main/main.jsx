import styles from "./main.module.css";
import { useEffect, useState } from "react";
import  EventBanner  from "../eventBanner/eventBanner";
import {topNavigationBar} from "../header/topNavigationBar/topNavigationBar"
import { Product } from "../products/product";
import axios from 'axios';
import "../header/topNavigationBar/header.css"
import Header from "../header/topNavigationBar/topNavigationBar"
// import { getProducts } from "../../service/fetcher";
import { useLocation, useParams  } from "react-router-dom";

export const Main = ({  products, setProducts, category }) => {
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [selectedNav, setSelectedNav] = useState('');



  // const location = useLocation();
  const { cid } = useParams()


  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const response = await axios.get(url);
        setProducts(response.data);
        setVisibleProducts(response.data.slice(0, 16));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // debugger;
    // const category = getCategoryFromPath(location.pathname);
    fetchData(`/api/item/item_list/${cid}`);
  }, [cid]);

  

  const handleShowMore = () => {
    setVisibleProducts(products);
    setShowMore(true);
  };

  console.log("products" + products)
  if(products) {
    console.log(products.length)
    console.log(showMore);
    console.log("???" + (products && !showMore && products.length > 16));
  }
  

  return (
    <>
        {/* <Header setProducts={setProducts} handleNavClick={handleNavClick} /> */}

      <div>
        <div className='Banner'>
          <h2>
            
            {cid === '120' && '개량한복'}
            {cid === '110' && '전통한복'}
            {cid === '130' && '신발'}
            {cid === '140' && '악세사리'}
            
            </h2>

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
                />
              );
            })}
          </main>
        </ul>

        {products && !showMore && products.length > 16 && (
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
