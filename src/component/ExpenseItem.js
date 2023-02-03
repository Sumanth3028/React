import Expensecss from "./ExpenseItem.css";
function ExpenseItem(props) {
//   const expenseDate = new Date(2023, 1, 3);
//   const expenseTitle1 = "Car Insurace";
//   const expensePrice1 = 200;
  const expenseTitle2 = "Location";
//   const expenseLocation='Hyderabad'

  return (
    <div className="expense-item">
      <div className="expense-item__description">
        {props.date.toISOString()}
      </div>
      <div className="expense-item__description">
        <h2> {props.title}</h2>
        <div className="expense-item__price"> Rs {props.amount}</div>
      </div>
      <div className="expense-item__description">
       <h2>{expenseTitle2}:</h2>
       <div className="expense-item__description"><h2> {props.location}</h2></div>
      </div>
    </div>
  );
}

export default ExpenseItem;
