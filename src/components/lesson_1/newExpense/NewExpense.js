import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const saveExepenseData = (enteredeFormData) => {
    const expensData = {
      ...enteredeFormData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expensData);
  };
  const showFormHandler = (event) => {
    event.preventDefault();
    setShowForm((prevState) => !prevState);
  };
  let formContent = (
    <form onSubmit={showFormHandler}>
      <div>
        <button type="submit">Add New Expense</button>
      </div>
    </form>
  );

  if (showForm) {
    formContent = (
      <ExpenseForm
        onSubmitExpense={saveExepenseData}
        onCancelShowForm={showFormHandler}
      />
    );
  }
  return (
    <div className="new-expense">
        {formContent}
    </div>
  );
};

export default NewExpense;
