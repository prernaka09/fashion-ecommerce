import apiClient from './apiClient'
import type { Cart, ApiResponse } from '../types'

export const cartService = {
  getCart: async (): Promise<ApiResponse<Cart>> => {
    const response = await apiClient.get('/cart')
    return response.data
  },

  syncCart: async (items: Cart['items']): Promise<ApiResponse<Cart>> => {
    const response = await apiClient.post('/cart/sync', { items })
    return response.data
  },
}
