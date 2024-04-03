import React, { useContext } from "react";
import slide1 from "../images/slide1.jpg";
import slide2 from "../images/slide2.webp";
import slide3 from "../images/slide3.jpg";
import GameCarousal from "../images/GameCarousal.jpg";
import BookCarousal from "../images/BookCarousal.jpg";
import ToyCarousal from "../images/ToyCarousal.jpg";
import Itemcard from "./Itemcard";
import itemContext from "../context/items/itemContext";

const Home = () => {
  const context =useContext(itemContext);
  const {mode}=context;
  return (
    <>
    <div className={` bg-${mode} `} >
      <div id="carouselExampleCaptions" className='carousel slide carousel-fade'  data-bs-ride="carousel">
        <div className="carousel-indicators" >
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img
              src={BookCarousal}
              className="d-block w-100"
              style={{ height: "60vh" }}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Shop Books</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src={GameCarousal}
              className="d-block w-100"
              style={{ height: "60vh" }}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Essential for Gamers</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src={ToyCarousal}
              className="d-block w-100"
              style={{ height: "60vh" }}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>New Arrivals Toys</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div>
        <Itemcard/>
      </div>
      </div>
    </>
  );
};

export default Home;
