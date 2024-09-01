import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";
import { fetchCamperById, fetchCampers } from "./operations";

const tasksSlice = createSlice({
  name: "campers",
  initialState: initialState.campers,

  extraReducers: (builder) => {
    builder.addCase(fetchCampers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCampers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.campersCollection = action.payload.items;
    });
    builder.addCase(fetchCampers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(fetchCamperById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCamperById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.camperDetail = action.payload;
    });
    builder.addCase(fetchCamperById.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const campersReducer = tasksSlice.reducer;
