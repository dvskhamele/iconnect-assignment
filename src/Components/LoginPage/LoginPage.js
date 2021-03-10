import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { url } from "../GlobalUrl/GlobalUrl";
import "./LoginPage.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function LoginAPI() {
    await axios
      .post(url + "/api/v1/user/login/", {
        email,
        password,
      })
      .then((res) => {
        console.log("Login", res);
        console.log("res", res.data.accessToken);
        localStorage.setItem("token", res.data.accessToken);
        if (res.status === 200) {
          alert(res.data.message);
          localStorage.setItem("Status",res.status);
          window.location.replace("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <div className="LoginContainer">
        <div className="LeftPanel">
          <div className="InTab">
            <NavLink to="/">
              <label>Login</label>
            </NavLink>
            <NavLink to="/Signup">
              <label>Signup</label>
            </NavLink>
          </div>
          <div className="InputCol">
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
            <button className="ButtonProcced" onClick={LoginAPI}>
              Proceed
            </button>
          </div>
        </div>
        <div className="RightPanel">
          <button>Google</button>
          <button>FaceBook</button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
