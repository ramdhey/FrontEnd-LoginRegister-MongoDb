import axios from "axios"

//https://regisloginappmongo.herokuapp.com

const ServerAPI = axios.create({
    baseURL:'http://localhost:5003',
})
export default ServerAPI