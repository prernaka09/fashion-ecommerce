import React from 'react'
import { PackageOpen } from 'lucide-react'
import './EmptyState.css'

export interface EmptyStateProps {
  icon?: React.ReactNode
  title: string
  description?: string
  action?: React.ReactNode
  className?: string
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  action,
  className = '',
}) => {
  return (
    <div className={`empty-state ${className}`}>
      <div className="empty-state__icon-box">
        {icon || <PackageOpen size={36} strokeWidth={1.5} />}
      </div>
      <h3 className="empty-state__title">{title}</h3>
      {description && <p className="empty-state__description">{description}</p>}
      {action && <div className="empty-state__action">{action}</div>}
    </div>
  )
}

export default EmptyState
