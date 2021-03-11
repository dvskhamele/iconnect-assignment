import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const ProductCard = () => {
  return (
    <>
      <Col sm={4} md={4} lg={4} className="my-2 d-flex justify-content-center">
        <Card
          style={{
            backgroundColor:"#2a9d8e",
            color:"white",
            width: "9rem",
            height: "9rem",
            textAlign: "center",
            borderRadius: "8px",
          }}
        >
          <Card.Body className="d-flex align-items-center justify-content-center">
            <Card.Title>Products</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ProductCard;
