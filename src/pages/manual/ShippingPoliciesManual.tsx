import React from 'react'
import ManualLayout from './ManualLayout'
import { useLanguage } from '../../contexts/LanguageContext'

const ShippingPoliciesManual = () => {
  const { language } = useLanguage()
  
  const content = {
    en: {
      title: 'Shipping Policies — CariGo',
      sections: {
        options: {
          title: 'Options',
          items: [
            'Offer In-Store Pickup, Local Delivery, and Standard Shipping.'
          ]
        },
        transparency: {
          title: 'Transparency',
          items: [
            'Publish delivery times and costs clearly. Always provide tracking where available.'
          ]
        },
        packaging: {
          title: 'Packaging',
          items: [
            'Secure products appropriately. Include receipts or invoices.'
          ]
        },
        claims: {
          title: 'Lost or Damaged Parcels',
          items: [
            'File claims with carriers promptly. Provide replacements or refunds per policy.'
          ]
        }
      },
      compliance: 'All shipments must comply with local postal and courier regulations.'
    },
    ms: {
      title: 'Polisi Penghantaran — CariGo',
      sections: {
        options: {
          title: 'Pilihan',
          items: [
            'Tawarkan Ambil di Kedai, Penghantaran Tempatan, dan Penghantaran Standard.'
          ]
        },
        transparency: {
          title: 'Ketelusan',
          items: [
            'Terbitkan masa dan kos penghantaran dengan jelas. Sentiasa berikan penjejakan jika tersedia.'
          ]
        },
        packaging: {
          title: 'Pembungkusan',
          items: [
            'Amankan produk dengan sesuai. Sertakan resit atau invois.'
          ]
        },
        claims: {
          title: 'Parcel Hilang atau Rosak',
          items: [
            'Failkan tuntutan dengan pembawa dengan segera. Berikan penggantian atau bayaran balik mengikut polisi.'
          ]
        }
      },
      compliance: 'Semua penghantaran mesti mematuhi peraturan pos dan kurier tempatan.'
    }
  }

  const c = content[language]

  return (
    <ManualLayout prevPath="/manual/product-guidelines" nextPath="/manual/return-policies">
      <h1 className="text-2xl font-bold mb-2">{c.title}</h1>

      <h2 className="text-xl font-semibold mt-6 mb-2">1) {c.sections.options.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.options.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">2) {c.sections.transparency.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.transparency.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">3) {c.sections.packaging.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.packaging.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">4) {c.sections.claims.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.claims.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-yellow-800 font-medium">{c.compliance}</p>
      </div>
    </ManualLayout>
  )
}

export default ShippingPoliciesManual