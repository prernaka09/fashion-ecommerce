import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import productReducer from './slices/productSlice'
import cartReducer from './slices/cartSlice'
import wishlistReducer from './slices/wishlistSlice'
import orderReducer from './slices/orderSlice'
import checkoutReducer from './slices/checkoutSlice'
import filterReducer from './slices/filterSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    orders: orderReducer,
    checkout: checkoutReducer,
    filters: filterReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
