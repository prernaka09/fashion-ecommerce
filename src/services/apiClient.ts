import axios from 'axios'
import type { AxiosError, InternalAxiosRequestConfig } from 'axios'
import { APP_CONFIG } from '../constants'

const baseURL = import.meta.env.VITE_API_BASE_URL || '/api'

export const apiClient = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000,
})

// Request Interceptor: Attach Auth Token
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem(APP_CONFIG.STORAGE_KEYS.AUTH_TOKEN)
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

// Response Interceptor: Global Error & Unauthenticated Handling
apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      // Clear token if expired/unauthorized
      localStorage.removeItem(APP_CONFIG.STORAGE_KEYS.AUTH_TOKEN)
    }
    return Promise.reject(error)
  }
)

export default apiClient
