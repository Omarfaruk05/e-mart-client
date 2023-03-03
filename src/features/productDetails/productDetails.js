import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  productDetails: {},
  isLoading: false,
  isError: false,
  error: "",
};

export const getProductDetails = createAsyncThunk(
  "productDetails/getProductDetails",
  async (id) => {
    const url = `https://e-mart-server.vercel.app/api/v1/product/${id}`;
    console.log(url);

    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    return data.data;
  }
);

const productDetailsSlice = createSlice({
  name: "productDetails",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProductDetails.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getProductDetails.fulfilled, (state, action) => {
      state.productDetails = action.payload;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(getProductDetails.rejected, (state, action) => {
      state.productDetails = {};
      state.isLoading = false;
      state.isError = true;
      state.error = action.payload.message;
    });
  },
});

export default productDetailsSlice.reducer;
