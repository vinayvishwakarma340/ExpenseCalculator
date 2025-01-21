import React from "react";
import ExpenseCard from "./ExpenseCard";
import { useSelector } from "react-redux";

const ExpenseCardCollection = () => {
  const expense = useSelector((state) => state.expenses);

  return (
    <div>
      {expense.length > 0 ? (
        expense.map((item, index) => {
          return <ExpenseCard key={index} data={item} />;
        })
      ) : (
        <div>no results found for the search</div>
      )}
    </div>
  );
};

export default ExpenseCardCollection;
