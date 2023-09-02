import React from "react";
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


const ItemDetailContainer = ({productData}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={productData.thumbnail} />
      <Card.Body>
        <Card.Title>{productData.title}</Card.Title>
        <Card.Text>{productData.description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{productData.price}</ListGroup.Item>
        <ListGroup.Item>{productData.rating}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button>Agregar el carrito</Button>
      </Card.Body>
    </Card>
  );
};

export default ItemDetailContainer;
