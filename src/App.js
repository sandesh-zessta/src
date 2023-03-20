import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/UserExpense/NewExpense";

function App() {
  const expense = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 230,
      Date: new Date(2023, 3, 18),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 930,
      Date: new Date(2023, 3, 25),
    },
    {
      id: "e3",
      title: "New TV",
      amount: 550,
      Date: new Date(2023, 3, 30),
    },
  ];
  function addExpenseHandler(expense) {
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expense}></Expenses>
    </div>
  );
}

export default App;
