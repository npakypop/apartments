import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apartmentsReducer } from "./apartments/apartmentsSlice";
import { filterReducer } from "./filter/filterSlice";

const rootReducer = combineReducers({
  apart: apartmentsReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
