import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <div>
      <div>
        <div className="flex gap-2">
          {/* sidebar  */}
          <div className="bg-slate-800 h-screen text-white p-3 w-60">
            <div className="flex justify-center flex-col gap-2">
              <p className="bg-black cursor-pointer tranistion duration-300 hover:bg-slate-900 hover:outline hover:outline-[1px] hover:outline-dashed py-2 px-4 rounded-md">
                Home
              </p>
              <p className="bg-black cursor-pointer tranistion duration-300 hover:bg-slate-900 hover:outline hover:outline-[1px] hover:outline-dashed py-2 px-4 rounded-md">
                My Profile
              </p>
              <p className="bg-black cursor-pointer tranistion duration-300 hover:bg-slate-900 hover:outline hover:outline-[1px] hover:outline-dashed py-2 px-4 rounded-md">
                My Orders
              </p>
            </div>

            <div></div>
          </div>
          <div className="max-w-7xl">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
