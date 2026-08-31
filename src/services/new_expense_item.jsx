

const url = import.meta.env.VITE_API_URL;
export const newExpenseItem = async (item) => {
    const res = await fetch(url, {
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        }, 
        body: JSON.stringify(item)
    })
         if(!res.ok){
            const error = new Error(`${res.status} Something went wrong please try again` )
            throw error
        }
    return res.json()
} 