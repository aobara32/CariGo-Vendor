import React from 'react'
import ManualLayout from './ManualLayout'
import { useLanguage } from '@/contexts/LanguageContext'

const AuthenticationManual = () => {
  const { language } = useLanguage()
  return (
    <ManualLayout prevPath="/manual/analytics-reporting" nextPath="/manual/product-api">
      <h1 className="text-2xl font-bold mb-2">{language === 'en' ? 'Authentication — Vendor Manual (CariGo)' : 'Pengesahan — Manual Peniaga (CariGo)'}</h1>
      <h2 className="text-xl font-semibold mt-6 mb-2">1) {language === 'en' ? 'Account Verification' : 'Pengesahan Akaun'}</h2>
      <p className="mb-4">{language === 'en' ? 'All sellers must complete KYC/KYB.' : 'Semua peniaga mesti melengkapkan KYC/KYB.'}</p>
      <h2 className="text-xl font-semibold mb-2">2) {language === 'en' ? 'Login' : 'Log Masuk'}</h2>
      <ul className="list-disc pl-6 mb-4">
        <li>{language === 'en' ? 'Use verified email and a strong password (12+ chars).' : 'Guna emel disahkan dan kata laluan kukuh (12+ aksara).'}</li>
        <li>{language === 'en' ? 'Enable 2FA for extra protection.' : 'Aktifkan 2FA untuk perlindungan tambahan.'}</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">3) {language === 'en' ? 'Changing Password' : 'Menukar Kata Laluan'}</h2>
      <p className="mb-4">{language === 'en' ? 'Settings > Security > Change Password.' : 'Tetapan > Keselamatan > Tukar Kata Laluan.'}</p>
      <h2 className="text-xl font-semibold mb-2">4) {language === 'en' ? 'API Keys (Pro Plan)' : 'Kunci API (Pelan Pro)'}</h2>
      <p>{language === 'en' ? 'Generate keys under Developer Settings and keep them private.' : 'Jana kunci di bawah Tetapan Pembangun dan simpan secara peribadi.'}</p>
    </ManualLayout>
  )
}

export default AuthenticationManual


