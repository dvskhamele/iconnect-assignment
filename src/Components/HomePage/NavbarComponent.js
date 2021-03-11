import React from "react";
import { Image, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import user from "../../Images/user.jpg";
import LoginPage from "../LoginPage/LoginPage";
import SignUpPage from "../LoginPage/SignUpPage";
import { Redirect, Route, Switch } from "react-router-dom";

const NavbarComponent = () => {
  const Username = localStorage.getItem("Username");

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <NavLink to="/Home">
          <Navbar.Brand>IConnect</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link>Category One</Nav.Link>
            <Nav.Link>Category Two</Nav.Link>
            <Nav.Link>Category Three</Nav.Link>
            <Nav.Link>Category Four</Nav.Link>
            <Nav.Link>Category Five</Nav.Link>
            <Nav.Link>Category Six</Nav.Link>
          </Nav>
          <Nav>
            {Username ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                <Nav.Link>
                  Hi, {Username}
                  <Image
                    src={user}
                    roundedCircle
                    style={{
                      border: "1px solid White",
                      width: "25px",
                      height: "25px",
                      marginLeft: "1rem",
                    }}
                  />
                </Nav.Link>
              </div>
            ) : (
              <div style={{ display: "flex", alignItems: "center" }}>
                <NavLink className="nav-link" exact to="/login">
                  Login
                </NavLink>
                <NavLink className="nav-link" exact to="/Signup">
                  Signup
                </NavLink>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
