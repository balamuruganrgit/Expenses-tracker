import React, { useState } from 'react'
import Header from './Header';
import './App.css'
import ExpensesForm from './ExpensesForm';
import ExpensesList from './ExpensesList';

function App() {

    const [expenses, setExpenses] = useState([]);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [...prevExpenses, expense];
        });
    }

    return (
        <div>
            <Header />
            <ExpensesForm onAddExpense={addExpenseHandler} />
            <ExpensesList items={expenses} />
        </div>
    );
}

export default App;
