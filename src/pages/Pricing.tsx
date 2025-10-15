import React, { useState } from 'react'
import MerchantLayout from '../layouts/MerchantLayout'
import { Button } from '../components/ui/button'

const Pricing = () => {
  const [gmv, setGmv] = useState(2000)
  const platformFees = { core: 0.15, basic: 0.095, pro: 0.065 }
  const paymentFee = 0.025
  const subscription = { core: 0, basic: 48, pro: 90 }

  const calc = (amount: number, plan: keyof typeof platformFees) => {
    const platform = amount * platformFees[plan]
    const payment = amount * paymentFee
    const sub = subscription[plan]
    const net = amount - platform - payment - sub
    return { platform, payment, sub, net }
  }

  const thresholds = {
    coreToBasic: Math.ceil(48 / 0.055), // ≈ 873
    basicToPro: Math.ceil(42 / 0.03), // 1400
  }

  return (
    <MerchantLayout>
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-4">Pricing</h1>
        <p className="text-muted-foreground mb-8">Plans that grow with you.</p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="border rounded-lg p-6"><h3 className="font-bold text-xl mb-2">Core</h3><p className="text-muted-foreground">US$0/mo • 15.0%</p></div>
          <div className="border rounded-lg p-6"><h3 className="font-bold text-xl mb-2">Basic</h3><p className="text-muted-foreground">US$48/mo • 9.5%</p></div>
          <div className="border rounded-lg p-6"><h3 className="font-bold text-xl mb-2">Pro</h3><p className="text-muted-foreground">US$90/mo • 6.5%</p></div>
        </div>

        <div className="border rounded-lg p-6 mb-10">
          <h2 className="font-bold text-lg mb-4">Revenue Calculator</h2>
          <div className="flex items-center gap-3 mb-4">
            <span>Monthly GMV (US$)</span>
            <input className="border rounded px-3 h-10 w-40" type="number" value={gmv} onChange={(e)=>setGmv(Number(e.target.value)||0)} />
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {(['core','basic','pro'] as const).map((p)=>{
              const r = calc(gmv, p)
              const eff = ((r.platform + r.payment + r.sub) / Math.max(gmv,1) * 100).toFixed(1)
              return (
                <div key={p} className="border rounded p-4">
                  <div className="font-semibold mb-2">{p.toUpperCase()}</div>
                  <div className="text-sm text-muted-foreground">Platform: ${r.platform.toFixed(2)}</div>
                  <div className="text-sm text-muted-foreground">Payment (2.5%): ${r.payment.toFixed(2)}</div>
                  <div className="text-sm text-muted-foreground">Subscription: ${r.sub.toFixed(2)}</div>
                  <div className="mt-2 font-bold">You receive: ${r.net.toFixed(2)} ({eff}%)</div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Core Plan Recommended</h3>
            <div className="text-primary font-bold mb-2">Up to ${thresholds.coreToBasic}/month</div>
            <p className="text-sm text-muted-foreground">Perfect for testing the platform or small businesses starting online.</p>
          </div>
          <div className="border rounded-lg p-6 border-primary">
            <h3 className="text-xl font-bold mb-2">Basic Plan Recommended</h3>
            <div className="text-primary font-bold mb-2">${thresholds.coreToBasic} - ${thresholds.basicToPro}/month</div>
            <p className="text-sm text-muted-foreground">Ideal for growing businesses that need more features and faster payouts.</p>
          </div>
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">Pro Plan Recommended</h3>
            <div className="text-secondary font-bold mb-2">${thresholds.basicToPro}+/month</div>
            <p className="text-sm text-muted-foreground">Best for established businesses that need advanced features and support.</p>
          </div>
        </div>
      </div>
    </MerchantLayout>
  )
}

export default Pricing

