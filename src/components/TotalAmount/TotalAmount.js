import React from 'react'
import './TotalAmount.css';
function TotalAmount({ totalamountshow }) {
    return (
        <div className="totalamount">
            <h1>Total: {totalamountshow}</h1>
            
        </div>
    )
}
export default TotalAmount;