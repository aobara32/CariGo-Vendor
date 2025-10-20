import React from 'react'
import ManualLayout from './ManualLayout'
import { useLanguage } from '@/contexts/LanguageContext'

const StoreManagementManual = () => {
  const { language } = useLanguage()
  return (
    <ManualLayout prevPath="/manual/getting-started" nextPath="/manual/product-catalog">
      <h1 className="text-2xl font-bold mb-2">{language === 'en' ? 'Store Management — Vendor Manual (CariGo)' : 'Pengurusan Kedai — Manual Peniaga (CariGo)'}</h1>
      <p className="mb-4">{language === 'en' ? 'Overview' : 'Gambaran keseluruhan'}</p>
      <p className="text-muted-foreground mb-6">{language === 'en'
        ? 'This section helps you operate your CariGo store: from creating your merchant account to managing products, orders, customers, fees, payouts, notifications, and security.'
        : 'Bahagian ini membantu anda mengendalikan kedai CariGo anda: daripada mencipta akaun peniaga hingga mengurus produk, pesanan, pelanggan, yuran, pembayaran keluar, pemberitahuan dan keselamatan.'}
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">{language === 'en' ? 'Key Objectives' : 'Objektif Utama'}</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>{language === 'en' ? 'How to create your merchant account' : 'Cara mencipta akaun peniaga anda'}</li>
        <li>{language === 'en' ? 'Understanding your dashboard and settings' : 'Memahami papan pemuka dan tetapan'}</li>
        <li>{language === 'en' ? 'Payment processing setup and payout schedules' : 'Persediaan pemprosesan pembayaran dan jadual pembayaran keluar'}</li>
        <li>{language === 'en' ? 'Updating business info, notification preferences, and security' : 'Kemas kini maklumat perniagaan, pilihan pemberitahuan dan keselamatan'}</li>
        <li>{language === 'en' ? 'Closing your account (offboarding)' : 'Menutup akaun anda (offboarding)'}</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">1) {language === 'en' ? 'How to Create Your Merchant Account' : 'Cara Mencipta Akaun Peniaga Anda'}</h2>
      <p className="font-medium">Step 1 — Sign Up</p>
      <ul className="list-disc pl-6 mb-4">
        <li>{language === 'en' ? 'Visit: https://[your-domain]/seller/signup' : 'Lawat: https://[domain-anda]/seller/signup'}</li>
        <li>{language === 'en' ? 'Fill in business name, region (Brunei), contact email, and phone/WhatsApp.' : 'Isi nama perniagaan, wilayah (Brunei), emel dan nombor telefon/WhatsApp.'}</li>
      </ul>
      <p className="font-medium">Step 2 — Verification Process</p>
      <ul className="list-disc pl-6 mb-4">
        <li>{language === 'en' ? 'Complete KYC/KYB: business registration, ID/passport, bank proof.' : 'Lengkapkan KYC/KYB: pendaftaran perniagaan, kad pengenalan/pasport, bukti akaun bank.'}</li>
        <li>{language === 'en' ? 'Review period: 1–3 business days.' : 'Tempoh semakan: 1–3 hari bekerja.'}</li>
        <li>{language === 'en' ? 'You will receive “Account Verified” email when approved.' : 'Anda akan menerima emel “Akaun Disahkan” apabila diluluskan.'}</li>
      </ul>
      <p className="font-medium">Step 3 — Dashboard Overview</p>
      <ul className="list-disc pl-6 mb-6">
        <li>{language === 'en' ? 'Access Seller Dashboard after verification (web/mobile).' : 'Akses Papan Pemuka Peniaga selepas pengesahan (web/mobile).'} </li>
        <li>{language === 'en' ? 'Modules: Products, Orders, Customers, Analytics, Finance, Settings.' : 'Modul: Produk, Pesanan, Pelanggan, Analitik, Kewangan, Tetapan.'}</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">2) {language === 'en' ? 'Payment Processing Setup' : 'Persediaan Pemprosesan Pembayaran'}</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>{language === 'en' ? 'PCI DSS–compliant providers (e.g., Stripe or local gateways).' : 'Penyedia patuh PCI DSS (cth. Stripe atau gerbang tempatan).'}</li>
        <li>{language === 'en' ? 'Add settlement bank account and proof of ownership.' : 'Tambah akaun bank penyelesaian dan bukti pemilikan.'}</li>
        <li>{language === 'en' ? 'Optional: $0.00 test payout to confirm linkage.' : 'Pilihan: pembayaran ujian $0.00 untuk sahkan pautan.'}</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">3) {language === 'en' ? 'Payout Schedules' : 'Jadual Pembayaran Keluar'}</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>{language === 'en' ? 'Core: Monthly' : 'Core: Bulanan'}</li>
        <li>{language === 'en' ? 'Basic: Bi-weekly' : 'Basic: Dua Mingguan'}</li>
        <li>{language === 'en' ? 'Pro: Weekly (or on request)' : 'Pro: Mingguan (atau atas permintaan)'}</li>
      </ul>
      <p className="text-muted-foreground mb-6">{language === 'en' ? 'Public holidays or banking delays may affect timing. See Finance > Payouts.' : 'Cuti umum atau kelewatan bank boleh menjejaskan masa. Lihat Kewangan > Pembayaran Keluar.'}</p>

      <h2 className="text-xl font-semibold mb-2">4) {language === 'en' ? 'Understanding CariGo Fees' : 'Memahami Yuran CariGo'}</h2>
      <ul className="list-disc pl-6 mb-6">
        <li>{language === 'en' ? 'Platform fee: Core 15.0%, Basic 9.5%, Pro 6.5%' : 'Yuran platform: Core 15.0%, Basic 9.5%, Pro 6.5%'}</li>
        <li>{language === 'en' ? 'Payment processing fee: 3.5%' : 'Yuran pemprosesan pembayaran: 3.5%'}</li>
        <li>{language === 'en' ? 'Subscription billed separately (Basic $48, Pro $90).' : 'Langganan dibilkan berasingan (Basic $48, Pro $90).'}</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">5) {language === 'en' ? 'Updating Business Information' : 'Mengemas Kini Maklumat Perniagaan'}</h2>
      <p className="mb-4">{language === 'en' ? 'Settings > Business.' : 'Tetapan > Perniagaan.'}</p>
      
      <h2 className="text-xl font-semibold mb-2">6) {language === 'en' ? 'Notification Preferences' : 'Keutamaan Pemberitahuan'}</h2>
      <p className="mb-4">{language === 'en' ? 'Settings > Notifications.' : 'Tetapan > Pemberitahuan.'}</p>

      <h2 className="text-xl font-semibold mb-2">7) {language === 'en' ? 'Changing Password and Security' : 'Menukar Kata Laluan dan Keselamatan'}</h2>
      <p className="mb-4">{language === 'en' ? 'Settings > Security. Enable 2FA.' : 'Tetapan > Keselamatan. Aktifkan 2FA.'}</p>

      <h2 className="text-xl font-semibold mb-2">8) {language === 'en' ? 'Closing Your Account' : 'Menutup Akaun Anda'}</h2>
      <p className="mb-2">{language === 'en' ? 'Settings > Account > Close Account.' : 'Tetapan > Akaun > Tutup Akaun.'}</p>
      <p className="text-muted-foreground">{language === 'en' ? 'Legal notice: records retained; settle balances and disputes before closure.' : 'Notis undang-undang: rekod disimpan; selesaikan baki dan pertikaian sebelum penutupan.'}</p>
    </ManualLayout>
  )
}

export default StoreManagementManual


