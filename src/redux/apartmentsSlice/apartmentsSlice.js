import { createSlice } from "@reduxjs/toolkit";
import { fetchApartments, addApartments, deleteApartments } from "redux/api";

const initialState = {
  apartments: [],
  isLoading: false,
  error: null,
  filter: "",
};

const apartmentsSlice = createSlice({
  name: "apartments",
  initialState,
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
  },
  //   [addContact.pending](state) {
  //     state.contacts.isLoading = true;
  //   },
  //   [addContact.fulfilled](state, action) {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = null;
  //     state.contacts.items.push(action.payload);
  //   },
  //   [addContact.rejected](state, action) {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = action.payload;
  //   },
  //   [deleteContact.pending](state) {
  //     state.contacts.isLoading = true;
  //   },
  //   [deleteContact.fulfilled](state, action) {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = null;
  //     const index = state.contacts.items.findIndex(
  //       (contact) => contact.id === action.payload.id
  //     );
  //     state.contacts.items.splice(index, 1);
  //   },
  //   [deleteContact.rejected](state, action) {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = action.payload;
  //   },
  // },
});

// export const { addContact, deleteContact } = contactsSlice.actions;
// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   contactsSlice.actions;
export const apartmentsReducer = apartmentsSlice.reducer;
