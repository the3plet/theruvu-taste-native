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

axiosAPI.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid → Logout
      useAuthStore.getState().signout();
    }
    return Promise.reject(error);
  }
);
export default axiosAPI
