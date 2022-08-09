import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/New Expense/NewExpense';
import Banner from './components/UI/Banner';

function App() {

  const [expenses, setExpenses] = useState([]);

  function addExpenseHandler(expense){
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
    console.log('This is expenses: ');
    console.log(expenses);
  };
  
  return (
    <div>
      <Banner />
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses item={expenses} /> 
    </div>
  );
}

export default App;
