import React,{useState} from 'react'
import Expensecss from "./ExpenseItem.css";
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import ExpenseDetails from './ExpenseDetails'
 import ExpenseLocation from "./ExpenseLocation";

const ExpenseItem =(props) => {

 
//   const expenseLocation='Hyderabad'
     
      
  const [old,setTitle]=useState(props.title);
  // let id=old.title;
  const [oldamount,setAmount]=useState(props.amount)
   const removeHandler=()=>
{
  //  const removed=old.filter((exp)=>exp.id!==id)
    
  const element = document.getElementById("delete");
  //console.log(element)
  element.remove()
      
      
      
    
}
const editHandler=()=>{
  setTitle('updated');
  console.log(old);
}
const addHandler=()=>{
  setAmount(100)
  console.log(oldamount)
}
  

  return (
    <div id='delete'>
    <Card className='expense-item' >
    
      <ExpenseDate date={props.date} />
      <ExpenseDetails title={old} amount={oldamount} />
       <ExpenseLocation location={props.location}></ExpenseLocation> 
       <button onClick={removeHandler}>Delete Expense</button>
       <button onClick={editHandler}>Edit Expense</button>
       <button onClick={addHandler}> Add Expense</button>
    </Card>
    </div>
  );
}

export default ExpenseItem;
