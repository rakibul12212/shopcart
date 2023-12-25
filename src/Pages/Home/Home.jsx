import React from "react";
import Header from "../Header/Header";
import TopCategories from "../TopCategories/TopCategories";
import Savings from "../Savings/Savings";
import Cashback from "../Cashback/Cashback";
import ShopcartServices from "../ShopcartServices/ShopcartServices";
import Tbestdeal from "../Tbestdeal/Tbestdeal";
import MostSellingProduct from "../MostSellingProduct/MostSellingProduct";
import TrendingProduct from "../TrendingProduct/TrendingProduct";
import ChooseBrand from "../ChooseBrand/ChooseBrand";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <TopCategories></TopCategories>
      <Tbestdeal></Tbestdeal>
      <ChooseBrand></ChooseBrand>
      <Savings></Savings>
      <Cashback></Cashback>
      <MostSellingProduct></MostSellingProduct>
      <TrendingProduct></TrendingProduct>
      <ShopcartServices></ShopcartServices>
    </div>
  );
};

export default Home;
