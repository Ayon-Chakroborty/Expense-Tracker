import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    props.onAddExpense(expenseData);
  }

  const [addNewExpense, setAddNewExpense] = useState(false);

  function addNewExpenseHandler() {
    setAddNewExpense(true);
  }

  function cancelAddNewExpenseHandler(){
    setAddNewExpense(false);
  }

  return (
    <div className="new-expense">
      {addNewExpense === false ? (
        <button type="button" value={true} onClick={addNewExpenseHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm 
        onCancelAddNewExpense = {cancelAddNewExpenseHandler}
        onSaveExpenseData={saveExpenseDataHandler} />
      )}
    </div>
  );
}

export default NewExpense;
