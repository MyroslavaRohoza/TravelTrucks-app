import { createSelector } from "@reduxjs/toolkit";

export const selectCampersCollection = (state) =>
  state.campers.campersCollection;

export const selectCamperDetail = (state) => state.campers.camperDetail;

export const selectFilter = (state) => state.campers.filter;

export const selectSelectedList = (state) => state.campers.selectedList;



export const selectSelectedListIds = createSelector(
  [selectSelectedList],
  (selectedList) => selectedList.map((item) => item.id)
);

export const selectIsLoading = (state) => state.campers.isLoading;

export const selectError = (state) => state.campers.error;

export const selectTotal = (state) => state.campers.total;

export const selectCurrentPage = (state) => state.campers.currentPage;

export const selectAmountPerPage = (state) => state.campers.amountPerPage;
