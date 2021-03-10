import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "../../Images/Slider1.jpg";

const SliderComponent = () => {
  return (
    <div >
      <Carousel>
        <Carousel.Item interval={1000}>
          <img className="d-block w-100" src={slider1} alt="First slide" style={{height:"450px"}} />
          <Carousel.Caption>
            <h3>IConnect</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default SliderComponent;
