import React, { useState } from 'react';

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";

import "./Expenses.css"

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2019');
  const expenses = props.expense_data;

  const changeFilteredYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(filteredYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeSelectedYear={changeFilteredYearHandler} />
        <div>
          <div>
            {/* TODO: use a loop if I can */}
            <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
            <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
            <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
            <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date} />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Expenses;
