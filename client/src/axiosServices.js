import axios from 'axios';

// const baseURL = `http://localhost:7001/api`
// // const baseURL2 = `http://localhost:8080/api`
// const baseURL2 = `http://nginx.bluebay-1372140f.australiaeast.azurecontainerapps.io/api`

const baseURL = `https://nginx.bluebay-1372140f.australiaeast.azurecontainerapps.io/api`; // Search service için
const baseURL2 = `https://nginx.bluebay-1372140f.australiaeast.azurecontainerapps.io/api`; // Product service için

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
            "Content-Type": "multipart/form-data;"
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
            "Content-Type": "multipart/form-data;"
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