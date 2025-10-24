import React from 'react'
import ManualLayout from './ManualLayout'
import { useLanguage } from '../../contexts/LanguageContext'

const PaymentsPayoutsManual = () => {
  const { language } = useLanguage()
  
  const content = {
    en: {
      title: 'Payments & Payouts — Vendor Manual (CariGo)',
      sections: {
        fees: {
          title: 'Fee Structure',
          items: [
            'Platform fees: Core 15.0%, Basic 9.5%, Pro 6.5%',
            'Payment processing fee: 3.5% (external)',
            'Subscription fees: Basic $48/month, Pro $90/month (billed separately)'
          ]
        },
        schedules: {
          title: 'Payout Schedules',
          items: [
            'Core Plan: Monthly',
            'Basic Plan: Bi-weekly (every 2 weeks)',
            'Pro Plan: Weekly (or on request)',
            'Public holidays or banking delays may affect timing'
          ]
        },
        processing: {
          title: 'Payment Processing',
          items: [
            'PCI DSS–compliant payment providers (e.g., Stripe or local Brunei gateways)',
            'All transactions subject to 3.5% payment processing fee',
            'Chargeback fees may be deducted from future payouts'
          ]
        },
        taxes: {
          title: 'Tax Responsibilities',
          items: [
            'Sellers are responsible for declaring and remitting applicable taxes',
            'CariGo may provide transaction summaries but does not file taxes on your behalf',
            'Keep accurate records for tax purposes'
          ]
        }
      }
    },
    ms: {
      title: 'Pembayaran & Pembayaran Keluar — Manual Peniaga (CariGo)',
      sections: {
        fees: {
          title: 'Struktur Yuran',
          items: [
            'Yuran platform: Core 15.0%, Basic 9.5%, Pro 6.5%',
            'Yuran pemprosesan pembayaran: 3.5% (luaran)',
            'Yuran langganan: Basic $48/bulan, Pro $90/bulan (dibilkan berasingan)'
          ]
        },
        schedules: {
          title: 'Jadual Pembayaran Keluar',
          items: [
            'Pelan Core: Bulanan',
            'Pelan Basic: Dua minggu (setiap 2 minggu)',
            'Pelan Pro: Mingguan (atau atas permintaan)',
            'Cuti umum atau kelewatan perbankan mungkin menjejaskan masa'
          ]
        },
        processing: {
          title: 'Pemprosesan Pembayaran',
          items: [
            'Penyedia pembayaran patuh PCI DSS (cth. Stripe atau gerbang Brunei tempatan)',
            'Semua transaksi tertakluk kepada yuran pemprosesan pembayaran 3.5%',
            'Yuran chargeback mungkin dipotong daripada pembayaran keluar masa depan'
          ]
        },
        taxes: {
          title: 'Tanggungjawab Cukai',
          items: [
            'Peniaga bertanggungjawab untuk mengisytiharkan dan membayar cukai yang berkenaan',
            'CariGo mungkin menyediakan ringkasan transaksi tetapi tidak memfailkan cukai bagi pihak anda',
            'Simpan rekod yang tepat untuk tujuan cukai'
          ]
        }
      }
    }
  }

  const c = content[language]

  return (
    <ManualLayout prevPath="/manual/return-policies" nextPath="/manual/account-settings">
      <h1 className="text-2xl font-bold mb-2">{c.title}</h1>

      <h2 className="text-xl font-semibold mt-6 mb-2">1) {c.sections.fees.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.fees.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">2) {c.sections.schedules.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.schedules.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">3) {c.sections.processing.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.processing.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">4) {c.sections.taxes.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.taxes.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </ManualLayout>
  )
}

export default PaymentsPayoutsManual