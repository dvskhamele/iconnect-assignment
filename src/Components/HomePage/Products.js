import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import data from "../../ProductDetails.json";

const Products = (props) => {
  const handleProductId = (
    productId,
    image,
    product_name,
    price,
    description
  ) => {
    localStorage.setItem("ProductId", productId);
    localStorage.setItem("image", image);
    localStorage.setItem("product_name", product_name);
    localStorage.setItem("price", price);
    localStorage.setItem("description", description);
  };

  return (
    <>
      <NavLink
        style={{ textDecoration: "none" }}
        to={{
          pathname: "/ProductDetail",
        }}
      >
        <Card
          style={{
            width: props.cardHeight,
            backgroundColor: "#264653",
            border: "none",
            position: "relative",
            cursor: "pointer",
            textAlign: "center",
          }}
          onClick={() => {
            handleProductId(
              props.id,
              props.image,
              props.P_name,
              props.Price,
              props.Description
            );
          }}
        >
          <span
            style={{
              padding: "0.4rem 1.4rem",
              backgroundColor: "#289e8f",
              position: "absolute",
              marginTop: "0.5rem",
              color: "white",
              fontWeight: "bold",
              borderRadius: "0px 10px 10px 0px",
              fontSize:props.TitleSize
            }}
          >
            {props.Price}
          </span>
          <Card.Img
            variant="top"
            src={props.image}
            style={{ height: props.ImageHeight }}
          />
          <Card.Body className=" text-center" style={{padding:props.CardBodyPadding, color: "white" }}>
            <Card.Title style={{fontSize:props.TitleSize}}>{props.P_name}</Card.Title>
          </Card.Body>
        </Card>
      </NavLink>
    </>
  );
};

export default Products;
