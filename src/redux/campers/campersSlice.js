import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../initialState";
import {
  fetchCamperById,
  fetchCampers,
  fetchOthersCampers,
} from "./operations";

const tasksSlice = createSlice({
  name: "campers",
  initialState: initialState.campers,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    selectFilter(state, action) {
      state.filter = action.payload;
    },
    selectedList(state, action) {
      const id = action.payload;
      const campersList = state.campersCollection;

      const selectedItem = campersList.find((item) => item.id === id);

      if (!selectedItem) return;

      const isItemSelected = state.selectedList.some((item) => item.id === id);

      if (isItemSelected) {
        state.selectedList = state.selectedList.filter(
          (item) => item.id !== id
        );
      } else {
        state.selectedList = [...state.selectedList, { ...selectedItem }];
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCampers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCampers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.campersCollection = action.payload.items;
      state.total = action.payload.total;
    });
    builder.addCase(fetchCampers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.campersCollection = null;
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
    builder.addCase(fetchOthersCampers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchOthersCampers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.campersCollection.push(...action.payload.items);
    });
    builder.addCase(fetchOthersCampers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const campersReducer = tasksSlice.reducer;

export const { setCurrentPage, selectFilter, selectedList } =
  tasksSlice.actions;
