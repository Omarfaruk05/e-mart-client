import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../../assets/banner/bg-t.png";

const Fail = () => {
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
              <li data-content="X" className="step step-primary">
                <span className="text-lg uppercase mt-2 text-red-500">
                  Failed
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div>
            <p className="text-[300px] rounded-full bg-gray-200 h-[400px] w-[400px] text-center text-red-500">
              X
            </p>
            <p className="text-xl font-semibold text-center mt-4 bg-red-500  rounded-md py-2">
              Order Failed
            </p>
          </div>
        </div>
        <div>
          <div className="text-center">
            <Link to={"/"}>
              <button className="mx-2 btn btn-warning text-white font-bold my-4 rounded-sm">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fail;
