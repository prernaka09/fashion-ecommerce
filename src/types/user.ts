export type UserRole = 'customer' | 'admin'

export interface Address {
  id?: string
  fullName: string
  phone: string
  streetAddress: string
  apartment?: string
  city: string
  state: string
  postalCode: string
  country: string
  isDefault?: boolean
}

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  phone?: string
  addresses?: Address[]
  createdAt?: string
}

export interface AuthState {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  loading: boolean
  error: string | null
}
