import React from 'react'
import './Badge.css'

export type BadgeVariant = 'default' | 'accent' | 'success' | 'warning' | 'danger' | 'outline'

export interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  size?: 'sm' | 'md'
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'sm',
  className = '',
}) => {
  return (
    <span className={`badge badge--${variant} badge--${size} ${className}`}>
      {children}
    </span>
  )
}

export default Badge
