import React from 'react'
import MerchantLayout from '../layouts/MerchantLayout'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'

const GettingStarted = () => (
  <MerchantLayout>
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-4">Getting Started with CariGo</h1>
      <p className="text-muted-foreground mb-6">From application to your first sale in as little as 3-5 days.</p>
      <Link to="/apply"><Button>Apply Now</Button></Link>
    </div>
  </MerchantLayout>
)

export default GettingStarted

