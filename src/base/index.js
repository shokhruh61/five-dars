import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

export const base = configureStore({
  reducer: {
    "counter": counterReducer,
  },
});
