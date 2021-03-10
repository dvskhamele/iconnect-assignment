import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Dropdown,
  Form,
  FormControl,
  InputGroup,
  Navbar,
  Row,
  Card,
} from "react-bootstrap";
import NavbarComponent from "./NavbarComponent";
import SliderComponent from "./SliderComponent";
import Footer from "../FooterComponent/Footer";
import "./Home.css";
import axios from "axios";
import { url } from "../GlobalUrl/GlobalUrl";
import data from "../../ProductDetails.json";
import { NavLink } from "react-router-dom";
const Home = () => {
  const [dashBoardArray, setDashBoardArray] = useState([]);

  // useEffect(() => {
  //   DashBoardAPI();
  // }, []);
  // async function DashBoardAPI() {
  //   await axios
  //     .get(url + "/api/v1/user/dashboard-data/")
  //     .then((res) => {
  //       console.log("DashBoardArray: ", dashBoardArray);
  //       console.log("res", res.data.dashboardData);
  //       setDashBoardArray(res.data.dashboardData);
  //       console.log("DashBoardArray: ", dashBoardArray);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

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
    <div>
      <NavbarComponent />
      <SliderComponent />
      {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#49473b",
          padding: "1.5rem ",
        }}
        className="DropdownCategories"
      >
        <div className="Categories">
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              className="bg-white text-dark"
            >
              Categories
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="SearchBox">
          <Form>
            <FormControl type="text" placeholder="What are you looking for?" />
          </Form>
        </div>
        <div className="Location">
          <Dropdown>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              className="bg-white text-dark"
            >
              Location
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div>
          <a variant="primary" className="btn btn-danger">
            S
          </a>
          <a variant="primary" className="btn btn-danger ml-2">
            Post an ad
          </a>
        </div>
      </div> */}
      <div>
        <Container>
          <h3
            style={{
              marginTop: "2.5rem",
              paddingBottom: "1rem",
              borderBottom: "4px solid #61747b",
              display: "inline-block",
            }}
          >
            Featured Products
          </h3>
          <Row className="mx-auto">
            {data.map((dashBoard, index) => (
              <Col
                sm={12}
                md={6}
                lg={4}
                className="my-3 d-flex justify-content-center"
              >
                <NavLink
                  style={{ textDecoration: "none" }}
                  to={{
                    pathname: "/ProductDetail",
                    // aboutProps: {
                    //   ProductId: dashBoard.id,
                    //   image: dashBoard.image,
                    //   product_name: dashBoard.product_name,
                    //   price: dashBoard.price,
                    // }
                  }}
                >
                  <Card
                    style={{
                      width: "18rem",
                      backgroundColor: "#264653",
                      border: "none",
                      position: "relative",
                      cursor: "pointer",
                      textAlign: "center",
                    }}
                    onClick={() => {
                      handleProductId(
                        dashBoard.id,
                        dashBoard.image,
                        dashBoard.product_name,
                        dashBoard.price,
                        dashBoard.Description
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
                      }}
                    >
                      {dashBoard.price}
                    </span>
                    <Card.Img
                      variant="top"
                      src={dashBoard.image}
                      style={{ height: "16rem" }}
                    />
                    <Card.Body
                      className=" text-center"
                      style={{ color: "white" }}
                    >
                      <Card.Title>{dashBoard.product_name}</Card.Title>
                    </Card.Body>
                  </Card>
                </NavLink>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
