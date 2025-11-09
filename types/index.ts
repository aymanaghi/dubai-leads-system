export interface Property {
  id: string
  title: string
  price: string
  location: string
  bedrooms?: string
  area?: string
  type?: string
}

export interface Investor {
  id: string
  name: string
  industry: string
  region: string
  investmentLevel: string
}

export interface Feature {
  id: string
  title: string
  description: string
  icon: string
}


