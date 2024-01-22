import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { TrashIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import backgroundImage from "../../../assets/banner/bg-t.png";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from "../../../redux/features/cart/cartSlice";
import { getUserInfo } from "../../../services/auth.service";

const CartItems = () => {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.cart);

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
          {cart.map((cartItem) => (
            <>
              <div className="grid justify-between items-center grid-cols-1 md:grid-cols-4 gap-2 bg-base-100 mx-2 text-center md:text-start relative">
                <div className="absolute right-2">
                  <button className="btn btn-link btn-xs">
                    <TrashIcon
                      onClick={() => dispatch(removeFromCart(cartItem._id))}
                      className="w-5 text-red-500"
                    ></TrashIcon>
                  </button>
                </div>
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
                    <button
                      onClick={() => dispatch(decreaseQuantity(cartItem))}
                      className="btn btn-sm px-3 border-2 border-gray-400"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      name=""
                      value={cartItem.quantity}
                      className="input input-sm bg-slate-200 border-gray-400  w-8 p-0 mx-1 text-center"
                      id=""
                    />
                    <button
                      onClick={() =>
                        dispatch(addToCart({ product: cartItem, quantity: 1 }))
                      }
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
          <div className="flex justify-between items-center mx-2 sm:mx-2 px-4 py-8 bg-base-100 rounded-b-lg">
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
              <span className="mr-2">Total : ৳</span>
              <span>
                {cart.reduce(
                  (total, item) => total + item.price * item.quantity + 130,
                  0
                )}
              </span>
            </h2>
          </div>
          <div className="flex justify-between">
            <div className="text-center">
              <Link to={"/"}>
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
