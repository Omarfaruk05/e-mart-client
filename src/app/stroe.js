import { configureStore } from "@reduxjs/toolkit";
import headphonesSlice from "../features/headphones/headphonesSlice";
import smartWatchsSlice from "../features/smartWatchs/smartWatchsSlice";
import productDetailsSlice from "../features/productDetails/productDetails";
import cartSlice from "../features/cart/cartSlice";
import userSlice from "../features/user/userSlice";
import productSlice from "../features/product/productSlice";

const store = configureStore({
  reducer: {
    products: productSlice,
    smartWatchs: smartWatchsSlice,
    headphones: headphonesSlice,
    productDetails: productDetailsSlice,
    cart: cartSlice,
    user: userSlice,
  },
});

export default store;
