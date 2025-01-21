import React from "react";
import { useSelector } from "react-redux";
import classes from "./Expence.module.css";
const TotalAmount = () => {
  const expense = useSelector((state) => state.expenses);

  const TotalAmount =
    expense.fullExpense.length > 0
      ? expense.fullExpense
          .map((item) => item?.expenseAmount)
          .reduce((acc, num) => acc + num, 0)
      : 0;
  return (
    <div className={classes.totalAmount}>Total Amount : {TotalAmount}</div>
  );
};

export default TotalAmount;
