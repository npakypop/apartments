import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filter: "",
  },
  reducers: {
    filterApartments(state, action) {
      state.filter = action.payload;
    },
  },
});
export const { filterApartments } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
