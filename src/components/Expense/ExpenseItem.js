import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  return (
    <div className="expense-item__profiles">
      <div className="expense-item__profile">
        <ExpenseDate date={new Date(props.date)} />
        <div className="expense-item__title ">{props.title}</div>
        <div className="expense-item__amount">
          {props.amount}
          <sup>
            <span>$</span>
          </sup>
        </div>
      </div>
    </div>
  );
};
export default ExpenseItem;
