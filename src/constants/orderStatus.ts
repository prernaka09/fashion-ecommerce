import type { OrderStatus, PaymentStatus } from '../types'

export const ORDER_STATUS_LABELS: Record<OrderStatus, string> = {
  pending: 'Pending',
  confirmed: 'Order Confirmed',
  processing: 'Processing',
  shipped: 'Shipped',
  out_for_delivery: 'Out for Delivery',
  delivered: 'Delivered',
  cancelled: 'Cancelled',
  return_requested: 'Return Requested',
  returned: 'Returned',
  refunded: 'Refunded',
}

export const PAYMENT_STATUS_LABELS: Record<PaymentStatus, string> = {
  pending: 'Payment Pending',
  completed: 'Payment Completed',
  failed: 'Payment Failed',
  refunded: 'Refunded',
}
