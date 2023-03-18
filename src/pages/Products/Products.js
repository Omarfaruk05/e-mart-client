import React, { useEffect } from "react";
import { useState } from "react";
import ProductsFilter from "../ProductsFilter/ProductsFilter";
import backgroundImage from "../../assets/banner/bg-t.png";
import ProductCard from "../ProductCard/ProductCard";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProducts } from "../../features/product/productSlice";
import ProductCartLoader from "../Loader/ProductCartLoader";

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
      <div className="max-w-7xl mx-auto">
        <div>
          <div className="lg:flex gap-4 justify-between">
            <div className="w-1/4">
              <ProductsFilter
                minRange={minRange}
                maxRange={maxRange}
                setMinRange={setMinRange}
                setMaxRange={setMaxRange}
              ></ProductsFilter>
            </div>
            <div className="lg:w-3/4 mx-4 ">
              <div className="my-2">
                <button className="btn btn-sm btn-primary font-bold m-[2px] px-8">
                  Walton
                </button>
                <button className="btn btn-sm btn-primary font-bold m-[2px] px-8">
                  Lenevo
                </button>
                <button className="btn btn-sm btn-primary font-bold m-[2px] px-8">
                  Samsung
                </button>
                <button className="btn btn-sm btn-primary font-bold m-[2px] px-8">
                  Realme
                </button>
                <button className="btn btn-sm btn-primary font-bold m-[2px] px-8">
                  Redmi
                </button>
                <button className="btn btn-sm btn-primary font-bold m-[2px] px-8">
                  I Phone
                </button>
                <button className="btn btn-sm btn-primary font-bold m-[2px] px-8">
                  Asuse
                </button>
                <button className="btn btn-sm btn-primary font-bold m-[2px] px-8">
                  Oppo
                </button>
                <button className="btn btn-sm btn-primary font-bold m-[2px] px-8">
                  Vivo
                </button>
                <button className="btn btn-sm btn-primary font-bold m-[2px] px-8">
                  One Plus
                </button>
                <button className="btn btn-sm btn-primary font-bold m-[2px] px-8">
                  Techno
                </button>
              </div>
              <div className="flex justify-between items-center bg-base-100 p-2 rounded-lg">
                <div className="hidden lg:block">
                  <h3 className="text-2xl font-bold mb-1">Asus</h3>
                </div>
                <div className="block lg:hidden">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-4 justify-center items-center">
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
