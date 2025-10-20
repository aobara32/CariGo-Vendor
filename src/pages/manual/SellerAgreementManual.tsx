import React from 'react'
import ManualLayout from './ManualLayout'
import { useLanguage } from '@/contexts/LanguageContext'

const SellerAgreementManual = () => {
  const { language } = useLanguage()
  return (
    <ManualLayout prevPath="/manual/webhooks" nextPath="/manual/product-guidelines">
      <h1 className="text-2xl font-bold mb-2">{language === 'en' ? 'Seller Agreement — CariGo Marketplace' : 'Perjanjian Penjual — Pasaran CariGo'}</h1>
      <h2 className="text-xl font-semibold mt-6 mb-2">1) {language === 'en' ? 'Scope' : 'Skop'}</h2>
      <p className="mb-4">{language === 'en' ? 'Agreement for merchants who list and sell on CariGo.' : 'Perjanjian untuk peniaga yang menyenarai dan menjual di CariGo.'}</p>
      <h2 className="text-xl font-semibold mb-2">2) {language === 'en' ? 'Fees and Payouts' : 'Yuran dan Pembayaran Keluar'}</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>{language === 'en' ? 'Platform: Core 15.0%, Basic 9.5%, Pro 6.5%.' : 'Platform: Core 15.0%, Basic 9.5%, Pro 6.5%.'}</li>
        <li>{language === 'en' ? 'Payment fee: 3.5% (external).' : 'Yuran pembayaran: 3.5% (luaran).'}</li>
        <li>{language === 'en' ? 'Payout: Core monthly, Basic bi-weekly, Pro weekly/on-request.' : 'Pembayaran keluar: Core bulanan, Basic dwi-mingguan, Pro mingguan/atas permintaan.'}</li>
        <li>{language === 'en' ? 'Subscription: Basic $48/mo, Pro $90/mo.' : 'Langganan: Basic $48/bln, Pro $90/bln.'}</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">3) {language === 'en' ? 'Taxes' : 'Cukai'}</h2>
      <p className="mb-4">{language === 'en' ? 'Sellers must declare and remit taxes. CariGo does not file taxes.' : 'Peniaga mesti mengisytihar dan membayar cukai. CariGo tidak memfailkan cukai.'}</p>
      <h2 className="text-xl font-semibold mb-2">4) {language === 'en' ? 'Returns & Chargebacks' : 'Pemulangan & Caj Balik'}</h2>
      <p className="mb-4">{language === 'en' ? 'Refunds within 14 days; chargeback fees (3.5%) may be deducted.' : 'Bayaran balik dalam 14 hari; yuran caj balik (3.5%) mungkin ditolak.'}</p>
      <h2 className="text-xl font-semibold mb-2">5) {language === 'en' ? 'Liability' : 'Liabiliti'}</h2>
      <p className="mb-4">{language === 'en' ? 'No liability for indirect damages; limited to recent 3 months fees.' : 'Tiada liabiliti untuk kerosakan tidak langsung; terhad kepada yuran 3 bulan terkini.'}</p>
      <h2 className="text-xl font-semibold mb-2">6) {language === 'en' ? 'Governing Law' : 'Undang-undang Mentadbir'}</h2>
      <p>{language === 'en' ? 'Brunei Darussalam laws.' : 'Undang-undang Brunei Darussalam.'}</p>
    </ManualLayout>
  )
}

export default SellerAgreementManual


