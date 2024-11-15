import React, { useState } from 'react'

export default function ExpenseForm({addexpense}) {

    const [amount, setamount] = useState('');
    const [description, setdescription] = useState("");
    const [type, settype] = useState("");


    const formSubmit = (e) => {
        e.preventDefault();
        addexpense(amount,description,type);
        setamount('');
        setdescription('');
        settype('');

        
    }

  return (
    <div className="formcontainer">
          <form className="form" onSubmit={formSubmit}>
            <input type="number" name="amount" className="input-field" value={amount} onChange={(e) => setamount(e.target.value)} placeholder="Amount" />
            <input type="text" name="des" className="input-field" value={description} onChange={(e) => setdescription(e.target.value)} placeholder="Description" />
            <div className="radio-field-container">
              <div className="radio-field">
              <input type="radio" name="type" value="Expense" onChange={(e) => settype(e.target.value)} /> 
              <label>Expense</label>
              </div>
              <div className="radio-field">
              <input type="radio" name="type" value="Income" onChange={(e) => settype(e.target.value)}  /> 
              <label>Income</label>
              </div>
            </div>
            <button type="submit" className="btn">Add</button>
          </form>
        </div>
  )
}
