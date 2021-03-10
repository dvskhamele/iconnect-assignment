import axios from "axios";
import React, { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import Footer from "../FooterComponent/Footer";
import { url } from "../GlobalUrl/GlobalUrl";
import LoginNavbar from "./LoginNavbar";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [mobile, setMobile] = useState();

  async function SignUpAPI() {
    await axios
      .post(  url + "/api/v1/user/signup", {
        username,
        firstname,
        lastname,
        mobile,
        email,
        password,
      })
      .then((res) => {
        console.log("Login", res);
        console.log("res", res.data.accessToken);
        <Redirect to="/" />;
        // localStorage.setItem("token", res.data.accessToken);
        alert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <LoginNavbar />
      <div className="LoginContainer">
        <div className="LeftPanel">
          {/* <h3>Login / Signup</h3> */}
          <div className="InTab">
            <NavLink to="/">
              <label>Login</label>
            </NavLink>
            <NavLink to="/">
              <label>Signup</label>
            </NavLink>
          </div>
          <div className="InputCol">
            <input
              className="InputRow"
              placeholder="Username"
              type="text"
              name="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              className="InputRow"
              placeholder="Firstname"
              type="text"
              name="firstname"
              value={firstname}
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
            />
            <input
              className="InputRow"
              placeholder="LastName"
              type="text"
              name="lastname"
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
            />
            <input
              className="InputRow"
              placeholder="Mobile"
              type="number"
              name="mobile"
              value={mobile}
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />
            <input
              className="InputRow"
              placeholder="Email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              className="InputRow"
              placeholder="Password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button className="ButtonProcced" onClick={SignUpAPI}>
              Proceed
            </button>
          </div>
        </div>
        <div className="RightPanel">
          <button>Google</button>
          <button>FaceBook</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUpPage;
