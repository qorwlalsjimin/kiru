import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/header/topNavigationBar/topNavigationBar";
import Home from "./pages/home";
import Product from "./pages/product";
import Basket from "./pages/basket";
import Login_form from "./components/member/Login_form";
import Join_form from "./components/member/Join_form";
import { Mainscreen } from "./components/mainscreen/Mainscreen"
import Heart from "./pages/Heart";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const handleNavClick = async (nav, fetchData) => {
    fetchData(nav);
    // setShowMainscreen(false);
  };

  return (
    <BrowserRouter>
      {/* <TopNavigationBar/> */}
      <Header products={products} setProducts={setProducts} handleNavClick={handleNavClick} />
      {/* <Header setProducts={setProducts} /> */}

      {/* <Mainscreen /> */}

      {/* <Route path="/products" element={isMainscreenVisible && <Mainscreen />} /> */}
      <Routes>
        {/* 메인 */}
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

        {/* 상품 상세 */}
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

        {/* 장바구니 */}
        <Route
          path="/cart"
          element={
            <Basket cart={cart} setCart={setCart} />
          }
        />

        {/* 즐겨찾기 */}
        <Route path='/heart' element={<Heart />} />
        
        {/* 로그인 */}
        <Route path='/Login_form' element={<Login_form />} />

        {/* 회원가입 */}
        <Route path='/Join_form' exact
          element={<Join_form />}
        />

        {/* 메인화면 */}
        <Route path='/Mainscreen' element={<Mainscreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
