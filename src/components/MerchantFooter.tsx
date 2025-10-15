import React from 'react'
import { Link } from 'react-router-dom'

const MerchantFooter = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-10 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-xl font-bold">CariGo</span>
          </div>
          <p className="text-muted-foreground">Local e-commerce platform for Brunei merchants.</p>
        </div>
        <div>
          <div className="font-semibold mb-3">Platform</div>
          <ul className="space-y-2">
            <li><Link to="/features" className="hover:text-primary">Features</Link></li>
            <li><Link to="/pricing" className="hover:text-primary">Pricing</Link></li>
            <li><Link to="/support" className="hover:text-primary">Support</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Company</div>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/faq" className="hover:text-primary">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-3">Contact</div>
          <ul className="space-y-2">
            <li><a className="hover:text-primary" href="mailto:carigobn@gmail.com">carigobn@gmail.com</a></li>
            <li><a className="hover:text-primary" href="tel:+6732123456">+673 212 3456</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} CariGo</div>
    </footer>
  )
}

export default MerchantFooter

