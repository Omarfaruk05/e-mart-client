import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <div>
      <div>
        <div className="flex gap-2">
          {/* sidebar  */}
          <div
            className={`relative bg-slate-800 h-screen text-white p-3 ${
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
                className="bg-slate-900 cursor-pointer tranistion duration-300 hover:bg-green-500 hover:outline hover:outline-[1px] hover:outline-dashed py-2 px-4 rounded-md"
              >
                Home
              </NavLink>
              <NavLink
                to={"/dashboard/my-orders"}
                className="bg-slate-900 cursor-pointer tranistion duration-300 hover:bg-green-500 hover:outline hover:outline-[1px] hover:outline-dashed py-2 px-4 rounded-md"
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
          <div className="w-full m-2">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
