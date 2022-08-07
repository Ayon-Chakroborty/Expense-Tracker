import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import React, { useState } from "react";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [selectYear, setSelectYear] = useState("2022");
  function selectYearHandler(yearChosen) {
    setSelectYear(yearChosen);
  }

  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === selectYear;
  });
  
  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectYear}
          onSelectYear={selectYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList filteredExpenses={filteredExpenses}/>
      </Card>
    </li>
  );
}

export default Expenses;
