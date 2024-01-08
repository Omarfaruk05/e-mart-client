import React from "react";
import sidePic1 from "../../assets/discount-photo/about-1.jpg";
import sidePic2 from "../../assets/discount-photo/about-2.jpg";
import Brands from "./Brands";
import ElectroAndaudioNav from "./ElectroAndaudioNav";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductCard from "../shared/ProductCard/ProductCard";
import ProductCartLoader from "../shared/Loader/ProductCartLoader";
import { useGetAllProductQuery } from "../../redux/features/product/productApi";

const ElectroAndAudio = () => {
  const navItemNames = "SmartWatch";
  const num = [1, 2, 3, 4, 5, 6, 7, 8];
  const { data, isLoading } = useGetAllProductQuery();
  const products = data?.data;

  if (isLoading) {
    num.map((x) => <ProductCartLoader key={x} />);
  }
  console.log(products);

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
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 my-4">
              {products &&
                products.map((product) => (
                  <ProductCard product={product} key={product}></ProductCard>
                ))}
            </div>
            <div className="text-center">
              <Link to={"/products/SmartWatch"}>
                <button className=" btn btn-sm btn-primary px-5 py-1 rounded-md font-semibold uppercase">
                  See More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectroAndAudio;
