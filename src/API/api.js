import axios from "axios";

const instance = axios.create({
    baseURL: 'https://doctor-appointment-booker.herokuapp.com',
})

export default instance;