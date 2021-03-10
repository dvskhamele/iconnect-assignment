import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Footer from "../FooterComponent/Footer";
import NavbarComponent from "../HomePage/NavbarComponent";
import SliderComponent from "../HomePage/SliderComponent";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import { url } from "../GlobalUrl/GlobalUrl";

const PostAdd = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [deliveryFee, setDeliveryFee] = useState("");
  const [estimatedTimeDelivery, setEstimatedTimeDelivery] = useState("");
  const [totalPaybleAmount, setTotalPaybleAmount] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [location, setLocation] = useState("");
  const [productImage, setProductImage] = useState("");
  var fd = new FormData();

  async function PostAPI() {
    for (var key of fd.entries()) {
      console.log("888", key[0] + ", " + key[1]);
    }
    await axios
      .post(url + "/api/v1/user/add-product/", fd )

      .then((res) => {
        console.log(res);
        alert(res.data.message);
        // window.location.replace("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const sendData = () => {
    console.log("picture: ", productImage, "$$$$$$$$$$$$$$$$$$", productImage.name);

    fd.append("title", title);
    fd.append("description", description);
    fd.append("price", price);
    fd.append("deliveryFee", deliveryFee);
    fd.append("estimatedTimeDelivery", estimatedTimeDelivery);
    fd.append("totalPaybleAmount", totalPaybleAmount);
    fd.append("category", category);
    fd.append("subCategory", subCategory);
    fd.append("location", location);
    fd.append("productImage", productImage, productImage.name);

    if (fd) {
      PostAPI();
    } else {
      alert("please select image");
    }
  };
  console.log("FD", fd);

  return (
    <>
      <NavbarComponent />
      <SliderComponent />

      <div className="LoginContainer">
        <div className="LeftPanel">
          {/* <h3>Login / Signup</h3> */}

          <div className="InputCol">
            <input
              className="InputRow"
              placeholder="title"
              type="text"
              name="title"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <input
              className="InputRow"
              placeholder="description"
              type="text"
              name="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <input
              className="InputRow"
              placeholder="price"
              type="number"
              name="price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <input
              className="InputRow"
              placeholder="Delivery Fee"
              type="number"
              name="deliveryFee"
              value={deliveryFee}
              onChange={(e) => {
                setDeliveryFee(e.target.value);
              }}
            />
            <input
              className="InputRow"
              placeholder="Estimated Time Delivery"
              type="number"
              name="estimatedTimeDelivery"
              value={estimatedTimeDelivery}
              onChange={(e) => {
                setEstimatedTimeDelivery(e.target.value);
              }}
            />
            <input
              className="InputRow"
              placeholder="Total Payble Amount"
              type="number"
              name="totalPaybleAmount"
              value={totalPaybleAmount}
              onChange={(e) => {
                setTotalPaybleAmount(e.target.value);
              }}
            />
            <input
              className="InputRow"
              placeholder="category"
              type="text"
              name="category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
            <input
              className="InputRow"
              placeholder="subCategory"
              type="text"
              name="subCategory"
              value={subCategory}
              onChange={(e) => {
                setSubCategory(e.target.value);
              }}
            />
            <input
              className="InputRow"
              placeholder="location"
              type="text"
              name="location"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
            <input
              type="file"
              name="productImage"
              onChange={(e)=>{
                setProductImage(e.target.files[0])
              }}
            />
            <button className="ButtonProcced" onClick={sendData}>
              Proceed
            </button>
          </div>
        </div>
      </div>
      <div className="my-3">
        <Footer />
      </div>
    </>
  );
};

export default PostAdd;
