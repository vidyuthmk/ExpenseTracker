import "./AddButton.css";
import AddNewExpense from "../AddExpense/AddNewExpense";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
const AddButton = (props) => {
  const [buttonState, setbuttonState] = useState(false);
  const addButtonHandler = () => {
    setbuttonState(true);
  };
  const addedDataCloseHandler = () => {
    setbuttonState(false);
  };
  const onCancelHandler = () => {
    setbuttonState(false);
  };
  if (buttonState === true) {
    return (
      <AddNewExpense
        OnExpenseRequest={props.OnExpenseRequest}
        onCancel={onCancelHandler}
        addedDataClose={addedDataCloseHandler}
      />
    );
  }
  return (
    <div className="wrapper" onClick={addButtonHandler}>
      <div className="icon facebook">
        <div className="tooltip">Add Expense</div>
        <FaPlus />
      </div>
    </div>
  );
};

export default AddButton;
