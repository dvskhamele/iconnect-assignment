import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Footer from "../FooterComponent/Footer";
import NavbarComponent from "../HomePage/NavbarComponent";
import ProductCard from "./ProductCard";
import "./ProductDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./MediaQueries.css";
import data from "../../ProductDetails.json";
import { NavLink } from "react-router-dom";
import Products from "../HomePage/Products";

const ProductDetail = (props) => {
  const productId = localStorage.getItem("ProductId");
  const image = localStorage.getItem("image");
  const product_name = localStorage.getItem("product_name");
  const price = localStorage.getItem("price");
  const description = localStorage.getItem("description");
  return (
    <div>
      <NavbarComponent />
      <div className="container">
        <div className="Product_detail">
          <div className="leftSide">
            <div className="leftSideFirstPart">
              <img src={image} alt="Image" />
              <h3>{product_name}</h3>
              <p id="_ptag">{description}</p>
              <p>Price:{price}</p>
            </div>
            <div className="leftSideLastPart">
              <h3>More Products</h3>
              <div className="btn_SubCategory">
                <div className="MoreProducts">
                  <Row className="mx-auto">
                    {data.map((dashBoard, index) => (
                      <Col
                        sm={12}
                        md={6}
                        lg={4}
                        className="my-3 d-flex justify-content-center"
                      >
                        <Products
                          Price={dashBoard.price}
                          image={dashBoard.image}
                          P_name={dashBoard.product_name}
                          key={index}
                          id={index}
                          Description={dashBoard.Description}
                          cardHeight={"11rem"}
                          ImageHeight={"11rem"}
                          TitleSize={"12px"}
                          CardBodyPadding={"0.6rem"}
                        />
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>
            </div>
          </div>
          <div className="rightSide">
            <div className="quantityDropdown">
              Quantity:&nbsp;
              <select name="Quantity" id="Quantity">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="rightButton1">
              <button
                className="btn btn-warning"
                style={{ position: "relative" }}
              >
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  style={{
                    position: "absolute",
                    left: "4",
                    top: "25%",
                    fontSize: "1.3rem",
                    marginRight: "5px",
                  }}
                />
                Add to Cart
              </button>
            </div>
            <div className="rightButton2">
              <button className="btn" style={{ position: "relative" }}>
                <FontAwesomeIcon
                  icon={faPlay}
                  style={{
                    position: "absolute",
                    left: "4",
                    top: "25%",
                    fontSize: "1.3rem",
                    marginRight: "5px",
                  }}
                />
                Buy Now
              </button>
            </div>
            <div className="productInfo">
              <>
                <p>
                  <b>Manufacturer: </b>
                  Xtore
                </p>
              </>
              <>
                <p>
                  <b>Manufacturer Email: </b>
                  in.xtore@gmail.com
                </p>
              </>
              <>
                <p>
                  <b>ASIN: </b>
                  B08GJWH9GH
                </p>
              </>
              <>
                <p>
                  <b>Item part number: </b>
                  LIFEHACKS_38R_3M_3F
                </p>
              </>
              <>
                <p>
                  <b>Country of Origin: </b>
                  India
                </p>
              </>
              <>
                <p>
                  <b>Department: </b>
                  Unisex
                </p>
              </>
              <>
                <p>
                  <b>Item Weight: </b>
                  90 g Item
                </p>
              </>
              <>
                <p>
                  <b>Dimensions LxWxH: </b>
                  10 x 12 x 2 Centimeters
                </p>
              </>
              <>
                <p>
                  <b>Net Quantity: </b>
                  3.00 Unit
                </p>
              </>
              <>
                <p>
                  <b>Included Components: </b>3 x mask 3 x Filters
                </p>
              </>
              <>
                <p>
                  <b>Generic Name: </b>
                  Cloth Mask
                </p>
              </>
            </div>

            {/* <h3>Get in touch with the seller</h3>
            <p>
              Hi, i'm interested in "{product_name}". <span>Is this still available?</span>
            </p>
            <a className="btn btn-dark">Send Message</a>
            <h4>Similar Ads</h4>
            <div>
              <Card
                style={{
                  backgroundColor:"#2a9d8e",
                  color:"white",
                  margin:"1rem 0rem",
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
              <Card
                style={{
                  backgroundColor:"#2a9d8e",
                  color:"white",
                  margin:"1rem 0rem",
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
              <Card
                style={{
                  backgroundColor:"#2a9d8e",
                  color:"white",
                  margin:"1rem 0rem",
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
              <Card
                style={{
                  backgroundColor:"#2a9d8e",
                  color:"white",
                  margin:"1rem 0rem",
                    width: "9rem",
                  height: "9rem",
                  textAlig9rem: "center",
                  borderRadius: "8px",
                }}
              >
                <Card.Body className="d-flex align-items-center justify-content-center">
                  <Card.Title>Products</Card.Title>
                </Card.Body>
              </Card>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
