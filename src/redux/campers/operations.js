import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const instance = axios.create({
    baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers",  
})

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (_, thunkAPI) => {
    try {
      const campersList = await instance.get(
        // `?page=1&limit=4`
      );
      console.log(campersList.data);
      return campersList.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
