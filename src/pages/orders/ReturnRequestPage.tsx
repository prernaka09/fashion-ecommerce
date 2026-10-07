import React from 'react'
import { useParams } from 'react-router-dom'
import { Breadcrumb } from '../../components/common/Breadcrumb'
import { ROUTES } from '../../constants'
import '../pages.css'

export const ReturnRequestPage: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>()

  return (
    <div className="container page-container">
      <Breadcrumb
        items={[
          { label: 'Orders', path: ROUTES.ORDERS },
          { label: 'Return / Refund' },
        ]}
      />
      <header className="page-header">
        <h1 className="page-title">Request Return / Refund</h1>
        <p className="page-subtitle">For Order #{orderId}</p>
      </header>

      <div className="placeholder-card">
        <h3 className="placeholder-card__title">Return & Refund Workflow</h3>
        <p className="placeholder-card__desc">
          Allows customers to choose return reasons (size issue, damaged item, etc.),
          upload images, and request replacement or bank refund.
        </p>
      </div>
    </div>
  )
}

export default ReturnRequestPage
