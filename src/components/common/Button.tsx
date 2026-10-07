import React from 'react'
import './Button.css'

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  isLoading?: boolean
  fullWidth?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  ...props
}) => {
  const classNames = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth ? 'btn--full' : '',
    disabled || isLoading ? 'btn--disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={classNames} disabled={disabled || isLoading} {...props}>
      {isLoading && <span className="btn-spinner" aria-hidden="true" />}
      {!isLoading && leftIcon}
      <span>{children}</span>
      {!isLoading && rightIcon}
    </button>
  )
}

export default Button
