import React from "react";
import "./slider.css";
import datas from "./Data";
import Slider from "react-slick";

const GoogleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div>
      <section>
        <div className="container flex review-all">
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
          <div className="slider-contentholder">
            <div className="slider-cards flex">
              {/* <Slider {...settings}> */}
              {datas.map((data) => (
                <div className="slider-card flex" key={data.id}>
                  <div className="slider-title flex">
                    <div className="slider-img">
                      <img src={data.image} alt="" />
                    </div>
                    <div className="slider-title-name">
                      <div className="name-holder">
                        <span>{data.name}</span>
                        <span>{data.time}</span>
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
                    <p>{data.description}</p>
                  </div>
                </div>
              ))}
              {/* </Slider> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GoogleSlider;
