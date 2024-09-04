import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const instance = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers",
});

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (page = 1, thunkAPI) => {
    try {
      const campersList = await instance.get(`?page=${page}&limit=4`);
      console.log(campersList.data);
      return campersList.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCamperById = createAsyncThunk(
  "campers/fetchCamperById",
  async (id, thunkAPI) => {
    try {
      const campersList = await instance.get(id);
      console.log(campersList.data);
      return campersList.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
