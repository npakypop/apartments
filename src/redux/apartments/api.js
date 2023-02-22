import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://63ee25aed466e0c18baa2cba.mockapi.io/";

export const fetchApartments = createAsyncThunk(
  "apartments/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/apartments/");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addApartment = createAsyncThunk(
  "apartments/addApartment",
  async (apartment, thunkAPI) => {
    try {
      const response = await axios.post("/apartments", apartment);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteApartment = createAsyncThunk(
  "apartments/deleteApartment ",
  async (apartmentId, thunkAPI) => {
    try {
      const response = await axios.delete(`/apartments/${apartmentId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
