import React from 'react'
import { getProducts } from '../services/service';

export const useProducts = () => {
    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        getProducts()
          .then((res) => {
            setProducts(res.data.products);
            
          }) 
          .catch((err) => {})
          .finally(() => setLoading(false));
      }, []);
  return {products, loading}
}