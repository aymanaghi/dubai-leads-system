'use client'

import { useIntersectionObserver } from '@/utils/animations'
import Button from '@/components/Button'

export default function Hero() {
  const { ref, hasIntersected } = useIntersectionObserver<HTMLElement>()

  return (
    <section
      ref={ref}
      className={`relative bg-gradient-to-br from-dubai-charcoal via-dubai-charcoal-light to-dubai-charcoal-dark text-white py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden ${
        hasIntersected ? 'animate-fade-in' : 'opacity-0'
      }`}
    >
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-dubai-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-dubai-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight bg-gradient-to-r from-dubai-gold via-dubai-gold-light to-dubai-gold bg-clip-text text-transparent ${
              hasIntersected ? 'animate-fade-in-up' : ''
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            Dubai Leads System
          </h1>
          <p
            className={`text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 ${
              hasIntersected ? 'animate-fade-in-up' : ''
            }`}
            style={{ animationDelay: '0.4s' }}
          >
            Automated lead generation for Dubai real estate
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center ${
              hasIntersected ? 'animate-fade-in-up' : ''
            }`}
            style={{ animationDelay: '0.6s' }}
          >
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Request Access
            </Button>
          </div>
        </div>
      </div>

      {/* Gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

