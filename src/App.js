import React from "react";
import sampledata from './sample-data.json';
import Header from "./components/Header/Header";
import './App.css';
import './components/Header/header.css';
import ExpenseCard from "./components/ExpenseCard/ExpenseCard";
import Footer from "./components/Footer/Footer";
import TotalAmount from "./components/TotalAmount/TotalAmount";


function App() {
  let totalamount = 0;
  sampledata.forEach(value => {
    totalamount += parseFloat(value.amount.replace("$", ""));
  });

  console.log(totalamount);

  return (
    <div>
      <Header />
      <TotalAmount totalamountshow={totalamount} />
      <ExpenseCard data={sampledata} />
      <Footer />
    </div>
  );
}

export default App;