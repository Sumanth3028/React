import React from 'react'
const ExpenseLocation=(props)=>{
   
    return(
        <div>
       
       <div className="expense-item__description"><h2> {props.location}</h2></div>
      </div>
    )
}
export default ExpenseLocation