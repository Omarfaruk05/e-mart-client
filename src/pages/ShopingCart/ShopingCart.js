import { TrashIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../../features/cart/cartSlice";

const ShopingCart = ({ showCart, setShowCart }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  return (
    <div
      className={
        showCart
          ? "z-30 overflow-auto fixed right-4 duration-500 ease-in-out block w-80 md:w-96 h-screen bg-base-100"
          : "none w-0 h-0"
      }
    >
      <div className={showCart ? "block relative mb-48" : "hidden"}>
        <div className="bg-slate-900 px-4 py-2 flex justify-between items-center sticky top-0">
          <h2 className="text-2xl font-bold text-white ">Your Cart</h2>
          <button
            onClick={() => setShowCart(!showCart)}
            className="btn btn-sm btn-circle btn-outline hover:bg-slate-600 font-extrabold text-white"
          >
            X
          </button>
        </div>
        {cart.map((cartItem) => (
          <>
            <div key={cartItem._id} className="hover:bg-slate-100">
              <div className="px-2 py-4 grid grid-cols-5 gap-3 justify-between">
                <div className="">
                  <img className="" src={cartItem?.productImage[0]} alt="" />
                </div>
                <div className="text-md mt-2 col-span-3">
                  <p className="font-semibold text-orange-500">
                    {cartItem?.productName.slice(0, 20)}.....
                  </p>
                  <p className="font-bold">
                    <span className="mr-2">{cartItem?.price}</span>
                    <span className="mr-2">X</span>
                    <span className="mr-2">{cartItem?.quantity}</span>
                    <span className="mr-2">=</span>
                    <span>{cartItem?.price * cartItem?.quantity}</span>
                  </p>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(cartItem._id))}
                  className="btn btn-circle"
                >
                  <TrashIcon className="w-5 h-5" />
                </button>
              </div>
              <hr />
            </div>
          </>
        ))}
        <div className="fixed bottom-0 bg-base-100 w-60 md:w-96">
          <div className="bg-slate-300 p-3">
            <form>
              <input
                className="input input-sm mr-4 w-48 md:w-60 rounded-sm"
                type="text"
                placeholder="Promo Code"
              />
              <input
                className="btn btn-sm btn-primary font-bold px-5 rounded-sm"
                type="submit"
                value="Apply"
              />
            </form>
          </div>
          <div className="flex justify-between w-60 md:w-96 px-4 my-2">
            <p>Sub-Total</p>
            <p className="font-bold">$120000</p>
          </div>
          <hr />
          <div className="flex justify-between w-60 md:w-96 px-4 my-2">
            <p>Total</p>
            <p className="font-bold">$120000</p>
          </div>
          <Link to={"cart-items"}>
            <button
              onClick={() => setShowCart(!showCart)}
              className=" mt-1 btn w-60 md:w-96 rounded-none bg-orange-500 text-white font-bold"
            >
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopingCart;
