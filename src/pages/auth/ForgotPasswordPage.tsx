import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants'
import { Button } from '../../components/common/Button'
import { Input } from '../../components/common/Input'
import '../pages.css'

export const ForgotPasswordPage: React.FC = () => {
  return (
    <div className="container page-container container-narrow">
      <header className="page-header text-center">
        <h1 className="page-title">Reset Password</h1>
        <p className="page-subtitle">We will send a password reset link to your email</p>
      </header>

      <div className="placeholder-card" style={{ maxWidth: '440px', margin: '0 auto', textAlign: 'left' }}>
        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <Input label="Email Address" type="email" placeholder="you@example.com" />

          <Button type="submit" variant="primary" fullWidth>
            Send Reset Link
          </Button>

          <p style={{ textAlign: 'center', fontSize: 'var(--text-xs)', color: 'var(--color-gray-medium)', marginTop: '0.5rem' }}>
            Remembered your password?{' '}
            <Link to={ROUTES.LOGIN} style={{ color: 'var(--color-black)', fontWeight: 600 }}>
              Back to Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default ForgotPasswordPage
