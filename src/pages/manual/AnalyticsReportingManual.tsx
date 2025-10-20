import React from 'react'
import ManualLayout from './ManualLayout'
import { useLanguage } from '@/contexts/LanguageContext'

const AnalyticsReportingManual = () => {
  const { language } = useLanguage()
  return (
    <ManualLayout prevPath="/manual/customer-management" nextPath="/manual/authentication">
      <h1 className="text-2xl font-bold mb-2">{language === 'en' ? 'Analytics & Reporting — Vendor Manual (CariGo)' : 'Analitik & Laporan — Manual Peniaga (CariGo)'}</h1>
      <ul className="list-disc pl-6 space-y-2">
        <li>{language === 'en' ? 'Real-time KPIs: Orders, GMV, Net Sales, AOV, Conversion.' : 'KPI masa nyata: Pesanan, GMV, Jualan Bersih, AOV, Penukaran.'}</li>
        <li>{language === 'en' ? 'Sales reports: filter and export CSV/PDF (plan-based).' : 'Laporan jualan: tapis dan eksport CSV/PDF (ikut pelan).'}</li>
        <li>{language === 'en' ? 'Customer analytics: repeats, regions, trends.' : 'Analitik pelanggan: berulang, wilayah, tren.'}</li>
        <li>{language === 'en' ? 'Performance: best-sellers, low-stock, fulfillment time.' : 'Prestasi: paling laris, stok rendah, masa pemenuhan.'}</li>
        <li>{language === 'en' ? 'Finance > Exports: transactions, payouts, tax CSV.' : 'Kewangan > Eksport: transaksi, pembayaran keluar, CSV cukai.'}</li>
      </ul>
    </ManualLayout>
  )
}

export default AnalyticsReportingManual


