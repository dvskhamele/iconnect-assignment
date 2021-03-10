import React from "react";
import AppStore from "../../Images/AppStore.png";
import GoogleImg from "../../Images/GoogleImg.jpg";

const Footer = () => {
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center py-5 flex-wrap"
        style={{ backgroundColor: "#2a9d8e" }}
      >
        <div
          className="d-flex  justify-content-center py-3 mx-5"
          style={{ flexDirection: "column" }}
        >
          <h5>Download the IConnect app for android and iOS.</h5>
          <h6>Buy and sell faster on the go.</h6>
        </div>
        <div className="mx-5 d-flex align-items-center justify-content-center">
          <img
            src={GoogleImg}
            className="mr-3 my-3"
            alt="Appstore"
            style={{ width: "150px", height: "55px", borderRadius: "5px" }}
          />
          <img
            src={AppStore}
            alt="Appstore"
            style={{ width: "150px", height: "60px" }}
          />
        </div>
      </div>
      <div
        className="text-center text-white p-3"
        style={{ backgroundColor: "#264653" }}
      >
        <h6>Copyright 2021 IConnect. All rights reserved</h6>
      </div>
    </>
  );
};

export default Footer;
