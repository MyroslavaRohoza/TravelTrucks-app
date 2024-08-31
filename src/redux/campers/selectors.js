export const selectCampersCollection = (state) =>
  state.campers.campers.campersCollection;

export const selectFilter = (state) => state.campers.campers.filter;

export const selectSelectedList = (state) => state.campers.campers.selectedList;

export const selectIsLoading = (state) => state.campers.isLoading;

export const selectError = (state) => state.campers.error;
