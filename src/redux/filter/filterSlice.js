import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  filter: "",
  sortBy: "",
};
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterApartments(state, action) {
      state.filter = action.payload;
    },
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
  },
});
export const { filterApartments, setSortBy } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
