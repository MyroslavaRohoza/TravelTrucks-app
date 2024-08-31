import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";
import { fetchCampers } from "./operations";

const tasksSlice = createSlice({
  name: "campers",
  initialState: initialState,
    extraReducers: (builder) => { 
        builder.addCase(fetchCampers.pending, (state) => {
          state.isLoading = true;
        })
        builder.addCase(fetchCampers.fulfilled, (state, action) => {
          state.isLoading = false;
          state.campers.campersCollection = action.payload.items;
        })
        builder.addCase(fetchCampers.rejected, (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        })  
  },
});

export const tasksReducer = tasksSlice.reducer;
