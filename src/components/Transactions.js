import React from 'react'

export default function Transactions({expense}) {
  return (
    
      <div className={`${expense.type === 'Expense' ? 'transaction-expense' : 'transaction-income'}`} >
        <span>{expense.description}</span>
        <span>${expense.amount}</span>
      </div>
    
  )
}
