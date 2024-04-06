import axios from 'axios';

const baseURL = `http://localhost:7001/api`
const baseURL2 = `http://localhost:8080/api`


export const axiosGet = (url) =>{
    return axios.get(`${baseURL}${url}`, {
        headers:{
            "Content-Type": "multipart/form-data;"
        }
    })
}
export const axiosPost = (url, data) => {
    return axios.post(`${baseURL}${url}`, data, {
        headers: {
            "Content-Type": "application/json"
        }
    })
}
export const axiosDelete = (url) =>{
    return axios.delete(`${baseURL}${url}`,{
        headers:{
            "Content-Type": "multipart/form-data;"
        }
    })
}
export const axiosPut = (url, data) =>{
    return axios.put(`${baseURL}${url}`, data,{
        headers:{
            "Content-Type": "application/json"
        }
    })
}

export const axiosForSearchGet = (url) =>{
    return axios.get(`${baseURL2}${url}`, {
        headers:{
            "Content-Type": "multipart/form-data;"
        }
    })
}