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
  },
});
export const { storeUserInRedux } = userSlice.actions;
export default userSlice.reducer;
