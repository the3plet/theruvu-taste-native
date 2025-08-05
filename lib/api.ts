import axios from 'axios'
import useAuthStore, {} from '@/store/auth'

const axiosAPI = axios.create({baseURL:process.env.EXPO_PUBLIC_API_URL})

axiosAPI.interceptors.request.use((config)=>{
    const token = useAuthStore.getState().user?.token
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})
export default axiosAPI
