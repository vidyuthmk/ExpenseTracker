import "./App.css";
import ExpenseItem from "./components/Expense/ExpenseItem";
import Card from "./components/UI/Card";
import AddButton from "./components/UI/AddButton";
import AddNewExpense from "./components/AddExpense/AddNewExpense";
import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter";
const dummyExpense = [
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
const App = () => {
  const [yearState, setyearState] = useState("2020");
  const [expense, setexpense] = useState(dummyExpense);

  const expenseRequestHandler = (expenseData) => {
    setexpense((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
  };
  const divChangeHandler = (yearSelected) => {
    console.log(yearSelected);
    setyearState(yearSelected);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Card>
          <ExpenseFilter
            selectedYear={yearState}
            OnChangeDiv={divChangeHandler}
          />
          {expense.map((expenseItem) => (
            <ExpenseItem
              key={expenseItem.id}
              date={expenseItem.date}
              title={expenseItem.title}
              amount={expenseItem.amount}
            ></ExpenseItem>
          ))}
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
