import React from "react";
import ExpensesItem from "./ExpensesItem";

function ExpensesList({ items, onDeleteExpense }) {
    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            {items.map((expense) => (
                <ExpensesItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    onDelete={()=>onDeleteExpense(expense.id)}
                />
            ))}
        </div>
    );
}

export default ExpensesList;
