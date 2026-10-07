import React, { forwardRef } from 'react'
import './Input.css'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
  prefixIcon?: React.ReactNode
  suffixIcon?: React.ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, prefixIcon, suffixIcon, className = '', id, disabled, ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined)

    return (
      <div className={`input-wrapper ${className}`}>
        {label && (
          <label htmlFor={inputId} className="input-label">
            {label}
          </label>
        )}
        <div
          className={`input-container ${error ? 'input-container--error' : ''} ${
            disabled ? 'input-container--disabled' : ''
          }`}
        >
          {prefixIcon && <span className="input-icon prefix">{prefixIcon}</span>}
          <input
            id={inputId}
            ref={ref}
            disabled={disabled}
            className="input-field"
            {...props}
          />
          {suffixIcon && <span className="input-icon suffix">{suffixIcon}</span>}
        </div>
        {error && <span className="input-error-text">{error}</span>}
        {!error && hint && <span className="input-hint-text">{hint}</span>}
      </div>
    )
  }
)

Input.displayName = 'Input'
export default Input
