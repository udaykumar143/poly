import React from "react";
import { Modal, Button } from "react-bootstrap";

function ProductModal({ show, onHide, product }) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{product.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "100%" }}
        />
        <p>{product.description}</p>
        <h4>${product.price}</h4>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary">Add to Cart</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductModal;
