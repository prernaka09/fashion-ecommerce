import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Address, PaymentMethod } from '../../types'

interface CheckoutState {
  shippingAddress: Address | null
  billingAddress: Address | null
  paymentMethod: PaymentMethod | null
  step: number
  loading: boolean
}

const initialState: CheckoutState = {
  shippingAddress: null,
  billingAddress: null,
  paymentMethod: null,
  step: 1,
  loading: false,
}

export const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setShippingAddress: (state, action: PayloadAction<Address>) => {
      state.shippingAddress = action.payload
    },
    setBillingAddress: (state, action: PayloadAction<Address>) => {
      state.billingAddress = action.payload
    },
    setPaymentMethod: (state, action: PayloadAction<PaymentMethod>) => {
      state.paymentMethod = action.payload
    },
    setCheckoutStep: (state, action: PayloadAction<number>) => {
      state.step = action.payload
    },
    resetCheckout: (state) => {
      state.shippingAddress = null
      state.billingAddress = null
      state.paymentMethod = null
      state.step = 1
      state.loading = false
    },
  },
})

export const {
  setShippingAddress,
  setBillingAddress,
  setPaymentMethod,
  setCheckoutStep,
  resetCheckout,
} = checkoutSlice.actions

export default checkoutSlice.reducer

