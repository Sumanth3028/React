import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
const Expenses = (props) => {
  return (
   <div>
    <Card className="expenses">
      {props.data.map((expense) => {
         return(
         <ExpenseItem
            key={expense.id} 
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            />)
      })}
        
      
      
    </Card>
    </div>
   
  );
};
export default Expenses;
