
import { useEffect, useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseIncome from './components/ExpenseIncome';
import Transactions from './components/Transactions';

function App() {

  const [showForm, setshowform] = useState(false);
  const [btntext, setbtntext] = useState("Add");

  const [expenses, setexpenses] = useState([]);
  let [totalexpenses, settotalexpenses] = useState(0);
  let [totalincome, settotalincome] = useState(0);

  const onClickbtnform = () => {
    setshowform(!showForm);
    if (btntext === "Add") {
      setbtntext("Cancel");
    }else{
      setbtntext("Add");
    }
  }

 
  const addexpense = (amount,description,type) => {
    
    setexpenses([...expenses, {amount: amount, description:description,type: type}]);

    setshowform(!showForm);
    if (btntext === "Add") {
      setbtntext("Cancel");
    }else{
      setbtntext("Add");
    }
  }



  useEffect(() => {
    const colculationexpense = () => {
      let exp = 0;
      let inc = 0;
      expenses.map((expense, index) => (
        expense.type === "Expense" ? 
        (exp= exp + parseInt(expense.amount)) 
        : 
        (inc= inc + parseInt(expense.amount))
      ));
      settotalexpenses(exp);
      settotalincome(inc); 
    };
    colculationexpense();
  }, [expenses]);

  return (
    <div className="Appcontainer">
     
        <h1>Expense Tracker</h1>
        <div className="balance">
          <p>Balance: ${totalincome - totalexpenses}</p>
          <button className="btn" onClick={onClickbtnform}>{btntext}</button>
        </div>
        {showForm && <ExpenseForm addexpense={addexpense} />}
        
        <ExpenseIncome totalexpenses={totalexpenses} totalincome={totalincome} /> 
        <h3>Transactions</h3>
        {expenses.map((expense, index) => (
          
          <Transactions key={index} expense={expense} />
        ))}
         
        </div>
     
   
  );
}

export default App;
