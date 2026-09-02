

const url = import.meta.env.VITE_API_URL;

 export const deleteItem = async (id) => {

    const res = await fetch(`${url}/${id}`,{
            method:'DELETE'
    })
    if(!res.ok){
        const error = new Error(`${res.status} Something went wrong`)
        throw error
    }
}