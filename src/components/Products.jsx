import { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../features/Products/productsSlice'


const Products = () => {

  const { products, isLoading, isError, error } = useSelector(state => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  let content;

  if (isLoading) {
    content = <span className="loading loading-dots loading-xl"></span>
  }
  if (!isLoading && isError) {
    content = 
      <div className="alert alert-info">
        <span>{error}</span>
      </div>
    
  }
  if (!isLoading && !isError && products.length === 0) {
    content = <h1>No Products Found!</h1>
  }
  if (!isLoading && !isError && products.length > 0) {
    content = 
    <div id="products" className="container mx-auto py-12">
      <h2 className="text-4xl font-bold text-center pt-4 pb-12">Grab Your Favourite Products</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
        {products.map(product => (
          <ProductCard key={product.unique_id} product={product} />
        ))}
      </div>

    </div>
  }

  return (
    <div>
      {content}
    </div>
  );
};

export default Products;