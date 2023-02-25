import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  headphones: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const getHeadphones = createAsyncThunk(
  "headphones/getHeadphones",
  async (param) => {
    const url = `http://localhost:5000/api/v1/products/${param}`;
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }
);

const headphonesSlice = createSlice({
  name: "headphones",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getHeadphones.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getHeadphones.fulfilled, (state, action) => {
        state.headphones = action.payload;
        state.isLoading = false;
      })
      .addCase(getHeadphones.rejected, (state, action) => {
        state.headphones = [];
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default headphonesSlice.reducer;
