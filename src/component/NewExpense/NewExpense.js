import React,{useState} from "react";
import './NewExpense.css'
import ExpenseForm from'./ExpenseForm'
const NewExpense=(props)=>{
   const [isEditing,setEditing]=useState(false)
    const saveExpenseDataHandler=(enteredData)=>{
     const expenseData={
        ...enteredData,
        id:Math.random().toString()
     }
     props.onAddExpense(expenseData)
     setEditing(false)
    }
    const editEventHandler=()=>{
      setEditing(true)
    }
    const onCancelHandler=()=>
    {
      setEditing(false)
    }
   return <div className="new-expense">
      {!isEditing && <button onClick={editEventHandler} >Add New Expense</button>}
     {isEditing &&<ExpenseForm  onSaveExpenseData={saveExpenseDataHandler} onCancel={onCancelHandler}/>}
   </div>
}
export default NewExpense