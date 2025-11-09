import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  const hoverStyles = hover
    ? 'hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 sm:hover:-translate-y-2'
    : ''

  return (
    <div
      className={`bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg overflow-hidden ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  )
}


