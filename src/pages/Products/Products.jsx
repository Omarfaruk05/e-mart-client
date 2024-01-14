import React, { useState } from "react";
import backgroundImage from "../../assets/banner/bg-t.png";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import ProductCard from "../../components/shared/ProductCard/ProductCard";
import ScrollToTop from "../../lib/ScrollToTop";
import { useGetAllProductQuery } from "../../redux/features/product/productApi";
import { useParams } from "react-router-dom";
import ProductCartLoader from "../../components/shared/Loader/ProductCartLoader";
const Products = () => {
  const [page, setPage] = useState(1);
  const { productCategory } = useParams();
  console.log(productCategory);
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const { data } = useGetAllProductQuery({
    category: productCategory,
  });
  const products = data?.data;

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }}>
      <ScrollToTop />
      <div className="max-w-7xl mx-auto">
        <div>
          <div className=" gap-4 justify-between">
            <div className=" mx-4">
              <div className="flex justify-between items-center bg-base-100 p-2 rounded-lg">
                <div className="">
                  <button className="btn btn-sm bg-base-100 hover:bg-base-100 focus:bg-slate-400">
                    <span>
                      <AdjustmentsHorizontalIcon className="w-5 mr-1"></AdjustmentsHorizontalIcon>
                    </span>
                    <span>Filter</span>
                  </button>
                </div>
                <div className="flex gap-2 items-center">
                  <p>Sort By</p>
                  <p>
                    <select className="select select-bordered select-sm w-full max-w-xs">
                      <option selected>Default</option>
                      <option>Name (A-Z)</option>
                      <option>Name (Z-A)</option>
                      <option>Price (Low to High)</option>
                      <option>Price (High to Low)</option>
                      <option>Rating (Highest)</option>
                      <option>Rating (Lowest)</option>
                    </select>
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 mt-4 justify-center items-center">
                {products
                  ? products.map((product) => (
                      <ProductCard
                        product={product}
                        key={product._id}
                      ></ProductCard>
                    ))
                  : num.map((x) => <ProductCartLoader></ProductCartLoader>)}
              </div>
            </div>
          </div>
          {/* pagination  */}
          <div className="text-center my-4">
            <div className="join">
              <button
                onClick={() => page !== 1 && setPage(page - 1)}
                className="join-item btn rounded-md bg-slate-800 text-white"
              >
                «
              </button>
              <button className="join-item btn rounded-md bg-slate-800 text-white">
                Page {page}
              </button>
              <button
                onClick={() => setPage(page + 1)}
                className="join-item btn rounded-md bg-slate-800 text-white"
              >
                »
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
