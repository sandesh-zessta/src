import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const [editing, setEditing] = useState(false);
  function onSaveExpenseHandler(enteredExpense) {
    const expenseData = {
      ...enteredExpense,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setEditing(false);
  }
  function startEditingHandler() {
    setEditing(true);
  }
  function endEditingHandler() {
    setEditing(false);
  }

  return (
    <div className="new-expense">
      {!editing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {editing && (
        <ExpenseForm
          onSaveExpense={onSaveExpenseHandler}
          onStop={endEditingHandler}
        ></ExpenseForm>
      )}
    </div>
  );
}

export default NewExpense;
