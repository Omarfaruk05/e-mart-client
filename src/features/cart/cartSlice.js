import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const selectedProduct = state.cart.find(
        (product) => product._id === action.payload.product._id
      );

      if (!selectedProduct) {
        const product = {
          ...action.payload.product,
          quantity: action.payload.quantity,
        };
        state.cart.push(product);
      } else {
        selectedProduct.quantity =
          selectedProduct.quantity + action.payload.quantity;
        state.cart
          .filter((product) => product._id !== selectedProduct._id)
          .push(selectedProduct);
      }
    },
    decreaseQuantity: (state, action) => {
      const selectedProduct = state.cart.find(
        (product) => product._id === action.payload._id
      );
      if (selectedProduct.quantity === 1) {
        selectedProduct.quantity = 1;
        state.cart
          .filter((product) => product._id !== selectedProduct._id)
          .push(selectedProduct);
      } else {
        selectedProduct.quantity -= 1;
        state.cart
          .filter((product) => product._id !== selectedProduct._id)
          .push(selectedProduct);
      }
    },
    removeFromCart: (state, action) => {
      const deletedItemId = action.payload;
      const remainItem = state.cart.filter((x) => x._id !== deletedItemId);
      state.cart = remainItem;
    },
  },
});

export const { addToCart, decreaseQuantity, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
