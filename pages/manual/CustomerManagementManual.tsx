import React from 'react'
import ManualLayout from './ManualLayout'
import { useLanguage } from '../../contexts/LanguageContext'

const CustomerManagementManual = () => {
  const { language } = useLanguage()
  
  const content = {
    en: {
      title: 'Customer Management — Vendor Manual (CariGo)',
      sections: {
        communication: {
          title: 'Customer Communication',
          items: [
            'Use the in-platform messaging system to respond promptly to questions.',
            'Stay professional and respectful. Avoid sharing personal contact info.'
          ]
        },
        profiles: {
          title: 'Customer Profiles',
          items: [
            'View previous purchases and communication to improve support.',
            'Customer data is confidential and must be used only for order fulfillment.'
          ]
        },
        complaints: {
          title: 'Handling Complaints',
          items: [
            'Respond within 1 business day with a proposed resolution.',
            'Escalate to CariGo Support if unresolved within 3 days.'
          ]
        }
      }
    },
    ms: {
      title: 'Pengurusan Pelanggan — Manual Peniaga (CariGo)',
      sections: {
        communication: {
          title: 'Komunikasi Pelanggan',
          items: [
            'Gunakan sistem mesej dalam platform untuk membalas soalan dengan cepat.',
            'Kekal profesional dan hormat. Elakkan berkongsi maklumat hubungan peribadi.'
          ]
        },
        profiles: {
          title: 'Profil Pelanggan',
          items: [
            'Lihat pembelian dan komunikasi sebelumnya untuk memperbaiki sokongan.',
            'Data pelanggan adalah sulit dan mesti digunakan hanya untuk memenuhi pesanan.'
          ]
        },
        complaints: {
          title: 'Mengendalikan Aduan',
          items: [
            'Balas dalam masa 1 hari bekerja dengan resolusi yang dicadangkan.',
            'Eskalasi kepada Sokongan CariGo jika tidak diselesaikan dalam masa 3 hari.'
          ]
        }
      }
    }
  }

  const c = content[language]

  return (
    <ManualLayout prevPath="/manual/order-processing" nextPath="/manual/analytics-reporting">
      <h1 className="text-2xl font-bold mb-2">{c.title}</h1>

      <h2 className="text-xl font-semibold mt-6 mb-2">1) {c.sections.communication.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.communication.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">2) {c.sections.profiles.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.profiles.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">3) {c.sections.complaints.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.complaints.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </ManualLayout>
  )
}

export default CustomerManagementManual