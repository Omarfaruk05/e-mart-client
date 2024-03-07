import React from "react";
import { useGetAllOrderQuery } from "../../../redux/features/order/orderApi";
import { getUserInfo } from "../../../services/auth.service";

const MyOrders = () => {
  const { id } = getUserInfo();
  const { data, isLoading } = useGetAllOrderQuery(id);

  const orders = data?.data;
  console.log(orders);

  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <div>
      <h3 className="text-center text-3xl font-bold bg-gray-200 rounded-md mb-2">
        Orders History
      </h3>
      <div>
        {orders?.map((order, index) => (
          <div key={index}>
            {order?.products?.map((product, index) => (
              <div
                key={index}
                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-between gap-4 flex-wrap bg-white my-2 p-2 "
              >
                <div>
                  <img
                    className="rounded-md"
                    width={80}
                    height={80}
                    src={product?.productImage[0]}
                    alt=""
                  />
                </div>
                <div>
                  <p>
                    <span>Name: </span>
                    <span>{product?.productName.slice(0, 15)}...</span>
                  </p>
                  <p>
                    <span>Category: </span>
                    <span>{product?.category}</span>
                  </p>
                  <p>
                    <span>Price: </span>
                    <span>{product?.price}</span>
                  </p>
                </div>
                <div className="text-center">
                  <p className="mb-4">Transection ID</p>
                  <p className="text-xs badge badge-info">
                    {order?.transectionId}
                  </p>
                </div>
                <div className="hidden lg:block text-center">
                  <p>User Info</p>
                  <p className="">
                    Name: {order?.user?.firstName} {order?.user?.lastName}
                  </p>
                  <p className="">Email: {order?.user?.email}</p>
                </div>
                <div className="text-center">
                  <p>Payment Status</p>
                  <div className="py-1 mx-auto w-40 rounded-md mt-2 text-white bg-primary">
                    {order?.paidStatus}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
