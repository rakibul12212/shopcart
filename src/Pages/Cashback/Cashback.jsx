import React from "react";

const Cashback = () => {
  return (
    <div className="bg-red-50 items-center">
      <div className="container mt-20 px-20 py-20 flex items-center">
        <div id="left-content">
          <p className="font-bold text-3xl sm:text-8xl w-full sm:w-80%   text-green-800 ">
            Get 5% Cash Back
          </p>
          <p className="sm:text-2xl w-full py-10 sm:w-full  text-neutral-500 ">
            on shopcart.com
          </p>
          <button id="btn">
            <a href="#">Learn More</a>
          </button>
        </div>

        <div id="right-content">
          <img
            src="https://cdn0.erstegroup.com/gemlip/v2/vgPjpB4cBxNihsuRQGjD1Zykvs8/dam/sk/slsp/www_slsp_sk/photos/personal/cards/george-karty/3-karty-creditky.png.3a3df9774e86f652.xywh.w2800w1600w1200w950w770w570w450w360w280w220w120w64_w2800_r.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Cashback;
