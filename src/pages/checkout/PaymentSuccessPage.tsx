import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import { Button } from '../../components/common/Button'
import { ROUTES } from '../../constants'
import '../pages.css'

export const PaymentSuccessPage: React.FC = () => {
  return (
    <div className="container page-container">
      <div className="placeholder-card" style={{ padding: '4rem 2rem' }}>
        <div style={{ color: 'var(--color-success)', marginBottom: '1.5rem' }}>
          <CheckCircle2 size={54} />
        </div>
        <h1 className="page-title">Order Placed Successfully!</h1>
        <p className="placeholder-card__desc">
          Thank you for shopping with Fashion Hub. Your order confirmation and receipt
          details will be sent to your registered email address.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link to={ROUTES.ORDERS}>
            <Button variant="primary">View My Orders</Button>
          </Link>
          <Link to={ROUTES.SHOP}>
            <Button variant="outline">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PaymentSuccessPage
