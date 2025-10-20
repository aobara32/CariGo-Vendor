import React from 'react'
import ManualLayout from './ManualLayout'
import { useLanguage } from '@/contexts/LanguageContext'

const ShippingPoliciesManual = () => {
  const { language } = useLanguage()
  return (
    <ManualLayout prevPath="/manual/product-guidelines" nextPath="/manual/return-policies">
      <h1 className="text-2xl font-bold mb-2">{language === 'en' ? 'Shipping Policies — CariGo' : 'Dasar Penghantaran — CariGo'}</h1>
      <h2 className="text-xl font-semibold mt-6 mb-2">1) {language === 'en' ? 'Options' : 'Pilihan'}</h2>
      <p className="mb-4">{language === 'en' ? 'Offer Pickup, Local Delivery, Standard Shipping.' : 'Tawarkan Pengambilan, Pengantaran Tempatan, Penghantaran Standard.'}</p>
      <h2 className="text-xl font-semibold mb-2">2) {language === 'en' ? 'Transparency' : 'Ketelusan'}</h2>
      <p className="mb-4">{language === 'en' ? 'Publish delivery times and costs; provide tracking.' : 'Terbit masa dan kos penghantaran; sediakan penjejakan.'}</p>
      <h2 className="text-xl font-semibold mb-2">3) {language === 'en' ? 'Packaging' : 'Pembungkusan'}</h2>
      <p className="mb-4">{language === 'en' ? 'Secure packaging; include receipts/invoices.' : 'Pembungkusan selamat; sertakan resit/invois.'}</p>
      <h2 className="text-xl font-semibold mb-2">4) {language === 'en' ? 'Lost or Damaged Parcels' : 'Bungkusan Hilang atau Rosak'}</h2>
      <p>{language === 'en' ? 'File carrier claims promptly; provide refunds or replacements per policy.' : 'Failkan tuntutan pembawa dengan segera; berikan bayaran balik atau penggantian mengikut dasar.'}</p>
    </ManualLayout>
  )
}

export default ShippingPoliciesManual


