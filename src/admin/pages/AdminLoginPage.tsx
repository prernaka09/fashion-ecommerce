import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES, APP_CONFIG } from '../../constants'
import { Button } from '../../components/common/Button'
import { Input } from '../../components/common/Input'
import '../../pages/pages.css'

export const AdminLoginPage: React.FC = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--color-offwhite)',
        padding: 'var(--space-4)',
      }}
    >
      <div
        className="placeholder-card"
        style={{
          width: '100%',
          maxWidth: '420px',
          textAlign: 'left',
          backgroundColor: 'var(--color-white)',
          border: '1px solid var(--color-gray-border)',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.5rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              display: 'block',
              marginBottom: '0.25rem',
            }}
          >
            {APP_CONFIG.NAME}
          </span>
          <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray-medium)', textTransform: 'uppercase' }}>
            Administration Portal
          </span>
        </div>

        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <Input label="Admin Email" type="email" placeholder="admin@atelier.com" />
          <Input label="Password" type="password" placeholder="••••••••" />
          <Button type="submit" variant="primary" fullWidth>
            Access Admin Console
          </Button>
          <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
            <Link to={ROUTES.HOME} style={{ fontSize: 'var(--text-xs)', color: 'var(--color-gray-medium)' }}>
              ← Return to Storefront
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AdminLoginPage
