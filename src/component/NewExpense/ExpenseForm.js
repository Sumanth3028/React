import React ,{useState} from "react";
import './ExpenseForm.css'
const ExpenseForm=(props)=>{
    const [enteredTitle,setChangedTitle]=useState('')
    const [enteredAmount,setChangedAmount]=useState('')
    const [enteredDate,setChangedDate]=useState('')
    // const [userInput,setUserInput]=useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''

    // })

    const titleChangeHandler=(event)=>{
       setChangedTitle(event.target.value)
    //    setUserInput((prevState)=>{
    //     return{...prevState,enteredTitle:event.target.value}
    //    })
       
        
       
    }
    const amountChangeHandler=(event)=>{
        setChangedAmount(event.target.value)
        // setUserInput((prevState)=>{
        //     return{...prevState,enteredAmount:event.target.value}
        //    })
    }
    const dateChangeHandler=(event)=>{
        setChangedDate(event.target.value)
        // setUserInput((prevState)=>{
        //     return{...prevState,enteredDate:event.target.value}
        //    })
    }
    const formHandler=(event)=>{
        event.preventDefault();
        const expense={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }
         props.onSaveExpenseData(expense)
        setChangedAmount('')
        setChangedTitle('')
        setChangedDate('')
    }
return(
      <form onSubmit={formHandler}>
    <div className="new-expense__controls">
    <div className="new-expense__control">
        <label>ExpenseTitle:</label>
        <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
        <div className="new-expense__control">
        <label>ExpenseAmount:</label>
        <input type='number' min='0.01' step='0.01'  value={enteredAmount} onChange={amountChangeHandler} />
        </div>
    <div className="new-expense__control">
        <label>ExpenseDate:</label>
        <input type='Date' min='2019-01-01' max='2022-12-31'  value={enteredDate} onChange={dateChangeHandler} />
    </div>   
    </div>
    </div>
    <div className="new-expense__actions">
        <button type='submit'>SubmitExpense</button>
    </div>
    </form>
)
}
export default ExpenseForm