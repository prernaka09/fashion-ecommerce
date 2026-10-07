import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../constants'
import { Button } from '../../components/common/Button'
import { Input } from '../../components/common/Input'
import '../pages.css'

export const RegisterPage: React.FC = () => {
  return (
    <div className="container page-container container-narrow">
      <header className="page-header text-center">
        <h1 className="page-title">Create Account</h1>
        <p className="page-subtitle">Join Fashion Hub for personalized shopping and order tracking</p>
      </header>

      <div className="placeholder-card" style={{ maxWidth: '440px', margin: '0 auto', textAlign: 'left' }}>
        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <Input label="Full Name" type="text" placeholder="John Doe" />
          <Input label="Email Address" type="email" placeholder="you@example.com" />
          <Input label="Phone Number" type="tel" placeholder="+91 98765 43210" />
          <Input label="Password" type="password" placeholder="••••••••" />

          <Button type="submit" variant="primary" fullWidth>
            Register
          </Button>

          <p style={{ textAlign: 'center', fontSize: 'var(--text-xs)', color: 'var(--color-gray-medium)', marginTop: '0.5rem' }}>
            Already have an account?{' '}
            <Link to={ROUTES.LOGIN} style={{ color: 'var(--color-black)', fontWeight: 600 }}>
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage
