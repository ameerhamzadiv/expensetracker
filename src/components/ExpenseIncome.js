import React from 'react'

export default function ExpenseIncome({totalexpenses,totalincome}) {
  return (
    <div className="expen-incom">
          <div className="expense">
            <span>Expense</span>
            <span>${totalexpenses}</span>
          </div>
          <div className="income">
          <span>Income</span>
          <span>${totalincome}</span>
          </div>
        </div>
  )
}
