import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const getUser = createAsyncThunk("user/getUser", async (user) => {
  console.log(user);
  const res = await fetch(`http://localhost:5000/api/v1/user/signup`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await res.json();
  console.log(data);
  return data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.user = [];
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
