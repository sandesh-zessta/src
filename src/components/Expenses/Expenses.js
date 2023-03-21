import React, { useState } from "react";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

function Expenses(props) {
  const [filterYear, SetFilterYear] = useState("2023");
  function filterChangeHandler(selectedyear) {
    SetFilterYear(selectedyear);
  };
  const filterExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filterYear}
          onFilterChange={filterChangeHandler}
        ></ExpensesFilter>
        <ExpenseList items={filterExpenses}></ExpenseList>
      </Card>
    </div>
  );
}

export default Expenses;
