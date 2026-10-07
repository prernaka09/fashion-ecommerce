import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants'
import { Button } from '../../components/common/Button'
import { Input } from '../../components/common/Input'
import '../pages.css'

export const LoginPage: React.FC = () => {
  return (
    <div className="container page-container container-narrow">
      <header className="page-header text-center">
        <h1 className="page-title">Sign In</h1>
        <p className="page-subtitle">Access your orders, saved addresses, and wishlist</p>
      </header>

      <div className="placeholder-card" style={{ maxWidth: '440px', margin: '0 auto', textAlign: 'left' }}>
        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <Input label="Email Address" type="email" placeholder="you@example.com" />
          <Input label="Password" type="password" placeholder="••••••••" />

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link to={ROUTES.FORGOT_PASSWORD} style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray-medium)' }}>
              Forgot Password?
            </Link>
          </div>

          <Button type="submit" variant="primary" fullWidth>
            Sign In
          </Button>

          <p style={{ textAlign: 'center', fontSize: 'var(--text-xs)', color: 'var(--color-gray-medium)', marginTop: '0.5rem' }}>
            Don't have an account?{' '}
            <Link to={ROUTES.REGISTER} style={{ color: 'var(--color-black)', fontWeight: 600 }}>
              Create Account
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
