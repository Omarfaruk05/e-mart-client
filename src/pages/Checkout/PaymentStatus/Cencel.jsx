import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../../assets/banner/bg-t.png";

const Cencel = () => {
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
              <li data-content="!" className="step step-primary">
                <span className="text-lg uppercase mt-2 text-orange-500">
                  Cenceled
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <p className="text-[300px] rounded-full bg-yellow-200 h-[400px] w-[400px] text-center ">
              !
            </p>
            <p className="text-xl font-semibold text-center mt-4 bg-slate-300  rounded-md py-2">
              Order Cenceled
            </p>
          </div>
        </div>
        <div>
          <div className="text-center">
            <Link to={"/dashboard"}>
              <button className="mx-2 btn btn-warning text-white font-bold my-4 rounded-sm">
                Back To Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cencel;
