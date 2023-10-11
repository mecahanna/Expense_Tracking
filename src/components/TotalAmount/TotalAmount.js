import React from 'react'
import './TotalAmount.css';
function TotalAmount({ totalamountshow }) {
    return (
        <div className="totalamount">
            <h1>Total:</h1>
            <p>{totalamountshow}</p>
        </div>
    )
}
export default TotalAmount;