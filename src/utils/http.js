import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default axiosInstance

axiosInstance.interceptors.request.use(config => {
    return {
        ...config,
        params: {
            api_key: process.env.REACT_APP_API_KEY,
            ...config.params
        }
    }
})