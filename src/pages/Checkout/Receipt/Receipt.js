import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import backgroundImage from "../../../assets/banner/bg-t.png";
import productPhoto from "../../../assets/discount-photo/disouunt-1.png";

const Receipt = () => {
  const cartItems = [1, 2, 3, 5, 6, 7, 8];
  const { cart } = useSelector((state) => state.cart);

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="max-w-7xl mx-auto">
        <div className="bg-base-100 rounded-b-lg">
          <div className="pt-10 pb-4 mb-8">
            <ul className="steps text-2xl w-full">
              <li data-content="✓" className="step step-primary">
                <span className="text-lg uppercase mt-2 text-primary">
                  Cart Items
                </span>
              </li>
              <li data-content="✓" className="step step-primary">
                <span className="text-lg uppercase mt-2 text-green-500">
                  Confirm Order
                </span>
              </li>
              <li data-content="✓" className="step step-primary">
                <span className="text-lg uppercase mt-2 text-green-500">
                  Payment
                </span>
              </li>
              <li data-content="◉" className="step step-primary">
                <span className="text-lg uppercase mt-2 text-orange-500">
                  Receipt
                </span>
              </li>
            </ul>
          </div>
        </div>
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
          {cart.map((cartItem) => (
            <>
              <div className="grid justify-between items-center grid-cols-1 md:grid-cols-4 gap-2 bg-base-100 mx-2 text-center md:text-start relative">
                {/* product  */}
                <div className="md:col-span-2 flex items-center justify-center md:justify-start">
                  <div>
                    <img
                      className="w-20 h-20"
                      src={cartItem?.productImage}
                      alt=""
                    />
                  </div>
                  <div>
                    <h2 className="text-md font-bold uppercase">
                      {cartItem?.productName.slice(0, 20)}.....
                    </h2>
                    <p className="text-sm">
                      <span className="font-bold">Brand:</span>{" "}
                      <span className="text-orange-500">{cartItem?.brand}</span>
                    </p>
                  </div>
                </div>
                {/* quantity  */}
                <div className="mx-auto md:mx-0">
                  <div className="flex gap-1 items-center w-full text-center">
                    <input
                      type="text"
                      name=""
                      value={cartItem.quantity}
                      className="input input-sm bg-slate-200 border-gray-400  w-8 p-0 mx-1 text-center"
                      disabled
                    />
                  </div>
                </div>
                {/* price  */}
                <div className="mt-4 md:mt-0 md:grid grid-cols-2 items-center gap-2 ">
                  <h2 className="text-md font-bold">
                    {" "}
                    <span className="inline md:hidden mr-2 uppercase text-semibold">
                      Unite Price: ৳
                    </span>
                    <span className="hidden md:inline-block"> ৳ </span>
                    <span>{cartItem.price}</span>
                  </h2>
                  <h2 className="text-md font-bold">
                    {" "}
                    <span className="inline md:hidden mr-2 uppercase text-semibold">
                      Total Price: ৳{" "}
                    </span>
                    <span className="hidden md:inline-block"> ৳ </span>{" "}
                    <span>{cartItem.price * cartItem.quantity}</span>
                  </h2>
                </div>
              </div>
              <hr className="mx-2" />
            </>
          ))}
          <hr className="mx-2" />
          <div className="grid grid-cols-8 gap-2 p-2 bg-base-100 mx-2">
            <p className="text-lg font-bold col-span-7">Sub-Total</p>
            <p>
              <span> ৳ </span>
              <span>
                {cart.reduce(
                  (total, item) => total + item.price * item.quantity,
                  0
                )}
              </span>
            </p>
          </div>
          <hr className="mx-2" />
          <div className="grid grid-cols-8 gap-2 p-2 bg-base-100 mx-2">
            <p className="text-lg font-bold col-span-7">Shipping</p>
            <p>
              <span> ৳ </span>
              <span>130</span>
            </p>
          </div>
          <hr className="mx-2" />
          <div className="grid grid-cols-8 gap-2 p-2 bg-slate-200 font-bold text-xl text-orange-600 mx-2">
            <p className="col-span-7">Total</p>
            <p>
              <span> ৳ </span>
              <span>
                {cart.reduce(
                  (total, item) =>
                    total +
                    item.price * item.quantity +
                    Math.round((total + item.price * item.quantity) * 0.01) +
                    130,
                  0
                )}
              </span>
            </p>
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
              <Link to={""}>
                <button className="mx-2 btn btn-warning text-white font-bold my-4 rounded-sm">
                  Print
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
