import React, { useEffect } from "react";
import Discounts from "../Discounts/Discounts";
import Banner from "../Banner/Banner";
import backgroundImage from "../../assets/banner/bg-t.png";
import DealOfWeek from "../DealOfWeek/DealOfWeek";
import ElectroAndAudio from "../ElectroAndAudio/ElectroAndAudio";
import GadgetBanner from "../GadgetBanner/GadgetBanner";
import TabletAndMobile from "../TabletAndMobile/TabletAndMobile";
import AllBrands from "../AllBrands/AllBrands";
import BestProducts from "../BestProducts/BestProducts";
import FlashSellBanner from "../FlashSellBanner/FlashSellBanner";
import ClientsComment from "../ClientsComment/ClientsComment";
import Subscribe from "../Subscribe/Subscribe";
import { getSmartWatchs } from "../../features/smartWatchs/smartWatchsSlice";
import { useDispatch } from "react-redux";
import { getHeadphones } from "../../features/headphones/headphonesSlice";
import { getMe } from "../../features/user/userSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMe());
    dispatch(getSmartWatchs("SmartWatch"));
    dispatch(getHeadphones("Headphone"));
  }, [dispatch]);
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Banner></Banner>
      <Discounts></Discounts>
      <DealOfWeek></DealOfWeek>
      <ElectroAndAudio></ElectroAndAudio>
      <GadgetBanner></GadgetBanner>
      <TabletAndMobile></TabletAndMobile>
      <GadgetBanner></GadgetBanner>
      <BestProducts></BestProducts>
      <FlashSellBanner></FlashSellBanner>
      <ClientsComment></ClientsComment>
      <AllBrands></AllBrands>
      <Subscribe></Subscribe>
    </div>
  );
};

export default HomePage;
