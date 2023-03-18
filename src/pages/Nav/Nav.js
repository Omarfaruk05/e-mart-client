import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 z-20 bg-green-500 hidden md:block w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-5  text-white font-semibold">
          <div className="dropdown py-2 px-12 bg-yellow-400 text-black">
            <label tabIndex={0}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block mb-1 mr-1 text-green-800 w-5 h-5 stroke-current"
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
              className="dropdown-content -ml-12 menu m-1 shadow bg-base-100 w-52 font-normal text-sm "
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
              <li>
                <a>Printer & Ink</a>
              </li>
            </ul>
          </div>
          <div>
            <button>Home</button>
          </div>
          <div>
            <button>Shop</button>
          </div>
          <div>
            <button>Blog</button>
          </div>
          <div>
            <button>Contact</button>
          </div>
          <div>
            <button>About</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
