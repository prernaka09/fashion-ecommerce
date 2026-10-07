import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Order } from '../../types'

interface OrderState {
  orders: Order[]
  selectedOrder: Order | null
  loading: boolean
  error: string | null
}

const initialState: OrderState = {
  orders: [],
  selectedOrder: null,
  loading: false,
  error: null,
}

export const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders: (state, action: PayloadAction<Order[]>) => {
      state.orders = action.payload
      state.loading = false
      state.error = null
    },
    setSelectedOrder: (state, action: PayloadAction<Order | null>) => {
      state.selectedOrder = action.payload
      state.loading = false
      state.error = null
    },
    setOrderLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setOrderError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
      state.loading = false
    },
  },
})

export const { setOrders, setSelectedOrder, setOrderLoading, setOrderError } =
  orderSlice.actions

export default orderSlice.reducer

