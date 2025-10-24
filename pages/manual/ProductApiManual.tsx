import React from 'react'
import ManualLayout from './ManualLayout'
import { useLanguage } from '../../contexts/LanguageContext'

const ProductApiManual = () => {
  const { language } = useLanguage()
  
  const content = {
    en: {
      title: 'Product API — Vendor Manual (CariGo, Pro Plan)',
      baseUrl: 'https://api.carigo.bn/v1',
      authentication: 'Header: Authorization: Bearer <YOUR_API_KEY>',
      endpoints: [
        'GET /products — List all products',
        'GET /products/{id} — Retrieve details',
        'POST /products — Create a new product',
        'PATCH /products/{id} — Update',
        'DELETE /products/{id} — Remove',
        'POST /inventory/bulk — Bulk inventory update'
      ],
      rateLimit: 'Rate Limit: 60 req/min',
      note: 'All API transactions deduct a standard 3.5% payment fee during checkout.'
    },
    ms: {
      title: 'API Produk — Manual Peniaga (CariGo, Pelan Pro)',
      baseUrl: 'https://api.carigo.bn/v1',
      authentication: 'Header: Authorization: Bearer <KUNCI_API_ANDA>',
      endpoints: [
        'GET /products — Senaraikan semua produk',
        'GET /products/{id} — Dapatkan butiran',
        'POST /products — Cipta produk baru',
        'PATCH /products/{id} — Kemas kini',
        'DELETE /products/{id} — Buang',
        'POST /inventory/bulk — Kemas kini inventori pukal'
      ],
      rateLimit: 'Had Kadar: 60 req/min',
      note: 'Semua transaksi API memotong yuran pembayaran standard 3.5% semasa checkout.'
    }
  }

  const c = content[language]

  return (
    <ManualLayout prevPath="/manual/authentication" nextPath="/manual/order-api">
      <h1 className="text-2xl font-bold mb-2">{c.title}</h1>

      <h2 className="text-xl font-semibold mt-6 mb-2">Base URL</h2>
      <div className="bg-gray-100 p-3 rounded font-mono text-sm mb-6">
        {c.baseUrl}
      </div>

      <h2 className="text-xl font-semibold mb-2">Authentication</h2>
      <div className="bg-gray-100 p-3 rounded font-mono text-sm mb-6">
        {c.authentication}
      </div>

      <h2 className="text-xl font-semibold mb-2">Endpoints</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.endpoints.map((endpoint, index) => (
          <li key={index} className="font-mono text-sm">{endpoint}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Rate Limit</h2>
      <p className="mb-6">{c.rateLimit}</p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-blue-800 font-medium">{c.note}</p>
      </div>
    </ManualLayout>
  )
}

export default ProductApiManual