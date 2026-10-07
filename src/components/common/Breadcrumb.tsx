import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import './Breadcrumb.css'

export interface BreadcrumbItem {
  label: string
  path?: string
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, className = '' }) => {
  return (
    <nav className={`breadcrumb ${className}`} aria-label="Breadcrumb">
      <div className="breadcrumb__item">
        <Link to="/" className="breadcrumb__link">
          Home
        </Link>
      </div>
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <React.Fragment key={index}>
            <span className="breadcrumb__separator" aria-hidden="true">
              <ChevronRight size={12} />
            </span>
            <div className="breadcrumb__item">
              {item.path && !isLast ? (
                <Link to={item.path} className="breadcrumb__link">
                  {item.label}
                </Link>
              ) : (
                <span className="breadcrumb__current" aria-current="page">
                  {item.label}
                </span>
              )}
            </div>
          </React.Fragment>
        )
      })}
    </nav>
  )
}

export default Breadcrumb
