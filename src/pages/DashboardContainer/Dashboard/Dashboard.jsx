import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <div>
      <div>
        <div className="flex">
          {/* sidebar  */}
          <div
            className={` bg-slate-800 h-screen sticky top-14 text-white p-3 ${
              showDrawer ? "w-8" : "w-60"
            } pr-6`}
          >
            <div
              className={`flex justify-center flex-col gap-2 ${
                showDrawer && "w-0"
              } overflow-hidden`}
            >
              <NavLink
                to={"/dashboard"}
                className=" btn bg-slate-900 border-none text-white"
              >
                Home
              </NavLink>
              <NavLink
                to={"/dashboard/my-orders"}
                className="btn bg-slate-900 border-none text-white"
              >
                My Orders
              </NavLink>
            </div>
            <div className="absolute right-1 top-[40%]">
              <ChevronDoubleRightIcon
                onClick={() => setShowDrawer(!showDrawer)}
                className="w-5 h-5"
              />
            </div>
          </div>
          <div className="w-full bg-gray-100 p-3">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
