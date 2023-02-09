import React,{useState} from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./Expensesfilter";
const Expenses = (props) => {
  const [filteredyear,setFilteredYear]=useState('2020');
  const filterChangeHandler=(selectedyear)=>{
    setFilteredYear(selectedyear)
  }
  return (
   <div>
    <Card className="expenses">
      <ExpensesFilter selected={filteredyear} onChangeFilter={filterChangeHandler} />
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
