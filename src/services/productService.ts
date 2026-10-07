import apiClient from './apiClient'
import type { Product, ProductFilterParams, ApiResponse, PaginatedResponse, Category } from '../types'

export const productService = {
  getProducts: async (params?: ProductFilterParams): Promise<ApiResponse<PaginatedResponse<Product>>> => {
    const response = await apiClient.get('/products', { params })
    return response.data
  },

  getProductById: async (id: string): Promise<ApiResponse<Product>> => {
    const response = await apiClient.get(`/products/${id}`)
    return response.data
  },

  getCategories: async (): Promise<ApiResponse<Category[]>> => {
    const response = await apiClient.get('/categories')
    return response.data
  },

  getFeaturedProducts: async (): Promise<ApiResponse<Product[]>> => {
    const response = await apiClient.get('/products/featured')
    return response.data
  },
}
