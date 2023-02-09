import React from "react";
import './ExpensesList.css'
import Expenses from "./Expenses";
import ExpenseItem from "./ExpenseItem";
const ExpensesList=(props)=>{
    if(props.data.length===0)
    {
        return(<h2 className="expenses-list__fallback">Found no Content</h2>)
    }
    else if(props.data.length===1)
    {
        return(
            <ul className="expenses-list">
                {props.data.map((expense) => (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
                ))};
              <li className="expenses-list__fallback">Single Expense Found Add more</li>
            </ul>
            
          )

    }
      
      return(
        <ul className="expenses-list">
            {props.data.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
            ))};
      
        </ul>
      )
}
export default ExpensesList