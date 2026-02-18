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
    const deleteExpensesHander=(id)=>{
        setExpenses((prevExpenses)=>prevExpenses.filter((expenses)=>expenses.id !==id));

    };
    const totalamount=expenses.reduce((acc,curr)=>acc+curr.amount,0);

    return (
        <div>
            <Header/>
            <h3>Total Amount:  ₹{totalamount}</h3>
            
            <ExpensesForm onAddExpense={addExpenseHandler} />
            <ExpensesList items={expenses}
            onDeleteExpense={deleteExpensesHander}
            />
        </div>
    );
}

export default App;
