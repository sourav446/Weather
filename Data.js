import axios from "axios"

let API_KEY="9fa4d191ec185b5747951310ba73c9ec"
let URL="https://api.openweathermap.org/data/2.5/weather"

export const Data=async (query)=>{
    let {data}=await axios.get(URL,{
        params:{
            q:query,
            units:"metric",
            appid:API_KEY
        }
    })
    return data
}