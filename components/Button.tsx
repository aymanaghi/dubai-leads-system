import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'font-semibold rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary:
      'bg-dubai-gold hover:bg-dubai-gold-light text-dubai-charcoal shadow-lg hover:shadow-xl focus:ring-dubai-gold',
    secondary:
      'bg-dubai-accent hover:bg-dubai-accent-light text-white shadow-lg hover:shadow-xl focus:ring-dubai-accent',
    outline:
      'border-2 border-dubai-gold text-dubai-gold hover:bg-dubai-gold hover:text-dubai-charcoal focus:ring-dubai-gold bg-transparent',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base',
    lg: 'px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}


