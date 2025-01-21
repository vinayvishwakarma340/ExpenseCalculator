import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullExpense: [],
  filteredExpense: [],
};
export const expenseReducer = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpenseReducer: (state, payload) => {
      state.fullExpense = state.fullExpense.push(payload.payload);
      state.filteredExpense = state.filteredExpense.push(payload.payload);
    },

    removeExpense: (state, payload) => {
      state.filteredExpense = state.filter(
        (item) => item.id !== payload.payload
      );
    },

    filterByDateExpense: (state, payload) => {
      return state.filter((item) => item.date === payload.payload);
    },

    filterByNameAndAmount: (state, payload) => {
      if (payload.payload === "") {
        return state;
      } else {
        return state.filter((item) => item.expenseName === payload.payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addExpenseReducer,
  removeExpense,
  filterByDateExpense,
  filterByNameAndAmount,
} = expenseReducer.actions;

export default expenseReducer.reducer;
