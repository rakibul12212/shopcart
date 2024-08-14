import React, { useState, useEffect } from "react";
import "./BestDealsSorting.css";

const BestDealsSorting = () => {
  const data = [
    {
      id: 1,
      name: "Laptop sleeve",
      price: 59,
      details: "Organic Cotton also certified",
      img: "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e68b497e229146b818_leptop%20sleeve-min.png",
    },
    {
      id: 2,
      name: "AirPods Max",
      price: 559,
      details: "perfect balance of audio",
      img: "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e4aed3c6720e446aa1_airpod%20max-min.png",
    },
    {
      id: 3,
      name: "Flower Laptop Sleeve",
      price: 39,
      details: "15 in.x10 in.-Flap top closure",
      img: "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e55cc9361a8ecce6d4_flower%20leptop%20sleeve-min.png",
    },
    {
      id: 4,
      name: "Water Bottle",
      price: 19,
      details: "air purifier,stained veneer/black",
      img: "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e78b497e3a5646b82f_water%20pot-min.png",
    },
    {
      id: 5,
      name: "MacBook sleeve",
      price: 59,
      details: "Organic Cotton also certified",
      img: "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e563db5560c31bbfce_leptop%20sleeve%20macbook-min.png",
    },
    {
      id: 6,
      name: "Macbook pro 13",
      price: 1099,
      details: "256,8core GPU,8 GB",
      img: "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e61eb4ad4af6e75689_macbook%2013-min.png",
    },
    {
      id: 7,
      name: "HomePod mini",
      price: 59,
      details: "5 Colors Available",
      img: "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e563db5507951bbfbe_homepad-mini-min.png",
    },
    {
      id: 8,
      name: "Ipad Mini",
      price: 539,
      details: "Table with air purifier,stained",
      img: "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e64bd907adafd35b46_ipad%20mini-min.png",
    },
  ];
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    // Initial check and add event listener for window resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const visibleData = showAll
    ? data
    : data.slice(0, isMobile ? 3 : data.length);
  return (
    <div className="container sm:px-5 md:px-20">
      <div>
        <p className="text-4xl py-20 font-bold text-start">
          Today's Best Deals For You!
        </p>
      </div>
      <div
        id="btn-group"
        className=" pb-5 pr-16 grid grid-cols-3 md:grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 gap-4 "
      >
        <button className="w-full lg:w-full rounded-full border border-black p-2 text-sm font-base transition hover:bg-green-900 hover:text-white hover:border-none">
          Gadgets
        </button>
        <button className="w-full rounded-full border border-black p-2 text-sm font-base transition hover:bg-green-900 hover:text-white hover:border-none">
          Toys
        </button>
        <button className="w-full rounded-full border border-black p-2 text-sm font-base transition hover:bg-green-900 hover:text-white hover:border-none">
          Education
        </button>
        <button className="w-full rounded-full border border-black p-2 text-sm font-base transition hover:bg-green-900 hover:text-white hover:border-none">
          Beauty
        </button>
        <button className="w-full rounded-full border border-black p-2 text-sm font-base transition hover:bg-green-900 hover:text-white hover:border-none">
          Fitness
        </button>
        <button className="w-full rounded-full border border-black p-2 text-sm font-base transition hover:bg-green-900 hover:text-white hover:border-none">
          Sneakers
        </button>
      </div>

      <div
        id="card"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        {visibleData.map((item) => (
          <div key={item.id}>
            <a href="#" className="group relative block  overflow-hidden">
              <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                <span className="sr-only">Wishlist</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>

              <img
                src={item.img}
                alt={item.name}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72 bg-slate-200 rounded-2xl"
              />

              <div className="relative bg-white">
                <div className="flex justify-between pt-5">
                  <h3 className="text-lg font-bold text-gray-900">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-lg font-semi-bold text-gray-700">
                    <sup>$</sup> {item.price}
                  </p>
                </div>
                <div>
                  <p className="text-base tracking-wide mt-2">{item.details}</p>
                </div>
                <div className="rating">
                  <input value="5" name="rating" id="star5" type="radio" />
                  <label htmlFor="star5"></label>
                  <input value="4" name="rating" id="star4" type="radio" />
                  <label htmlFor="star4"></label>
                  <input value="3" name="rating" id="star3" type="radio" />
                  <label htmlFor="star3"></label>
                  <input value="2" name="rating" id="star2" type="radio" />
                  <label htmlFor="star2"></label>
                  <input value="1" name="rating" id="star1" type="radio" />
                  <label htmlFor="star1"></label>
                </div>
                <form className="mb-10">
                  <button className="w-full md:w-1/2  xl:w-1/3 rounded-full border border-black p-2 text-sm font-base transition hover:bg-green-900 hover:text-white hover:border-none">
                    Add to Cart
                  </button>
                </form>
              </div>
            </a>
          </div>
        ))}
      </div>
      {isMobile && !showAll && (
        <div className="flex justify-center">
          <button
            className="border-2 hover:bg-green-900 hover:text-white px-4 py-2 rounded-full mt-4"
            onClick={() => setShowAll(true)}
          >
            See All
          </button>
        </div>
      )}
    </div>
  );
};

export default BestDealsSorting;
