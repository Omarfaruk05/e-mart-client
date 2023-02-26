import React from "react";

const ProductDetailsLoader = () => {
  return (
    <div className="max-w-7xl mx-auto my-4">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 justify-between bg-base-100 p-4 rounded animate-pulse ">
        <div className="col-span-2">
          <div className="h-[400px] w-full bg-gray-200 rounded-md"></div>
          <div className="flex gap-2 mt-4 justify-center">
            <div className="w-24 h-32 bg-gray-200"></div>
            <div className="w-24 h-32 bg-gray-200"></div>
            <div className="w-24 h-32 bg-gray-200"></div>
            <div className="w-24 h-32 bg-gray-200"></div>
            <div className="w-24 h-32 bg-gray-200"></div>
          </div>
        </div>
        <div className="col-span-3 px-4">
          <div className="text-3xl h-6 rounded-full font-bold mb-4 bg-gray-200"></div>
          <div className="text-3xl h-6 w-[450px] rounded-full font-bold mb-4 bg-gray-200"></div>
          <div className="flex flex-wrap gap-4">
            <span className="rounded-full h-4 w-20 bg-gray-200 p-1 shadow-sm px-5"></span>
            <span className="rounded-full h-4 w-32 bg-gray-200 p-1 shadow-sm px-5"></span>
            <span className="rounded-full h-4 w-20 bg-gray-200 p-1 shadow-sm px-5"></span>
            <span className="rounded-full h-4 w-28 bg-gray-200 p-1 shadow-sm px-5"></span>
            <span className="rounded-full h-4 w-16 bg-gray-200 p-1 shadow-sm px-5"></span>
          </div>
          <div>
            <div className="w-72 rounded-xl h-3 bg-gray-200 mt-8 mb-4"></div>
            <ul>
              <li className="w-52 h-2 mt-2 bg-gray-200 rounded-xl"></li>
              <li className="w-48 h-2 mt-2 bg-gray-200 rounded-xl"></li>
              <li className="w-44 h-2 mt-2 bg-gray-200 rounded-xl"></li>
              <li className="w-44 h-2 mt-2 bg-gray-200 rounded-xl"></li>
              <li className="w-56 h-2 mt-2 bg-gray-200 rounded-xl"></li>
            </ul>
          </div>
          <div className=" justify-start items-center gap-4 my-4">
            <div className="flex">
              <div className="w-4 h-4 rounded-full mr-1 bg-gray-200"></div>
              <div className="w-4 h-4 rounded-full mr-1 bg-gray-200"></div>
              <div className="w-4 h-4 rounded-full mr-1 bg-gray-200"></div>
              <div className="w-4 h-4 rounded-full mr-1 bg-gray-200"></div>
              <div className="w-4 h-4 rounded-full mr-1 bg-gray-200"></div>
            </div>
            <div className="mt-4 h-4 w-72 rounded-full bg-gray-200"></div>
          </div>
          <div className="sm:flex gap-5 mt-12">
            <div className="bg-slate-200 h-36 p-2 w-full mb-4 rounded"></div>
            <div className="bg-slate-300 h-36 p-2 w-full mb-4 rounded"></div>
          </div>
          <div>
            <div className="fons-semibold text-center sm:flex items-center gap-4 mt-4">
              <div className="flex justify-center items-center gap-3">
                <div className="flex gap-1 items-center -mt-1">
                  <div className="bg-gray-200 h-12 w-16 rounded-lg"></div>
                  <div className="bg-gray-200 h-12 w-24 rounded-lg"></div>
                  <div className="bg-gray-200 h-12 w-16 rounded-lg"></div>
                </div>
                <div className="bg-gray-200 h-12 w-40 rounded-lg"></div>
              </div>
              <div className="bg-gray-200 h-12 w-40 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsLoader;
