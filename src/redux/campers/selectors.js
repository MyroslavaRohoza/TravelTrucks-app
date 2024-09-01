export const selectCampersCollection = (state) =>
  state.campers.campersCollection;

export const selectCamperDetail = (state) => state.campers.camperDetail;

export const selectFilter = (state) => state.campers.filter;

export const selectSelectedList = (state) => state.campers.selectedList;

export const selectIsLoading = (state) => state.isLoading;

export const selectError = (state) => state.error;
