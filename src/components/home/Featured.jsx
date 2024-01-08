import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import React from "react";
import photo from "../../assets/discount-photo/disouunt-1.png";
import ProductCartLoader from "../shared/Loader/ProductCartLoader";
import { useGetAllProductQuery } from "../../redux/features/product/productApi";

const Featured = () => {
  const featured = [1, 2, 3];

  const { data, isLoading } = useGetAllProductQuery();
  const products = data?.data;

  if (isLoading) {
    featured.map((x) => <ProductCartLoader key={x} />);
  }
  const featuredProducts = products?.slice(0, 3);
  return (
    <div>
      <div>
        <h2 className="text-3xl font-bold uppercase text-center">Featured</h2>
        <hr />
        {featuredProducts?.map((featured) => (
          <div className="bg-base-100 my-8 pt-4 p-2 flex gap-3 justify-between border shadow-md">
            <div className="w-1/3">
              <img
                className="w-full"
                src={featured?.productImage[0]}
                alt="Movie"
              />
            </div>
            <div className="w-2/3 relative">
              <h2 className="text-xl font-semibold">
                {featured?.productName.slice(0, 15)} ...
              </h2>
              <p>
                Price: {featured?.price}
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

export default Featured;
