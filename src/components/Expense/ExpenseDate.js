import "./ExpenseDate.css";
const ExpenseDate = (props) => {
  const weekday = props.date.toLocaleString("en-US", { weekday: "short" });
  const day = props.date.toLocaleString("en-US", { day: "numeric" });
  const month_year = props.date.toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });
  return (
    <div className="expense-item__date">
      <div className="month">{weekday}</div>
      <div className="day">{day}</div>
      <div className="year">{month_year}</div>
    </div>
  );
};
export default ExpenseDate;
