import React from "react";
import "./ShopcartServices.css";

const ShopcartServices = () => {
  const Data = [
    {
      id: 1,
      title: "Frequently Asked Question",
      description: "Updates on safe Shopping in our Stores",
      img: "https://i.ibb.co/6s7tf45/Questions.png",
    },
    {
      id: 2,
      title: "Online Payment Process",
      description: "Updates on safe Shopping in our Stores",
      img: "https://i.ibb.co/cD301Vk/Payment.png",
    },
    {
      id: 3,
      title: "Home Delivery Options",
      description: "Updates on safe Shopping in our Stores",
      img: "https://i.ibb.co/Z8Y0Ljj/Delivery.png",
    },
  ];
  return (
    <div>
      <div>
        <p className="text-4xl font-bold text-start">
          Services To Help You Shop
        </p>
      </div>
      <div className="Services-articles pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Data.map((item) => (
          <article key={item.id} className="bg-slate-50">
            <div className="article-preview px-4 md:px-10 py-10">
              <h2 className="py-5">
                <p className="text-2xl pr-5 font-bold">{item.title}</p>
              </h2>
              <p className="text-xl text-gray-500 font-normal tracking-wide">
                {item.description}
              </p>
            </div>
            <figure>
              <img src={item.img} alt="Lavender Fields" className="w-full" />
            </figure>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ShopcartServices;
