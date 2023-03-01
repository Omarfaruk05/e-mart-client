import { configureStore } from "@reduxjs/toolkit";
import headphonesSlice from "../features/headphones/headphonesSlice";
import smartWatchsSlice from "../features/smartWatchs/smartWatchsSlice";
import productDetailsSlice from "../features/productDetails/productDetails";
import cartSlice from "../features/cart/cartSlice";

const store = configureStore({
  reducer: {
    smartWatchs: smartWatchsSlice,
    headphones: headphonesSlice,
    productDetails: productDetailsSlice,
    cart: cartSlice,
  },
});

export default store;
