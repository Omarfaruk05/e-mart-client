import { configureStore } from "@reduxjs/toolkit";
import headphonesSlice from "../features/headphones/headphonesSlice";
import smartWatchsSlice from "../features/smartWatchs/smartWatchsSlice";

const store = configureStore({
  reducer: {
    smartWatchs: smartWatchsSlice,
    headphones: headphonesSlice,
  },
});

export default store;
