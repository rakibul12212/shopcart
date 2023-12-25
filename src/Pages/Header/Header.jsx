import React from "react";
import "./Header.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const carousel = (slider) => {
  const z = 300;
  function rotate() {
    const deg = 360 * slider.track.details.progress;
    slider.container.style.transform = `translateZ(-${z}px) rotateY(${-deg}deg)`;
  }
  slider.on("created", () => {
    const deg = 360 / slider.slides.length;
    slider.slides.forEach((element, idx) => {
      element.style.transform = `rotateY(${deg * idx}deg) translateZ(${z}px)`;
    });
    rotate();
  });
  slider.on("detailsChanged", rotate);
};

const Header = () => {
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      selector: ".carousel__cell",
      renderMode: "custom",
      mode: "free-snap",
    },
    [carousel]
  );
  return (
    <div className="bg">
      <div className="container flex space-x-10">
        <div id="header-left" className="container py-8 sm:py-20">
          <h1 className="font-bold text-3xl sm:text-6xl w-75% sm:w-1/2 items-center tracking-wide text-green-800 ">
            <span>Shopping And</span>
            <span>Department Store.</span>
          </h1>
          <p className="sm:text-2xl w-full sm:w-full py-4 sm:py-8 text-neutral-500 ">
            Shopping is a bit of a relaxing hobby which is sometimes troubling
            for the bank balance.
          </p>
          <button id="btn">
            <a href="#">Learn More</a>
          </button>
        </div>

        <div
          id="header-right"
          className="container py-8 sm:py-20 hidden sm:block "
        >
          <div className="wrapper">
            <div className="scene">
              <div className="carousel keen-slider" ref={sliderRef}>
                <div className="carousel__cell number-slide1 ">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1679456062579-cc90340801db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGVhZHBob25lfGVufDB8fDB8fHww"
                    alt=""
                  />
                </div>
                <div className="carousel__cell number-slide2">
                  <img
                    src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdhdGNoJTIwcHJvdHJhaXR8ZW58MHx8MHx8fDA%3D"
                    alt=""
                  />
                </div>
                <div className="carousel__cell number-slide3">
                  <img
                    src="https://images.unsplash.com/flagged/photo-1590183030142-efad5a97612f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFjYm9vayUyMHByb3RyYWl0fGVufDB8fDB8fHww"
                    alt=""
                  />
                </div>
                <div className="carousel__cell number-slide4">
                  <img
                    src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D"
                    alt=""
                  />
                </div>
                <div className="carousel__cell number-slide5">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1673758910970-b773f66ab7b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFnfGVufDB8fDB8fHww"
                    alt=""
                  />
                </div>
                <div className="carousel__cell number-slide6">
                  <img
                    src="https://images.unsplash.com/photo-1586277419671-f34cf56500a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdhdGVyJTIwYm90dGxlfGVufDB8fDB8fHww"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
