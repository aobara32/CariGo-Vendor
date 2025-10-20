import React from 'react'
import ManualLayout from './ManualLayout'
import { useLanguage } from '@/contexts/LanguageContext'

const ProductApiManual = () => {
  const { language } = useLanguage()
  return (
    <ManualLayout prevPath="/manual/authentication" nextPath="/manual/order-api">
      <h1 className="text-2xl font-bold mb-2">{language === 'en' ? 'Product API — Vendor Manual (CariGo, Pro Plan)' : 'API Produk — Manual Peniaga (CariGo, Pelan Pro)'}</h1>
      <p className="mb-2">Base URL: <code>https://api.carigo.bn/v1</code></p>
      <p className="mb-4">{language === 'en' ? 'Auth: Authorization: Bearer <YOUR_API_KEY>' : 'Auth: Authorization: Bearer <YOUR_API_KEY>'}</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>GET /products</li>
        <li>GET /products/{'{id}'}</li>
        <li>POST /products</li>
        <li>PATCH /products/{'{id}'}</li>
        <li>DELETE /products/{'{id}'}</li>
        <li>POST /inventory/bulk</li>
      </ul>
      <p className="text-muted-foreground mt-4">{language === 'en' ? 'Rate limit: 60 req/min. Payment fee 3.5% applies at checkout.' : 'Had kadar: 60 req/min. Yuran pembayaran 3.5% dikenakan semasa daftar keluar.'}</p>
    </ManualLayout>
  )
}

export default ProductApiManual


