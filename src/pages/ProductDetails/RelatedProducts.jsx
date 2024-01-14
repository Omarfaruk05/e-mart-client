import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useGetAllProductQuery } from "../../redux/features/product/productApi";
import ProductCartLoader from "../../components/shared/Loader/ProductCartLoader";
import { addToCart } from "../../redux/features/cart/cartSlice";

const RelatedProducts = ({ category }) => {
  console.log(category);
  const dispatch = useDispatch();
  const { data, isLoading } = useGetAllProductQuery({ category, limit: 8 });

  const products = data?.data;
  console.log(products);

  if (isLoading) {
    return <ProductCartLoader></ProductCartLoader>;
  }
  return (
    <div className="md:w-1/3">
      <h3 className="text-2xl font-bold my-1">Related Products</h3>
      <div className="py-2 rounded">
        {products &&
          products?.map((product) => (
            <div className="flex items-center w-fit lg:w-full gap-3 p-2 m-4 bg-base-100 rounded hover:shadow-lg">
              <div>
                <Link to={`/product/${product?._id}`}>
                  <img className="w-28" src={product?.productImage[0]} alt="" />
                </Link>
              </div>
              <div>
                <div>
                  <Link to={`/product/${product?._id}`}>
                    <h4>{product?.productName.slice(0, 28)}.....</h4>
                    <p className="text-orange-500">{product?.price}</p>
                  </Link>
                </div>
                <button
                  onClick={() => dispatch(addToCart({ product, quantity: 1 }))}
                  className="btn btn-success px-6 btn-sm mt-3 text-white font-semibold uppercase"
                >
                  <span>
                    <ShoppingCartIcon className="w-5 mr-2"></ShoppingCartIcon>
                  </span>
                  <span className="block md:hidden lg:block">Add To Cart</span>
                </button>
              </div>
            </div>
          ))}
      </div>
      <div className="text-center">
        <Link
          to={`/products/${category}`}
          className="btn btn-sm btn-outline rounded-sm hover:btn-primary"
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default RelatedProducts;
