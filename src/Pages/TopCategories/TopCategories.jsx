import React from "react";
import "./TopCategories.css";

const TopCategories = () => {
  const Data = [
    {
      id: 1,
      name: "Furniture",
      img: "https://i.ibb.co/2ndkxrZ/Furniture.png",
    },
    {
      id: 2,
      name: "Hand Bag",
      img: "https://i.ibb.co/cYtVjyy/Hand-Bag.png",
    },
    {
      id: 3,
      name: "Books",
      img: "https://i.ibb.co/0nDb3sr/Books.png",
    },
    {
      id: 4,
      name: "Tech",
      img: "https://i.ibb.co/QPDb5qx/Tech.png",
    },
    {
      id: 5,
      name: "Sneakers",
      img: "https://i.ibb.co/F4xd9kQ/Sneakers.png",
    },
    {
      id: 6,
      name: "Travel",
      img: "https://i.ibb.co/k0C44yh/Travel.png",
    },
  ];
  return (
    <div className="container mt-20">
      <p className="text-5xl font-bold text-start">Shop Our Top Categories</p>
      <div className="category-articles pt-20">
        {Data.map((item) => (
          <article key={item.id}>
            <figure>
              {/* Use the actual image path from the item */}
              <img src={item.img} alt={item.name} />
            </figure>
            <div className="article-preview p-1 flex bg-none justify-center">
              <h2>{item.name}</h2>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
