import { createSlice } from "@reduxjs/toolkit";
import { checkAuthState } from "./operations";

const initialState = {
  token: null,
  userID: "",
  userName: "",
  // apartments: {
  //   favoriteApartments: [],
  //   myApartments: [],
  // },
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
      state.userID = payload.userID;
      // state.apartments = payload.apartments;
    },
    removeUser: (state) => {
      state.token = null;
      state.userName = "";
      state.isLoggedIn = false;
      state.userID = "";
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
        state.userID = payload.userID;
      })
      .addCase(checkAuthState.rejected, (state, payload) => {
        state.isLoading = payload.isLoading;
      });
  },
});

export const { setUser, removeUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
