import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { User, AuthState } from '../../types'
import { APP_CONFIG } from '../../constants'

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem(APP_CONFIG.STORAGE_KEYS.AUTH_TOKEN),
  isAuthenticated: Boolean(localStorage.getItem(APP_CONFIG.STORAGE_KEYS.AUTH_TOKEN)),
  loading: false,
  error: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ user: User; token: string }>
    ) => {
      state.user = action.payload.user
      state.token = action.payload.token
      state.isAuthenticated = true
      state.error = null
      localStorage.setItem(APP_CONFIG.STORAGE_KEYS.AUTH_TOKEN, action.payload.token)
    },
    logout: (state) => {
      state.user = null
      state.token = null
      state.isAuthenticated = false
      state.error = null
      localStorage.removeItem(APP_CONFIG.STORAGE_KEYS.AUTH_TOKEN)
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
      state.loading = false
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
  },
})

export const { setCredentials, logout, setLoading, setError, setUser } = authSlice.actions
export default authSlice.reducer

