import React from 'react'
import ManualLayout from './ManualLayout'
import { useLanguage } from '../../contexts/LanguageContext'

const StoreManagementManual = () => {
  const { language } = useLanguage()
  
  const content = {
    en: {
      title: 'Store Management — Vendor Manual (CariGo)',
      overview: 'This section helps you operate your CariGo store: from creating your merchant account to managing products, orders, customers, fees, payouts, notifications, and security. It is beginner-friendly and includes legally relevant notes.',
      objectives: [
        'How to create your merchant account',
        'Understanding your dashboard and settings',
        'Payment processing setup and payout schedules',
        'Updating business information, notification preferences, and security',
        'Closing your account (offboarding)'
      ],
      sections: {
        accountCreation: {
          title: 'How to Create Your Merchant Account',
          steps: {
            signup: {
              title: 'Step 1 — Sign Up',
              items: [
                'Visit: https://[your-domain]/seller/signup',
                'Fill in your business name, country/region (Brunei), contact email, and phone/WhatsApp number.'
              ]
            },
            verification: {
              title: 'Step 2 — Verification Process Explained',
              items: [
                'Complete KYC/KYB: provide your business registration, identity card/passport of the owner or authorized representative, and bank account proof.',
                'Standard review period: 1–3 business days.',
                'Once approved, you\'ll receive an "Account Verified" confirmation email.'
              ]
            },
            dashboard: {
              title: 'Step 3 — Dashboard Overview',
              items: [
                'After verification, you can access your Seller Dashboard (web or mobile).',
                'Modules include: Products, Orders, Customers, Analytics, Finance, and Settings.'
              ]
            }
          }
        },
        paymentSetup: {
          title: 'Payment Processing Setup',
          items: [
            'CariGo partners with secure, PCI DSS–compliant payment providers (e.g., Stripe or local Brunei gateways).',
            'Add your settlement bank account: Bank name, account holder, account number, and upload proof of ownership.',
            'Optional: run a $0.00 test payout to confirm bank linkage.'
          ]
        },
        payoutSchedules: {
          title: 'Payout Schedules',
          items: [
            'Core Plan: Monthly',
            'Basic Plan: Bi-weekly (every 2 weeks)',
            'Pro Plan: Weekly (or on request)',
            'Public holidays or banking delays may affect timing. See "Finance > Payouts" for your next payment date.'
          ]
        },
        fees: {
          title: 'Understanding CariGo Fees (Fee Structure Explained)',
          platformFees: [
            'Core: 15.0%',
            'Basic: 9.5%',
            'Pro: 6.5%'
          ],
          paymentFee: 'Payment processing fee (external): **3.5%**',
          totalCosts: [
            'Core ≈ 18.5%',
            'Basic ≈ 13.0%',
            'Pro ≈ 10.0%'
          ],
          subscription: 'Subscription fees (Basic: $48/month; Pro: $90/month) are billed separately.'
        },
        businessInfo: {
          title: 'Updating Business Information',
          items: [
            'Navigate to Settings > Business to edit legal name, address, tax ID, or payout details.',
            'Major changes (ownership, bank, or registration) may trigger re-verification for compliance.'
          ]
        },
        notifications: {
          title: 'Notification Preferences',
          items: [
            'Go to Settings > Notifications: choose between email, SMS, or in-app alerts for new orders, stock updates, and payouts.',
            'You may disable promotional notifications but must keep operational ones enabled.'
          ]
        },
        security: {
          title: 'Changing Password and Security',
          items: [
            'Settings > Security: change password, enable 2FA (two-factor authentication), and manage API keys (Pro plan).',
            'Security Reminder: only trust official CariGo domains and never share passwords or OTPs.'
          ]
        },
        closing: {
          title: 'Closing Your Account',
          items: [
            'To close your account, go to Settings > Account > Close Account.',
            'Legal notice: transaction records are retained for legal and accounting purposes. Outstanding balances or disputes must be settled before closure.'
          ]
        }
      }
    },
    ms: {
      title: 'Pengurusan Kedai — Manual Peniaga (CariGo)',
      overview: 'Bahagian ini membantu anda mengendalikan kedai CariGo anda: daripada mencipta akaun peniaga hingga mengurus produk, pesanan, pelanggan, yuran, pembayaran keluar, pemberitahuan dan keselamatan. Ia mesra pemula dan termasuk nota yang relevan secara undang-undang.',
      objectives: [
        'Cara mencipta akaun peniaga anda',
        'Memahami papan pemuka dan tetapan anda',
        'Persediaan pemprosesan pembayaran dan jadual pembayaran keluar',
        'Kemas kini maklumat perniagaan, pilihan pemberitahuan dan keselamatan',
        'Menutup akaun anda (offboarding)'
      ],
      sections: {
        accountCreation: {
          title: 'Cara Mencipta Akaun Peniaga Anda',
          steps: {
            signup: {
              title: 'Langkah 1 — Daftar',
              items: [
                'Lawat: https://[domain-anda]/seller/signup',
                'Isi nama perniagaan, negara/wilayah (Brunei), e-mel hubungan, dan nombor telefon/WhatsApp.'
              ]
            },
            verification: {
              title: 'Langkah 2 — Proses Pengesahan Dijelaskan',
              items: [
                'Lengkapkan KYC/KYB: berikan pendaftaran perniagaan, kad pengenalan/pasport pemilik atau wakil yang diberi kuasa, dan bukti akaun bank.',
                'Tempoh semakan standard: 1–3 hari bekerja.',
                'Setelah diluluskan, anda akan menerima e-mel pengesahan "Akaun Disahkan".'
              ]
            },
            dashboard: {
              title: 'Langkah 3 — Gambaran Papan Pemuka',
              items: [
                'Selepas pengesahan, anda boleh mengakses Papan Pemuka Peniaga (web atau mobile).',
                'Modul termasuk: Produk, Pesanan, Pelanggan, Analitik, Kewangan, dan Tetapan.'
              ]
            }
          }
        },
        paymentSetup: {
          title: 'Persediaan Pemprosesan Pembayaran',
          items: [
            'CariGo bekerjasama dengan penyedia pembayaran yang selamat dan patuh PCI DSS (cth. Stripe atau gerbang Brunei tempatan).',
            'Tambah akaun bank penyelesaian anda: Nama bank, pemegang akaun, nombor akaun, dan muat naik bukti pemilikan.',
            'Pilihan: jalankan pembayaran ujian $0.00 untuk mengesahkan pautan bank.'
          ]
        },
        payoutSchedules: {
          title: 'Jadual Pembayaran Keluar',
          items: [
            'Pelan Core: Bulanan',
            'Pelan Basic: Dua minggu (setiap 2 minggu)',
            'Pelan Pro: Mingguan (atau atas permintaan)',
            'Cuti umum atau kelewatan perbankan mungkin menjejaskan masa. Lihat "Kewangan > Pembayaran Keluar" untuk tarikh pembayaran seterusnya.'
          ]
        },
        fees: {
          title: 'Memahami Yuran CariGo (Struktur Yuran Dijelaskan)',
          platformFees: [
            'Core: 15.0%',
            'Basic: 9.5%',
            'Pro: 6.5%'
          ],
          paymentFee: 'Yuran pemprosesan pembayaran (luaran): **3.5%**',
          totalCosts: [
            'Core ≈ 18.5%',
            'Basic ≈ 13.0%',
            'Pro ≈ 10.0%'
          ],
          subscription: 'Yuran langganan (Basic: $48/bulan; Pro: $90/bulan) ditagih secara berasingan.'
        },
        businessInfo: {
          title: 'Kemas Kini Maklumat Perniagaan',
          items: [
            'Navigasi ke Tetapan > Perniagaan untuk mengedit nama undang-undang, alamat, ID cukai, atau butiran pembayaran keluar.',
            'Perubahan besar (pemilikan, bank, atau pendaftaran) mungkin mencetuskan pengesahan semula untuk pematuhan.'
          ]
        },
        notifications: {
          title: 'Pilihan Pemberitahuan',
          items: [
            'Pergi ke Tetapan > Pemberitahuan: pilih antara e-mel, SMS, atau amaran dalam aplikasi untuk pesanan baru, kemas kini stok, dan pembayaran keluar.',
            'Anda boleh mematikan pemberitahuan promosi tetapi mesti mengekalkan yang operasi diaktifkan.'
          ]
        },
        security: {
          title: 'Menukar Kata Laluan dan Keselamatan',
          items: [
            'Tetapan > Keselamatan: tukar kata laluan, aktifkan 2FA (pengesahan dua faktor), dan urus kunci API (Pelan Pro).',
            'Peringatan Keselamatan: hanya percayai domain CariGo rasmi dan jangan sekali-kali berkongsi kata laluan atau OTP.'
          ]
        },
        closing: {
          title: 'Menutup Akaun Anda',
          items: [
            'Untuk menutup akaun anda, pergi ke Tetapan > Akaun > Tutup Akaun.',
            'Notis undang-undang: rekod transaksi dikekalkan untuk tujuan undang-undang dan perakaunan. Baki tertunggak atau pertikaian mesti diselesaikan sebelum penutupan.'
          ]
        }
      }
    }
  }

  const c = content[language]

  return (
    <ManualLayout prevPath="/manual/getting-started" nextPath="/manual/product-catalog">
      <h1 className="text-2xl font-bold mb-2">{c.title}</h1>
      
      <h2 className="text-xl font-semibold mt-6 mb-2">Overview</h2>
      <p className="text-muted-foreground mb-6">{c.overview}</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Key Objectives</h2>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        {c.objectives.map((objective, index) => (
          <li key={index}>{objective}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">1) {c.sections.accountCreation.title}</h2>
      
      <h3 className="text-lg font-medium mt-4 mb-2">{c.sections.accountCreation.steps.signup.title}:</h3>
      <ul className="list-disc pl-6 mb-4">
        {c.sections.accountCreation.steps.signup.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3 className="text-lg font-medium mt-4 mb-2">{c.sections.accountCreation.steps.verification.title}:</h3>
      <ul className="list-disc pl-6 mb-4">
        {c.sections.accountCreation.steps.verification.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3 className="text-lg font-medium mt-4 mb-2">{c.sections.accountCreation.steps.dashboard.title}:</h3>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.accountCreation.steps.dashboard.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">2) {c.sections.paymentSetup.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.paymentSetup.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">3) {c.sections.payoutSchedules.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.payoutSchedules.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">4) {c.sections.fees.title}</h2>
      <p className="font-medium mb-2">Platform fee (based on plan):</p>
      <ul className="list-disc pl-6 mb-4">
        {c.sections.fees.platformFees.map((fee, index) => (
          <li key={index}>{fee}</li>
        ))}
      </ul>
      <p className="mb-2">{c.sections.fees.paymentFee}</p>
      <p className="font-medium mb-2">Total seller cost estimate (reference):</p>
      <ul className="list-disc pl-6 mb-2">
        {c.sections.fees.totalCosts.map((cost, index) => (
          <li key={index}>{cost}</li>
        ))}
      </ul>
      <p className="mb-6">{c.sections.fees.subscription}</p>

      <h2 className="text-xl font-semibold mb-2">5) {c.sections.businessInfo.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.businessInfo.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">6) {c.sections.notifications.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.notifications.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">7) {c.sections.security.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.security.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">8) {c.sections.closing.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.closing.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </ManualLayout>
  )
}

export default StoreManagementManual