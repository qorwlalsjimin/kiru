import { Cart } from "../components/cart/Cart";

const Basket = ({ cart, setCart, convertPrice }) => {
  return <Cart cart={cart} setCart={setCart} convertPrice={convertPrice} />;
};

export default Basket;
