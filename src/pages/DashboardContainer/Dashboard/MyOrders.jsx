import React from "react";

const MyOrders = () => {
  return (
    <div>
      <h3 className="text-center text-3xl font-bold bg-gray-200 rounded-md mb-2">
        Orders History
      </h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span className="badge badge-ghost badge-sm">
                  Desktop Support Technician
                </span>
              </td>
              <td>Purple</td>
              <th className="gap-1">
                <button
                  disabled
                  className="bg-primary text-white rounded-sm btn-xs mr-1"
                >
                  Pending
                </button>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>
                Carroll Group
                <br />
                <span className="badge badge-ghost badge-sm">
                  Tax Accountant
                </span>
              </td>
              <td>Red</td>
              <th>
                <button
                  disabled
                  className="bg-primary text-white rounded-sm btn-xs mr-1"
                >
                  Pending
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
