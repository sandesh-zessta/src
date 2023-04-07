import "./ExpenseDate.css";

function ExpenseDate(props) {
  // const month = props.date.toDateString().substring(3, 7);
  // const day = props.date.toDateString().substring(7, 10);
  // const year = props.date.toDateString().substring(10);
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
