import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import expenseReducer from "./expenseReducer";

export const store = configureStore({
  reducer: {
    counters: counterReducer,
    expenses: expenseReducer,
  },
});
