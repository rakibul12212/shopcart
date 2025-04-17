import React from "react";


const BestSellingStore = () => {
  const Data = [
    {
      id: 1,
      title: "Staples",
      description: "Delivery with in 24 hours",
      img: "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63ea2d253f08a89912d90709_Ellipse%20287.png",
      coverImg:
        "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e62d65536b6a75698f_store%20one-min.png",
    },
    {
      id: 2,
      title: "Now Delivery",
      description: "Delivery with in 24 hours",
      img: "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63ea2d253a093c1dea9a21c7_Ellipse%20287-1.png",
      coverImg:
        "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e74bd907803dd35b4f_store%20two-min.png",
    },
    {
      id: 3,
      title: "Bevmo",
      description: "Delivery with in 24 hours",
      img: "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63ea2d25fbba384ffd156e76_Ellipse%20287-2.png",
      coverImg:
        "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e668e3265021e48a0b_store%20three-min.png",
    },
    {
      id: 4,
      title: "Quicklly",
      description: "Delivery with in 24 hours",
      img: "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63ea2d25dddbd27c9eda91b5_Ellipse%20287-3.png",
      coverImg:
        "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e6eaf8537c8058cf04_store%20four-min.png",
    },
  ];
  return (
    <div>
      <div>
        <p className="text-4xl font-bold text-start">
          Services To Help You Shop
        </p>
      </div>
      <div className="Services-articles pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Data.map((item) => (
          <div
            key={item.id}
            className="bg-slate-50 relative overflow-hidden rounded-xl"
          >
            <div
              style={{
                backgroundImage: `url(${item.coverImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "500px", // Adjust the height as needed
              }}
              className="h-full w-full absolute top-0 left-0 blur-sm opacity-50 "
            ></div>
            <div className="relative z-10 p-5 ">
              <div className="">
                <img src={item.img} alt="" />
              </div>
              <div className="ml-4">
                <h2 className="py-5">
                  <p className="text-2xl">{item.title}</p>
                </h2>
                <p className="font-bold text-slate-500">
                  Bag <sup className="font-extrabold ">&#x2E;</sup> Perfume
                </p>
                <p className="pt-5  text-red-700 ">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellingStore;