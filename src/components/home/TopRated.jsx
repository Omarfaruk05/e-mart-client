import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import React from "react";
import ProductCartLoader from "../shared/Loader/ProductCartLoader";
import { useGetAllProductQuery } from "../../redux/features/product/productApi";

const TopRated = () => {
  const toprated = [1, 2, 3];

  const { data, isLoading } = useGetAllProductQuery();
  const products = data?.data;

  if (isLoading) {
    toprated.map((x) => <ProductCartLoader key={x} />);
  }
  const topratedProducts = products?.slice(0, 3);
  return (
    <div>
      <div>
        <h2 className="text-3xl font-bold uppercase text-center">
          Best Selling
        </h2>
        <hr />
        {topratedProducts?.map((toprated) => (
          <div className="bg-base-100 my-8 pt-4 p-2 flex gap-3 justify-between border shadow-md">
            <div className="w-1/3">
              <img
                className="w-full"
                src={toprated?.productImage[0]}
                alt="Movie"
              />
            </div>
            <div className="w-2/3 relative">
              <h2 className="text-xl font-semibold">
                {toprated?.productName.slice(0, 15)} ...
              </h2>
              <p>
                Price: {toprated?.price}
                <span className="font-normal">৳ </span>
              </p>
              <div className="fons-semibold text-center flex justify-around gap-4 absolute bottom-1 right-2 w-full">
                <p className="text-sm cursor-pointer btn btn-sm btn-primary px-2 py-1uppercase font-semibold w-1/2 ">
                  Buy Now
                </p>
                <p className="text-sm cursor-pointer w-1/2 btn btn-sm btn-primary px-2 py-1 uppercase font-semibold">
                  <ShoppingCartIcon className="h-4 mx-auto"></ShoppingCartIcon>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRated;
