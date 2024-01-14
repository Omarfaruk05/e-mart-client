import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
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
          <div className="bg-slate-800 h-screen text-white p-3 w-60">
            <div className="flex justify-center flex-col gap-2">
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
