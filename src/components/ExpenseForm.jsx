
import { useState } from "react";
import Button from "../common/Button";
import { Plus } from "lucide-react";
import { newExpenseItem } from "../services/new_expense_item";
const ExpenseForm = ({expenses,setExpenses}) => {
    const [description,setDescription] = useState('');
    const [amount,setAmount] = useState(NaN);
    const [category,setCategory] = useState('food')
    const [isSubmitting,setIsSubmitting] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()
        if(description.trim() === '' || Number.isNaN(amount) || amount <= 0) {
            alert('invalid')
            return;
         }
         const item = {
            description,
            amount,
            category
         }  
         try {
            setIsSubmitting(true)
           const newItem = await newExpenseItem(item)
           setExpenses([...expenses,newItem])
         setDescription('')
         setAmount(NaN)
         setCategory('food')
         } catch (error) { 
            alert(error.message)
            return;
         }finally{
            setIsSubmitting(false)
         }
    }
    return (    
        <div className="bg-white border border-gray-200 rounded-xl m-2 p-4 ">
            <div> 
             <h1 className="text-gray-950 font-medium">Add Expense</h1>
            </div>
            <form action="" onSubmit={handleSubmit}>    
                
                <div className="flex flex-col md:flex-row md:items-end items-stretch gap-2 p-3
                  ">
                    
                <div className="flex flex-col ">
                <label htmlFor="description" 
                className="text-gray-600 text-md">Description</label>
                <input 
                onChange={e =>setDescription(e.target.value)}
                value={description}
                type="text" 
                id="description" 
                placeholder="e.g Grab food" 
                required
                                               className="border border-gray-200 rounded-md px-3 py-2 outline-none
                                hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                                transition duration-150 text-sm text-gray-900 placeholder:text-gray-300"/>
                </div>

                 <div className="flex flex-col ">
                <label htmlFor="amount" className="text-gray-600 text-md">Amount (&#8369;)</label>
                <input 
                onChange={e =>setAmount(e.target.valueAsNumber)}
                value={Number.isNaN(amount) ? '' : amount}
                type="number" 
                id="amount"
                placeholder="0.00"
                required
                                            className="border border-gray-200 rounded-md px-3 py-2 outline-none
                                hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                                transition duration-150 text-sm text-gray-900 placeholder:text-gray-300"
                  />
                </div>

                <div className="flex flex-col ">
                    <label htmlFor="category" className="text-gray-600 text-md">Category</label>
            <select id="category" 
            onChange={(e) => setCategory(e.target.value)}
            value={category}
                                 className="border border-gray-200 rounded-md px-3 py-2 outline-none
                                hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20
                                transition duration-150 text-sm text-gray-900 placeholder:text-gray-300"
            >
     
                <option value="food" >Food</option>
                <option value="bills" >Bills</option>
                <option value="transportation" >Transportation</option>
                <option value="others">Others</option>
     

            </select>
                    </div>      
                     <Button type='submit'
                            content='add'
                            color={isSubmitting? 'bg-blue-300': 'bg-blue-500'}  
                            textColor={'text-white'}
                            disabled={isSubmitting}
                            Icon={<Plus 
                            size={15}
                                
                            />}
                        />
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm;