import React from 'react'
import ManualLayout from './ManualLayout'
import { useLanguage } from '@/contexts/LanguageContext'

const WebhooksManual = () => {
  const { language } = useLanguage()
  return (
    <ManualLayout prevPath="/manual/order-api" nextPath="/manual/seller-agreement">
      <h1 className="text-2xl font-bold mb-2">{language === 'en' ? 'Webhooks — Vendor Manual (CariGo, Pro Plan)' : 'Webhook — Manual Peniaga (CariGo, Pelan Pro)'}</h1>
      <p className="mb-4">{language === 'en' ? 'Use webhooks for real-time updates on orders, payouts, and inventory.' : 'Gunakan webhook untuk kemas kini masa nyata bagi pesanan, pembayaran keluar dan inventori.'}</p>
      <ul className="list-disc pl-6 mb-4">
        <li>order.created</li>
        <li>order.updated</li>
        <li>order.refunded</li>
        <li>payout.completed</li>
        <li>inventory.low_stock</li>
      </ul>
      <p className="text-muted-foreground">{language === 'en' ? 'All webhook notifications include a signed payload. Validate using your signing secret.' : 'Semua pemberitahuan webhook termasuk payload bertandatangan. Sahkan menggunakan rahsia tandatangan anda.'}</p>
    </ManualLayout>
  )
}

export default WebhooksManual


