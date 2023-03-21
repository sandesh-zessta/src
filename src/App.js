import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/UserExpense/NewExpense";

const dummy = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 230,
    date: new Date(2023, 3, 18),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 930,
    date: new Date(2022, 3, 25),
  },
  {
    id: "e3",
    title: "New TV",
    amount: 550,
    date: new Date(2021, 3, 30),
  },
];
function App() {
  const [expense, setExpense]=useState(dummy);
  function addExpenseHandler(expenses) {
    setExpense((prevExpense)=>{
      return [expenses, ...prevExpense];
    })
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expense}></Expenses>
    </div>
  );
}

export default App;
