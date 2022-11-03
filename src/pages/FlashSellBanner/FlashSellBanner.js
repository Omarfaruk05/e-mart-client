import React from 'react';
import banner from "../../assets/banner/andrew-neel-369701-unsplash-1500x1000.jpg.jpeg"

const FlashSellBanner = () => {
    return (
        <div className="hero h-auto bg-fixed md:h-[60vh]" style={{backgroundImage: `url(${banner})`}}>
          <div className="hero-overlay bg-opacity-10"></div>
            <div className=" text-neutral-content">
              <div className="max-w-7xl mx-auto px-4">
                <h1 className="mb-5 text-3xl md:text-5xl font-sans  font-bold text-white ">Extraordinary Original Quality Product, Exceptional Payment system.</h1>
                <h4 className="mb-5 text-md font-serif font-medium text-neutral lg:w-[600px] ">We are providing orginal cycle parts. Here you can find original shimano products.Here you can order at any time at any palce. Ovar all we provide our best services.</h4>
                <div className='text-center w-full'>
                <button className="btn btn-primary px-12 text-white">Shop Now</button>
                </div>
              </div>
            </div>
        </div>
    );
};

export default FlashSellBanner;