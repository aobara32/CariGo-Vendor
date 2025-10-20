import React from 'react'
import ManualLayout from './ManualLayout'
import { useLanguage } from '@/contexts/LanguageContext'

const OrderApiManual = () => {
  const { language } = useLanguage()
  return (
    <ManualLayout prevPath="/manual/product-api" nextPath="/manual/webhooks">
      <h1 className="text-2xl font-bold mb-2">{language === 'en' ? 'Order API — Vendor Manual (CariGo, Pro Plan)' : 'API Pesanan — Manual Peniaga (CariGo, Pelan Pro)'}</h1>
      <p className="mb-2">Base URL: <code>https://api.carigo.bn/v1</code></p>
      <ul className="list-disc pl-6 space-y-1 mb-4">
        <li>GET /orders</li>
        <li>GET /orders/{'{id}'}</li>
        <li>PATCH /orders/{'{id}'}</li>
        <li>POST /orders/{'{id}'}/refunds</li>
        <li>POST /orders/{'{id}'}/messages</li>
      </ul>
      <p className="text-muted-foreground">{language === 'en' ? 'Authenticate using Bearer API key. Payment processing fee 3.5% applies.' : 'Sahkan menggunakan kunci API Bearer. Yuran pemprosesan pembayaran 3.5% dikenakan.'}</p>
    </ManualLayout>
  )
}

export default OrderApiManual


