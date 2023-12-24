import React from "react";
import Header from "../Header/Header";
import TopCategories from "../TopCategories/TopCategories";
import Savings from "../Savings/Savings";
import Cashback from "../Cashback/Cashback";
import ShopcartServices from "../ShopcartServices/ShopcartServices";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <TopCategories></TopCategories>
      <Cashback></Cashback>
      <Savings></Savings>
      <ShopcartServices></ShopcartServices>
    </div>
  );
};

export default Home;
