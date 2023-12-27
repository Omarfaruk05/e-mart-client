import React from "react";
import DealInfo from "./DealInfo";
import DealSlider from "./DealSlider";

const DealOfWeek = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-8 px-2">
        <h2 className="text-xl">Deal of the Week</h2>
        <div>
          <div className="lg:flex justify-center items-center gap-3">
            <DealSlider className="lg:w-3/5 h-full"></DealSlider>
            <div className="lg:w-2/5">
              <DealInfo></DealInfo>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealOfWeek;
