import React from 'react'
import ManualLayout from './ManualLayout'
import { useLanguage } from '../../contexts/LanguageContext'

const OrderApiManual = () => {
  const { language } = useLanguage()
  
  const content = {
    en: {
      title: 'Order API — Vendor Manual (CariGo, Pro Plan)',
      baseUrl: 'https://api.carigo.bn/v1',
      endpoints: [
        'GET /orders — List orders',
        'GET /orders/{id} — Order details',
        'PATCH /orders/{id} — Update status',
        'POST /orders/{id}/refunds — Create refund',
        'POST /orders/{id}/messages — Send buyer message'
      ],
      authentication: 'Authenticate using your Bearer API key.',
      note: 'All monetary transactions are subject to a 3.5% payment processing fee.'
    },
    ms: {
      title: 'API Pesanan — Manual Peniaga (CariGo, Pelan Pro)',
      baseUrl: 'https://api.carigo.bn/v1',
      endpoints: [
        'GET /orders — Senaraikan pesanan',
        'GET /orders/{id} — Butiran pesanan',
        'PATCH /orders/{id} — Kemas kini status',
        'POST /orders/{id}/refunds — Cipta bayaran balik',
        'POST /orders/{id}/messages — Hantar mesej pembeli'
      ],
      authentication: 'Pengesahan menggunakan kunci API Bearer anda.',
      note: 'Semua transaksi kewangan tertakluk kepada yuran pemprosesan pembayaran 3.5%.'
    }
  }

  const c = content[language]

  return (
    <ManualLayout prevPath="/manual/product-api" nextPath="/manual/webhooks">
      <h1 className="text-2xl font-bold mb-2">{c.title}</h1>

      <h2 className="text-xl font-semibold mt-6 mb-2">Base URL</h2>
      <div className="bg-gray-100 p-3 rounded font-mono text-sm mb-6">
        {c.baseUrl}
      </div>

      <h2 className="text-xl font-semibold mb-2">Endpoints</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.endpoints.map((endpoint, index) => (
          <li key={index} className="font-mono text-sm">{endpoint}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Authentication</h2>
      <p className="mb-6">{c.authentication}</p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-blue-800 font-medium">{c.note}</p>
      </div>
    </ManualLayout>
  )
}

export default OrderApiManual