import { StarIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import backgroundImage from "../../assets/banner/bg-t.png";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../redux/features/productDetails/productDetails";
import { useParams, Link } from "react-router-dom";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { getProducts } from "../../redux/features/product/productSlice";
import ProductDetailsLoader from "../../components/shared/Loader/ProductDetailsLoader";
import ScrollToTop from "../../lib/ScrollToTop";
const ProductDetails = () => {
  const [num, setNum] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { productDetails, isLoading: productDetailsLoading } = useSelector(
    (state) => state.productDetails
  );
  console.log(productDetails);
  const { products, isLoading: smartwatchLoading } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getProducts(productDetails?.category));
  }, [dispatch, productDetails]);

  const handleQuantity = (operator) => {
    if (operator === "increase") {
      setQuantity(quantity + 1);
      return;
    }
    if (operator === "decrease" && quantity === 1) {
      return;
    }
    if (operator === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
      return;
    }
  };

  const handleRating = (rating) => {
    setRating(rating);
    console.log(rating);
  };
  const handlePhoto = (num) => {
    setNum(num);
  };

  const navigateToProductDetails = (id) => {};

  if (productDetailsLoading) {
    return (
      <div>
        <ScrollToTop />
        <ProductDetailsLoader />
      </div>
    );
  }
  if (productDetails.status) {
    return (
      <div style={{ backgroundImage: `url(${backgroundImage})` }}>
        <ScrollToTop />
        <div className="max-w-7xl mx-auto my-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 justify-between bg-white p-4 rounded">
            <div className="col-span-2">
              <div>
                <img
                  className="text-center w-full cursor-pointer"
                  src={productDetails?.productImage[num]}
                  alt=""
                />
              </div>
              <div className="flex gap-2 mt-4 justify-center">
                <img
                  onClick={() => handlePhoto(0)}
                  className="w-24 cursor-pointer hover:shadow-md"
                  src={productDetails?.productImage[0]}
                  alt=""
                />
                <img
                  onClick={() => handlePhoto(1)}
                  className="w-24 cursor-pointer hover:shadow-md"
                  src={productDetails?.productImage[1]}
                  alt=""
                />
                <img
                  onClick={() => handlePhoto(2)}
                  className="w-24 cursor-pointer hover:shadow-md"
                  src={productDetails?.productImage[2]}
                  alt=""
                />
                <img
                  onClick={() => handlePhoto(3)}
                  className="w-24 cursor-pointer hover:shadow-md"
                  src={productDetails?.productImage[3]}
                  alt=""
                />
                <img
                  onClick={() => handlePhoto(4)}
                  className="w-24 cursor-pointer hover:shadow-md"
                  src={productDetails?.productImage[4]}
                  alt=""
                />
              </div>
            </div>
            <div className="col-span-3 px-4">
              <h2 className="text-3xl font-bold mb-2 text-indigo-900">
                {productDetails?.productName}
              </h2>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-slate-100 p-1 shadow-sm px-5">
                  Offer Price: {productDetails?.price}
                </span>
                <span className="rounded-full bg-slate-100 p-1 shadow-sm px-5">
                  Price: <span className="font-normal">৳ </span>
                  {productDetails?.price}
                </span>
                <span className="rounded-full bg-slate-100 p-1 shadow-sm px-5">
                  Stock: {productDetails?.status}
                </span>
                <span className="rounded-full bg-slate-100 p-1 shadow-sm px-5">
                  Brand: {productDetails?.brand}
                </span>
                <span className="rounded-full bg-slate-100 p-1 shadow-sm px-5">
                  Warranty: 1 Year
                </span>
              </div>
              <div>
                <h2 className="text-2xl font-bold mt-4">Kye Features:</h2>
                <hr className="w-40" />
                <ul>
                  {Object.entries(productDetails?.KeyFeatures).map(
                    ([key, val], i) => (
                      <li key={i}>
                        <span className="font-bold text-lg text-indigo-900">
                          {key}:
                        </span>
                        {"  "}
                        {val}
                      </li>
                    )
                  )}
                </ul>
                <p className="text-orange-600 text-sm">
                  For more info, Please scroll down..
                </p>
              </div>
              <div className="flex justify-start items-center gap-4 my-6">
                <div className="flex">
                  <StarIcon className="w-6 text-orange-500"></StarIcon>
                  <StarIcon className="w-6 text-orange-500"></StarIcon>
                  <StarIcon className="w-6 text-orange-500"></StarIcon>
                  <StarIcon className="w-6 text-orange-500"></StarIcon>
                  <StarIcon className="w-6 "></StarIcon>
                </div>
                <p className="mt-1">
                  <span className="hover:text-orange-500 cursor-pointer">
                    BASED ON 6 REVIEWS.{" "}
                  </span>
                  <span className="hover:text-orange-500 cursor-pointer">
                    -WRITE A REVIEW
                  </span>
                </p>
              </div>
              <div className="sm:flex gap-5 mt-12">
                <div className="border border-blue-900 p-2 w-full mb-4 rounded">
                  <h3 className="text-xl font-semibold my-1">
                    Cash Discount Price
                  </h3>
                  <h2 className="text-2xl font-bold text-orange-500">
                    <span className="font-normal">৳ </span>
                    {productDetails?.price}
                  </h2>
                  <div>
                    <small className="text-sm">
                      Check Available Payment Method
                    </small>
                    <br />
                    <small className="text-sm">
                      <span className="text-orange-500">
                        Contact For Bulk Quantity:
                      </span>
                      <span>+8801567900262</span>
                    </small>
                  </div>
                </div>
                <div className="border border-blue-900 bg-slate-100 p-2 w-full rounded mb-4">
                  <h3 className="text-xl font-semibold my-1">EMI Price*</h3>
                  <h2 className="text-2xl font-bold text-orange-500">140$</h2>
                  <div>
                    <small className="text-sm">
                      Starting From 50$/Month. For Discount Price
                    </small>
                    <br />
                    <small className="text-sm">
                      <span className="text-orange-500">
                        Click Here To View 27 Banks EMI Plans
                      </span>
                    </small>
                  </div>
                </div>
              </div>
              <div>
                <div className="fons-semibold text-center sm:flex items-center gap-4">
                  <div className="flex justify-center items-center gap-3">
                    <div className="flex gap-1 items-center -mt-1">
                      <button
                        onClick={() => handleQuantity("decrease")}
                        className="btn px-4 border-2 border-gray-400"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        name=""
                        value={quantity}
                        className="input input-bordered w-16 mx-1"
                        id=""
                      />
                      <button
                        onClick={() => handleQuantity("increase")}
                        className="btn px-4"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() =>
                        dispatch(
                          addToCart({ product: productDetails, quantity })
                        )
                      }
                      className="btn btn-success text-white font-semibold font mb-2"
                    >
                      Add to Cart
                    </button>
                  </div>
                  <Link to={"/delivery"}>
                    <button
                      onClick={() =>
                        dispatch(
                          addToCart({ product: productDetails, quantity })
                        )
                      }
                      className="btn btn-success text-white font-semibold font px-7 mb-2"
                    >
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* product specification section. */}
          <div className="md:flex jsutify-between gap-5 my-4">
            <div className="md:w-2/3 px-2">
              {/* spacifications */}
              <div>
                <h3 className="text-2xl font-bold my-4 px-2">Specifications</h3>

                {/* table  */}
                <div className="w-full bg-base-100 rounded">
                  <h4 className="text-xl font-bold bg-base-200 px-2 py-1 rounded-t-md">
                    Mobile
                  </h4>
                  <hr />
                  <div className=" rounded-b-md">
                    {Object.entries(productDetails?.productDetails).map(
                      ([key, val], i) => (
                        <>
                          <div
                            className="bg-slate-50 hover:bg-base-100 flex justify-start items-center gap-6 bg py-1 px-2"
                            key={i}
                          >
                            <p className="w-1/4">{key}</p>
                            <p className="w-3/4">{val}</p>
                          </div>
                          <hr className="mx-1" />
                        </>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="my-4 p-4 bg-base-100 rounded">
                <h3 className="text-2xl font-bold my-4">Description</h3>
                <div>
                  <img
                    className="w-full mx-auto"
                    src={productDetails?.productImage[0]}
                    alt=""
                  />
                </div>
                {productDetails.description && (
                  <p>{productDetails?.description}</p>
                )}
              </div>
              {/* Review Section  */}
              <div className="my-4">
                <h3 className="text-2xl font-bold my-1 mx-2">Write A Review</h3>
                <div className="border p-2 rounded border-slate-200">
                  <form>
                    <div className="flex items-start gap-3 mb-2">
                      <label className="w-1/3 mt-2">Your Name*</label>
                      <input
                        className="input mb-3 w-full"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                    <div className="flex items-start gap-3">
                      <label className="w-1/3 mt-1">Your Review*</label>
                      <textarea
                        className="textarea w-full text-lg"
                        name=""
                        id=""
                        rows="6"
                      ></textarea>
                    </div>
                    <div className="flex items-start justify-start gap-3 mt-4">
                      <label className="w-1/3 mt-1">Rating*</label>
                      <div className="rating w-full">
                        <input
                          onClick={() => handleRating(1)}
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-500"
                          unchecked
                        />
                        <input
                          onClick={() => handleRating(2)}
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-500"
                        />
                        <input
                          onClick={() => handleRating(3)}
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-500"
                        />
                        <input
                          onClick={() => handleRating(4)}
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-500"
                        />
                        <input
                          onClick={() => handleRating(5)}
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-orange-500"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end w-full">
                      <input
                        className="btn btn-sm btn-primary"
                        type="submit"
                        value="Submit"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* Related products */}
            <div className="md:w-1/3">
              <h3 className="text-2xl font-bold my-1">Related Products</h3>
              <div className="py-2 rounded">
                {products.status ? (
                  products?.data.map((product) => (
                    <div
                      onClick={() => navigateToProductDetails(product?._id)}
                      className="flex items-center gap-3 p-2 m-4 bg-base-100 rounded hover:shadow-lg"
                    >
                      <div>
                        <Link to={`/product/${product?._id}`}>
                          <img
                            className="w-28"
                            src={product?.productImage[0]}
                            alt=""
                          />
                        </Link>
                      </div>
                      <div>
                        <div>
                          <Link to={`/product/${product?._id}`}>
                            <h4>{product?.productName.slice(0, 20)}.....</h4>
                            <p className="text-orange-500">{product?.price}</p>
                          </Link>
                        </div>
                        <button
                          onClick={() =>
                            dispatch(addToCart({ product, quantity: 1 }))
                          }
                          className="btn btn-success px-6 btn-sm mt-3 text-white font-semibold uppercase"
                        >
                          <span>
                            <ShoppingCartIcon className="w-5 mr-2"></ShoppingCartIcon>
                          </span>
                          <span className="block md:hidden lg:block">
                            Add To Cart
                          </span>
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Loading</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductDetails;
