import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { apartmentsReducer } from "./apartmentsSlice/apartmentsSlice";

// const rootReducer = combineReducers({
//   apartments: apartmentsReducer,
//   //   filter: filterReducer,
// });

// export const store = configureStore({
//   reducer: rootReducer,
// });

export const store = configureStore({
  reducer: apartmentsReducer,
});
