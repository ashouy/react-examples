import React from "react";
import Card from "../UI/Card";
import ExpenseData from "./ExpenseData";
//rafce
import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseData date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
