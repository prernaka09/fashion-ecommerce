import { useAppDispatch, useAppSelector } from '../store/hooks'
import { logout, setCredentials, setUser } from '../store/slices/authSlice'
import type { User } from '../types'

export const useAuth = () => {
  const dispatch = useAppDispatch()
  const { user, token, isAuthenticated, loading, error } = useAppSelector(
    (state) => state.auth
  )

  const handleLogout = () => {
    dispatch(logout())
  }

  const handleSetAuth = (user: User, token: string) => {
    dispatch(setCredentials({ user, token }))
  }

  const handleUpdateUser = (user: User) => {
    dispatch(setUser(user))
  }

  return {
    user,
    token,
    isAuthenticated,
    isAdmin: user?.role === 'admin',
    loading,
    error,
    logout: handleLogout,
    setAuth: handleSetAuth,
    updateUser: handleUpdateUser,
  }
}
