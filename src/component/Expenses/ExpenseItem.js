import React from 'react'
import Expensecss from "./ExpenseItem.css";
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
 import ExpenseLocation from "./ExpenseLocation";

const ExpenseItem =(props) => {
//   const expenseDate = new Date(2023, 1, 3);
//   const expenseTitle1 = "Car Insurace";
//   const expensePrice1 = 200;
 
//   const expenseLocation='Hyderabad'
 
  return (
    <Card className='expense-item'>
    
      <ExpenseDate date={props.date} />
      <ExpenseDetails title={props.title} amount={props.amount} />
       <ExpenseLocation location={props.location}></ExpenseLocation> 
    
    </Card>
  );
}

export default ExpenseItem;
