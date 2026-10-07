import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { CartItem, Coupon } from '../../types'

interface CartState {
  items: CartItem[]
  totalItems: number
  subtotal: number
  appliedCoupon: Coupon | null
  loading: boolean
}

const calculateTotals = (items: CartItem[]) => {
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)
  const subtotal = items.reduce((acc, item) => {
    const activePrice = item.discountPrice ?? item.price
    return acc + activePrice * item.quantity
  }, 0)
  return { totalItems, subtotal }
}

const initialState: CartState = {
  items: [],
  totalItems: 0,
  subtotal: 0,
  appliedCoupon: null,
  loading: false,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingIndex = state.items.findIndex(
        (item) =>
          item.productId === action.payload.productId &&
          item.size === action.payload.size &&
          item.color === action.payload.color
      )

      if (existingIndex > -1) {
        state.items[existingIndex].quantity += action.payload.quantity
      } else {
        state.items.push(action.payload)
      }

      const { totalItems, subtotal } = calculateTotals(state.items)
      state.totalItems = totalItems
      state.subtotal = subtotal
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      const { totalItems, subtotal } = calculateTotals(state.items)
      state.totalItems = totalItems
      state.subtotal = subtotal
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const item = state.items.find((i) => i.id === action.payload.id)
      if (item && action.payload.quantity > 0) {
        item.quantity = action.payload.quantity
      }
      const { totalItems, subtotal } = calculateTotals(state.items)
      state.totalItems = totalItems
      state.subtotal = subtotal
    },
    applyCoupon: (state, action: PayloadAction<Coupon>) => {
      state.appliedCoupon = action.payload
    },
    removeCoupon: (state) => {
      state.appliedCoupon = null
    },
    clearCart: (state) => {
      state.items = []
      state.totalItems = 0
      state.subtotal = 0
      state.appliedCoupon = null
    },
    setCartLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  applyCoupon,
  removeCoupon,
  clearCart,
  setCartLoading,
} = cartSlice.actions

export default cartSlice.reducer

