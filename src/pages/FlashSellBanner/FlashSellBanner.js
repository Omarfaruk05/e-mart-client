import React from "react";
import banner from "../../assets/banner/andrew-neel-369701-unsplash-1500x1000.jpg.jpeg";

const FlashSellBanner = () => {
  return (
    <div
      className="hero h-auto bg-fixed md:h-[60vh]"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="hero-overlay bg-opacity-10"></div>
      <div className=" text-neutral-content">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="mb-5 text-3xl md:text-5xl font-sans  font-bold text-white ">
            Extraordinary Original Quality Product, Exceptional Payment system.
          </h1>
          <h4 className="mb-5 text-md font-serif font-medium text-neutral lg:w-[600px] ">
            We are providing orginal cycle parts. Here you can find original
            shimano products.Here you can order at any time at any palce. Ovar
            all we provide our best services.
          </h4>
          <div className="text-center w-full">
            <div class="relative inline-block text-lg group cursor-pointer">
              <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-primary rounded-lg group-hover:text-white">
                <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span class="btn absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-primary group-hover:-rotate-180 ease"></span>
                <span class="relative">Shop Now</span>
              </span>
              <span
                class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-primary rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashSellBanner;
