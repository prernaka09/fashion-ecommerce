import type { Product } from './product'

export interface CartItem {
  id: string
  productId: string
  product: Product
  size: string
  color: string
  quantity: number
  price: number
  discountPrice?: number
}

export interface Cart {
  items: CartItem[]
  totalItems: number
  subtotal: number
  discountTotal: number
  taxTotal: number
  shippingTotal: number
  grandTotal: number
}
