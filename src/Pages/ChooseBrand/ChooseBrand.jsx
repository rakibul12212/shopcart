import React, { useState, useEffect } from "react";

const ChooseBrand = () => {
  const data = [
    {
      id: 1,
      img: "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e560afc2c49da53521_brand%20(3)-min.png",
      title: "Staples",
      description: "Delivery with in 24 hours",
    },
    {
      id: 2,
      img: "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e58b497e41aa46b801_brand%20(8)-min.png",
      title: "Sprouts",
      description: "Delivery with in 24 hours",
    },
    {
      id: 3,
      img: "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e5eaf8533b0958cefe_brand%20(5)-min.png",
      title: "Grocery outlet",
      description: "Delivery with in 24 hours",
    },
    {
      id: 4,
      img: "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e454ac2e9d497cb531_brand%20(6)-min.png",
      title: "Mollie stones",
      description: "Delivery with in 24 hours",
    },
    {
      id: 5,
      img: "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e4707380971125e685_brand%20(4)-min.png",
      title: "Sports Basement",
      description: "Delivery with in 24 hours",
    },
    {
      id: 6,
      img: "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e460afc2193aa53511_brand%20(2)-min.png",
      title: "Container Store",
      description: "Delivery with in 24 hours",
    },
    {
      id: 7,
      img: "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e4c21faa5e03c209c5_brand%20(1)-min.png",
      title: "Target",
      description: "Delivery with in 24 hours",
    },
    {
      id: 8,
      img: "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e51eb4ad92a3e75673_brand%20(7)-min.png",
      title: "Bevmo!",
      description: "Delivery with in 24 hours",
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
    <div className="container" id="container">
      <div>
        <p className="text-4xl py-20 font-bold text-start">Choose By Brands</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {visibleData.map((item) => (
          <div
            key={item.id}
            className="bg-slate-200 p-6 flex flex-rows gap-5 rounded-2xl hover:bg-white "
          >
            <div className="flex justify-center items-center">
              <img src={item.img} alt={item.title} className="w-full" />
            </div>
            <div>
              <p className="font-bold ">{item.title}</p>
              <p>{item.description}</p>
            </div>
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

export default ChooseBrand;
