// import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import styles from "./ItemListContainer.module.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ItemListContainer = ({ greeting }) => {
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("https://dummyjson.com/products")
  //     .then((res) => setProducts(res.data.products))
  //     .catch((err) => console.log(err));
  // }, []);

  // return products.map((product) => {
  //   return (
  //     <Card style={{ width: "18rem" }} key={product.id}>
  //       <Card.Img variant="top" src={product.thumbnail} />
  //       <Card.Body>
  //         <Card.Title>{product.title}</Card.Title>
  //         <Card.Text>
  //           {product.description}
  //         </Card.Text>
  //       </Card.Body>
  //     </Card>
  //   );
  // });
  return <div>{greeting}</div>
};

export default ItemListContainer;
