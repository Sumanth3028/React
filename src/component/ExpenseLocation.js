export default function ExpenseLocation(props){
    const expenseTitle2 = "Location";
    return(
        <div className="expense-item__description">
       <h2>{expenseTitle2}:</h2>
       <div className="expense-item__description"><h2> {props.location}</h2></div>
      </div>
    )
}