import { Detail } from "../components/product_detail/Detail";

const Product = ({ convertPrice, cart, setCart }) => {
  return <Detail convertPrice={convertPrice} cart={cart} setCart={setCart} />;
};

export default Product;
