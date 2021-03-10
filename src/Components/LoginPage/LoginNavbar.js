import React from "react";
import { Image, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import user from "../../Images/user.jpg";

const LoginNavbar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <NavLink to="/" className="mx-auto">
          <Navbar.Brand >ALBALAD</Navbar.Brand>
        </NavLink>
      </Navbar>
    </div>
  );
};

export default LoginNavbar;
