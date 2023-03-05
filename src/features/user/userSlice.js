import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const getMe = createAsyncThunk("user/getMe", async () => {
  const res = await fetch(`http://localhost:5000/api/v1/user/getMe`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  const data = await res.json();
  console.log(data);
  return data.data;
});

export const createUser = createAsyncThunk("user/createUser", async (user) => {
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
  return data.data;
});
export const getUser = createAsyncThunk("user/getUser", async (user) => {
  console.log(user);
  const res = await fetch(`http://localhost:5000/api/v1/user/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const data = await res.json();
  console.log(data);
  if (data.data.token) {
    console.log(data.data.token);
    localStorage.setItem("token", data.data.token);
  }
  return data.data.user;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.user = [];
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      })
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
      })
      .addCase(getMe.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getMe.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getMe.rejected, (state, action) => {
        state.user = [];
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
