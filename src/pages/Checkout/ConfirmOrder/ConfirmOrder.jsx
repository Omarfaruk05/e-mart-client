import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import backgroundImage from "../../../assets/banner/bg-t.png";

const ConfirmOrder = () => {
  const [user, setUser] = useState(false);
  const [account, setAccount] = useState(false);

  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <li data-content="◉" className="step step-primary">
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
        <div className="md:flex justify-between gap-4 bg-base-100 rounded-lg my-4 py-4">
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold m-4">Billing Details</h1>
            <div className="mx-2">
              <form>
                <div className="flex gap-4">
                  <input
                    className="input input-bordered rounded-sm w-full mb-4"
                    type="text"
                    placeholder="First Name: *"
                    required
                  />
                  <input
                    className="input input-bordered rounded-sm w-full"
                    type="text"
                    placeholder="Last Name: *"
                    required
                  />
                </div>
                <div>
                  <input
                    className="input input-bordered rounded-sm w-full mb-4"
                    type="text"
                    name="Address"
                    id=""
                    placeholder="House Number and Street Address *"
                    required
                  />
                </div>
                <div>
                  <input
                    className="input input-bordered rounded-sm w-full mb-4"
                    type="text"
                    name="town"
                    id=""
                    placeholder="Town / City: *"
                    required
                  />
                </div>
                <div>
                  <input
                    className="input input-bordered rounded-sm w-full mb-4"
                    type="text"
                    name="country"
                    id=""
                    placeholder="Country: *"
                    required
                  />
                </div>
                <div>
                  <input
                    className="input input-bordered rounded-sm w-full mb-4"
                    type="number"
                    name="portOrZipCode"
                    id=""
                    placeholder="Postcode / Zip: *"
                    required
                  />
                </div>
                <div>
                  <input
                    className="input input-bordered rounded-sm w-full mb-4"
                    type="text"
                    name="contactNumber"
                    id=""
                    placeholder="Phone: *"
                    required
                  />
                </div>
                <div>
                  <textarea
                    className="textarea textarea-bordered rounded-sm w-full mb-4 h-32"
                    type="text"
                    name="address"
                    id=""
                    placeholder="Detail Address: *"
                    required
                  />
                </div>
                {!user && (
                  <div className="flex gap-2 my-3">
                    <input
                      onClick={() => setAccount(!account)}
                      type="checkbox"
                      className="checkbox"
                    />
                    <label>Already Have an Account?</label>
                  </div>
                )}

                <div>
                  <div>
                    <input
                      className="input input-bordered rounded-sm w-full mb-4"
                      type="email"
                      name="email"
                      id=""
                      placeholder="Your Email: *"
                      required
                    />
                  </div>
                  {!user && (
                    <div className="flex gap-4">
                      <input
                        className="input input-bordered rounded-sm w-full mb-4"
                        type="password"
                        name="contactNumber"
                        id=""
                        placeholder="Password: *"
                        required
                      />
                      {!account && (
                        <input
                          className="input input-bordered rounded-sm w-full mb-4"
                          type="password"
                          name="contactNumber"
                          id=""
                          placeholder="Confirm Password: *"
                          required
                        />
                      )}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold m-4">Your Order</h1>
            <div>
              <div className="hidden md:grid gap-2 justify-between items-center grid-cols-4 mx-2 rounded-t-lg p-2 bg-slate-200">
                {/* heading  */}
                <h3 className="text-lg font-bold uppercase col-span-2">
                  Product
                </h3>
                <h3 className="text-lg font-bold uppercase">Quantity</h3>
                <h3 className="text-lg font-bold uppercase">Total Price</h3>
              </div>
              <div className="border mx-2 ">
                {cart.map((cartItem) => (
                  <>
                    <div className="grid justify-between items-center grid-cols-1 md:grid-cols-4 gap-2 bg-base-100text-center md:text-start relative px-2 hover:bg-slate-50 py-2">
                      {/* product  */}
                      <div className="md:col-span-2 flex items-center justify-center md:justify-start">
                        <div>
                          <h2 className="text-md font-bold">
                            {cartItem?.productName.slice(0, 20)}....
                          </h2>
                          <p className="text-sm">
                            <span>Model:</span>{" "}
                            <span className="text-orange-500">
                              {cartItem?.model}
                            </span>
                          </p>
                        </div>
                      </div>
                      {/* quantity  */}
                      <div className="mx-auto md:mx-0">
                        <div className="flex gap-1 items-center w-full text-center">
                          <input
                            type="text"
                            name=""
                            value={cartItem?.quantity}
                            disabled
                            className="input input-sm input-bordered w-8 p-1 mx-1 text-center"
                          />
                        </div>
                      </div>
                      {/* price  */}
                      <h2 className="text-md font-bold">
                        {" "}
                        <span className="inline md:hidden mr-2">
                          Total Price:
                        </span>
                        <span> ৳ </span>
                        {cartItem?.price * cartItem?.quantity}
                      </h2>
                    </div>
                    <hr className="" />
                  </>
                ))}
                <hr />
                <div className="grid grid-cols-4 gap-2 p-2 bg-base-100">
                  <p className="text-lg font-bold col-span-3">Sub-Total</p>
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
                <hr />
                <div className="grid grid-cols-4 gap-2 p-2 bg-base-100">
                  <p className="text-lg font-bold col-span-3">Shipping</p>
                  <p>
                    <span> ৳ </span>
                    <span>130</span>
                  </p>
                </div>
                <hr />
                <div className="grid grid-cols-4 gap-2 p-2 bg-slate-200 text-xl font-bold text-orange-500">
                  <h3 className="col-span-3">Total</h3>
                  <h3>
                    <span> ৳ </span>
                    <span>
                      {cart.reduce(
                        (total, item) =>
                          total +
                          item.price * item.quantity +
                          Math.round(
                            (total + item.price * item.quantity) * 0.01
                          ) +
                          130,
                        0
                      )}
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-center">
            <Link to={"/cart-items"}>
              <button className="mx-2 btn btn-outline font-bold my-4 rounded-sm">
                <span>
                  <ArrowLeftIcon className="w-5"></ArrowLeftIcon>
                </span>
                <span className="mt-1 ml-2 mr-3">Back</span>
              </button>
            </Link>
          </div>
          <div className="text-center">
            <Link to={"/payment"}>
              <button className="mx-2 btn btn-warning text-white font-bold my-4 rounded-sm">
                <span className="mt-1 mr-2">Confirm Order</span>
                <span>
                  <ArrowRightIcon className="w-5"></ArrowRightIcon>
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOrder;
