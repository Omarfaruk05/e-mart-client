import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import backgroundImage from "../../../assets/banner/bg-t.png";

const Payment = () => {
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

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
              <li data-content="◉" className="step step-primary">
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
                  <label>
                    First Name:
                    <input
                      className="input input-bordered rounded-sm w-full mb-4"
                      type="text"
                      placeholder="First Name: "
                      required
                      disabled
                      value={user?.firstName}
                    />
                  </label>
                  <label>
                    Last Name:
                    <input
                      className="input input-bordered rounded-sm w-full"
                      type="text"
                      placeholder="Last Name: "
                      required
                      disabled
                      value={user?.lastName}
                    />
                  </label>
                </div>
                <div></div>
                <div>
                  <label>Town / City:</label>
                  <input
                    className="input input-bordered rounded-sm w-full mb-4"
                    type="text"
                    name="town"
                    id=""
                    placeholder="Town / City: "
                    required
                    disabled
                    value={user?.town}
                  />
                </div>
                <div>
                  <label>Country:</label>
                  <input
                    className="input input-bordered rounded-sm w-full mb-4"
                    type="text"
                    name="country"
                    id=""
                    placeholder="Country: "
                    required
                    disabled
                    value={user?.country}
                  />
                </div>
                <div>
                  <label>Postcode / Zip:</label>
                  <input
                    className="input input-bordered rounded-sm w-full mb-4"
                    type="number"
                    name="portOrZipCode"
                    id=""
                    placeholder="Postcode / Zip: "
                    required
                    disabled
                    value={user?.portOrZipCode}
                  />
                </div>
                <div>
                  <label>Phone:</label>
                  <input
                    className="input input-bordered rounded-sm w-full mb-4"
                    type="text"
                    name="contactNumber"
                    id=""
                    placeholder="Phone: "
                    required
                    disabled
                    value={user?.contactNumber}
                  />
                </div>
                <div>
                  <label>Email:</label>
                  <input
                    className="input input-bordered rounded-sm w-full mb-4"
                    type="email"
                    name="email"
                    id=""
                    placeholder="Your Email: "
                    required
                    disabled
                    value={user?.email}
                  />
                </div>
                <div>
                  <label>Address:</label>
                  <textarea
                    className="textarea textarea-bordered rounded-sm w-full mb-4 h-32"
                    type="text"
                    name="address"
                    id=""
                    placeholder="Detail Address: "
                    required
                    disabled
                    value={user?.address}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-3xl font-bold m-4">Your Order</h1>
            <div>
              <div className="grid md:grid gap-2 justify-between items-center grid-cols-4 mx-2 rounded-t-lg p-2 bg-slate-200">
                {/* heading  */}
                <h3 className="text-normal md:text-lg font-bold uppercase col-span-2">
                  Product
                </h3>
                <h3 className="text-sm md:text-lg font-bold uppercase">
                  Quantity
                </h3>
                <h3 className="text-sm md:text-lg font-bold uppercase">
                  Total Price
                </h3>
              </div>
              <div className="border mx-2 ">
                {cart.map((cartItem) => (
                  <>
                    <div className="grid justify-between items-center grid-cols-4 md:grid-cols-4 gap-2 bg-base-100 text-center md:text-start relative px-2 hover:bg-slate-50 py-2">
                      {/* product  */}
                      <div className="col-span-2 flex items-center justify-start md:justify-start">
                        <div>
                          <h2 className="text-md font-bold">
                            {cartItem.productName.slice(0, 20)}....
                          </h2>
                          <p className="text-sm">
                            <span className="font-bold">Model:</span>{" "}
                            <span className="text-orange-500">
                              {cartItem.model}
                            </span>
                          </p>
                        </div>
                      </div>
                      {/* quantity  */}
                      <div className="md:mx-0">
                        <div className="flex gap-1 items-center w-full text-center">
                          <input
                            type="text"
                            name=""
                            value={cartItem.quantity}
                            disabled
                            className="input input-sm input-bordered w-8 p-1 mx-1 text-center"
                            id=""
                          />
                        </div>
                      </div>
                      {/* price  */}
                      <h2 className="mx-0 text-start text-md font-bold">
                        <span> ৳ </span>
                        <span>{cartItem?.price * cartItem?.quantity}</span>
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
                <div className="grid grid-cols-4 gap-2 p-2 bg-base-100">
                  <p className="text-lg font-bold col-span-3">Shipping</p>
                  <p>
                    <span> ৳ </span>
                    <span>130</span>
                  </p>
                </div>
                <hr />
                <hr />
                <div className="grid grid-cols-4 gap-2 p-2 bg-slate-200 text-xl font-bold text-orange-500">
                  <h3 className="col-span-3">Total</h3>
                  <h3>
                    <span> ৳ </span>
                    <span>
                      {cart.reduce(
                        (total, item) =>
                          total + item.price * item.quantity + 130,
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
            <Link to={"/delivery"}>
              <button className="mx-2 btn btn-outline font-bold my-4 rounded-sm">
                <span>
                  <ArrowLeftIcon className="w-5"></ArrowLeftIcon>
                </span>
                <span className="mt-1 ml-2 mr-3">Back</span>
              </button>
            </Link>
          </div>
          <div className="text-center">
            <Link to={"/receipt"}>
              <button className="mx-2 btn btn-success text-white font-bold my-4 rounded-sm">
                <span className="mt-1 mr-2 ml-3">Pay</span>
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

export default Payment;
