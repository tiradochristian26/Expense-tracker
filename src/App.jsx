  import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
  import ExpenseList from "./components/ExpenseList";
const App = () => {
    const [expenses,setExpenses] = useState([])
     
  return (
    <>
      <ExpenseForm 
      setExpenses={setExpenses}
      expenses={expenses}
      />
      <ExpenseList 
      expenses={expenses}
      />
    </>
  )
}

export default App;