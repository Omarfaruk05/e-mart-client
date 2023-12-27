import React from "react";
import {
  ShoppingCartIcon,
  PhoneArrowDownLeftIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

const DealInfo = () => {
  return (
    <div className="my-4 md:flex justify-center items-center lg:block gap-2 ">
      <div className="flex gap-3 justify-between items-center bg-white mb-3 p-8 py-12 mx-auto">
        <div>
          <ShoppingCartIcon className="h-16 w-16 text-green-500"></ShoppingCartIcon>
        </div>
        <div>
          <h3 className="text-lg font-semibold">FREE SHIP OVER</h3>
          <p>In $99</p>
        </div>
      </div>

      <div className="flex gap-3 justify-between items-center bg-white mb-3 p-8 py-12 mx-auto">
        <div>
          <PhoneArrowDownLeftIcon className="h-16 w-16 text-green-500"></PhoneArrowDownLeftIcon>
        </div>
        <div>
          <h3 className="text-lg font-semibold">SUPPORT ALL TIME</h3>
          <p>Free installation</p>
        </div>
      </div>

      <div className="flex gap-3 justify-between items-center bg-white mb-3 p-8 py-12 mx-auto">
        <div>
          <CurrencyDollarIcon className="h-16 w-16 text-green-500"></CurrencyDollarIcon>
        </div>
        <div>
          <h3 className="text-lg font-semibold">MONEY BACK</h3>
          <p>Refund within 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default DealInfo;
