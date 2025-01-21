import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addExpenseReducer } from "../store/expenseReducer";
const AddExpences = () => {
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState(0);
  const [date, setDate] = useState("");
  //   const expense = useSelector((state) => console.log(state.expense));
  //   console.log(expense, "eeeeeee");
  const dispatch = useDispatch();
  const onButtonClickHandler = (e) => {
    e.preventDefault();
    let expenseObj = {
      id: Math.floor(Math.random() * 1000000),
      expenseName: expenseName,
      expenseAmount: +expenseAmount,
      date: date,
    };
    dispatch(addExpenseReducer(expenseObj));
    // setExpenseName("");
    // setExpenseAmount(0);
    // setDate("");
  };

  return (
    <form onSubmit={onButtonClickHandler} className="mb-5">
      <div>
        <label>Expense Name :</label>
        <input
          type="text"
          onChange={(e) => setExpenseName(e.target.value)}
          value={expenseName}
          required
        />
      </div>
      <div>
        <label>Expense Amount :</label>
        <input
          type="number"
          onChange={(e) => setExpenseAmount(e.target.value)}
          value={expenseAmount}
          required
        />
      </div>
      <div>
        <label>Date :</label>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
          required
        />
      </div>
      <div>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default AddExpences;
