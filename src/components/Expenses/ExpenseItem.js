import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);
  console.log("expense item is evaluated")
  
  const btnHandler =  () => {
    setTitle("Updated")  
    console.log(title)
    console.log(title)
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={btnHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
