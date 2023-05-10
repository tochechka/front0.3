import axios from 'axios';

const BASE_URL='https://api.forensicais.xxcf.cf';

const apiClient = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
})

export const apiPrivate = axios.create({
    baseURL: BASE_URL,
    headers: {'Content-Type': 'application/json'},
    withCredentials: true
})

export default apiClient;