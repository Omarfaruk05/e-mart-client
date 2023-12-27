import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import React from "react";
import photo from "../../assets/discount-photo/disouunt-1.png";

const Featured = () => {
  const features = [1, 2, 3];
  return (
    <div>
      <div>
        <h2 className="text-3xl font-bold uppercase">Featured</h2>
        <hr />
        {features.map((feature) => (
          <div className="bg-base-100 my-8 pt-4 p-2 flex gap-3 justify-between border shadow-md">
            <div className="w-1/3">
              <img className="w-full" src={photo} alt="Movie" />
            </div>
            <div className="w-2/3 relative">
              <h2 className="text-xl font-semibold">Asus Zendpas 7</h2>
              <p>Click the button to watch on Jetflix app.</p>
              <div className="fons-semibold text-center flex justify-around gap-4 absolute bottom-1 right-2 w-full">
                <button className="text-sm cursor-pointer px-2 py-1uppercase font-semibold w-1/2 btn btn-sm btn-primary ">
                  Buy Now
                </button>
                <button className="text-sm cursor-pointer w-1/2  btn btn-sm btn-primary px-2 py-1 uppercase font-semibold">
                  <ShoppingCartIcon className="h-4 mx-auto"></ShoppingCartIcon>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
