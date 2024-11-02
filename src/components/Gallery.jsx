import React from "react";
import Carousel from "react-bootstrap/Carousel";
import okpu1 from "../assets/images/okpu1.jpg";
import elder11 from "../assets/images/elder11.jpg";
import young2 from "../assets/images/young2.jpg";
import elder41 from "../assets/images/elder41.jpg";
import hat from "../assets/images/hat.jpeg";
import isiagu from "../assets/images/isiagu.jpg";

const Gallery = () => {
  return (
    <div className="container">
      {/* <hr /> */}
      <div className="container">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade h-200 "
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active h-200">
              <img src={elder11} className="d-block hslide" alt="..." />
            </div>
            <div className="carousel-item h-200">
              <img src={elder41} className="d-block hslide" alt="..." />
            </div>
            <div className="carousel-item h-200">
              <img src={young2} className="d-block hslide" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
