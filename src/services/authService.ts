import apiClient from './apiClient'
import type { User, ApiResponse } from '../types'

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData {
  name: string
  email: string
  password: string
  phone?: string
}

export interface AuthResponseData {
  user: User
  token: string
}

export const authService = {
  login: async (credentials: LoginCredentials): Promise<ApiResponse<AuthResponseData>> => {
    const response = await apiClient.post('/auth/login', credentials)
    return response.data
  },

  register: async (data: RegisterData): Promise<ApiResponse<AuthResponseData>> => {
    const response = await apiClient.post('/auth/register', data)
    return response.data
  },

  getProfile: async (): Promise<ApiResponse<User>> => {
    const response = await apiClient.get('/auth/profile')
    return response.data
  },

  logout: async (): Promise<ApiResponse<null>> => {
    const response = await apiClient.post('/auth/logout')
    return response.data
  },
}
