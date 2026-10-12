import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL


// export const showAllProducts = () => axios.get(`${BASE_URL}`) ; 

// export const addProduct = (pro) => axios.post(`${BASE_URL}` , pro) 

export const  api = axios.create({
    baseURL : BASE_URL
})