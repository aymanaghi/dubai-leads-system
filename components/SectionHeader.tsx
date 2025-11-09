import React from 'react'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

export default function SectionHeader({
  title,
  subtitle,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`text-center mb-8 sm:mb-12 ${className}`}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dubai-charcoal mb-3 md:mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
          {subtitle}
        </p>
      )}
    </div>
  )
}

