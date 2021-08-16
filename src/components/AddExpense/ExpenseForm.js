import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(props) {
  const [userInput, setuserInput] = useState("");
  const titleChangeHandler = (event) => {
    setuserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    setuserInput((prevState) => {
      return { ...prevState, amount: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    setuserInput((prevState) => {
      return {
        ...prevState,
        date: event.target.value,
      };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseDate = {
      title: userInput.title,
      date: new Date(userInput.date),
      amount: userInput.amount,
    };

    props.onSaveExpenseData(expenseDate);

    setuserInput({
      title: "",
      date: "",
      amount: "",
    });
  };
  const cancelAdd = () => {
    props.onCancel(true);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="container">
        <div className="inputs">
          <label>Title</label>
          <input
            type="text"
            value={userInput.title}
            placeholder="Add Item Name"
            onChange={titleChangeHandler}
          />
          <label>Amount</label>
          <input
            type="number"
            value={userInput.amount}
            placeholder="Enter Price"
            onChange={amountChangeHandler}
            required
          />
          <label>Date</label>
          <input
            type="date"
            value={userInput.date}
            min="2021-01-01"
            max="2025-12-31"
            onChange={dateChangeHandler}
            required
          />
          <button type="submit">
            <span>Add Expense</span>
          </button>
          <button type="button" onClick={cancelAdd}>
            <span>Cancel</span>
          </button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
