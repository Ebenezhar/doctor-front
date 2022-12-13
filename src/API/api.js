import axios from "axios";

const instance = axios.create({
    baseURL: 'https://doctor-server-cyan.vercel.app',
    // baseURL: 'http://localhost:5000'

})



export default instance;