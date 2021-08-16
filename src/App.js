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
  {
    id: 5,
    title: "Dinner",
    date: new Date(2019, 2, 1),
    amount: 18.3,
  },
  {
    id: 6,
    title: "flowers",
    date: new Date(2019, 2, 19),
    amount: 11.3,
  },
  {
    id: 7,
    title: "cloths",
    date: new Date(2020, 2, 18),
    amount: 100,
  },
  {
    id: 8,
    title: "soundbar",
    date: new Date(2020, 2, 10),
    amount: 34.3,
  },
];
const App = () => {
  const [yearState, setyearState] = useState("2021");
  const [expense, setexpense] = useState(dummyExpense);
  // useEffect(() => {
  //   console.log(yearState);
  // }, [yearState]);

  const expenseRequestHandler = (expenseData) => {
    setexpense((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
  };
  const divChangeHandler = (yearSelected) => {
    console.log(yearSelected);
    setyearState(yearSelected);
  };
  const filterByYear = expense.filter(
    (filterByYear) => filterByYear.date.getFullYear().toString() === yearState
  );
  let expenseCondition = <p>No Expense Found</p>;
  if (filterByYear.length > 0) {
    expenseCondition = filterByYear.map((expenseItem) => (
      <ExpenseItem
        key={expenseItem.id}
        date={expenseItem.date}
        title={expenseItem.title}
        amount={expenseItem.amount}
      ></ExpenseItem>
    ));
  }
  return (
    <div className="App">
      <header className="App-header">
        <Card>
          <ExpenseFilter
            selectedYear={yearState}
            OnChangeDiv={divChangeHandler}
          />
          {expenseCondition}
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
