import Button from "../common/Button";
const ExpenseList = ({expenses}) => {  



    return (
      
          <div className="border border-gray-200 rounded-xl m-2 p-4  min-h-[50vh]">

          <div className="flex justify-around">
            <h1 className="text-gray-950 font-medium" >Recent Expense</h1>
            <div className="flex gap-2">
                    <Button 
                        color={'bg-white'}
                            type={'button'}
                            content={'All'}
                            textColor={'black'}
                    />
                     <Button 
                        color={'bg-white'}
                            type={'button'}
                            content={'Food'}
                            textColor={'black'}
                    />
                     <Button 
                        color={'bg-white'}
                            type={'button'}
                            content={'Transport'}
                            textColor={'black'}
                    />
                     <Button 
                        color={'bg-white'}
                            type={'button'}
                            content={'Bills'}
                            textColor={'black'}
                    />
            </div>
        </div>

        <div >
                   {expenses.length > 0 ? (
                         <ul>
                        {expenses.map(expense => (
                            <li key={expense.id} 
                           className="flex justify-between"
                            >
                         <div>
                                 <p className="font-bold"> {expense.description}</p>
                                 <p className="text-gray-700 border text-center 
                                 px-2 py-0.5 rounded-xl text-sm">{expense.category}</p>
                             </div>
                           
                              <p className="font-bold">₱{expense.amount}</p>
                                    
                            </li>
                        ))}
                    </ul>
                   ):(
                    <p className="text-gray-500 text-center w-full font-medium">
                    No records yet
                    </p>
                   )}
        </div>
        

          </div>
        
     
    )


}

export default ExpenseList;