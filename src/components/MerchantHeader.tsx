import React from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { Button } from './ui/button'
import logoImage from '../assets/logo.png' 

const MerchantHeader = () => {
  const { language, setLanguage } = useLanguage()
  
  return (
    <header className="w-full border-b bg-white sticky top-0 z-40">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
            <img 
              src={logoImage} 
              alt="CariGo Logo" 
              className="w-6 h-6 object-contain"
            />
          </div>
          <span className="text-xl font-bold text-foreground font-racing">CariGo</span>
          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-semibold hidden sm:inline">
            {language === 'en' ? 'For Merchants' : 'Untuk Peniaga'}
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/about" className="hover:text-primary transition-colors">
            {language === 'en' ? 'About' : 'Tentang'}
          </Link>
          <Link to="/features" className="hover:text-primary transition-colors">
            {language === 'en' ? 'Features' : 'Ciri'}
          </Link>
          <Link to="/pricing" className="hover:text-primary transition-colors">
            {language === 'en' ? 'Pricing' : 'Harga'}
          </Link>
          <Link to="/help" className="hover:text-primary transition-colors">
            {language === 'en' ? 'Help' : 'Bantuan'}
          </Link>
          <Link to="/getting-started" className="hover:text-primary transition-colors">
            {language === 'en' ? 'Getting Started' : 'Mula'}
          </Link>
          <Link to="/support" className="hover:text-primary transition-colors">
            {language === 'en' ? 'Support' : 'Sokongan'}
          </Link>
          <Link to="/faq" className="hover:text-primary transition-colors">
            FAQ
          </Link>
        </nav>
        
        <div className="flex items-center gap-3">
          <select
            aria-label="Language"
            className="border rounded-md h-9 px-2 text-sm"
            value={language}
            onChange={(e) => setLanguage(e.target.value as 'en'|'ms')}
          >
            <option value="en">EN</option>
            <option value="ms">MS</option>
          </select>
          <Link to="/apply">
            <Button size="sm" variant="default">
              {language === 'en' ? 'Apply to start' : 'Mohon'}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default MerchantHeader
