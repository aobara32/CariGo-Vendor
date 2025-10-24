import React from 'react'
import MerchantLayout from '../layouts/MerchantLayout'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { useLanguage } from '../contexts/LanguageContext'
import { Shield, Eye, Lock, Database, UserCheck, AlertTriangle, Cookie, Globe, Users } from 'lucide-react'

const PrivacyPolicy = () => {
  const { language } = useLanguage()

  const content = {
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: December 2024',
      sections: [
        {
          title: 'Information We Collect',
          icon: Database,
          content: [
            'We collect the following categories of information:',
            '• **Account Information:** name, email, phone number, business details, and password.',
            '• **Transaction Information:** payment details (processed securely via third parties), order history, and payout records.',
            '• **Device & Usage Data:** IP address, browser type, access logs, and cookies.',
            '• **Verification Data:** identity documents, business registration, and banking information for KYC/KYB.'
          ]
        },
        {
          title: 'How We Use Your Information',
          icon: Eye,
          content: [
            'We use your data to:',
            '• Operate and maintain the Platform',
            '• Process orders and payments',
            '• Communicate with users and vendors',
            '• Prevent fraud and ensure compliance',
            '• Improve our products and analytics',
            '• Send transactional or promotional emails (with opt-out option)'
          ]
        },
        {
          title: 'Cookies and Tracking',
          icon: Cookie,
          content: [
            'We use cookies and similar technologies for site performance, analytics, and personalization. You may disable cookies through your browser, though some features may be unavailable.'
          ]
        },
        {
          title: 'Data Sharing and Disclosure',
          icon: UserCheck,
          content: [
            'We may share limited data with:',
            '• Payment processors (for payment and payout handling)',
            '• Logistics or delivery partners (for order fulfillment)',
            '• Legal or regulatory authorities (as required by law)',
            '• Service providers bound by confidentiality agreements',
            '',
            'We do not sell personal data to third parties.'
          ]
        },
        {
          title: 'Data Retention',
          icon: Lock,
          content: [
            'We retain data only as long as necessary for the purposes stated above or as required by law. You may request deletion or correction of your data at any time by contacting us.'
          ]
        },
        {
          title: 'Data Security',
          icon: Shield,
          content: [
            'We implement encryption, access control, and audit logs to protect your data. While we strive for industry-standard protection, no system is entirely secure; use the Platform at your own risk.'
          ]
        },
        {
          title: 'International Transfers',
          icon: Globe,
          content: [
            'All data is processed within Brunei Darussalam or other jurisdictions compliant with applicable data protection standards.'
          ]
        },
        {
          title: 'Your Rights',
          icon: Users,
          content: [
            'You have the right to:',
            '• Access and correct your personal data',
            '• Withdraw consent for marketing communications',
            '• Request deletion ("Right to be forgotten")',
            '• Lodge complaints with relevant authorities'
          ]
        },
        {
          title: 'Children\'s Privacy',
          icon: AlertTriangle,
          content: [
            'Our services are not intended for children under 13. We do not knowingly collect data from minors.'
          ]
        },
        {
          title: 'Updates to this Policy',
          icon: AlertTriangle,
          content: [
            'We may update this Policy periodically. Continued use of our Platform constitutes acceptance of the revised version.'
          ]
        }
      ],
      additionalPolicies: {
        refunds: {
          title: 'Refund & Returns Policy',
          content: [
            'All refunds, returns, or exchanges are handled directly between the buyer and the merchant, following the merchant\'s published policy.',
            '',
            'CariGo provides the marketplace infrastructure and payment facilitation only and is not the seller of record.',
            '',
            'However, CariGo may intervene in cases involving fraud, non-delivery, or regulatory violations.',
            '',
            'Refunds (if applicable) are processed back to the original payment method within 7–14 business days after approval.',
            '',
            'Chargeback fees imposed by payment processors may be deducted from the merchant\'s future payouts.',
            '',
            'Contact: support@carigobn.com'
          ]
        },
        cookies: {
          title: 'Cookie Policy',
          content: [
            'We use cookies and similar technologies to enhance user experience, analyze traffic, and personalize content.',
            '',
            'Types of cookies used:',
            '• Essential cookies (site functionality)',
            '• Analytics cookies (usage patterns)',
            '• Preference cookies (language, region)',
            '• Marketing cookies (ads, promotions)',
            '',
            'You can modify your cookie preferences at any time via your browser settings.',
            '',
            'For more details, contact support@carigobn.com.'
          ]
        }
      },
      contact: {
        title: 'Contact Us',
        description: 'For privacy inquiries or data requests:',
        email: 'support@carigobn.com',
        phone: '+673 822 8250',
        address: 'CariGo Privacy Department, Brunei Darussalam'
      }
    },
    ms: {
      title: 'Dasar Privasi',
      lastUpdated: 'Kemaskini terakhir: Disember 2024',
      sections: [
        {
          title: 'Maklumat yang Kami Kumpulkan',
          icon: Database,
          content: [
            'Kami mengumpulkan kategori maklumat berikut:',
            '• **Maklumat Akaun:** nama, e-mel, nombor telefon, butiran perniagaan, dan kata laluan.',
            '• **Maklumat Transaksi:** butiran pembayaran (diproses dengan selamat melalui pihak ketiga), sejarah pesanan, dan rekod pembayaran keluar.',
            '• **Data Peranti & Penggunaan:** alamat IP, jenis pelayar, log akses, dan kuki.',
            '• **Data Pengesahan:** dokumen pengenalan, pendaftaran perniagaan, dan maklumat perbankan untuk KYC/KYB.'
          ]
        },
        {
          title: 'Bagaimana Kami Menggunakan Maklumat Anda',
          icon: Eye,
          content: [
            'Kami menggunakan data anda untuk:',
            '• Mengendalikan dan mengekalkan Platform',
            '• Memproses pesanan dan pembayaran',
            '• Berkomunikasi dengan pengguna dan vendor',
            '• Mencegah penipuan dan memastikan pematuhan',
            '• Memperbaiki produk dan analitik kami',
            '• Menghantar e-mel transaksi atau promosi (dengan pilihan keluar)'
          ]
        },
        {
          title: 'Kuki dan Penjejakan',
          icon: Cookie,
          content: [
            'Kami menggunakan kuki dan teknologi serupa untuk prestasi laman web, analitik, dan personalisasi. Anda boleh mematikan kuki melalui pelayar anda, walaupun sesetengah ciri mungkin tidak tersedia.'
          ]
        },
        {
          title: 'Perkongsian dan Pendedahan Data',
          icon: UserCheck,
          content: [
            'Kami mungkin berkongsi data terhad dengan:',
            '• Pemproses pembayaran (untuk pengendalian pembayaran dan pembayaran keluar)',
            '• Rakan kongsi logistik atau penghantaran (untuk pemenuhan pesanan)',
            '• Pihak berkuasa undang-undang atau kawal selia (seperti yang diperlukan oleh undang-undang)',
            '• Penyedia perkhidmatan yang terikat dengan perjanjian kerahsiaan',
            '',
            'Kami tidak menjual data peribadi kepada pihak ketiga.'
          ]
        },
        {
          title: 'Pengekalan Data',
          icon: Lock,
          content: [
            'Kami mengekalkan data hanya selama yang diperlukan untuk tujuan yang dinyatakan di atas atau seperti yang diperlukan oleh undang-undang. Anda boleh meminta pemadaman atau pembetulan data anda pada bila-bila masa dengan menghubungi kami.'
          ]
        },
        {
          title: 'Keselamatan Data',
          icon: Shield,
          content: [
            'Kami melaksanakan penyulitan, kawalan akses, dan log audit untuk melindungi data anda. Walaupun kami berusaha untuk perlindungan standard industri, tiada sistem yang benar-benar selamat; gunakan Platform atas risiko sendiri.'
          ]
        },
        {
          title: 'Pemindahan Antarabangsa',
          icon: Globe,
          content: [
            'Semua data diproses dalam Brunei Darussalam atau bidang kuasa lain yang mematuhi standard perlindungan data yang berkenaan.'
          ]
        },
        {
          title: 'Hak Anda',
          icon: Users,
          content: [
            'Anda mempunyai hak untuk:',
            '• Mengakses dan membetulkan data peribadi anda',
            '• Menarik balik persetujuan untuk komunikasi pemasaran',
            '• Meminta pemadaman ("Hak untuk dilupakan")',
            '• Mengemukakan aduan kepada pihak berkuasa yang berkenaan'
          ]
        },
        {
          title: 'Privasi Kanak-kanak',
          icon: AlertTriangle,
          content: [
            'Perkhidmatan kami tidak bertujuan untuk kanak-kanak di bawah 13 tahun. Kami tidak sengaja mengumpulkan data daripada kanak-kanak di bawah umur.'
          ]
        },
        {
          title: 'Kemas Kini Dasar Ini',
          icon: AlertTriangle,
          content: [
            'Kami mungkin mengemas kini Dasar ini secara berkala. Penggunaan berterusan Platform kami merupakan penerimaan versi yang disemak semula.'
          ]
        }
      ],
      additionalPolicies: {
        refunds: {
          title: 'Dasar Bayaran Balik & Pemulangan',
          content: [
            'Semua bayaran balik, pemulangan, atau pertukaran dikendalikan secara langsung antara pembeli dan peniaga, mengikut polisi yang diterbitkan oleh peniaga.',
            '',
            'CariGo menyediakan infrastruktur pasaran dan fasilitasi pembayaran sahaja dan bukan penjual rekod.',
            '',
            'Walau bagaimanapun, CariGo mungkin campur tangan dalam kes yang melibatkan penipuan, tidak dihantar, atau pelanggaran kawal selia.',
            '',
            'Bayaran balik (jika berkenaan) diproses kembali kepada kaedah pembayaran asal dalam masa 7–14 hari bekerja selepas kelulusan.',
            '',
            'Yuran chargeback yang dikenakan oleh pemproses pembayaran mungkin dipotong daripada pembayaran keluar peniaga masa depan.',
            '',
            'Hubungi: support@carigobn.com'
          ]
        },
        cookies: {
          title: 'Dasar Kuki',
          content: [
            'Kami menggunakan kuki dan teknologi serupa untuk meningkatkan pengalaman pengguna, menganalisis trafik, dan mempersonalisasikan kandungan.',
            '',
            'Jenis kuki yang digunakan:',
            '• Kuki penting (fungsi laman web)',
            '• Kuki analitik (corak penggunaan)',
            '• Kuki keutamaan (bahasa, wilayah)',
            '• Kuki pemasaran (iklan, promosi)',
            '',
            'Anda boleh mengubah suai keutamaan kuki anda pada bila-bila masa melalui tetapan pelayar anda.',
            '',
            'Untuk maklumat lanjut, hubungi support@carigobn.com.'
          ]
        }
      },
      contact: {
        title: 'Hubungi Kami',
        description: 'Untuk pertanyaan privasi atau permintaan data:',
        email: 'support@carigobn.com',
        phone: '+673 822 8250',
        address: 'Jabatan Privasi CariGo, Brunei Darussalam'
      }
    }
  }

  const c = content[language]

  return (
    <MerchantLayout>
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center bg-gradient-to-br from-primary via-primary to-primary/90 text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{c.title}</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">{c.lastUpdated}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {c.sections.map((section, index) => {
              const Icon = section.icon
              return (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Icon className="w-6 h-6 text-primary" />
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          {item === '' ? (
                            <div className="h-3" />
                          ) : (
                            <>
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                              <span className="text-muted-foreground">{item}</span>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}

            {/* Additional Policies */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">{c.additionalPolicies.refunds.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {c.additionalPolicies.refunds.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      {item === '' ? (
                        <div className="h-3" />
                      ) : (
                        <>
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0" />
                          <span className="text-blue-700">{item}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">{c.additionalPolicies.cookies.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {c.additionalPolicies.cookies.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      {item === '' ? (
                        <div className="h-3" />
                      ) : (
                        <>
                          <div className="w-2 h-2 bg-green-600 rounded-full mt-2 shrink-0" />
                          <span className="text-green-700">{item}</span>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Contact Section */}
            <Card className="bg-muted/30">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-primary" />
                  {c.contact.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{c.contact.description}</p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> <a href={`mailto:${c.contact.email}`} className="text-primary hover:underline">{c.contact.email}</a></p>
                  <p><strong>Phone:</strong> <a href={`tel:${c.contact.phone}`} className="text-primary hover:underline">{c.contact.phone}</a></p>
                  <p><strong>Address:</strong> {c.contact.address}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </MerchantLayout>
  )
}

export default PrivacyPolicy