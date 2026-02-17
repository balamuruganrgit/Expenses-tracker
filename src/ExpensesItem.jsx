import React from "react";

function ExpensesItem({ title, amount, date }) {
    return (
        <div style={{marginBottom: "10px"}}>
            <h3>{title}</h3>
            <p>Amount: ${amount}</p>
            <p>Date: {date}</p>
            <hr/>
        </div>
    );
}

export default ExpensesItem;