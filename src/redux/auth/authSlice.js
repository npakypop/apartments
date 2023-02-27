import { createSlice } from "@reduxjs/toolkit";
// import { login, logout, refresh, register } from "./authOperations";

const initialState = {
  // currentUser: null,
  email: null,
  token: null,
  id: null,
  userName: "",
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.userName = action.payload.userName;
      state.isLoggedIn = true;
    },
    removeUser: (state) => {
      state.currentUser = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
