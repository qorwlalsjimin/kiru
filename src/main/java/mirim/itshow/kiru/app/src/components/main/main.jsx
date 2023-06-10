import styles from "./main.module.css";
import { useEffect, useState } from "react";
import EventBanner from "../eventBanner/eventBanner";
import { topNavigationBar } from "../header/topNavigationBar/topNavigationBar"
import { Product } from "../products/product";
import axios from 'axios';
import "../header/topNavigationBar/header.css"
import Header from "../header/topNavigationBar/topNavigationBar"
// import { getProducts } from "../../service/fetcher";
import { useLocation, useParams } from "react-router-dom";

export const Main = ({ products, setProducts, category }) => {
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const [selectedNav, setSelectedNav] = useState('');

  // const location = useLocation();
  const { cid } = useParams()
  let [fetchUrl, setFetchUrl] = useState(`/api/item/item_list/${cid}`);

  //https://stackoverflow.com/questions/56410369/can-i-call-separate-function-in-useeffect
  useEffect(() => {
    
    const fetchData = async (url) => {
      console.log("url", url);
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
    fetchData(fetchUrl);
  }, [cid]);


  const handleShowMore = () => {
    setVisibleProducts(products);
    setShowMore(true);
  };

  console.log("products" + products)
  if (products) {
    console.log(products.length)
    console.log(showMore);
    console.log("???" + (products && !showMore && products.length > 16));
  }

  function categoryHandler(param) {
    console.log("Clicked", param);

    switch (param) {
      case "all":
        setFetchUrl(`/api/item/item_list/${cid}`);
        break;
      case "best":
        setFetchUrl(fetchUrl+'/best');
        break;
      case "brand":
        setFetchUrl(fetchUrl+'/211');
        break;
      default:
        console.log("예외값");
        break;
    }
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
            <div className="cloum c1" onClick={categoryHandler.bind(this, 'all')}>
              <i className="ri-checkbox-blank-circle-fill"></i>
              All
            </div>

            <div className="cloum c2" onClick={categoryHandler.bind(this, 'best')}>
              <i className="ri-checkbox-blank-circle-fill"></i>
              Best
            </div>

            <div className="cloum c3" onClick={categoryHandler.bind(this, 'brand')}>
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
                  key={`key-${product.itemId}`}
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
