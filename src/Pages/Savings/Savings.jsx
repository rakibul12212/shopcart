import React from "react";
import "./Savings.css";

const Savings = () => {
  const Data = [
    {
      id: 1,
      name: "Furniture",
      img: "https://i.ibb.co/hgM3KZV/1.png",
      amount: 100,
      details: "Explore Our Furniture & Home Furnishing Range",
      backgroundColor: "#f2e4d9",
      textColor: "#cb9917",
    },
    {
      id: 2,
      name: "Hand Bag",
      img: "https://i.ibb.co/pn3cXq8/2.png",
      amount: 29,
      details: "Explore Our Furniture & Home Furnishing Range",
      backgroundColor: "#f9dcdc",
      textColor: "#961f1f",
    },
    {
      id: 3,
      name: "Books",
      img: "https://i.ibb.co/6HnpLkr/3.png",
      amount: 67,
      details: "Explore Our Furniture & Home Furnishing Range",
      backgroundColor: "#f2e4d9",
      textColor: "#94623c",
    },
    {
      id: 4,
      name: "Tech",
      img: "https://i.ibb.co/nggRT4K/4.png",
      amount: 59,
      details: "Explore Our Furniture & Home Furnishing Range",
      backgroundColor: "#d2f7ec",
      textColor: "#003d29",
    },
  ];
  return (
    <div>
      <div>
        <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
          Get Up To 70% Off
        </p>
      </div>
      <div className="savings-articles pt-10 lg:pt-20">
        {Data.map((item) => (
          <article
            key={item.id}
            style={{
              backgroundColor: item.backgroundColor,
              color: item.textColor,
            }}
            className="w-full mb-5"
          >
            <div className="article-preview px-5 py-5">
              <h3 className="font-extrabold text-xl sm:text-2xl text-red-950">
                Save
              </h3>
              <h2 className="py-2">
                <span>
                  <sup className="text-2xl sm:text-3xl font-bold">
                    <sup>$ &#x20;</sup>
                  </sup>
                </span>
                <span className="text-4xl sm:text-5xl font-bold">
                  {item.amount}
                </span>
              </h2>
              <p className="text-base sm:text-xl text-gray-500 font-normal tracking-wide">
                {item.details}
              </p>
            </div>
            <figure>
              <img
                src={item.img}
                alt="Lavender Fields"
                className="w-full h-auto"
              />
            </figure>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Savings;
