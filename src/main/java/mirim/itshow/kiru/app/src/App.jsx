import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import  TopNavigationBar  from "./components/header/topNavigationBar/topNavigationBar";
import Home from "./pages/home";
import Product from "./pages/product";
import Basket from "./pages/basket";
import Login_form from "./components/member/Login_form";
import Join_form from "./components/member/Join_form";
// import Tradition from "./components/item/Tradition";

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
          path="/tradition"
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
