import React from 'react'
import { AlertCircle } from 'lucide-react'
import './ErrorMessage.css'

export interface ErrorMessageProps {
  title?: string
  message: string
  onRetry?: () => void
  className?: string
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  title = 'An error occurred',
  message,
  onRetry,
  className = '',
}) => {
  return (
    <div className={`error-banner ${className}`} role="alert">
      <AlertCircle size={20} className="error-banner__icon" />
      <div className="error-banner__content">
        <div className="error-banner__title">{title}</div>
        <p className="error-banner__message">{message}</p>
        {onRetry && (
          <button type="button" onClick={onRetry} className="error-banner__retry-btn">
            Try again
          </button>
        )}
      </div>
    </div>
  )
}

export default ErrorMessage
