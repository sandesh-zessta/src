import Expenses from "./components/Expenses/Expenses";

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
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expense}></Expenses>
    </div>
  );
}

export default App;
