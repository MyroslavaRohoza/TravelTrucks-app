import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./campers/campersSlice";

export const store = configureStore({
    reducer: {
        campers: tasksReducer,     
  },
});
