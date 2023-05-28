import styles from "./main.module.css";
import { useEffect, useState } from "react";
import  EventBanner  from "../eventBanner/eventBanner";
import {topNavigationBar} from "../header/topNavigationBar/topNavigationBar"
import { Product } from "../products/product";
import axios from 'axios';
import "../header/topNavigationBar/header.css"
// import { getProducts } from "../../service/fetcher";

export const Main = ({ convertPrice, products, setProducts}) => {




  // useEffect(() => {
  //   const fetchItem = async () => {
  //     try {
  //       const response = await axios.get('/api/item/item_list/110'); // 전통한복
  //       console.log(response.data)
  //       setProducts(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchItem();
  // }, []);



  //진짜
  const [selectedNav, setSelectedNav] = useState('');
  //const [items, setItems] = useState([]);
  // const [selectedNav, setSelectedNav] = useState('');

  useEffect(() => {
    fetchData('/api/item/item_list/110');
  }, []);

  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  
  const handleNavClick = (nav) => {
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






  return (
    <>
       
      
      <header>
      <nav>
      <div className="nav">
        <ul className="flex">
          <li>
            <button onClick={() => handleNavClick('전통한복')}>전통</button>
          </li>
          <li>
            <button onClick={() => handleNavClick('개량한복')}>개량</button>
          </li>
          <li>
            <button onClick={() => handleNavClick('신발')}>신발</button>
          </li>
          <li>
            <button onClick={() => handleNavClick('악세사리')}>악세사리</button>
          </li>
          <li>
            <button onClick={() => handleNavClick('세트')}>세트</button>
          </li>
        </ul>
        </div>
      </nav>
      </header> 
     

      



      <div>
      <div className='Banner'>
        <h2> {selectedNav}</h2>

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
        {products.map((product) => {
          return (
            <Product
              key={`key-${product.id}`}
              product={product}
              convertPrice={convertPrice}
            />
            );
          })}
        </main>
            
          {/* {items.map((item) => ( */}
           {/* // <li key={item.id}>{item.name}</li> */}
        {/* //</main>  ))} */}


        </ul>
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
