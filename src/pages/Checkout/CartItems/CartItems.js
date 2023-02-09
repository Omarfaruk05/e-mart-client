import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../../assets/banner/bg-t.png";
import productPhoto from "../../../assets/discount-photo/disouunt-1.png";

const CartItems = () => {
  const [quantity, setQuantity] = useState(1);
  const cartItems = [1, 2, 3, 5, 6, 7, 8];

  const handleQuantity = (operator) => {
    if (operator === "increase") {
      setQuantity(quantity + 1);
      return;
    }
    if (operator === "decrease" && quantity === 1) {
      return;
    }
    if (operator === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
      return;
    }
  };

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="max-w-7xl mx-auto">
        <div className="bg-base-100 mx-2 rounded-b-lg">
          <div className="pt-10 pb-4 mb-8">
            <ul className="steps text-2xl w-full">
              <li data-content="◉" className="step step-primary">
                <span className="text-lg uppercase mt-2 text-orange-500">
                  Cart Items
                </span>
              </li>
              <li data-content="✕" className="step step-natural">
                <span className="text-lg uppercase mt-2 text-orange-500">
                  Confirm Order
                </span>
              </li>
              <li data-content="✕" className="step step-natural">
                <span className="text-lg uppercase mt-2 text-orange-500">
                  Payment
                </span>
              </li>
              <li data-content="✕" className="step step-natural">
                <span className="text-lg uppercase mt-2 text-orange-500">
                  Receipt
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* product table  */}
        <div className="rounded-lg mt-4">
          <div className="hidden md:grid justify-between items-center grid-cols-4 mx-2 rounded-t-lg p-2 bg-slate-200">
            {/* heading  */}
            <h3 className="text-lg font-bold uppercase col-span-2">Product</h3>
            <h3 className="text-lg font-bold uppercase">Quantity</h3>
            <div className="grid grid-cols-2 items-center">
              <h3 className="text-lg font-bold uppercase">Unite Price</h3>
              <h3 className="text-lg font-bold uppercase">Total Price</h3>
            </div>
          </div>
          {cartItems.map((cartItem) => (
            <>
              <div className="grid justify-between items-center grid-cols-1 md:grid-cols-4 gap-2 bg-base-100 mx-2 text-center md:text-start relative">
                <div className="absolute right-2">
                  <button className="btn btn-link btn-xs">
                    <TrashIcon className="w-5 text-red-500"></TrashIcon>
                  </button>
                </div>
                {/* product  */}
                <div className="md:col-span-2 flex items-center justify-center md:justify-start">
                  <div>
                    <img className="w-20 h-20" src={productPhoto} alt="" />
                  </div>
                  <div>
                    <h2 className="text-md font-bold uppercase">
                      Asus Zendpus 7
                    </h2>
                    <p className="text-sm">
                      <span className="font-bold">Model:</span>{" "}
                      <span className="text-orange-500">Zendpus 7</span>
                    </p>
                  </div>
                </div>
                {/* quantity  */}
                <div className="mx-auto md:mx-0">
                  <div className="flex gap-1 items-center w-full text-center">
                    <button
                      onClick={() => handleQuantity("decrease")}
                      className="btn btn-sm px-3 border-2 border-gray-400"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      name=""
                      value={quantity}
                      className="input input-sm bg-slate-200 border-gray-400  w-8 p-0 mx-1 text-center"
                      id=""
                    />
                    <button
                      onClick={() => handleQuantity("increase")}
                      className="btn btn-sm px-3 border-gray-400"
                    >
                      +
                    </button>
                  </div>
                </div>
                {/* price  */}
                <div className="mt-4 md:mt-0 md:grid grid-cols-2 items-center gap-2 ">
                  <h2 className="text-md font-bold">
                    {" "}
                    <span className="inline md:hidden mr-2">
                      Unite Price:
                    </span>{" "}
                    $120
                  </h2>
                  <h2 className="text-md font-bold">
                    {" "}
                    <span className="inline md:hidden mr-2">
                      Total Price:
                    </span>{" "}
                    $120
                  </h2>
                </div>
              </div>
              <hr className="mx-2" />
            </>
          ))}
          <div className="flex justify-between items-center mx-2 p-4 bg-base-100">
            <p className="text-lg font-bold">Discount 15%</p>
            <p>$ 12</p>
          </div>
          <hr className="mx-2" />
          <div className="flex justify-between items-center mx-2 p-4 bg-base-100">
            <p className="text-lg font-bold">Shipping</p>
            <p>$ 30</p>
          </div>
          <hr className="mx-2" />
          <div className="flex justify-between items-center mx-2 p-4 bg-base-100">
            <p className="text-lg font-bold">Vat</p>
            <p>$ 12</p>
          </div>
          <hr className="mx-2" />
          <div className="flex justify-between items-center mx-0 sm:mx-2 px-4 py-8 bg-base-100 rounded-b-lg">
            <div>
              <form className="w-40 md:w-full">
                <input
                  className="input input-bordered input-sm mr-4 w-40 md:w-60 rounded-sm"
                  type="text"
                  placeholder="Promo Code"
                />
                <input
                  className="btn btn-sm btn-primary font-bold px-5 rounded-sm mt-2"
                  type="submit"
                  value="Apply"
                />
              </form>
            </div>
            <h2 className="text-lg md:text-2xl font-bold uppercase text-orange-600">
              <span className="mr-2">Total :</span>
              <span>$ 150</span>
            </h2>
          </div>
          <div className="flex justify-between">
            <div className="text-center">
              <Link to={"/cart-items"}>
                <button className="mx-2 btn btn-outline font-bold my-4 rounded-sm">
                  <span>
                    <ArrowLeftIcon className="w-5"></ArrowLeftIcon>
                  </span>
                  <span className="mt-1 ml-2 pr-3">Back</span>
                </button>
              </Link>
            </div>
            <div className="text-center">
              <Link to={"/delivery"}>
                <button className="mx-2 btn btn-warning text-white font-bold my-4 rounded-sm">
                  <span>
                    <ShoppingCartIcon className="w-5 mr-2"></ShoppingCartIcon>
                  </span>
                  <span className="mt-1 mr-2">Proceed to Delivery</span>
                  <span>
                    <ArrowRightIcon className="w-5"></ArrowRightIcon>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
