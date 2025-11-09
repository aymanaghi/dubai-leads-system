import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dubai Leads System - Automated Real Estate Lead Generation',
  description:
    'Automated lead generation for Dubai real estate. Scrape investor and property data from Property Finder and Bayut. Get fresh leads 24/7 with our real-time scraping engine.',
  keywords: [
    'Dubai real estate',
    'lead generation',
    'property finder',
    'Bayut',
    'real estate leads',
    'Dubai properties',
    'investor data',
    'property scraping',
  ],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Dubai Leads System - Automated Real Estate Lead Generation',
    description:
      'Automated lead generation for Dubai real estate. Get fresh investor and property data from leading platforms.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dubai Leads System',
    description: 'Automated lead generation for Dubai real estate',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

