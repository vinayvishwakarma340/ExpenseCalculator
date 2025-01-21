import React from "react";
import { removeExpense } from "../store/expenseReducer";
import { useDispatch } from "react-redux";
import classes from "./Expence.module.css";
const ExpenseCard = (props) => {
  const dispatch = useDispatch();
  const removeHandler = (id) => {
    dispatch(removeExpense(id));
  };
  return (
    <div className={classes.cardContainer}>
      <div>{props.data.date}</div>
      <div className={classes.card}>
        <div>{props.data.expenseName}</div>
        <div>{props.data.expenseAmount}</div>
        <div onClick={() => removeHandler(props.data.id)}>delete</div>
      </div>
    </div>
  );
};

export default ExpenseCard;
