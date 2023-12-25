import React from "react";
import "./TrendingProduct.css";
const TrendingProduct = () => {
  const Data = [
    {
      id: 1,
      title: "Furniture Village",
      description: "Delivery with in 24 hours",
      img: "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e6cd3678e82164f755_furniture%20village-min.png",
    },
    {
      id: 2,
      title: "Fashion World",
      description: "Delivery with in 24 hours",
      img: "https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e6037f3b456acf2024_Fashion%20world-min.png",
    },
    {
      id: 3,
      title: "Sneakers World",
      description: "Delivery with in 24 hours",
      img: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D",
    },
  ];
  return (
    <div className="container mt-20">
      <div>
        <p className="text-4xl font-bold text-start">
          Trending Products For You!
        </p>
      </div>
      <div className="Services-articles pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Data.map((item) => (
          <article key={item.id} className="bg-slate-50">
            <figure>
              <img src={item.img} alt="Lavender Fields" className="w-full" />
            </figure>
            <div className="article-preview px-2 md:px-5 py-5 bg-slate-200">
              <h2 className="py-2">
                <p className="text-2xl pr-5 font-bold">{item.title}</p>
              </h2>
              <p className="text-xl text-gray-500 font-normal tracking-wide pb-4">
                {item.description}
              </p>
              <button id="button">
                <a href="#" className="button">
                  shop Now
                </a>
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default TrendingProduct;
