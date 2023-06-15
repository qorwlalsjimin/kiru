import { ProductList } from "../components/product_list/ProductList";


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
