import type { Address } from './user'
import type { Product } from './product'

export type OrderStatus =
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'out_for_delivery'
  | 'delivered'
  | 'cancelled'
  | 'return_requested'
  | 'returned'
  | 'refunded'

export type PaymentMethod = 'credit_card' | 'debit_card' | 'net_banking' | 'upi' | 'cod'

export type PaymentStatus = 'pending' | 'completed' | 'failed' | 'refunded'

export interface OrderItem {
  id: string
  productId: string
  product: Product
  size: string
  color: string
  quantity: number
  price: number
}

export interface Order {
  id: string
  orderNumber: string
  userId: string
  items: OrderItem[]
  shippingAddress: Address
  billingAddress: Address
  paymentMethod: PaymentMethod
  paymentStatus: PaymentStatus
  orderStatus: OrderStatus
  subtotal: number
  discount: number
  shippingFee: number
  tax: number
  totalAmount: number
  trackingNumber?: string
  estimatedDelivery?: string
  deliveredAt?: string
  cancelledAt?: string
  cancellationReason?: string
  returnReason?: string
  createdAt: string
  updatedAt: string
}
