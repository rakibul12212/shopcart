import Header from "../Header/Header";
import TopCategories from "../TopCategories/TopCategories";
import Savings from "../Savings/Savings";
import Cashback from "../Cashback/Cashback";
import ShopcartServices from "../ShopcartServices/ShopcartServices";
import MostSellingProduct from "../MostSellingProduct/MostSellingProduct";
import TrendingProduct from "../TrendingProduct/TrendingProduct";
import ChooseBrand from "../ChooseBrand/ChooseBrand";
import GetCashBack from "../GetCashBack/GetCashBack";
import BestDealsSorting from "../BestDealsSorting/BestDealsSorting";
import WPopularProdect from "../WPopularProdect/WPopularProdect";
import BestSellingStore from "../bestSellingStore/BestSellingStore";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <TopCategories></TopCategories>
      <TrendingProduct></TrendingProduct>
      <ChooseBrand></ChooseBrand>
      <Savings></Savings>
      <Cashback></Cashback>
      <MostSellingProduct></MostSellingProduct>
      <BestDealsSorting></BestDealsSorting>
      <GetCashBack></GetCashBack>
      <WPopularProdect></WPopularProdect>
      <BestSellingStore></BestSellingStore>
      <ShopcartServices></ShopcartServices>
    </div>
  );
};

export default Home;
