import axios from 'axios';

const api = axios.create({
    baseURL: "https://localhost:7106",
})

export default api;