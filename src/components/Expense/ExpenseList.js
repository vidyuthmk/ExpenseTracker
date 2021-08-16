import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  if (props.filterByYear.length === 0) {
    return <p>No Expense Found</p>;
  }
  return (
    <div>
      {props.filterByYear.map((expenseItem) => (
        <ExpenseItem
          key={expenseItem.id}
          date={expenseItem.date}
          title={expenseItem.title}
          amount={expenseItem.amount}
        ></ExpenseItem>
      ))}
    </div>
  );
};

export default ExpenseList;
