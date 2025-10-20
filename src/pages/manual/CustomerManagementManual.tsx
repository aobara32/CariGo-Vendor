import React from 'react'
import ManualLayout from './ManualLayout'
import { useLanguage } from '@/contexts/LanguageContext'

const CustomerManagementManual = () => {
  const { language } = useLanguage()
  return (
    <ManualLayout prevPath="/manual/order-processing" nextPath="/manual/analytics-reporting">
      <h1 className="text-2xl font-bold mb-2">{language === 'en' ? 'Customer Management — Vendor Manual (CariGo)' : 'Pengurusan Pelanggan — Manual Peniaga (CariGo)'}</h1>
      <h2 className="text-xl font-semibold mt-6 mb-2">1) {language === 'en' ? 'Customer Communication' : 'Komunikasi Pelanggan'}</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>{language === 'en' ? 'Use in-platform messaging; respond promptly.' : 'Guna pemesejan dalam platform; balas dengan segera.'}</li>
        <li>{language === 'en' ? 'Stay professional; avoid sharing personal contacts.' : 'Kekal profesional; elakkan berkongsi kontak peribadi.'}</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">2) {language === 'en' ? 'Customer Profiles' : 'Profil Pelanggan'}</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>{language === 'en' ? 'View past purchases and comms to improve support.' : 'Lihat pembelian dan komunikasi lepas untuk tingkatkan sokongan.'}</li>
        <li>{language === 'en' ? 'Use data only for fulfillment; keep confidential.' : 'Guna data hanya untuk pemenuhan; kekalkan kerahsiaan.'}</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">3) {language === 'en' ? 'Handling Complaints' : 'Menangani Aduan'}</h2>
      <ul className="list-disc pl-6">
        <li>{language === 'en' ? 'Respond in 1 business day with a proposed resolution.' : 'Balas dalam 1 hari bekerja dengan penyelesaian dicadangkan.'}</li>
        <li>{language === 'en' ? 'Escalate to Support if unresolved in 3 days.' : 'Naik taraf kepada Sokongan jika tidak selesai dalam 3 hari.'}</li>
      </ul>
    </ManualLayout>
  )
}

export default CustomerManagementManual


