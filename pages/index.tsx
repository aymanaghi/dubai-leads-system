import Hero from '@/sections/Hero'
import Features from '@/sections/Features'
import Preview from '@/sections/Preview'
import Footer from '@/sections/Footer'

/**
 * Main landing page for Dubai Leads System
 * 
 * Note: This project uses Next.js App Router (app/page.tsx).
 * This pages/index.tsx is provided for Pages Router compatibility.
 * 
 * To use Pages Router, update next.config.js to disable App Router.
 */
export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans antialiased">
      <Hero />
      <Features />
      <Preview />
      <Footer />
    </main>
  )
}

