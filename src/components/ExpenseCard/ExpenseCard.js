import React from 'react'
import './ExpenseCard.css';
import Card from '../Card/Card';

function ExpenseCard({ data }) {
    return (
        <div id="list" className="list">
            {data.map((value, index) => {
                return (
                    <Card key={index} data={value} />
                )
            })}
        </div>

    )
}
export default ExpenseCard;


