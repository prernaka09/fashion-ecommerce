import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Product } from '../../types'
import { catalog } from '../../constants/catalog'

interface ProductState {
  items: Product[]
  selectedProduct: Product | null
  loading: boolean
  error: string | null
  totalItems: number
  currentPage: number
}

const initialState: ProductState = {
  items: catalog,
  selectedProduct: null,
  loading: false,
  error: null,
  totalItems: 0,
  currentPage: 1,
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<{ items: Product[]; totalItems?: number }>) => {
      state.items = action.payload.items
      state.totalItems = action.payload.totalItems ?? action.payload.items.length
      state.loading = false
      state.error = null
    },
    setSelectedProduct: (state, action: PayloadAction<Product | null>) => {
      state.selectedProduct = action.payload
      state.loading = false
      state.error = null
    },
    setProductLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setProductError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
      state.loading = false
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload
    },
  },
})

export const {
  setProducts,
  setSelectedProduct,
  setProductLoading,
  setProductError,
  setCurrentPage,
} = productSlice.actions

export default productSlice.reducer

