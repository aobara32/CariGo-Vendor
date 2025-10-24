import React from 'react'
import ManualLayout from './ManualLayout'
import { useLanguage } from '../../contexts/LanguageContext'

const AuthenticationManual = () => {
  const { language } = useLanguage()
  
  const content = {
    en: {
      title: 'Authentication — Vendor Manual (CariGo)',
      sections: {
        verification: {
          title: 'Account Verification',
          items: [
            'All sellers must complete KYC/KYB before selling or receiving payouts.'
          ]
        },
        login: {
          title: 'Login',
          items: [
            'Use verified email and password (12+ characters recommended).',
            '2FA (two-factor authentication) adds extra protection.'
          ]
        },
        password: {
          title: 'Changing Password',
          items: [
            'Settings > Security > Change Password.',
            'Enable 2FA to prevent unauthorized access.'
          ]
        },
        api: {
          title: 'API Keys (Pro Plan)',
          items: [
            'Generate API keys under Developer Settings. Keep them private.'
          ]
        }
      }
    },
    ms: {
      title: 'Pengesahan — Manual Peniaga (CariGo)',
      sections: {
        verification: {
          title: 'Pengesahan Akaun',
          items: [
            'Semua peniaga mesti melengkapkan KYC/KYB sebelum menjual atau menerima pembayaran keluar.'
          ]
        },
        login: {
          title: 'Log Masuk',
          items: [
            'Gunakan e-mel yang disahkan dan kata laluan (12+ aksara disyorkan).',
            '2FA (pengesahan dua faktor) menambah perlindungan tambahan.'
          ]
        },
        password: {
          title: 'Menukar Kata Laluan',
          items: [
            'Tetapan > Keselamatan > Tukar Kata Laluan.',
            'Aktifkan 2FA untuk mencegah akses tanpa kebenaran.'
          ]
        },
        api: {
          title: 'Kunci API (Pelan Pro)',
          items: [
            'Jana kunci API di bawah Tetapan Pembangun. Simpan secara peribadi.'
          ]
        }
      }
    }
  }

  const c = content[language]

  return (
    <ManualLayout prevPath="/manual/analytics-reporting" nextPath="/manual/product-api">
      <h1 className="text-2xl font-bold mb-2">{c.title}</h1>

      <h2 className="text-xl font-semibold mt-6 mb-2">1) {c.sections.verification.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.verification.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">2) {c.sections.login.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.login.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">3) {c.sections.password.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.password.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">4) {c.sections.api.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.api.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </ManualLayout>
  )
}

export default AuthenticationManual