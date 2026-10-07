import type { PaymentMethod, PaymentStatus } from './order'

export interface PaymentDetails {
  orderId: string
  amount: number
  currency: string
  paymentMethod: PaymentMethod
  transactionId?: string
}

export interface PaymentResult {
  success: boolean
  transactionId: string
  orderId: string
  status: PaymentStatus
  message?: string
}
