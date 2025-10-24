import React from 'react'
import ManualLayout from './ManualLayout'
import { useLanguage } from '../../contexts/LanguageContext'

const GettingStartedManual = () => {
  const { language } = useLanguage()
  
  const content = {
    en: {
      title: 'Getting Started — Vendor Manual (CariGo)',
      checklist: [
        'Create your merchant account.',
        'Complete verification (KYC/KYB).',
        'Set up payment method and bank details.',
        'Add your first product.',
        'Configure shipping options.',
        'Review fees (3.5% payment fee included).',
        'Make a test order and verify payout.'
      ]
    },
    ms: {
      title: 'Mula — Manual Peniaga (CariGo)',
      checklist: [
        'Cipta akaun peniaga anda.',
        'Lengkapkan pengesahan (KYC/KYB).',
        'Sediakan kaedah pembayaran dan butiran bank.',
        'Tambah produk pertama anda.',
        'Konfigurasi pilihan penghantaran.',
        'Semak yuran (yuran pembayaran 3.5% termasuk).',
        'Buat pesanan ujian dan sahkan pembayaran keluar.'
      ]
    }
  }

  const c = content[language]

  return (
    <ManualLayout prevPath="/manual/account-settings" nextPath="/manual/store-management">
      <h1 className="text-2xl font-bold mb-2">{c.title}</h1>

      <h2 className="text-xl font-semibold mt-6 mb-2">Quick Checklist</h2>
      <ol className="list-decimal pl-6 space-y-2 mb-6">
        {c.checklist.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </ManualLayout>
  )
}

export default GettingStartedManual