import { Main as ProductList } from "../components/product_list/product_list";


const Tradition = ({ products, setProducts }) => {
  return (
    <>  
    <ProductList
      products={products}
      setProducts={setProducts}
    />
</>


  );
};

export default Tradition;
