import axios from "axios";

export const API_URL = `https://tutor-backend-k28m.onrender.com/api/v1`

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json"
    }

})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

$api.interceptors.response.use((config) => {
    return config;
},async (error) => {
    console.log(error)
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get(`${API_URL}/authentication/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.accessToken);
            return $api.request(originalRequest);
        } catch (e) {
            console.log('не авторизований')

        }
    }
    throw error;
})

export default $api;