import React from 'react'
import ManualLayout from './ManualLayout'
import { useLanguage } from '../../contexts/LanguageContext'

const ReturnPoliciesManual = () => {
  const { language } = useLanguage()
  
  const content = {
    en: {
      title: 'Return Policies — CariGo (Template)',
      sections: {
        window: {
          title: 'Return Window',
          items: [
            'Accept returns within [7–14] days of delivery unless the item is perishable or non-returnable by law.'
          ]
        },
        conditions: {
          title: 'Conditions',
          items: [
            'Items must be unused and in original packaging unless defective.'
          ]
        },
        process: {
          title: 'Process',
          items: [
            'Buyer requests return via order page → Seller approves/declines within 2 business days → Refund or exchange processed after inspection.'
          ]
        },
        refunds: {
          title: 'Refund Timelines',
          items: [
            'Refunds issued within 7–14 business days post-approval through the original payment method.'
          ]
        },
        chargebacks: {
          title: 'Chargebacks',
          items: [
            'Chargeback fees (3.5%) imposed by the payment processor may be offset from future payouts.'
          ]
        },
        compliance: {
          title: 'Compliance',
          items: [
            'Your return policy must comply with consumer protection law in Brunei.'
          ]
        }
      }
    },
    ms: {
      title: 'Polisi Pemulangan — CariGo (Templat)',
      sections: {
        window: {
          title: 'Tetingkap Pemulangan',
          items: [
            'Terima pemulangan dalam masa [7–14] hari selepas penghantaran melainkan item mudah rosak atau tidak boleh dipulangkan mengikut undang-undang.'
          ]
        },
        conditions: {
          title: 'Syarat',
          items: [
            'Item mesti tidak digunakan dan dalam pembungkusan asal melainkan rosak.'
          ]
        },
        process: {
          title: 'Proses',
          items: [
            'Pembeli meminta pemulangan melalui halaman pesanan → Peniaga meluluskan/menolak dalam masa 2 hari bekerja → Bayaran balik atau pertukaran diproses selepas pemeriksaan.'
          ]
        },
        refunds: {
          title: 'Masa Bayaran Balik',
          items: [
            'Bayaran balik dikeluarkan dalam masa 7–14 hari bekerja selepas kelulusan melalui kaedah pembayaran asal.'
          ]
        },
        chargebacks: {
          title: 'Chargeback',
          items: [
            'Yuran chargeback (3.5%) yang dikenakan oleh pemproses pembayaran mungkin diimbangi daripada pembayaran keluar masa depan.'
          ]
        },
        compliance: {
          title: 'Pematuhan',
          items: [
            'Polisi pemulangan anda mesti mematuhi undang-undang perlindungan pengguna di Brunei.'
          ]
        }
      }
    }
  }

  const c = content[language]

  return (
    <ManualLayout prevPath="/manual/shipping-policies" nextPath="/manual/payments-payouts">
      <h1 className="text-2xl font-bold mb-2">{c.title}</h1>

      <h2 className="text-xl font-semibold mt-6 mb-2">1) {c.sections.window.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.window.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">2) {c.sections.conditions.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.conditions.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">3) {c.sections.process.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.process.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">4) {c.sections.refunds.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.refunds.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">5) {c.sections.chargebacks.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.chargebacks.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">6) {c.sections.compliance.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.compliance.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </ManualLayout>
  )
}

export default ReturnPoliciesManual