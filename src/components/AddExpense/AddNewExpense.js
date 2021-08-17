import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./AddNewExpense.css";

const AddNewExpense = (props) => {
  const saveExpenseHandler = (enteredEXpense) => {
    const expenseDate = {
      ...enteredEXpense,
      id: Math.random().toString(36).substr(2, 9).toString(),
    };
    props.OnExpenseRequest(expenseDate);
    props.addedDataClose();
  };
  const OncancelCall = () => {
    props.onCancel(true);
  };

  return (
    <div className="form__Controller">
      <ExpenseForm
        onSaveExpenseData={saveExpenseHandler}
        onCancel={OncancelCall}
      />
    </div>
  );
};

export default AddNewExpense;
