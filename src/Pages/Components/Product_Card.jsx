import React from "react";
import { Card, Button } from "react-bootstrap";

function ProductCard({ image, title, price, onAddToCart }) {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Img variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>${price}</Card.Text>
        <Button variant="primary" onClick={onAddToCart}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
