import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apartmentsReducer } from "./apartments/apartmentsSlice";
import { authReducer } from "./auth/authSlice";
import { filterReducer } from "./filter/filterSlice";

const rootReducer = combineReducers({
  apart: apartmentsReducer,
  filter: filterReducer,
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
