import React from 'react'
import ManualLayout from './ManualLayout'
import { useLanguage } from '../../contexts/LanguageContext'

const AccountSettingsManual = () => {
  const { language } = useLanguage()
  
  const content = {
    en: {
      title: 'Account Settings — Vendor Manual (CariGo)',
      sections: {
        profile: {
          title: 'Profile Management',
          items: [
            'Update business information: legal name, address, tax ID',
            'Modify contact details: email, phone, WhatsApp',
            'Upload business registration documents'
          ]
        },
        security: {
          title: 'Security Settings',
          items: [
            'Change password (12+ characters recommended)',
            'Enable two-factor authentication (2FA)',
            'Manage API keys (Pro plan only)',
            'Review login history and active sessions'
          ]
        },
        notifications: {
          title: 'Notification Preferences',
          items: [
            'Configure email, SMS, and in-app notifications',
            'Set alerts for new orders, low stock, and payouts',
            'Manage promotional vs operational notifications'
          ]
        },
        billing: {
          title: 'Billing & Subscription',
          items: [
            'View current plan and subscription status',
            'Upgrade or downgrade plan',
            'Manage payment methods and billing information',
            'Download invoices and transaction history'
          ]
        },
        bank: {
          title: 'Bank Account Settings',
          items: [
            'Add or update settlement bank account',
            'Upload bank account proof',
            'Test payout functionality',
            'View payout history and schedules'
          ]
        },
        closure: {
          title: 'Account Closure',
          items: [
            'Request account closure through Settings > Account',
            'Settle outstanding balances and disputes',
            'Download final transaction records',
            'Note: Transaction records retained for legal compliance'
          ]
        }
      }
    },
    ms: {
      title: 'Tetapan Akaun — Manual Peniaga (CariGo)',
      sections: {
        profile: {
          title: 'Pengurusan Profil',
          items: [
            'Kemas kini maklumat perniagaan: nama undang-undang, alamat, ID cukai',
            'Ubah butiran hubungan: e-mel, telefon, WhatsApp',
            'Muat naik dokumen pendaftaran perniagaan'
          ]
        },
        security: {
          title: 'Tetapan Keselamatan',
          items: [
            'Tukar kata laluan (12+ aksara disyorkan)',
            'Aktifkan pengesahan dua faktor (2FA)',
            'Urus kunci API (Pelan Pro sahaja)',
            'Semak sejarah log masuk dan sesi aktif'
          ]
        },
        notifications: {
          title: 'Keutamaan Pemberitahuan',
          items: [
            'Konfigurasi pemberitahuan e-mel, SMS, dan dalam aplikasi',
            'Tetapkan amaran untuk pesanan baru, stok rendah, dan pembayaran keluar',
            'Urus pemberitahuan promosi vs operasi'
          ]
        },
        billing: {
          title: 'Pengebilan & Langganan',
          items: [
            'Lihat pelan semasa dan status langganan',
            'Naik taraf atau turun taraf pelan',
            'Urus kaedah pembayaran dan maklumat pengebilan',
            'Muat turun invois dan sejarah transaksi'
          ]
        },
        bank: {
          title: 'Tetapan Akaun Bank',
          items: [
            'Tambah atau kemas kini akaun bank penyelesaian',
            'Muat naik bukti akaun bank',
            'Uji fungsi pembayaran keluar',
            'Lihat sejarah dan jadual pembayaran keluar'
          ]
        },
        closure: {
          title: 'Penutupan Akaun',
          items: [
            'Minta penutupan akaun melalui Tetapan > Akaun',
            'Selesaikan baki tertunggak dan pertikaian',
            'Muat turun rekod transaksi akhir',
            'Nota: Rekod transaksi dikekalkan untuk pematuhan undang-undang'
          ]
        }
      }
    }
  }

  const c = content[language]

  return (
    <ManualLayout prevPath="/manual/payments-payouts" nextPath="/manual/getting-started">
      <h1 className="text-2xl font-bold mb-2">{c.title}</h1>

      <h2 className="text-xl font-semibold mt-6 mb-2">1) {c.sections.profile.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.profile.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">2) {c.sections.security.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.security.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">3) {c.sections.notifications.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.notifications.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">4) {c.sections.billing.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.billing.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">5) {c.sections.bank.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.bank.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">6) {c.sections.closure.title}</h2>
      <ul className="list-disc pl-6 mb-6">
        {c.sections.closure.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </ManualLayout>
  )
}

export default AccountSettingsManual