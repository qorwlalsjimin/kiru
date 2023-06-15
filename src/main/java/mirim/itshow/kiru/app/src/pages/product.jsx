import { Detail } from "../components/product_detail/Detail";

const product = ({ convertPrice, cart, setCart }) => {
  return <Detail convertPrice={convertPrice} cart={cart} setCart={setCart} />;
};

export default product;
