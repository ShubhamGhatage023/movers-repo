import axios from "axios"

export const getItemData = async() =>{
    try{
        const { data } = await axios.get('http://test.api.boxigo.in/sample-data/')
        return data.Customer_Estimate_Flow
    }
    catch{
        return null
    }    
}