import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="bg ">
      <div id="header-left" className="container py-20">
        <h1 className="font-bold text-8xl w-1/2 items-center tracking-wide text-green-800">
          <span>Shopping And</span>
          <br /> <span>Department Store.</span>
        </h1>
        <p className="text-2xl w-1/3 py-12 text-neutral-500">
          Shopping is a bit of a relexing hobby which is sometimes troubling for
          the bank balence.
        </p>
        <a className="btn" href="/">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Header;
