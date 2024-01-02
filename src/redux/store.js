import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../redux/features/base/baseApi";
import { reducer } from "./rootReducer";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
