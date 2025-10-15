import React, { useState } from 'react'
import MerchantLayout from '../layouts/MerchantLayout'
import { Button } from '../components/ui/button'

const Apply = () => {
  const [submitted, setSubmitted] = useState(false)
  if (submitted) {
    return (
      <MerchantLayout>
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-3xl font-bold mb-2">Application Submitted</h1>
          <p className="text-muted-foreground">Thank you for applying to sell on CariGo. We will contact you within 24 hours.</p>
        </div>
      </MerchantLayout>
    )
  }
  return (
    <MerchantLayout>
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-4">Apply to Sell on CariGo</h1>
        <form onSubmit={(e)=>{e.preventDefault(); setSubmitted(true)}} className="grid gap-4 max-w-xl">
          <input required className="border rounded h-10 px-3" placeholder="Business Name" />
          <input required className="border rounded h-10 px-3" type="email" placeholder="Email" />
          <input className="border rounded h-10 px-3" placeholder="Phone" />
          <textarea className="border rounded p-3" placeholder="Tell us about your business" rows={4} />
          <Button type="submit">Submit</Button>
        </form>
        <p className="text-sm text-muted-foreground mt-4">Alternatively email us at <a className="text-primary" href="mailto:carigobn@gmail.com">carigobn@gmail.com</a></p>
      </div>
    </MerchantLayout>
  )
}

export default Apply

