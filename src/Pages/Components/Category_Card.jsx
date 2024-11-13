import React from "react";
import { Card, Button } from "react-bootstrap";

function CategoryCard({ title, description, link }) {
  return (
    <Card style={{ width: "18rem", margin: "10px" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={link}>
          Learn More
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CategoryCard;
