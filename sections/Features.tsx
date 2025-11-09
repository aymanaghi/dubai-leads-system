'use client'

import { useIntersectionObserver } from '@/utils/animations'
import { features } from '@/utils/data'
import Card from '@/components/Card'

export default function Features() {
  const { ref, hasIntersected } = useIntersectionObserver<HTMLElement>()

  return (
    <section
      ref={ref}
      className={`py-12 sm:py-16 md:py-24 bg-white ${
        hasIntersected ? 'animate-fade-in' : 'opacity-0'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dubai-charcoal mb-3 md:mb-4">
              Powerful Features for Real Estate Success
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Everything you need to generate, manage, and convert leads in Dubai's
              competitive real estate market.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                className={hasIntersected ? 'animate-fade-in-up' : 'opacity-0'}
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <Card className="h-full">
                  <div className="p-5 sm:p-6">
                    <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{feature.icon}</div>
                    <h3 className="text-lg sm:text-xl font-bold text-dubai-charcoal mb-2 sm:mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

