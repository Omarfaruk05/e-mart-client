import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    storeUserInRedux: (state, action) => {
      state.user = action.payload;
    },
    removeUserFromRedux: (state, action) => {
      state.user = initialState;
    },
  },
});
export const { storeUserInRedux, removeUserFromRedux } = userSlice.actions;
export default userSlice.reducer;
