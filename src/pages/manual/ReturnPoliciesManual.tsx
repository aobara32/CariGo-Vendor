import React from 'react'
import ManualLayout from './ManualLayout'
import { useLanguage } from '@/contexts/LanguageContext'

const ReturnPoliciesManual = () => {
  const { language } = useLanguage()
  return (
    <ManualLayout prevPath="/manual/shipping-policies">
      <h1 className="text-2xl font-bold mb-2">{language === 'en' ? 'Return Policies — CariGo (Template)' : 'Dasar Pemulangan — CariGo (Templat)'}</h1>
      <h2 className="text-xl font-semibold mt-6 mb-2">1) {language === 'en' ? 'Return Window' : 'Tempoh Pemulangan'}</h2>
      <p className="mb-4">{language === 'en' ? 'Accept returns within [7–14] days unless exceptions apply.' : 'Terima pemulangan dalam [7–14] hari kecuali pengecualian.'}</p>
      <h2 className="text-xl font-semibold mb-2">2) {language === 'en' ? 'Conditions' : 'Syarat'}</h2>
      <p className="mb-4">{language === 'en' ? 'Items unused and in original packaging unless defective.' : 'Barangan tidak digunakan dan dalam pembungkusan asal kecuali rosak.'}</p>
      <h2 className="text-xl font-semibold mb-2">3) {language === 'en' ? 'Process' : 'Proses'}</h2>
      <p className="mb-4">{language === 'en' ? 'Buyer requests return → Seller decides in 2 business days.' : 'Pembeli memohon pemulangan → Penjual memutuskan dalam 2 hari bekerja.'}</p>
      <h2 className="text-xl font-semibold mb-2">4) {language === 'en' ? 'Refund Timelines' : 'Garis Masa Bayaran Balik'}</h2>
      <p className="mb-4">{language === 'en' ? 'Refunds within 7–14 business days to original method.' : 'Bayaran balik dalam 7–14 hari bekerja ke kaedah asal.'}</p>
      <h2 className="text-xl font-semibold mb-2">5) {language === 'en' ? 'Chargebacks' : 'Caj Balik'}</h2>
      <p className="mb-4">{language === 'en' ? 'Processor fees (3.5%) may be offset from payouts.' : 'Yuran pemproses (3.5%) mungkin ditolak dari pembayaran keluar.'}</p>
      <h2 className="text-xl font-semibold mb-2">6) {language === 'en' ? 'Compliance' : 'Pematuhan'}</h2>
      <p>{language === 'en' ? 'Must comply with Brunei consumer protection law.' : 'Mesti patuh undang-undang perlindungan pengguna Brunei.'}</p>
    </ManualLayout>
  )
}

export default ReturnPoliciesManual


