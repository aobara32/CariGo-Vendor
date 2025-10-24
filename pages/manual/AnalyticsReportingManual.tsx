import React from 'react'
import ManualLayout from './ManualLayout'
import { useLanguage } from '../../contexts/LanguageContext'

const AnalyticsReportingManual = () => {
  const { language } = useLanguage()
  
  const content = {
    en: {
      title: 'Analytics & Reporting — Vendor Manual (CariGo)',
      sections: {
        dashboard: {
          title: 'Understanding Your Dashboard',
          items: [
            'Real-time KPIs: Orders, GMV, Net Sales, Average Order Value, Conversion Rate.'
          ]
        },
        sales: {
          title: 'Sales Reports',
          items: [
            'Filter by time, category, or product. Export as CSV (Basic) or PDF/CSV (Pro).'
          ]
        },
        customer: {
          title: 'Customer Analytics',
          items: [
            'Track repeat customers, popular regions, and buying trends.'
          ]
        },
        performance: {
          title: 'Performance Metrics',
          items: [
            'Identify best-selling items, low-stock alerts, and fulfillment time.'
          ]
        },
        export: {
          title: 'Exporting Data',
          items: [
            'Finance > Exports: download transactions, payouts, and tax reports in CSV format.'
          ]
        }
      }
    },
    ms: {
      title: 'Analitik & Pelaporan — Manual Peniaga (CariGo)',
      sections: {
        dashboard: {
          title: 'Memahami Papan Pemuka Anda',
          items: [
            'KPI masa nyata: Pesanan, GMV, Jualan Bersih, Nilai Pesanan Purata, Kadar Penukaran.'
          ]
        },
        sales: {
          title: 'Laporan Jualan',
          items: [
            'Tapis mengikut masa, kategori, atau produk. Eksport sebagai CSV (Basic) atau PDF/CSV (Pro).'
          ]
        },
        customer: {
          title: 'Analitik Pelanggan',
          items: [
            'Jejak pelanggan berulang, wilayah popular, dan trend pembelian.'
          ]
        },
        performance: {
          title: 'Metrik Prestasi',
          items: [
            'Kenal pasti item terlaris, amaran stok rendah, dan masa pemenuhan.'
          ]
        },
        export: {
          title: 'Mengeksport Data',
          items: [
            'Kewangan > Eksport: muat turun transaksi, pembayaran keluar, dan laporan cukai dalam format CSV.'
          ]
        }
      }
    }
  }

  const c = content[language]

  return (
    <ManualLayout prevPath="/manual/customer-management" nextPath="/manual/authentication">
      <h1 className="text-2xl font-bold mb-2">{c.title}</h1>

      <h2 className="text-xl font-semibold mt-6 mb-2">1) {c.sections.dashboard.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.dashboard.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">2) {c.sections.sales.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.sales.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">3) {c.sections.customer.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.customer.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">4) {c.sections.performance.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.performance.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">5) {c.sections.export.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.export.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </ManualLayout>
  )
}

export default AnalyticsReportingManual