import { createSlice } from "@reduxjs/toolkit";
import { checkAuthState } from "./operations";

const initialState = {
  token: null,
  userName: "",
  isLoggedIn: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.token = payload.token;
      state.userName = payload.userName;
      state.isLoggedIn = true;
    },
    removeUser: (state) => {
      state.token = null;
      state.userName = "";
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkAuthState.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkAuthState.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = payload.isLoggedIn;
        state.token = payload.token;
        state.userName = payload.userName;
      })
      .addCase(checkAuthState.rejected, (state, payload) => {
        state.isLoading = payload.isLoading;
      });
  },
});

export const { setUser, removeUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
