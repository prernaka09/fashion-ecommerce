import apiClient from './apiClient'
import type { Order, ApiResponse, PaginatedResponse, Address, PaymentMethod } from '../types'

export interface CreateOrderPayload {
  items: { productId: string; size: string; color: string; quantity: number }[]
  shippingAddress: Address
  billingAddress: Address
  paymentMethod: PaymentMethod
  couponCode?: string
}

export const orderService = {
  getOrders: async (page = 1, limit = 10): Promise<ApiResponse<PaginatedResponse<Order>>> => {
    const response = await apiClient.get('/orders', { params: { page, limit } })
    return response.data
  },

  getOrderById: async (id: string): Promise<ApiResponse<Order>> => {
    const response = await apiClient.get(`/orders/${id}`)
    return response.data
  },

  createOrder: async (payload: CreateOrderPayload): Promise<ApiResponse<Order>> => {
    const response = await apiClient.post('/orders', payload)
    return response.data
  },

  cancelOrder: async (id: string, reason: string): Promise<ApiResponse<Order>> => {
    const response = await apiClient.post(`/orders/${id}/cancel`, { reason })
    return response.data
  },

  requestReturn: async (id: string, reason: string): Promise<ApiResponse<Order>> => {
    const response = await apiClient.post(`/orders/${id}/return`, { reason })
    return response.data
  },
}
