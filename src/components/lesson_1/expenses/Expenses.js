import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const changeYearHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredData = props.data.filter((expense) => {
    return expense.date.getFullYear() === parseInt(filteredYear);
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeYear={changeYearHandler}
        />
        <ExpensesChart expenses={filteredData}/>
        <ExpensesList expenses={filteredData}/>
      </Card>
    </div>
  );
};

export default Expenses;
