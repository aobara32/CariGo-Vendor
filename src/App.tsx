import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import ScrollToTop from './components/ScrollToTop'
import MerchantLayout from './layouts/MerchantLayout'
import Index from './pages/Index'
import About from './pages/About'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import GettingStarted from './pages/GettingStarted'
import Support from './pages/Support'
import FAQ from './pages/FAQ'
import Apply from './pages/Apply'

const Placeholder = ({ title }: { title: string }) => (
  <div className="container mx-auto px-4 py-20">
    <h1 className="text-3xl font-bold">{title}</h1>
    <p className="text-muted-foreground mt-2">Page content will be restored.</p>
  </div>
)

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/support" element={<Support />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App

