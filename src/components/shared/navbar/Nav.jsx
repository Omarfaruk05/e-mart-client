import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <div
      tabIndex={0}
      className="dropdown p-2 w-52 bg-primary text-white rounded"
    >
      <label tabIndex={1}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block mb-1 mr-1 text-white w-5 h-5 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </label>
      <label tabIndex={0}>CATAGORY</label>
      <ul
        tabIndex={0}
        className="dropdown-content -ml-2 mt-2 menu shadow bg-base-100 w-52 font-normal text-sm  text-black"
      >
        <li className=" border-b disabled">
          <a>Computer & Accessories</a>
        </li>
        <li className=" border-b disabled">
          <a>Mobile & Tablet</a>
        </li>
        <li
          onClick={() => navigate("products/SmartWatch")}
          className=" border-b"
        >
          <a>Watch & Smart Watch</a>
        </li>
        <li
          onClick={() => navigate("products/Headphone")}
          className=" border-b"
        >
          <a>Audio & Headphones</a>
        </li>
        <li className=" border-b disabled">
          <a>Telivition & Desplay</a>
        </li>
        <li className=" border-b disabled">
          <a>Electronics</a>
        </li>
        <li className=" border-b disabled">
          <a>Office Supplies</a>
        </li>
        <li className="disabled">
          <a>Printer & Ink</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
