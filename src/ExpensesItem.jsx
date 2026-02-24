import React from "react";

function ExpensesItem({ title, amount, date, onDelete }) {
    return (
        
        <div style={{marginBottom: "10px"}}>
            <h3>{title}</h3>
            <p>Amount:  ₹{amount}</p>
            <p>Date: {date}</p>
            <button onClick={onDelete}>Delete</button>
            <hr/>


        </div>
       
    );
}

export default ExpensesItem;