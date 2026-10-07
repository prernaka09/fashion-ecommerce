import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../components/common/Button'
import { ROUTES } from '../../constants'
import '../pages.css'

export const NotFoundPage: React.FC = () => {
  return (
    <div className="container page-container text-center">
      <div className="placeholder-card" style={{ padding: '5rem 2rem' }}>
        <h1 className="page-title" style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>
          404
        </h1>
        <h3 className="placeholder-card__title">Page Not Found</h3>
        <p className="placeholder-card__desc">
          The page or product you are looking for does not exist or may have been moved.
        </p>
        <Link to={ROUTES.HOME}>
          <Button variant="primary">Return to Home</Button>
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
