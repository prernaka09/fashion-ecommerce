import { useAppDispatch, useAppSelector } from '../store/hooks'
import {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  applyCoupon,
  removeCoupon,
} from '../store/slices/cartSlice'
import type { CartItem, Coupon } from '../types'

export const useCart = () => {
  const dispatch = useAppDispatch()
  const { items, totalItems, subtotal, appliedCoupon, loading } = useAppSelector(
    (state) => state.cart
  )

  const discountAmount = appliedCoupon
    ? appliedCoupon.discountType === 'percentage'
      ? (subtotal * appliedCoupon.discountValue) / 100
      : appliedCoupon.discountValue
    : 0

  const grandTotal = Math.max(0, subtotal - discountAmount)

  return {
    items,
    totalItems,
    subtotal,
    discountAmount,
    grandTotal,
    appliedCoupon,
    loading,
    addItem: (item: CartItem) => dispatch(addToCart(item)),
    removeItem: (id: string) => dispatch(removeFromCart(id)),
    setQuantity: (id: string, quantity: number) =>
      dispatch(updateQuantity({ id, quantity })),
    clear: () => dispatch(clearCart()),
    applyCouponCode: (coupon: Coupon) => dispatch(applyCoupon(coupon)),
    removeCouponCode: () => dispatch(removeCoupon()),
  }
}
