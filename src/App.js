import React, { useState,useEffect } from "react";
import sampledata from './sample-data.json';
import Header from "./components/Header/Header";
import './App.css';
import ExpenseCard from "./components/ExpenseCard/ExpenseCard";
import Footer from "./components/Footer/Footer";
import TotalAmount from "./components/TotalAmount/TotalAmount";
import State from "./components/State/State";
//import Expenselayout from "./components/Expenselayout";
import Input from "./components/Input/Input";
function App() {
  
  
  let totalamount = 0;
  sampledata.forEach(value => {
    if (typeof value.amount === 'number') {
    totalamount += value.amount;
    }
  });
  console.log(totalamount);

  const [expense, setExpense] = useState(sampledata);
  
  // const addExpense = (newExpense) => {
  //   setExpense([expense, newExpense]);
  // };

  // useEffect(() => {
  //   // Fetch the JSON data from the file
  //   fetch('/sample-data.json')
  //     .then((response) => response.json())
  //     .then((data) => setExpense(data))
  //     .catch((error) => console.error('Error fetching data:', error));
  // }, []);
  const addNewExpense = (newExpense) => {
    const id = Date.now().toString();
    const updatedExpenses = [...expense, { ...newExpense, id }];
    setExpense(updatedExpenses);
  };

  return (
    <div>
      <Header />
      {/* <Input data={expense} setExpense={setExpense}/> */}
      <State/>
      <Input onAddExpense={addNewExpense} />
      <TotalAmount totalamountshow={totalamount} />
      {/* <ExpenseCard data={sampledata} /> */}
      <ExpenseCard data={expense} setExpense={setExpense}/>
      {/* <Expenselayout data={expense} setExpense={setExpense} /> */}
      <Footer />
    </div>
  );
}

export default App;