import axios from "axios"

const ServerAPI = axios.create({
    baseURL:process.env.URL_SERVER_REACT,
})
export default ServerAPI