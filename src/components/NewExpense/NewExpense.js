import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(props.showForm);

  const addExpenseHandler = () => {
    setShowForm(true);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const cancelFormSubmissionHandler = (showAddExpenseForm) => {
    setShowForm(showAddExpenseForm);
  };

  if (showForm === false) {
    return (
      <div className="new-expense">
        <button onClick={addExpenseHandler}>Add Expense</button>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <ExpenseForm
        onCancelFormSubmission={cancelFormSubmissionHandler}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    </div>
  );
};

export default NewExpense;
