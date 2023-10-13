import React from 'react'
import moment from 'moment'
function Card({ data, deleteExpense}) {
    
    const formattedDate = moment(data.date).format('YYYY/MM/DD');
    const handleDeleteClick = (id) => {
        deleteExpense(id);
      };
        
        
    return (
        <div className="expense-card">
            {data.expenseName}<span>{data.amount}</span>
            {formattedDate}<span>{data.description}</span>{data.id}
            <button className="delete-button"onClick={() => {handleDeleteClick(data.id)}}>Delete</button>
        </div>
    );
};
export default Card;