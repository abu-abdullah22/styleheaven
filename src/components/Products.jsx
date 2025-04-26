import { useEffect, useState } from "react";
import axios from 'axios';
import ProductCard from "./ProductCard";

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://admin.refabry.com/api/all/product/get')
            .then(response => { setProducts(response.data.data.data) })
            .catch(error => { console.log(error) })
    }, [])
    
    return (
        <div id="products" className="container mx-auto py-12">
            <h2 className="text-4xl font-bold text-center pt-4 pb-12">Grab Your Favourite Products</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
          {products.map(product=> (
                <ProductCard key={product.unique_id} product={product}/>
            ))}
          </div>
          
        </div>
    );
};

export default Products;