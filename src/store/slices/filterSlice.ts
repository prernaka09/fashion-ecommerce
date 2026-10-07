import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface FilterState {
  category: string
  brands: string[]
  priceRange: [number, number]
  sizes: string[]
  colors: string[]
  rating: number | null
  discount: number
  sortBy: string
  searchQuery: string
}

const initialState: FilterState = {
  category: '',
  brands: [],
  priceRange: [0, 50000],
  sizes: [],
  colors: [],
  rating: null,
  discount: 0,
  sortBy: 'popular',
  searchQuery: '',
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload
    },
    toggleBrand: (state, action: PayloadAction<string>) => {
      const index = state.brands.indexOf(action.payload)
      if (index > -1) {
        state.brands.splice(index, 1)
      } else {
        state.brands.push(action.payload)
      }
    },
    setPriceRange: (state, action: PayloadAction<[number, number]>) => {
      state.priceRange = action.payload
    },
    toggleSize: (state, action: PayloadAction<string>) => {
      const index = state.sizes.indexOf(action.payload)
      if (index > -1) {
        state.sizes.splice(index, 1)
      } else {
        state.sizes.push(action.payload)
      }
    },
    toggleColor: (state, action: PayloadAction<string>) => {
      const index = state.colors.indexOf(action.payload)
      if (index > -1) {
        state.colors.splice(index, 1)
      } else {
        state.colors.push(action.payload)
      }
    },
    setRating: (state, action: PayloadAction<number | null>) => {
      state.rating = action.payload
    },
    setDiscount: (state, action: PayloadAction<number>) => {
      state.discount = action.payload
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload
    },
    resetFilters: (state) => {
      state.category = ''
      state.brands = []
      state.priceRange = [0, 50000]
      state.sizes = []
      state.colors = []
      state.rating = null
      state.discount = 0
      state.sortBy = 'popular'
      state.searchQuery = ''
    },
  },
})

export const {
  setCategory,
  toggleBrand,
  setPriceRange,
  toggleSize,
  toggleColor,
  setRating,
  setDiscount,
  setSortBy,
  setSearchQuery,
  resetFilters,
} = filterSlice.actions

export default filterSlice.reducer

