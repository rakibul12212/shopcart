import React from "react";

const Cashback = () => {
  return (
    <div className="bg-orange-100 sm:px-5 md:px-20">
      <div className="container mt-10 sm:mt-20 px-4 sm:px-10 py-10 sm:py-20 flex flex-col sm:flex-row items-center">
        <div id="left-content" className="text-center sm:text-left sm:w-1/2">
          <p className="font-bold text-2xl sm:text-6xl text-green-800">
            Get 15% Cash Back
          </p>
          <p className="text-lg sm:text-3xl py-5 text-neutral-500">
            on shopcart.com
          </p>
          <button className="button bg-green-900 border hover:bg-red-950 hover:text-white hover:border-none ">
            Learn more
          </button>
        </div>

        <div id="right-content" className="sm:w-1/2 mt-5 sm:mt-0">
          <img
            src="https://cdn0.erstegroup.com/gemlip/v2/vgPjpB4cBxNihsuRQGjD1Zykvs8/dam/sk/slsp/www_slsp_sk/photos/personal/cards/george-karty/3-karty-creditky.png.3a3df9774e86f652.xywh.w2800w1600w1200w950w770w570w450w360w280w220w120w64_w2800_r.webp"
            alt=""
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Cashback;
