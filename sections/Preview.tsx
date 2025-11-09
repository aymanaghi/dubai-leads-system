'use client'

import { useIntersectionObserver } from '@/utils/animations'
import { mockProperties, mockInvestors } from '@/utils/data'
import { Property, Investor } from '@/types'
import Card from '@/components/Card'

function PropertyCard({ property }: { property: Property }) {
  return (
    <Card className="h-full flex flex-col">
      <div className="h-48 bg-gradient-to-br from-dubai-gold/20 via-dubai-gold/10 to-dubai-accent/20 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="text-dubai-gold text-5xl relative z-10">🏢</div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-dubai-charcoal mb-2 line-clamp-2">
          {property.title}
        </h3>
        <p className="text-dubai-gold font-bold text-lg mb-4">
          {property.price}
        </p>
        <div className="space-y-2 text-sm text-gray-600 mt-auto">
          <div className="flex items-center">
            <span className="mr-2 text-dubai-charcoal">📍</span>
            <span className="truncate">{property.location}</span>
          </div>
          {property.bedrooms && (
            <div className="flex items-center">
              <span className="mr-2 text-dubai-charcoal">🛏️</span>
              <span>{property.bedrooms}</span>
            </div>
          )}
          {property.area && (
            <div className="flex items-center">
              <span className="mr-2 text-dubai-charcoal">📐</span>
              <span>{property.area}</span>
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}

function InvestorCard({ investor }: { investor: Investor }) {
  return (
    <Card className="h-full">
      <div className="p-6 bg-gradient-to-br from-dubai-charcoal via-dubai-charcoal-light to-dubai-charcoal-dark text-white h-full flex flex-col">
        <div className="flex items-start mb-4">
          <div className="w-16 h-16 bg-dubai-gold rounded-full flex items-center justify-center text-2xl font-bold text-dubai-charcoal mr-4 flex-shrink-0">
            {investor.name.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold mb-1 truncate">{investor.name}</h3>
            <p className="text-dubai-gold text-sm truncate">{investor.industry}</p>
          </div>
        </div>
        <div className="space-y-2 pt-4 border-t border-gray-600 mt-auto">
          <p className="text-gray-300 flex items-center text-sm">
            <span className="mr-2">📍</span>
            <span className="truncate">{investor.region}</span>
          </p>
          <p className="text-dubai-gold font-semibold text-sm">
            💼 {investor.investmentLevel} Investor
          </p>
        </div>
      </div>
    </Card>
  )
}

export default function Preview() {
  const propertiesRef = useIntersectionObserver<HTMLDivElement>()
  const investorsRef = useIntersectionObserver<HTMLDivElement>()

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Properties Section */}
        <div
          ref={propertiesRef.ref}
          className={`mb-12 md:mb-16 ${
            propertiesRef.hasIntersected ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dubai-charcoal mb-3 md:mb-4">
              Latest Properties
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Real-time property listings scraped from leading Dubai real estate
              platforms.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
            {mockProperties.slice(0, 6).map((property, index) => (
              <div
                key={property.id}
                className={
                  propertiesRef.hasIntersected ? 'animate-fade-in-up' : 'opacity-0'
                }
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
        </div>

        {/* Investors Section */}
        <div
          ref={investorsRef.ref}
          className={
            investorsRef.hasIntersected ? 'animate-fade-in' : 'opacity-0'
          }
        >
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dubai-charcoal mb-3 md:mb-4">
              Top Investors
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Active investors and property developers in the Dubai market.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
            {mockInvestors.slice(0, 6).map((investor, index) => (
              <div
                key={investor.id}
                className={
                  investorsRef.hasIntersected ? 'animate-fade-in-up' : 'opacity-0'
                }
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <InvestorCard investor={investor} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

