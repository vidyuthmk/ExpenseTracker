import "./App.css";
import ExpenseItem from "./components/Expense/ExpenseItem";
import Card from "./components/UI/Card";
import AddButton from "./components/UI/AddButton";
import AddNewExpense from "./components/AddExpense/AddNewExpense";
import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter";

const App = () => {
  const expense = [
    {
      id: 1,
      title: "Beer",
      date: new Date(2021, 2, 13),
      amount: 4.5,
    },
    {
      id: 2,
      title: "Books",
      date: new Date(2021, 3, 10),
      amount: 10.5,
    },
    {
      id: 3,
      title: "Tv",
      date: new Date(2021, 7, 2),
      amount: 120.0,
    },
    {
      id: 4,
      title: "Biryani",
      date: new Date(2021, 2, 16),
      amount: 12.3,
    },
  ];
  const expenseRequestHandler = (expenseDate) => {
    const storeExpenseObj = {
      ...expenseDate,
    };
    console.log(storeExpenseObj);
  };
  const divChangeHandler = (divAdded) => {
    console.log("div added ");
  };
  return (
    <div className="App">
      <header className="App-header">
        <Card>
          <ExpenseFilter OnChangeDiv={divChangeHandler} />
        </Card>
        <Card>
          {expense.map(function (expenseItem, i) {
            return (
              <ExpenseItem
                date={expense[i].date}
                title={expense[i].title}
                amount={expense[i].amount}
              ></ExpenseItem>
            );
          })}
        </Card>
        <AddNewExpense OnExpenseRequest={expenseRequestHandler} />
        <div>
          <AddButton />
        </div>
      </header>
    </div>
  );
};

export default App;
