import React, { useState } from "react";
import Description from "./Description";
import Expenses from "./expenses/Expenses";
import NewExpense from "./newExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "1",
    title: "car",
    amount: 45.6,
    date: new Date(2020, 7, 14),
  },
  {
    id: "2",
    title: "bike",
    amount: 100.6,
    date: new Date(2021, 3, 5),
  },
  {
    id: "3",
    title: "house",
    amount: 3000.6,
    date: new Date(2018, 8, 2),
  },
];
const Lesson1 = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpense = (savedExpense) => {
    console.log(savedExpense);
    setExpenses((prevExpenses) => {
      return [savedExpense, ...prevExpenses];
    });
  };

  return (
    <div>
      <Description />
      <NewExpense onAddExpense={addExpense} />
      <Expenses data={expenses} />
    </div>
  );
};

export default Lesson1;
