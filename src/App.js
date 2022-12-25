import Expenses from "./components/Expenses/Expenses";
import NewExpense from  "./components/NewExpense/NewExpense"

const expenses = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  { id: "e2", title: "Plumber", amount: 200.0, date: new Date(2021, 4, 2) },
  { id: "e3", title: "Groceries", amount: 100.0, date: new Date(2021, 4, 15) },
];

const App = () => {

  const addExpenseHander = (expense) => {
    console.log('in App.js');
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHander} />
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
};

export default App;
