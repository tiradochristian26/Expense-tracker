import Button from "../common/Button";
import { Trash2 } from "lucide-react";
import { deleteItem } from "../services/delete_item";
import { useState } from "react";
const ExpenseList = ({ expenses, setExpenses }) => {
const [idToDelete,setIdToDelete] = useState(new Set())
const [deleteError,setDeleteError] = useState(null)

    const handleDelete = async (id) => {
        setIdToDelete(prev => {
            const next = new Set(prev)
            next.add(id)
            return next
        })
        try {
             await (deleteItem(id))
            setExpenses(prev => prev.filter(expense => expense.id !== id ))
        } catch (error) { 
            setDeleteError(error.message)
        }finally {
              setIdToDelete(prev => {
            const next = new Set(prev)
            next.delete(id)
            return next
        })
        }
    }
    return (
        <div className="border border-gray-200 rounded-xl m-2 p-4 space-y-6 min-h-[50vh]">
            <div className="flex justify-between items-center">
                <h1 className="text-gray-950 font-medium">Recent Expense</h1>
                <div className="flex gap-2">
                    <Button
                        color={"bg-white"}
                        type={"button"}
                        content={"All"}
                        textColor={"black"}
                    />
                    <Button
                        color={"bg-white"}
                        type={"button"}
                        content={"Food"}
                        textColor={"black"}
                    />
                    <Button
                        color={"bg-white"}
                        type={"button"}
                        content={"Transport"}
                        textColor={"black"}
                    />
                    <Button
                        color={"bg-white"}
                        type={"button"}
                        content={"Bills"}
                        textColor={"black"}
                    />
                </div>
            </div>

            <div>
                    {deleteError && <p className="text-red-600">{deleteError}</p>}
                {expenses.length > 0 ? (
                    <ul className="space-y-3">
                        {expenses.map((expense) => {
                            const isDeleting = idToDelete.has(expense.id)
                            return (
                                <li key={expense.id} className="flex justify-between">
                                <div>
                                    <p className="font-medium  text-gray-950"> {expense.description}</p>
                                    <p
                                        className="text-gray-700 border text-center 
                        px-2 rounded-lg text-xs w-fit "
                                    >
                                        {expense.category}
                                    </p>
                                </div>
                                <div className="flex items-center gap-6">
                                    <p className="font-medium text-gray-950">₱{expense.amount}</p>
                                    <div >
                                        <button
                                            disabled = {isDeleting}
                                            onClick={() => handleDelete(expense.id)}
                                            className="border p-1 rounded-md border-gray-300 cursor-pointer"
                                        >{isDeleting ? 'Deleting' : <Trash2
                                                size={16}
                                                color="red"
                                            />}</button>    
                                    </div>
                                </div>
                            </li>
                            )
                            
})}
                    </ul>
                ) : (
                    <p className="text-gray-500 text-center w-full font-medium">
                        No records yet
                    </p>
                )}
            </div>
        </div>
    );
};

export default ExpenseList;
