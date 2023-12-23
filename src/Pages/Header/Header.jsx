import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="bg">
      <div id="header-left" className="container py-8 sm:py-20">
        <h1 className="font-bold text-4xl sm:text-7xl w-full sm:w-1/2 items-center tracking-wide text-green-800 ">
          <span>Shopping And</span>
          <br /> <span>Department Store.</span>
        </h1>
        <p className="text-lg sm:text-2xl w-full sm:w-1/2 py-4 sm:py-12 text-neutral-500 ">
          Shopping is a bit of a relaxing hobby which is sometimes troubling for
          the bank balance.
        </p>
        <button id="btn">
          <a href="#">Learn More</a>
        </button>
      </div>
    </div>
  );
};

export default Header;
