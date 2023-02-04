import React,{useState} from 'react'
import Expensecss from "./ExpenseItem.css";
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
 import ExpenseLocation from "./ExpenseLocation";

const ExpenseItem =(props) => {

 
//   const expenseLocation='Hyderabad'
     
      
  const [old,setTitle]=useState(props);
  // let id=old.title;
  
   const removeHandler=()=>
{
  //  const removed=old.filter((exp)=>exp.id!==id)
    
  const element = document.getElementById("delete");
  //console.log(element)
  element.remove()
      
      
      
    
}
  

  return (
    <div id='delete'>
    <Card className='expense-item' >
    
      <ExpenseDate date={props.date} />
      <ExpenseDetails title={props.title} amount={props.amount} />
       <ExpenseLocation location={props.location}></ExpenseLocation> 
       <button onClick={removeHandler}>Delete Expense</button>
    </Card>
    </div>
  );
}

export default ExpenseItem;
