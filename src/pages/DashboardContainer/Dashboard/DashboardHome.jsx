/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useSelector } from "react-redux";

const DashboardHome = () => {
  const user = useSelector((state) => state?.user?.user);
  console.log(user);
  return (
    <div className="flex justify-center">
      <div className="bg-gray-200 p-4 w-[400px] rounded-md text-center">
        {/* avatar  */}
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <h2 className="text-2xl font-bold">
          {user?.firstName} {user?.lastName}
        </h2>
        <p className="font-bold text-gray-500">{user?.email}</p>
      </div>
    </div>
  );
};

export default DashboardHome;
