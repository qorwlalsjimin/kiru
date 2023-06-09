import { Main } from "../components/main/main";
// import Tradition from "../components/item/Tradition";
import Modernized from "../components/item/modernized";

const Tradition = ({ products, setProducts }) => {
  return (
    <>  
     <Modernized path ='/modernized' exact element = {<Modernized />} />,

    
  
    <Main
      products={products}
      setProducts={setProducts}
    />
</>


  );
};

export default Tradition;
