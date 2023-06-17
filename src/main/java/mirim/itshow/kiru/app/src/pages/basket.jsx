import { Cart } from "../components/cart/cart";


const basket = ({ cart, setCart, convertPrice }) => {
  return <Cart cart={cart} setCart={setCart} convertPrice={convertPrice} />;
};

export default basket;
