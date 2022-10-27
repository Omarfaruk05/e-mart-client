import React from 'react';
import Discounts from '../Discounts/Discounts';
import Banner from '../Banner/Banner';
import DealOfWeek from '../DealOfWeek/DealOfWeek';
import ElectroAndAudio from '../ElectroAndAudio/ElectroAndAudio';
import GadgetBanner from '../GadgetBanner/GadgetBanner';
import TabletAndMobile from '../TabletAndMobile/TabletAndMobile';
import AllBrands from '../AllBrands/AllBrands';
import BestProducts from '../BestProducts/BestProducts';
import FlashSellBanner from '../FlashSellBanner/FlashSellBanner';
import ClientsComment from '../ClientsComment/ClientsComment';

const HomePage = () => {
    return (
        <div>
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
        </div>
    );
};

export default HomePage;