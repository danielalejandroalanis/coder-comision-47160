import React from "react";
import { useParams } from "react-router-dom";
import { productsData } from "../json/ProductsData";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";

const Category = () => {
  const { categoryId } = useParams();

  const filter = productsData.filter((item) => item.category === categoryId);

  return (
    <ItemListContainer productsData={filter}/>
  );
};

export default Category;
