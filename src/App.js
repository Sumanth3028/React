import React from 'react'
import ExpenseItem from "./component/Expenses/ExpenseItem";
import Expenses from './component/Expenses/Expenses';
import NewExpense from './component/NewExpense/NewExpense'

 const App =() =>{
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94,
      date: new Date(2020, 7, 14),
      location:'hyderabad'
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12),location:'Bangalore' }
   ,    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location:'kerela'
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
       location:"chennai"
    },
  ];
  
 
  return (
    
    <div>
      <NewExpense />
      <Expenses data={expenses} />
      
    </div>
  //   <div>
      
  //   { expenses.map((data) =>(
  //      <ExpenseItem  
  //       title={data.title}
  //       amount={data.amount}
  //       date={data.date}
  //       location={data.location}
   
  //    ></ExpenseItem> 
   
  //    ))}
  // </div>
  
  );
  }
  export default App


