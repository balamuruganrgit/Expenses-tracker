import React,{useState} from "react";

function ExpensesForm() {

    const [title,setTitle]=useState("");
    const[amount,setAmount]=useState("");
    const[date,setDate]=useState("");

    const handlesumbit=(e)=>{
        e.preventDefault();

       const expensesData={
        title,
        amount,
        date
    };
    console.log(expensesData);

    setTitle("");
    setAmount("");
    setDate("");
    }
    return(
        <div style={{marginTop:"20px", textAlign:"center" }}>
            <form onSubmit={handlesumbit}>
                <input type="text" 
                placeholder="Enter title"
                value={title}
                onChange={(e)=> setTitle(e.target.value)}/>

                <br></br>

                <input type="number"
                placeholder="Enter Amount"
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}/>
                <br></br>

                <input type="date"
                value={date}
                onChange={(e)=>setDate(e.target.value)}/>
                <br></br>

                <button type="submit">Add Expense</button>

            </form>
            </div>

    );

}

export default ExpensesForm;
