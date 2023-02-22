import { createSlice } from "@reduxjs/toolkit";
import {
  fetchApartments,
  addApartment,
  deleteApartment,
} from "redux/apartments/api";

const apartmentsSlice = createSlice({
  name: "apart",
  initialState: {
    apartments: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchApartments.pending](state) {
      state.isLoading = true;
    },
    [fetchApartments.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.apartments = action.payload;
    },
    [fetchApartments.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addApartment.pending](state) {
      state.isLoading = true;
    },
    [addApartment.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.apartments.push(action.payload);
    },
    [addApartment.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteApartment.pending](state) {
      state.isLoading = true;
    },
    [deleteApartment.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.apartments.findIndex(
        (apartment) => apartment.id === action.payload.id
      );
      state.apartments.splice(index, 1);
    },
    [deleteApartment.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const apartmentsReducer = apartmentsSlice.reducer;
