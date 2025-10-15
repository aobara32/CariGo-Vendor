import React from 'react'
import MerchantLayout from '../layouts/MerchantLayout'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'

// Free stock images from Unsplash
const heroImage = 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=2340&q=80'

const Index = () => {
  return (
    <MerchantLayout>
      <section className="relative min-h-[520px] flex items-center bg-gradient-to-br from-primary via-primary to-primary/90 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Your Local Business Deserves a Global Platform</h1>
            <p className="text-xl md:text-2xl mb-10 text-white/90">Join 250+ Brunei merchants already growing their business online with CariGo</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/apply"><Button size="lg" variant="inverse" className="text-lg px-8">Start Selling Today</Button></Link>
              <Link to="/getting-started"><Button size="lg" variant="outlineWhite" className="text-lg px-8">See How It Works</Button></Link>
            </div>
          </div>
        </div>
      </section>
    </MerchantLayout>
  )
}

export default Index

