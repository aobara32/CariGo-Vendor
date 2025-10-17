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
import HelpCenter from './pages/HelpCenter'

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
          <Route path="/help" element={<HelpCenter />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
