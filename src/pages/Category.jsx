import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import LoaderComponent from "../components/LoaderComponent/LoaderComponent";

function getProducts() {
  return axios.get("https://dummyjson.com/products?limit=10");
}

const Category = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    getProducts()
      .then((res) => {
        console.log(res.data.products)
        const dataFiltered = res.data.products.filter(item => item.category === categoryId);
        setProducts(dataFiltered);
      })
      .catch((err) => {})
      .finally(() => setLoading(false));
  }, [categoryId]);

  return loading ? (
    <LoaderComponent />
  ) : (
    <ItemListContainer productsData={products} />
  );
};

export default Category;
