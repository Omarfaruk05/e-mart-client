import React from "react";
import BestSelling from "./BestSelling";
import Featured from "./Featured";
import TopRated from "./TopRated";

const BestProducts = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5">
          <BestSelling></BestSelling>
          <Featured></Featured>
          <TopRated></TopRated>
        </div>
      </div>
    </div>
  );
};

export default BestProducts;
