import React from 'react'
import moment from 'moment'
function Card({ data }) {
    
    const formattedDate = moment(data.date,"DD-MM-YYYY").format('YYYY/MM/DD');
    // TODO show date as YYYY/MM/DD
    return (
        <div className="expense-card">
            {data.expenseName}<span>{data.amount}</span>
            {formattedDate}
        </div>
    );
};
export default Card;