import React from 'react'
import { Link } from 'react-router-dom'
import { XCircle } from 'lucide-react'
import { Button } from '../../components/common/Button'
import { ROUTES } from '../../constants'
import '../pages.css'

export const PaymentFailedPage: React.FC = () => {
  return (
    <div className="container page-container">
      <div className="placeholder-card" style={{ padding: '4rem 2rem' }}>
        <div style={{ color: 'var(--color-danger)', marginBottom: '1.5rem' }}>
          <XCircle size={54} />
        </div>
        <h1 className="page-title">Payment Unsuccessful</h1>
        <p className="placeholder-card__desc">
          We were unable to complete your transaction. Your card or account was not charged.
          Please try again or select another payment method.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link to={ROUTES.CHECKOUT}>
            <Button variant="primary">Retry Payment</Button>
          </Link>
          <Link to={ROUTES.CART}>
            <Button variant="outline">Return to Bag</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PaymentFailedPage
