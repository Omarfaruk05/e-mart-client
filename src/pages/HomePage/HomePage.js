import React from 'react';
import Discounts from '../Discounts/Discounts';
import Banner from '../Banner/Banner';
import Nav from '../Nav/Nav';
import DealOfWeek from '../DealOfWeek/DealOfWeek';
import ElectroAndAudio from '../ElectroAndAudio/ElectroAndAudio';

const HomePage = () => {
    return (
        <div>
            <Nav></Nav>
            <Banner></Banner>
            <Discounts></Discounts>
            <DealOfWeek></DealOfWeek>
            <ElectroAndAudio></ElectroAndAudio>
        </div>
    );
};

export default HomePage;