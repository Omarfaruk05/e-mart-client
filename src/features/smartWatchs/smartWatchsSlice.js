import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  smartWatchs: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const getSmartWatchs = createAsyncThunk(
  "smartWatchs/getsmartWatchs",
  async (param) => {
    const url = `http://localhost:5000/api/v1/products/${param}`;
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }
);

const smartWatchsSlice = createSlice({
  name: "smartWatchs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getSmartWatchs.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getSmartWatchs.fulfilled, (state, action) => {
        state.smartWatchs = action.payload;
        state.isLoading = false;
      })
      .addCase(getSmartWatchs.rejected, (state, action) => {
        state.smartWatchs = [];
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default smartWatchsSlice.reducer;
