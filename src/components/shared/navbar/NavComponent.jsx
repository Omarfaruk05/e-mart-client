import React, { useState } from "react";
import {
  UserIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import ShopingCart from "../../../pages/ShopingCart/ShopingCart";
import Header from "../../ui/Header";
import { Link, NavLink, useNavigate } from "react-router-dom";
import LoginRegistration from "../../../pages/LoginRegistration/LoginRegistration";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./Nav";
import {
  AUTH_KEY,
  getUserInfo,
  removeUserInfo,
} from "../../../services/auth.service";
import { removeUserFromRedux } from "../../../redux/features/user/userSlice";

const NavComponent = ({ children }) => {
  const dispatch = useDispatch();
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state.cart);
  const { email } = getUserInfo();

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const handleLogout = () => {
    removeUserInfo(AUTH_KEY);
    dispatch(removeUserFromRedux());
  };
  return (
    <div className="">
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* <!-- Navbar --> */}
          <Header></Header>
          <div className="bg-slate-800 w-full sticky -top-1 z-20">
            <div className="md:mt-0 mx-auto w-full max-w-7xl text-center top-7 flex justify-between navbar">
              <div className="flex-none lg:hidden">
                <label
                  htmlFor="my-drawer-3"
                  className="btn btn-square btn-ghost"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="text-white inline-block w-6 h-6 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </label>
              </div>
              <div>
                <Link to="/">
                  <div className="flex justify-between text-xl font-bold text-primary px-2 mx-2">
                    E Mart
                  </div>
                </Link>
                <div className="hidden lg:block">
                  <Nav></Nav>
                </div>
              </div>

              <div className="hidden md:block">
                <form onSubmit={handleSearch}>
                  <input
                    type="text"
                    placeholder="Search here..."
                    className="input  w-32 md:w-60 lg:w-96"
                  />
                  <input
                    className="btn btn-primary ml-2"
                    type="submit"
                    value="Search"
                  />
                </form>
              </div>
              <div className="flex-none text-center  text-white">
                <MagnifyingGlassIcon
                  onClick={() => setShowSearch(!showSearch)}
                  className=" w-6 mr-3 block md:hidden"
                ></MagnifyingGlassIcon>

                <ul className="menu menu-horizontal">
                  {/* <!-- Navbar menu content here --> */}
                  <li>
                    <a>
                      {email ? (
                        <div className="dropdown dropdown-end">
                          <div tabIndex={1} role="button">
                            <UserIcon className=" h-6 w-6"></UserIcon>
                          </div>
                          <ul
                            tabIndex={1}
                            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-md w-52"
                          >
                            <li>
                              <NavLink
                                tabIndex={1}
                                to={"/dashboard"}
                                className=" w-full text-black h-8"
                              >
                                Dashboard
                              </NavLink>
                            </li>
                            <hr className="mx-2" />

                            <hr className="mx-2" />
                            <li onClick={handleLogout}>
                              <p className=" w-full text-black h-8">Logout</p>
                            </li>
                          </ul>
                        </div>
                      ) : (
                        <label htmlFor="login-registration-modal">
                          <span className="border border-dashed rounded-sm px-1">
                            Login
                          </span>
                        </label>
                      )}
                    </a>
                  </li>
                  <LoginRegistration></LoginRegistration>
                  <div
                    className="relative mt-3"
                    onClick={() => setShowCart(!showCart)}
                  >
                    <p>
                      <ShoppingCartIcon className=" h-6 w-6"></ShoppingCartIcon>
                    </p>
                    <p className="absolute -right-2 -top-2 mx-auto h-5 w-5  px-[3px] rounded-full  bg-red-500">
                      {cart.length}
                    </p>
                  </div>
                </ul>
              </div>
            </div>
          </div>
          {/* search form for mobile  */}
          <div
            className={
              showSearch
                ? "block w-full text-center py-2 z-30 top-30"
                : "hidden"
            }
          >
            <form>
              <input
                type="text"
                placeholder="Type here"
                className="input input-sm input-bordered w-30"
              />
              <input
                className="btn btn-sm btn-primary ml-2"
                type="submit"
                value="Serch"
              />
            </form>
          </div>
          {/* <!-- Page content here --> */}
          {children}
          <ShopingCart
            showCart={showCart}
            setShowCart={setShowCart}
          ></ShopingCart>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-60 md:w-72 bg-base-100">
            {/* <!-- Sidebar content here --> */}
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
      </div>
    </div>
  );
};

export default NavComponent;
