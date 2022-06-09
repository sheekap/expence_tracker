import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");
  const expenses = props.items;

  const changeFilteredYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeSelectedYear={changeFilteredYearHandler}
        />
        <div>
          <div>
            {expenses.map((expense) => (
              <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Expenses;
