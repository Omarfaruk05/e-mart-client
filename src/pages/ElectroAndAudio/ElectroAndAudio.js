import React, { useEffect } from "react";
import sidePic1 from "../../assets/discount-photo/about-1.jpg";
import sidePic2 from "../../assets/discount-photo/about-2.jpg";
import Brands from "../Brands/Brands";
import ElectroAndaudioNav from "../ElectroAndAudioNav/ElectroAndaudioNav";
import ProductCard from "../ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getSmartWatchs } from "../../features/smartWatchs/smartWatchsSlice";
import ProductCartLoader from "../Loader/ProductCartLoader";

const ElectroAndAudio = () => {
  const dispatch = useDispatch();
  const { smartWatchs, isLoading } = useSelector((state) => state.smartWatchs);
  const navItemNames = "SmartWatch";
  const num = [1, 2, 3, 4, 5, 6, 7, 8];

  useEffect(() => {
    dispatch(getSmartWatchs("SmartWatch"));
  }, [dispatch]);

  return (
    <div>
      <div className="max-w-7xl mx-auto my-12 px-2">
        <div className="md:flex justify-center gap-10">
          <div className="hidden mt-14 lg:block md:w-2/6">
            <div className="mb-2">
              <img className="w-full" src={sidePic1} alt="" />
            </div>
            <div>
              <img className="w-full" src={sidePic2} alt="" />
            </div>
          </div>
          <div className="md:w-full">
            <ElectroAndaudioNav
              navItemNames={navItemNames}
            ></ElectroAndaudioNav>
            <Brands></Brands>
            <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-5 my-4">
              {smartWatchs.status
                ? smartWatchs.data.map((product) => (
                    <ProductCard
                      product={product}
                      key={product._id}
                    ></ProductCard>
                  ))
                : num.map((x) => (
                    <ProductCartLoader key={x}></ProductCartLoader>
                  ))}
            </div>
            <div className="text-center">
              <button className=" bg-green-400 px-5 py-1 rounded-sm font-semibold uppercase">
                See More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectroAndAudio;
