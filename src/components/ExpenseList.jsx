import Button from "../common/Button";
import { Trash2 } from "lucide-react";
import { deleteItem } from "../services/delete_item";
const ExpenseList = ({ expenses, setExpenses }) => {
    const handleDelete = async (id) => {
        try {
            const item = await (deleteItem(id))
            setExpenses(prev => prev.filter(expense => expense.id !== item.id
            ))
        } catch (error) {
            console.log(error.message)
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
                {expenses.length > 0 ? (
                    <ul className="space-y-3">
                        {expenses.map((expense) => (
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
                                            onClick={() => handleDelete(expense.id)}
                                            className="border p-1 rounded-md border-gray-300 cursor-pointer"
                                        ><Trash2
                                                size={16}
                                                color="red"
                                            /></button>
                                    </div>
                                </div>
                            </li>
                        ))}
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
