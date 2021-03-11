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
import Products from "./Products";
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
                <Products
                  Price={dashBoard.price}
                  image={dashBoard.image}
                  P_name={dashBoard.product_name}
                  key={index}
                  id={index}
                  Description={dashBoard.Description}
                  cardHeight={"18rem"}
                  ImageHeight={"15rem"}
                  TitleSize={"20px"}
                  CardBodyPadding={"1rem"}
                />
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
