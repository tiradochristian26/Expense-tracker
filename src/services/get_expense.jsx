
const url = import.meta.env.VITE_API_URL;
const getExpense = async () => {
    const response = await fetch(url)
    if(!response.ok){
        if(response.status === 404){
            const error = new Error(`${response.status} not found please try again`)
            throw error;
            
        }else if(response.status === 401){
            const error = new Error(`${response.status} You are not authorized. Please log in and try again.`)
            throw error;
        }
        else{
            throw new Error('Something went wrong. Please try again.')
        }
    }

    return response.json()
}

export default getExpense;