import React, { useEffect } from "react";
import Discounts from "../../components/home/Discounts";
import Banner from "../../components/home/Banner";
import backgroundImage from "../../assets/banner/bg-t.png";
import DealOfWeek from "../../components/home/DealOfWeek";
import ElectroAndAudio from "../../components/home/ElectroAndAudio";
import GadgetBanner from "../../components/home/GadgetBanner";
import TabletAndMobile from "../../components/home/TabletAndMobile";
import AllBrands from "../../components/home/AllBrands";
import BestProducts from "../../components/home/BestProducts";
import FlashSellBanner from "../../components/home/FlashSellBanner";
import ClientsComment from "../../components/home/ClientsComment";
import Subscribe from "../../components/home/Subscribe";
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
    <div
      className="-mt-4 md:mt-0"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
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
