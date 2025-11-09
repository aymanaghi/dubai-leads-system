import { Property, Investor, Feature } from '@/types'

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Luxury Penthouse in Downtown Dubai',
    price: 'AED 8,500,000',
    location: 'Downtown Dubai',
    bedrooms: '3 BHK',
    area: '2,500 sqft',
    type: 'Penthouse',
  },
  {
    id: '2',
    title: 'Modern Villa in Palm Jumeirah',
    price: 'AED 12,000,000',
    location: 'Palm Jumeirah',
    bedrooms: '4 BHK',
    area: '4,200 sqft',
    type: 'Villa',
  },
  {
    id: '3',
    title: 'Premium Apartment in Business Bay',
    price: 'AED 3,200,000',
    location: 'Business Bay',
    bedrooms: '2 BHK',
    area: '1,800 sqft',
    type: 'Apartment',
  },
  {
    id: '4',
    title: 'Waterfront Apartment in Dubai Marina',
    price: 'AED 4,800,000',
    location: 'Dubai Marina',
    bedrooms: '2 BHK',
    area: '1,650 sqft',
    type: 'Apartment',
  },
  {
    id: '5',
    title: 'Luxury Townhouse in Emirates Hills',
    price: 'AED 6,500,000',
    location: 'Emirates Hills',
    bedrooms: '3 BHK',
    area: '3,100 sqft',
    type: 'Townhouse',
  },
  {
    id: '6',
    title: 'Executive Studio in DIFC',
    price: 'AED 1,200,000',
    location: 'DIFC',
    bedrooms: 'Studio',
    area: '850 sqft',
    type: 'Studio',
  },
]

export const mockInvestors: Investor[] = [
  {
    id: '1',
    name: 'Ahmed Al Maktoum',
    industry: 'Real Estate Development',
    region: 'Dubai, UAE',
    investmentLevel: 'High Value',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    industry: 'Property Investment',
    region: 'Dubai, UAE',
    investmentLevel: 'Premium',
  },
  {
    id: '3',
    name: 'Mohammed Hassan',
    industry: 'Commercial Real Estate',
    region: 'Dubai, UAE',
    investmentLevel: 'Enterprise',
  },
  {
    id: '4',
    name: 'Fatima Al Zahra',
    industry: 'Luxury Property Investment',
    region: 'Dubai, UAE',
    investmentLevel: 'Premium',
  },
  {
    id: '5',
    name: 'David Chen',
    industry: 'International Real Estate',
    region: 'Dubai, UAE',
    investmentLevel: 'Enterprise',
  },
  {
    id: '6',
    name: 'Layla Al Mansoori',
    industry: 'Residential Development',
    region: 'Dubai, UAE',
    investmentLevel: 'High Value',
  },
]

export const features: Feature[] = [
  {
    id: '1',
    title: 'Real-time Scraping Engine',
    description: 'Automated data collection from Property Finder, Bayut, and other leading Dubai real estate platforms. Get fresh leads 24/7.',
    icon: '⚡',
  },
  {
    id: '2',
    title: 'Investor & Property Profiling',
    description: 'Comprehensive profiles with investment history, preferences, and contact information. Know your leads before you reach out.',
    icon: '📊',
  },
  {
    id: '3',
    title: 'CRM-ready Data Export',
    description: 'Export clean, structured data in multiple formats. Seamlessly integrate with your existing CRM and sales tools.',
    icon: '📤',
  },
  {
    id: '4',
    title: 'Dashboard Coming Soon',
    description: 'Interactive analytics dashboard with real-time insights, lead scoring, and performance metrics. Launching Q2 2024.',
    icon: '📈',
  },
]


