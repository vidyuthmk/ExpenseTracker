import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(props) {
  const [userInput, setuserInput] = useState("");

  const titleChangeHandler = (event) => {
    setuserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    setuserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    setuserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: event.target.value,
      };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseDate = {
      enteredTitle: userInput.enteredTitle,
      enteredDate: new Date(userInput.enteredDate),
      enteredAmount: userInput.enteredAmount,
    };

    props.onSaveExpenseData(expenseDate);

    setuserInput({
      enteredTitle: "",
      enteredDate: "",
      enteredAmount: "",
    });
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="container">
        <div className="inputs">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            placeholder="Add Item Name"
            onChange={titleChangeHandler}
          />
          <label>Amount</label>
          <input
            type="number"
            value={userInput.enteredAmount}
            placeholder="Enter Price"
            onChange={amountChangeHandler}
          />
          <label>Date</label>
          <input
            type="date"
            value={userInput.enteredDate}
            min="2021-01-01"
            max="2025-12-31"
            onChange={dateChangeHandler}
          />
          <button type="submit">
            <span>Add Expense</span>
          </button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
