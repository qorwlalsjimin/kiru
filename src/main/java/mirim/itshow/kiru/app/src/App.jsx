import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import  Header  from "./components/header/topNavigationBar/topNavigationBar";
import Home from "./pages/home";
import Product from "./pages/product";
import Basket from "./pages/basket";
import Login_form from "./components/member/Login_form";
import Join_form from "./components/member/Join_form";
import Modernized from "./components/item/modernized";
// import Tradition from "./components/item/Tradition";
import Shoes from './components/item/shoes'
import Accessories from "./components/item/Accessories"
import { Main } from "./components/main/main";
import axios from 'axios';
import {Mainscreen} from "./components/mainscreen/Mainscreen"

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  // const [showMainscreen, setShowMainscreen] = useState(true);
  // const [isMainscreenVisible, setMainscreenVisible] = useState(true);



 


  // const handleNavClick = async (nav) => {
  //   let url = '';

  //   if (nav === '전통한복') {
  //     url = '/api/item/item_list/110';
  //   } else if (nav === '개량한복') {
  //     url = '/api/item/item_list/120';
  //   } else if (nav === '신발') {
  //     url = '/api/item/item_list/130';
  //   } else if (nav === '악세사리') {
  //     url = '/api/item/item_list/140';
  //   } else if (nav === '세트') {
  //     url = '/api/item/item_list/150';
  //   }


    

  //   try {
  //     const response = await axios.get(url);
  //     setProducts(response.data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }

  //   setShowMainscreen(false);
  
  // };


  const handleNavClick = async (nav, fetchData) => {
    fetchData(nav);
    // setShowMainscreen(false);
  };

  return (
    
   


    <BrowserRouter>
     
      {/* <TopNavigationBar/> */}
      <Header products={products} setProducts={setProducts} handleNavClick={handleNavClick}  />
      {/* <Header setProducts={setProducts} /> */}
      
      {/* <Mainscreen /> */}

      {/* <Route path="/products" element={isMainscreenVisible && <Mainscreen />} /> */}
      <Routes>
        <Route
          path="/main"
          exact={true}
          element={
            <Home
              // convertPrice={convertPrice}
              products={products}
              setProducts={setProducts}
            />
          }
        />
      

        <Route
          path="/product/:id"
          element={
            <Product
              // convertPrice={convertPrice}
              cart={cart}
              setCart={setCart}
            />
          }
        />

          



        <Route
          path="/cart"
          element={
            <Basket cart={cart} setCart={setCart} />
          }
        />

<Route path='/Login_form' exact element = {<Login_form />} />
<Route path='/Join_form' exact element = {<Join_form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
