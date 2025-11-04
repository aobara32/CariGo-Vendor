import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'
// Using public asset path for logo to avoid import resolution issues

const MerchantFooter = () => {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-sm">
        <div className="mb-6 lg:mb-0">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
              <img 
                src="/logo.png" 
                alt="CariGo Logo" 
                className="w-6 h-6 object-contain"
              />
            </div>
            <span className="text-xl font-bold font-racing">CariGo</span>
          </div>
          <p className="text-sm text-muted-foreground mb-6 max-w-sm break-words">
            Empowering desital platform that grows alongside Bruneis retal market.
          </p>
          
          {/* Contact Info */}
          <div className="space-y-3">
            <div className="flex items-start gap-3 text-sm">
              <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <a href="/inquiry" className="text-muted-foreground hover:text-primary transition-colors">
                support@carigobn.com
              </a>
            </div>
            <div className="flex items-start gap-3 text-sm">
              <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <a href="tel:+6738228250" className="text-muted-foreground hover:text-primary transition-colors">
                +673 822 8250
              </a>
            </div>
          </div>
        </div>
        
        <div className="mb-6 lg:mb-0">
          <div className="font-semibold mb-3">Platform</div>
          <ul className="space-y-2">
            <li><Link to="/features" className="text-muted-foreground hover:text-primary transition-colors">Features</Link></li>
            <li><Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
            <li><Link to="/getting-started" className="text-muted-foreground hover:text-primary transition-colors">Getting Started</Link></li>
            <li><Link to="/support" className="text-muted-foreground hover:text-primary transition-colors">Support</Link></li>
            <li><Link to="/inquiry" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
        
        <div className="mb-6 lg:mb-0">
          <div className="font-semibold mb-3">Company</div>
          <ul className="space-y-2">
            <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</Link></li>
            <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold mb-3">Documentation</div>
          <ul className="space-y-2">
            <li><Link to="/manual/getting-started" className="text-muted-foreground hover:text-primary transition-colors">Getting Started</Link></li>
            <li><Link to="/manual/store-management" className="text-muted-foreground hover:text-primary transition-colors">Store Management</Link></li>
            <li><Link to="/manual/product-catalog" className="text-muted-foreground hover:text-primary transition-colors">Product Catalog</Link></li>
            <li><Link to="/manual/order-processing" className="text-muted-foreground hover:text-primary transition-colors">Order Processing</Link></li>
            <li><Link to="/manual/customer-management" className="text-muted-foreground hover:text-primary transition-colors">Customer Management</Link></li>
            <li><Link to="/manual/analytics-reporting" className="text-muted-foreground hover:text-primary transition-colors">Analytics & Reporting</Link></li>
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
