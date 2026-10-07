import React from 'react'
import './Loader.css'

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  accent?: boolean
  className?: string
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  accent = false,
  className = '',
}) => {
  return (
    <span
      className={`spinner spinner--${size} ${accent ? 'spinner--accent' : ''} ${className}`}
      role="status"
      aria-label="Loading"
    />
  )
}

export default Spinner
