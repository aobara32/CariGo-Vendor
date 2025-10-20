import React from 'react'
import ManualLayout from './ManualLayout'
import { useLanguage } from '@/contexts/LanguageContext'

const OrderProcessingManual = () => {
  const { language } = useLanguage()
  return (
    <ManualLayout prevPath="/manual/product-catalog" nextPath="/manual/customer-management">
      <h1 className="text-2xl font-bold mb-2">{language === 'en' ? 'Order Processing — Vendor Manual (CariGo)' : 'Pemprosesan Pesanan — Manual Peniaga (CariGo)'}</h1>
      <h2 className="text-xl font-semibold mt-6 mb-2">1) {language === 'en' ? 'Processing Orders' : 'Memproses Pesanan'}</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>{language === 'en' ? 'Orders appear as Pending; verify stock and pack.' : 'Pesanan muncul sebagai Tertunda; sahkan stok dan pembungkusan.'}</li>
        <li>{language === 'en' ? 'Mark Ready for Pickup or Shipped; add tracking.' : 'Tanda Sedia Diambil atau Dihantar; tambah penjejakan.'}</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">2) {language === 'en' ? 'Shipping and Delivery Options' : 'Pilihan Penghantaran dan Pengantaran'}</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>{language === 'en' ? 'Offer Pickup, Local Delivery, or Standard Shipping.' : 'Tawarkan Pengambilan, Pengantaran Tempatan, atau Penghantaran Standard.'}</li>
        <li>{language === 'en' ? 'Configure in Settings > Shipping; update tracking after ship.' : 'Konfigur di Tetapan > Penghantaran; kemas kini penjejakan selepas dihantar.'}</li>
      </ul>
      <h2 className="text-xl font-semibold mb-2">3) {language === 'en' ? 'Order Status Management' : 'Pengurusan Status Pesanan'}</h2>
      <p className="mb-4">{language === 'en' ? 'Pending → Confirmed → Shipped → Completed; use On Hold or Cancelled when needed.' : 'Tertunda → Disahkan → Dihantar → Selesai; gunakan Ditangguh atau Dibatalkan jika perlu.'}</p>
      <h2 className="text-xl font-semibold mb-2">4) {language === 'en' ? 'Handling Returns and Refunds' : 'Mengendalikan Pemulangan dan Bayaran Balik'}</h2>
      <ul className="list-disc pl-6 mb-2">
        <li>{language === 'en' ? 'Orders > Refunds; refunds within 7–14 business days.' : 'Pesanan > Bayaran Balik; bayaran balik dalam 7–14 hari bekerja.'}</li>
        <li>{language === 'en' ? 'Processor may deduct chargeback fees (3.5%).' : 'Pemproses boleh menolak yuran caj balik (3.5%).'}</li>
      </ul>
      <p className="text-muted-foreground">{language === 'en' ? 'Legal: comply with Brunei consumer laws.' : 'Undang-undang: patuhi undang-undang pengguna Brunei.'}</p>
    </ManualLayout>
  )
}

export default OrderProcessingManual


