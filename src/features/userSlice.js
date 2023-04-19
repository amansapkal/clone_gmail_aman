import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",

  initialState: {
    userStatus: null,
  },

  reducers: {
    login: (state, action) => {
      state.userStatus = action.payload;
    },
    logout: (state) => {
      state.userStatus = null;
    },
  },
});

export const { login ,logout } =
  userSlice.actions;

export const SelectUserStatus = (state) => {
  return state.user.userStatus;
};
 

export default userSlice.reducer;
