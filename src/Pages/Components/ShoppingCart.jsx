import React from "react";
import { ListGroup, Button, Row, Col } from "react-bootstrap";

function ShoppingCart({ cartItems, onRemove, onUpdateQuantity }) {
  return (
    <ListGroup>
      {cartItems.map((item, index) => (
        <ListGroup.Item key={index}>
          <Row>
            <Col>{item.title}</Col>
            <Col>${item.price}</Col>
            <Col>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => onUpdateQuantity(index, e.target.value)}
                style={{ width: "50px" }}
              />
            </Col>
            <Col>
              <Button variant="danger" onClick={() => onRemove(index)}>
                Remove
              </Button>
            </Col>
          </Row>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default ShoppingCart;
