import Hero from '@/sections/Hero'
import Features from '@/sections/Features'
import Preview from '@/sections/Preview'
import Footer from '@/sections/Footer'

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

