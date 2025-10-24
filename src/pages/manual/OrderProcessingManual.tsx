import React from 'react'
import ManualLayout from './ManualLayout'
import { useLanguage } from '../../contexts/LanguageContext'

const OrderProcessingManual = () => {
  const { language } = useLanguage()
  
  const content = {
    en: {
      title: 'Order Processing — Vendor Manual (CariGo)',
      overview: 'Learn how to process incoming orders, ship products, manage statuses, and handle returns or refunds.',
      sections: {
        processing: {
          title: 'Processing Orders',
          items: [
            'Dashboard > Orders: new orders appear as "Pending."',
            'Verify stock, pack securely, then mark as "Ready for Pickup" or "Shipped."',
            'Provide tracking number if applicable.'
          ]
        },
        shipping: {
          title: 'Shipping and Delivery Options',
          items: [
            'Offer: In-Store Pickup, Local Delivery, or Standard Shipping.',
            'Set shipping rates and zones in Settings > Shipping.',
            'Update order with tracking details once shipped.'
          ]
        },
        status: {
          title: 'Order Status Management',
          items: [
            'Common flow: Pending → Confirmed → Shipped → Completed.',
            'Use "On Hold" for payment or stock issues; "Cancelled" if order voided.'
          ]
        },
        returns: {
          title: 'Handling Returns and Refunds',
          items: [
            'Process refunds under Orders > Refunds after verifying eligibility.',
            'Refunds are credited back to the buyer within 7–14 business days.',
            'Payment processor (3.5% fee) may deduct chargeback fees from future payouts.'
          ]
        }
      },
      legalNotice: 'Legal Notice: Merchants are sellers of record. Returns and warranties must comply with Brunei\'s consumer laws.'
    },
    ms: {
      title: 'Pemprosesan Pesanan — Manual Peniaga (CariGo)',
      overview: 'Pelajari cara memproses pesanan masuk, menghantar produk, mengurus status, dan mengendalikan pemulangan atau bayaran balik.',
      sections: {
        processing: {
          title: 'Memproses Pesanan',
          items: [
            'Papan Pemuka > Pesanan: pesanan baru muncul sebagai "Menunggu."',
            'Sahkan stok, bungkus dengan selamat, kemudian tandakan sebagai "Sedia untuk Ambil" atau "Dihantar."',
            'Berikan nombor penjejakan jika berkenaan.'
          ]
        },
        shipping: {
          title: 'Pilihan Penghantaran dan Penghantaran',
          items: [
            'Tawarkan: Ambil di Kedai, Penghantaran Tempatan, atau Penghantaran Standard.',
            'Tetapkan kadar dan zon penghantaran dalam Tetapan > Penghantaran.',
            'Kemas kini pesanan dengan butiran penjejakan setelah dihantar.'
          ]
        },
        status: {
          title: 'Pengurusan Status Pesanan',
          items: [
            'Aliran biasa: Menunggu → Disahkan → Dihantar → Selesai.',
            'Gunakan "Ditahan" untuk masalah pembayaran atau stok; "Dibatalkan" jika pesanan dibatalkan.'
          ]
        },
        returns: {
          title: 'Mengendalikan Pemulangan dan Bayaran Balik',
          items: [
            'Proses bayaran balik di bawah Pesanan > Bayaran Balik setelah mengesahkan kelayakan.',
            'Bayaran balik dikreditkan kembali kepada pembeli dalam masa 7–14 hari bekerja.',
            'Pemproses pembayaran (yuran 3.5%) mungkin memotong yuran chargeback daripada pembayaran keluar masa depan.'
          ]
        }
      },
      legalNotice: 'Notis Undang-undang: Peniaga adalah penjual rekod. Pemulangan dan jaminan mesti mematuhi undang-undang pengguna Brunei.'
    }
  }

  const c = content[language]

  return (
    <ManualLayout prevPath="/manual/product-catalog" nextPath="/manual/customer-management">
      <h1 className="text-2xl font-bold mb-2">{c.title}</h1>
      
      <h2 className="text-xl font-semibold mt-6 mb-2">Overview</h2>
      <p className="text-muted-foreground mb-6">{c.overview}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1) {c.sections.processing.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.processing.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">2) {c.sections.shipping.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.shipping.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">3) {c.sections.status.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.status.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">4) {c.sections.returns.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.returns.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
        <p className="text-yellow-800 font-medium">{c.legalNotice}</p>
      </div>
    </ManualLayout>
  )
}

export default OrderProcessingManual