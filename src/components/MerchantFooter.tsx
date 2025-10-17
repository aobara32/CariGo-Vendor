import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'

const MerchantFooter = () => {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-4 gap-8 text-sm">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-xl font-bold">CariGo</span>
          </div>
          <p className="text-sm text-muted-foreground mb-6 max-w-sm">
            Empowering desital platform that grows alongside Bruneis retal market.
          </p>
          
          {/* Contact Info */}
          <div className="space-y-3">
            <div className="flex items-start gap-3 text-sm">
              <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <a href="mailto:carigobn@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                carigobn@gmail.com
              </a>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <a href="tel:+6732123456" className="text-muted-foreground hover:text-primary transition-colors">
                +673 212 3456
              </a>
            </div>
          </div>
        </div>
        
        <div>
          <div className="font-semibold mb-3">Platform</div>
          <ul className="space-y-2">
            <li><Link to="/features" className="text-muted-foreground hover:text-primary transition-colors">Features</Link></li>
            <li><Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
            <li><Link to="/getting-started" className="text-muted-foreground hover:text-primary transition-colors">Getting Started</Link></li>
            <li><Link to="/support" className="text-muted-foreground hover:text-primary transition-colors">Support</Link></li>
          </ul>
        </div>
        
        <div>
          <div className="font-semibold mb-3">Company</div>
          <ul className="space-y-2">
            <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} CariGo. All rights reserved.
      </div>
    </footer>
  )
}

export default MerchantFooter
