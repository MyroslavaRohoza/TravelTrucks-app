import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { findCampersByFilter } from "../../js/utils";
const instance = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers",
});

export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (_, thunkAPI) => {
    try {
      const campersList = await instance.get(
        `?page=1&limit=4&` +
          findCampersByFilter(thunkAPI.getState().campers.filter)
      );
      return campersList.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchOthersCampers = createAsyncThunk(
  "campers/fetchOthersCampers",
  async (page = 1, thunkAPI) => {
    try {
      const campersList = await instance.get(
        `?page=${page}&limit=4&` +
          findCampersByFilter(thunkAPI.getState().campers.filter)
      );
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
