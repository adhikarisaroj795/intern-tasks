import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "./data";
import "./StarGoodle.css";

const StarGoogle = () => {
  const settings = {
    infinite: true,
    speed: 500,
    // dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="container slider-main">
      <div className="reviews-stars flex">
        <div className="rating-text">
          <strong>Excellent</strong>
        </div>
        <div className="slider-stars flex">
          <span className="slider-star"></span>
          <span className="slider-star"></span>
          <span className="slider-star"></span>
          <span className="slider-star"></span>
          <span className="slider-star"></span>
        </div>
        <div className="slider-total-review">
          <span>
            Based on <strong>29 reviews</strong>
          </span>
        </div>
        <div className="slider-g-img">
          <img
            src="https://cdn.trustindex.io/assets/platform/Google/logo.svg"
            alt=""
          />
        </div>
      </div>

      <div className="star-slider stpd">
        <Slider {...settings}>
          {data.map((d) => (
            <div className="slider-card flex hover-slide" key={d.id}>
              <div className="slider-title flex">
                <div className="slider-img">
                  <img src={d.image} alt="" />
                </div>
                <div className="slider-title-name">
                  <div className="name-holder">
                    <span>{d.name}</span>
                    <span>{d.time}</span>
                  </div>
                </div>
              </div>
              <div className="stars-desc">
                <div className="slider-stars flex mb-10">
                  <span className="slider-star small-star"></span>
                  <span className="slider-star small-star"></span>
                  <span className="slider-star small-star"></span>
                  <span className="slider-star small-star"></span>
                  <span className="slider-star small-star"></span>
                </div>
                <p>{d.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default StarGoogle;
