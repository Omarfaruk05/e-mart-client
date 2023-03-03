import { StarIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart } from "../../features/cart/cartSlice";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateToProductDetails = (id) => {
    navigate(`product/${id}`);
  };

  return (
    <div>
      <div className="bg-base-100 rounded-sm shadow-sm hover:shadow-lg mb-8 relative">
        <div
          className="h-[560px] md:h-[380px]"
          onClick={() => navigateToProductDetails(product?._id)}
        >
          <div className="">
            <div>
              <img
                className=" mx-auto rounded-t-sm"
                src={product?.productImage[0]}
                alt=""
              />
            </div>
            <div className="px-3">
              <h3 className="text-normal sm:text-sm font-bold text-gray-600">
                {product?.productName.slice(0, 20)} ...
              </h3>
              <h2 className="text-2xl font-semibold text-green-500">
                <span className="font-normal">৳ </span>
                {product?.price}
              </h2>
              <div className="flex justify-start items-center my-2">
                <StarIcon className="h-5 w-5 text-orange-400"></StarIcon>
                <StarIcon className="h-5 w-5 text-orange-400"></StarIcon>
                <StarIcon className="h-5 w-5 text-orange-400"></StarIcon>
                <StarIcon className="h-5 w-5 text-orange-400"></StarIcon>
                <StarIcon className="h-5 w-5 text-gray-300"></StarIcon>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center absolute bottom-0 w-full">
          <Link to={"/delivery"}>
            {" "}
            <button
              onClick={() => dispatch(addToCart({ product, quantity: 1 }))}
              className="btn btn-sm rounded-sm w-full text-sm btn-primary px-2 py-1 mb-2 uppercase font-semibold font"
            >
              Buy Now
            </button>
          </Link>
          <button
            onClick={() => dispatch(addToCart({ product, quantity: 1 }))}
            className="btn btn-sm rounded-sm w-full btn-primary text-sm py-1 px-2 uppercase font-semibold font"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
