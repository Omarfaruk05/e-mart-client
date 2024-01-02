import React, { useEffect } from "react";
import { useState } from "react";
import backgroundImage from "../../assets/banner/bg-t.png";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts } from "../../redux/features/product/productSlice";
import ProductCard from "../../components/shared/ProductCard/ProductCard";
import ProductCartLoader from "../../components/shared/Loader/ProductCartLoader";
import ScrollToTop from "../../lib/ScrollToTop";

const Products = () => {
  const [minRange, setMinRange] = useState(0);
  const [maxRange, setMaxRange] = useState(1000);
  const dispatch = useDispatch();
  const { productCategory } = useParams();
  console.log(productCategory);

  const { products, isLoading, isError } = useSelector(
    (state) => state.products
  );
  console.log(products);
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  useEffect(() => {
    dispatch(getProducts(productCategory));
  }, [dispatch, productCategory]);

  console.log(minRange, maxRange);
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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 mt-4 justify-center items-center">
                {products.status
                  ? products.data.map((product) => (
                      <ProductCard
                        product={product}
                        key={product._id}
                      ></ProductCard>
                    ))
                  : num.map((x) => (
                      <ProductCartLoader key={x}></ProductCartLoader>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
