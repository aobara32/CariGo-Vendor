import React from 'react'
import ManualLayout from './ManualLayout'
import { useLanguage } from '../../contexts/LanguageContext'

const WebhooksManual = () => {
  const { language } = useLanguage()
  
  const content = {
    en: {
      title: 'Webhooks — Vendor Manual (CariGo, Pro Plan)',
      overview: 'Use webhooks to receive real-time updates about your orders, payouts, and stock.',
      events: [
        'order.created',
        'order.updated',
        'order.refunded',
        'payout.completed',
        'inventory.low_stock'
      ],
      note: 'All webhook notifications include a signed payload. Validate using your signing secret to ensure authenticity.'
    },
    ms: {
      title: 'Webhooks — Manual Peniaga (CariGo, Pelan Pro)',
      overview: 'Gunakan webhooks untuk menerima kemas kini masa nyata tentang pesanan, pembayaran keluar, dan stok anda.',
      events: [
        'order.created',
        'order.updated',
        'order.refunded',
        'payout.completed',
        'inventory.low_stock'
      ],
      note: 'Semua pemberitahuan webhook termasuk payload yang ditandatangani. Sahkan menggunakan rahsia tandatangan anda untuk memastikan kesahihan.'
    }
  }

  const c = content[language]

  return (
    <ManualLayout prevPath="/manual/order-api" nextPath="/manual/seller-agreement">
      <h1 className="text-2xl font-bold mb-2">{c.title}</h1>

      <h2 className="text-xl font-semibold mt-6 mb-2">Overview</h2>
      <p className="text-muted-foreground mb-6">{c.overview}</p>

      <h2 className="text-xl font-semibold mb-2">Common Events:</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.events.map((event, index) => (
          <li key={index} className="font-mono text-sm">{event}</li>
        ))}
      </ul>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <p className="text-blue-800 font-medium">{c.note}</p>
      </div>
    </ManualLayout>
  )
}

export default WebhooksManual