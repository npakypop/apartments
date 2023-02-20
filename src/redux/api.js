import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://63ee25aed466e0c18baa2cba.mockapi.io/";

export const fetchApartments = createAsyncThunk(
  "apartments/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/apartments/");
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const fetchContacts = createAsyncThunk(
//   "contacts/fetchAll",
//   async (_, thunkAPI) => {
//     try {
//       const res = await axios.get("/contacts");
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
