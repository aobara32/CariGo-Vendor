import React from 'react'
import ManualLayout from './ManualLayout'
import { useLanguage } from '../../contexts/LanguageContext'

const SellerAgreementManual = () => {
  const { language } = useLanguage()
  
  const content = {
    en: {
      title: 'Seller Agreement — CariGo Marketplace',
      sections: {
        scope: {
          title: 'Scope',
          items: [
            'This Agreement governs merchants ("you") who list and sell products on the CariGo platform ("we," "our," "us").'
          ]
        },
        fees: {
          title: 'Fees and Payouts',
          items: [
            'Platform fees: Core 15.0%, Basic 9.5%, Pro 6.5%',
            'Payment processing fee: **3.5% (external)**',
            'Payout frequency: Core monthly, Basic bi-weekly, Pro weekly/on-request',
            'Subscription: Basic $48/month, Pro $90/month'
          ]
        },
        taxes: {
          title: 'Taxes',
          items: [
            'Sellers are responsible for declaring and remitting applicable taxes. CariGo may provide transaction summaries but does not file taxes on your behalf.'
          ]
        },
        returns: {
          title: 'Returns & Chargebacks',
          items: [
            'Refunds are processed within 14 days; chargeback fees from payment providers (3.5%) may be deducted from future payouts.'
          ]
        },
        liability: {
          title: 'Liability',
          items: [
            'CariGo is not liable for lost profits, indirect damages, or data loss. Liability is limited to total fees paid by the seller in the prior 3 months.'
          ]
        },
        law: {
          title: 'Governing Law',
          items: [
            'This Agreement is governed by the laws of Brunei Darussalam.'
          ]
        }
      },
      confirmation: 'By operating on CariGo, you confirm that you have read and agree to all terms.'
    },
    ms: {
      title: 'Perjanjian Peniaga — Pasaran CariGo',
      sections: {
        scope: {
          title: 'Skop',
          items: [
            'Perjanjian ini mengatur peniaga ("anda") yang menyenaraikan dan menjual produk di platform CariGo ("kami," "kita," "kita").'
          ]
        },
        fees: {
          title: 'Yuran dan Pembayaran Keluar',
          items: [
            'Yuran platform: Core 15.0%, Basic 9.5%, Pro 6.5%',
            'Yuran pemprosesan pembayaran: **3.5% (luaran)**',
            'Kekerapan pembayaran keluar: Core bulanan, Basic dua minggu, Pro mingguan/atas permintaan',
            'Langganan: Basic $48/bulan, Pro $90/bulan'
          ]
        },
        taxes: {
          title: 'Cukai',
          items: [
            'Peniaga bertanggungjawab untuk mengisytiharkan dan membayar cukai yang berkenaan. CariGo mungkin menyediakan ringkasan transaksi tetapi tidak memfailkan cukai bagi pihak anda.'
          ]
        },
        returns: {
          title: 'Pemulangan & Chargeback',
          items: [
            'Bayaran balik diproses dalam masa 14 hari; yuran chargeback daripada penyedia pembayaran (3.5%) mungkin dipotong daripada pembayaran keluar masa depan.'
          ]
        },
        liability: {
          title: 'Liabiliti',
          items: [
            'CariGo tidak bertanggungjawab untuk kehilangan keuntungan, kerosakan tidak langsung, atau kehilangan data. Liabiliti terhad kepada jumlah yuran yang dibayar oleh peniaga dalam 3 bulan sebelumnya.'
          ]
        },
        law: {
          title: 'Undang-undang yang Mengatur',
          items: [
            'Perjanjian ini diatur oleh undang-undang Brunei Darussalam.'
          ]
        }
      },
      confirmation: 'Dengan beroperasi di CariGo, anda mengesahkan bahawa anda telah membaca dan bersetuju dengan semua terma.'
    }
  }

  const c = content[language]

  return (
    <ManualLayout prevPath="/manual/webhooks" nextPath="/manual/product-guidelines">
      <h1 className="text-2xl font-bold mb-2">{c.title}</h1>

      <h2 className="text-xl font-semibold mt-6 mb-2">1) {c.sections.scope.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.scope.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">2) {c.sections.fees.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.fees.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">3) {c.sections.taxes.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.taxes.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">4) {c.sections.returns.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.returns.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">5) {c.sections.liability.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.liability.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">6) {c.sections.law.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.law.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <p className="text-green-800 font-medium">{c.confirmation}</p>
      </div>
    </ManualLayout>
  )
}

export default SellerAgreementManual