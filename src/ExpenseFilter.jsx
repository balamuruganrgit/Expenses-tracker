import react from "react";

function ExpensesFilter({selectedyear,onchangeyear}){
    return(
        <div style ={{marginBottom:"20px",textAlign:"center"}} >
            <select value ={selectedyear} onChange={(e)=>onchangeyear(e.target.value)}>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
            </select>
            </div>

    );
}
export default ExpensesFilter;
