import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/New Expense/NewExpense';

const DUMMY_EXPENSES = [
  { id: 'e1', title: "Car Title", date: new Date(2021, 2, 28), amount: 284.64 },
  { id: 'e2', title: "Food", date: new Date(2021, 2, 28), amount: 284.64 },
  { id: 'e3', title: "Gas", date: new Date(2021, 2, 28), amount: 284.64 }
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  function addExpenseHandler(expense){
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
    console.log('This is expenses: ');
    console.log(expenses);
  };
  
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses item={expenses} /> 
    </div>
  );
}

export default App;
