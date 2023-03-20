import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

function Expenses(props) {
  const [filterYear, SetFilterYear] = useState("2023");
  function filterChangeHandler(selectedyear) {
    SetFilterYear(selectedyear);
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onFilterChange={filterChangeHandler}
        ></ExpensesFilter>
        {props.items.map(expense =>(
          <ExpenseItem title={expense.title} amount={expense.amount} date={expense.Date}></ExpenseItem>
        ))};
        {/* <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].Date}
        ></ExpenseItem> */}
      </Card>
    </div>
  );
}

export default Expenses;
