import React from "react";
import banner1 from "../../assets/banner/banner-home-2-2-min.jpg";
import banner2 from "../../assets/banner/banner-home-2-min.jpg";

const GadgetBanner = () => {
  return (
    <div className="max-w-7xl mx-auto md:my-12 px-2 flex justify-between items-center gap-5">
      <div className="w-full">
        <img className="w-full" src={banner1} alt="" />
      </div>
      <div className="w-full">
        <img className="w-full" src={banner2} alt="" />
      </div>
    </div>
  );
};

export default GadgetBanner;
