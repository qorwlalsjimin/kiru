import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import  TopNavigationBar  from "./components/header/topNavigationBar/topNavigationBar";
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

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const convertPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <BrowserRouter>
      <TopNavigationBar/>
      


      <Routes>
        <Route
          path="/main"
          exact={true}
          element={
            <Home
              convertPrice={convertPrice}
              products={products}
              setProducts={setProducts}
            />


          }
        />




<Route
          path="/modernized"
          exact={true}
          element={
            <Modernized/> } 
            />

<Route
          path="/shoes"
          exact={true}
          element={
            <Shoes/> } 
            />


{/* <Route
          path="/Accessories"
          exact={true}
          element={
            <Accessories/> } 
            />
 */}
      

        <Route
          path="/product/:id"
          element={
            <Product
              convertPrice={convertPrice}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Basket cart={cart} setCart={setCart} convertPrice={convertPrice} />
          }
        />

<Route path='/Login_form' exact element = {<Login_form />} />
<Route path='/Join_form' exact element = {<Join_form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
