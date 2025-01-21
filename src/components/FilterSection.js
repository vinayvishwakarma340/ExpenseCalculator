import React, { useState } from "react";
import {
  filterByDateExpense,
  filterByNameAndAmount,
} from "../store/expenseReducer";
import { useDispatch } from "react-redux";
const FilterSection = () => {
  const [amountName, setAmountName] = useState("");

  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    console.log("triggersss");
    if (e.target.name === "dateChange") {
      console.log(e.target.value, "valuuuueee");
      dispatch(filterByDateExpense(e.target.value));
    }
  };

  const searchData = () => {
    dispatch(filterByNameAndAmount(amountName));
  };

  return (
    <div>
      <input type="date" name="dateChange" onChange={onChangeHandler} />
      <input
        type="text"
        name="amountName"
        onChange={(e) => setAmountName(e.target.value)}
        value={amountName}
      />

      <button onClick={() => searchData()}>Search</button>
    </div>
  );
};

export default FilterSection;
