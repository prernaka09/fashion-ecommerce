export type DiscountType = 'percentage' | 'fixed'

export interface Coupon {
  id: string
  code: string
  description?: string
  discountType: DiscountType
  discountValue: number
  minimumPurchase: number
  maximumDiscount?: number
  expiresAt: string
  isActive: boolean
}
