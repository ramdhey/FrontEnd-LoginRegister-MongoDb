import axios from "axios"

//https://regisloginappmongo.herokuapp.com

const ServerAPI = axios.create({
    baseURL:'https://regisloginappmongo.herokuapp.com',
})
export default ServerAPI