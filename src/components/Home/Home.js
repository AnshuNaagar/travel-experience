import React from "react";
import "./Home.css";
import Bgimage from "./svg/1.jpg";
import Button from "@mui/material/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SecondImg from "./svg/2mg.jpg";
import ThirdImg from "./svg/3mg.jpg";
import FourthImg from "./svg/4mg.jpg";
const Home = (props) => {
  return (
    <>
      <div className="container-fluid" id="firstContainer">
        <img
          src={Bgimage}
          alt="background image"
          className="img-responsive"
          id="backgroundImage"
        />
        <div className="container-xxl" id="textContainer">
          <h1 id="headingFirst">
            Create a Travel
            <br />
            Experience <br />
            With us
          </h1>
          <Button variant="contained" id="frontButton">
            Explore now
          </Button>
        </div>
      </div>
      <div className="container-fluid" id="second_container_slider">
        <h3 id="second_container_heading">
          Get an awesome travel experience with us
        </h3>
        <div className="container my-5" id="slider_Card">
          <Swiper
            spaceBetween={50}
            delay={5000}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide id="slider_container" className="container">
              <img id="sliderImage" src={Bgimage} alt="vars"></img>
              <div id="text-slider"><h1>Hangout on beach</h1></div>
            </SwiperSlide>
            <SwiperSlide id="slider_container" className="container">
              <img id="sliderImage" src={SecondImg} alt="vars"></img>
            </SwiperSlide>
            <SwiperSlide id="slider_container" className="container">
              <img id="sliderImage" src={ThirdImg} alt="vars"></img>
            </SwiperSlide>
            <SwiperSlide id="slider_container" className="container">
              <img id="sliderImage" src={FourthImg} alt="vars"></img>
            </SwiperSlide>
            <ul id="preview_container_text">
              <li><p>Slide to watch</p></li>
            </ul>
          </Swiper>
        </div>
      </div>
      <div className="container-fluid" id="third_container">
          <h1 className="my-5 mx-5">Stylus</h1>
        <div className="container" id="img_mover-card01">
          <img src={FourthImg} alt="interaction>container" id="stylus_image" />
        </div>
      </div>
    </>
  );
};

export default Home;
