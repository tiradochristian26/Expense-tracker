  import { useState,useEffect } from "react";
  import ExpenseForm from "./components/ExpenseForm";
  import ExpenseList from "./components/ExpenseList";
  import getExpense from "./services/get_expense";
  import { Loader } from "./components/loader";
const App = () => {
    const [expenses,setExpenses] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [err,setErr] = useState(null)
    useEffect(() => {
      const getExpenseRecord =  async () => {
      setIsLoading(true)
      setErr(null)
        try {
        const res = await getExpense();
          setExpenses(res)
        }catch(error){
          setErr(error.message)
        }finally{
          setIsLoading(false)
        }
      }
      getExpenseRecord()
    },[])
  return (
    <>
      {!isLoading && err && <p className="text-red-500 text-center">{err}</p> }
      {isLoading  && !err &&( <Loader/>)}
      {!isLoading && !err && <> <ExpenseForm setExpenses={setExpenses} expenses={expenses}
      />
      <ExpenseList 
      expenses={expenses}
      setExpenses={setExpenses}
      /> </>}
    
      

    </>
  )
}

export default App;