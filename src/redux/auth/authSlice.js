import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refresh, register } from "./authOperations";

const initialState = {
  currentUser: null,
  email: null,
  token: null,
  id: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    removeCurrentUser: (state) => {
      state.currentUser = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setCurrentUser, removeCurrentUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
