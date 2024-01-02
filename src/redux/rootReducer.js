import { baseApi } from "./features/base/baseApi";
import userReducer from "./features/user/userSlice";
import productReducer from "./features/product/productSlice";
import cartReducer from "./features/cart/cartSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  user: userReducer,
  product: productReducer,
  cart: cartReducer,
};
