import React, { useState } from 'react'
import Header from './Header';
import './App.css'
import ExpensesForm from './ExpensesForm';
import ExpensesList from './ExpensesList';
import ExpenseFilter from './ExpenseFilter';

function App() {

    const [expenses, setExpenses] = useState([]);
    const [filteredyear, setFilteredyear] = useState("2026");

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => [...prevExpenses, expense]);
    };

    const deleteExpensesHander = (id) => {
        setExpenses((prevExpenses) =>
            prevExpenses.filter((expense) => expense.id !== id)
        );
    };

    const fileterchangehandeler = (year) => {
        setFilteredyear(year);
    };

    const filteredExpenses = expenses.filter(
        (expense) =>
            new Date(expense.date).getFullYear().toString() === filteredyear
    );

    const totalamount = filteredExpenses.reduce(
        (acc, curr) => acc + curr.amount,
        0
    );

    return (
        <div>
            <Header />
            <h3>Total Amount: ₹{totalamount}</h3>

            <ExpensesForm onAddExpense={addExpenseHandler} />

            <ExpenseFilter
                selectedYear={filteredyear}
                onChangeYear={fileterchangehandeler}
            />

            <ExpensesList
                items={filteredExpenses}
                onDeleteExpense={deleteExpensesHander}
            />
        </div>
    );
}

export default App;