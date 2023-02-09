import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./Expensesfilter";
import ExpensesList from "./ExpensesList";
const Expenses = (props) => {
  const [filteredyear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedyear) => {
    setFilteredYear(selectedyear);
  };
  const filteredExpenses = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredyear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredyear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList data={filteredExpenses} />
      </Card>
    </div>
  );
};
export default Expenses;
