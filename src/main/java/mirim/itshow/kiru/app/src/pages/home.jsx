import { Main } from "../components/main/main";
// import Tradition from "../components/item/Tradition";
import Modernized from "../components/item/modernized";

const Tradition = ({ convertPrice, products, setProducts }) => {
  return (
  
    // <Modernized path ='/modernized' exact element = {<Modernized />} />,


    

    <Main
      convertPrice={convertPrice}
      products={products}
      setProducts={setProducts}
    />
  );
};

export default Tradition;
