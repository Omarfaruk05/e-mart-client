import React from 'react';
import Discounts from '../Discounts/Discounts';
import Banner from '../Banner/Banner';
import Nav from '../Nav/Nav';

const HomePage = () => {
    return (
        <div>
            <Nav></Nav>
            <Banner></Banner>
            <Discounts></Discounts>
        </div>
    );
};

export default HomePage;