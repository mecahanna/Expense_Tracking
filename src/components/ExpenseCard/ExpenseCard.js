import React from 'react'
import './ExpenseCard.css';
import Card from '../Card/Card';

function ExpenseCard({ data, setExpense }) {
    const deleteExpense = (expenseId) => {
        console.log(expenseId)
        const updatedExpense = data.filter((expense) => expense.id !== expenseId);
        setExpense(updatedExpense);
    };
    return (
        // <div id="list" className="list">
        <div className='card-container'>
            {data.map((value, index) => {
                return (
                    <Card key={index} data={value} deleteExpense={deleteExpense} />
                )

                }

                )
            }
        </div>

    )
}
export default ExpenseCard;


