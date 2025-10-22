import React from 'react'
import ManualLayout from './ManualLayout'
import { useLanguage } from '../../contexts/LanguageContext'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'
import { CheckCircle2, Clock, AlertCircle, ArrowRight, CreditCard, Banknote, TrendingUp, Calendar, FileText, DollarSign } from 'lucide-react'

const PaymentsPayoutsManual = () => {
  const { language } = useLanguage()
  
  const content = {
    en: {
      title: 'Payments & Payouts',
      subtitle: 'Manage your finances and payment processing',
      overview: 'Learn how to set up payment processing, understand payout schedules, and manage your financial transactions on CariGo.',
      keyFeatures: [
        'Secure payment processing setup',
        'Flexible payout schedules (weekly/monthly)',
        'Transparent fee structure',
        'Real-time transaction monitoring',
        'Automated tax reporting',
        'Financial statements and reports'
      ],
      setup: {
        title: 'Payment Processing Setup',
        steps: [
          {
            step: 'Bank Account Verification',
            description: 'Add and verify your bank account details for payouts',
            details: [
              'Navigate to Settings > Payments',
              'Enter your bank account information',
              'Upload bank statement for verification',
              'Wait for verification (24-48 hours)'
            ]
          },
          {
            step: 'Payment Methods Configuration',
            description: 'Set up accepted payment methods for customers',
            details: [
              'Enable credit/debit card payments',
              'Configure bank transfer options',
              'Set up mobile payment integrations',
              'Test payment processing'
            ]
          },
          {
            step: 'Payout Schedule Setup',
            description: 'Choose your preferred payout frequency',
            details: [
              'Select weekly or monthly payouts',
              'Set payout day (e.g., every Monday)',
              'Configure minimum payout threshold',
              'Review payout terms and conditions'
            ]
          }
        ]
      },
      fees: {
        title: 'Fee Structure',
        sections: [
          {
            title: 'Transaction Fees',
            items: [
              { name: 'Payment Processing Fee', fee: '3.5%', description: 'Per successful transaction' },
              { name: 'Platform Commission', fee: '5-15%', description: 'Varies by subscription plan' },
              { name: 'Bank Transfer Fee', fee: 'B$2.00', description: 'Per payout transaction' }
            ]
          },
          {
            title: 'Additional Fees',
            items: [
              { name: 'Chargeback Fee', fee: 'B$25.00', description: 'If customer disputes payment' },
              { name: 'Refund Processing', fee: 'B$5.00', description: 'Administrative fee for refunds' },
              { name: 'Currency Conversion', fee: '2.5%', description: 'For international transactions' }
            ]
          }
        ]
      },
      payouts: {
        title: 'Payout Management',
        schedule: {
          weekly: {
            title: 'Weekly Payouts',
            description: 'Receive payments every week',
            details: [
              'Payouts processed every Monday',
              'Minimum threshold: B$50',
              'Processing time: 1-2 business days',
              'Available for all subscription plans'
            ]
          },
          monthly: {
            title: 'Monthly Payouts',
            description: 'Receive payments once per month',
            details: [
              'Payouts processed on the 1st of each month',
              'Minimum threshold: B$100',
              'Processing time: 3-5 business days',
              'Lower fees compared to weekly payouts'
            ]
          }
        }
      },
      reporting: {
        title: 'Financial Reporting',
        features: [
          {
            title: 'Transaction Reports',
            description: 'Detailed breakdown of all transactions',
            items: ['Sales by date range', 'Payment method analysis', 'Refund tracking', 'Chargeback reports']
          },
          {
            title: 'Tax Reports',
            description: 'Automated tax calculation and reporting',
            items: ['Monthly tax summaries', 'Annual tax reports', 'Export for accounting software', 'GST/VAT calculations']
          },
          {
            title: 'Payout Reports',
            description: 'Complete payout history and tracking',
            items: ['Payout schedule tracking', 'Bank transfer confirmations', 'Fee breakdowns', 'Payment status updates']
          }
        ]
      },
      troubleshooting: {
        title: 'Common Issues',
        issues: [
          {
            problem: 'Payout not received',
            solution: 'Check bank account verification status and payout schedule. Contact support if issue persists.'
          },
          {
            problem: 'High transaction fees',
            solution: 'Review your subscription plan and consider upgrading for lower commission rates.'
          },
          {
            problem: 'Payment processing errors',
            solution: 'Verify payment method configuration and check for any system maintenance notifications.'
          },
          {
            problem: 'Tax report discrepancies',
            solution: 'Ensure all transactions are properly categorized and contact accounting support for assistance.'
          }
        ]
      }
    },
    ms: {
      title: 'Pembayaran & Pembayaran',
      subtitle: 'Urus kewangan dan pemprosesan pembayaran',
      overview: 'Pelajari cara menyediakan pemprosesan pembayaran, memahami jadual pembayaran, dan mengurus transaksi kewangan anda di CariGo.',
      keyFeatures: [
        'Penyediaan pemprosesan pembayaran yang selamat',
        'Jadual pembayaran yang fleksibel (mingguan/bulanan)',
        'Struktur yuran yang telus',
        'Pemantauan transaksi masa nyata',
        'Pelaporan cukai automatik',
        'Penyata dan laporan kewangan'
      ],
      setup: {
        title: 'Penyediaan Pemprosesan Pembayaran',
        steps: [
          {
            step: 'Pengesahan Akaun Bank',
            description: 'Tambah dan sahkan butiran akaun bank anda untuk pembayaran',
            details: [
              'Navigasi ke Tetapan > Pembayaran',
              'Masukkan maklumat akaun bank anda',
              'Muat naik penyata bank untuk pengesahan',
              'Tunggu pengesahan (24-48 jam)'
            ]
          },
          {
            step: 'Konfigurasi Kaedah Pembayaran',
            description: 'Sediakan kaedah pembayaran yang diterima untuk pelanggan',
            details: [
              'Aktifkan pembayaran kad kredit/debit',
              'Konfigur pilihan pemindahan bank',
              'Sediakan integrasi pembayaran mudah alih',
              'Uji pemprosesan pembayaran'
            ]
          },
          {
            step: 'Penyediaan Jadual Pembayaran',
            description: 'Pilih kekerapan pembayaran yang anda suka',
            details: [
              'Pilih pembayaran mingguan atau bulanan',
              'Tetapkan hari pembayaran (contoh, setiap Isnin)',
              'Konfigur ambang pembayaran minimum',
              'Semak terma dan syarat pembayaran'
            ]
          }
        ]
      },
      fees: {
        title: 'Struktur Yuran',
        sections: [
          {
            title: 'Yuran Transaksi',
            items: [
              { name: 'Yuran Pemprosesan Pembayaran', fee: '3.5%', description: 'Per transaksi berjaya' },
              { name: 'Komisen Platform', fee: '5-15%', description: 'Berbeza mengikut pelan langganan' },
              { name: 'Yuran Pemindahan Bank', fee: 'B$2.00', description: 'Per transaksi pembayaran' }
            ]
          },
          {
            title: 'Yuran Tambahan',
            items: [
              { name: 'Yuran Chargeback', fee: 'B$25.00', description: 'Jika pelanggan mempertikaikan pembayaran' },
              { name: 'Pemprosesan Bayaran Balik', fee: 'B$5.00', description: 'Yuran pentadbiran untuk bayaran balik' },
              { name: 'Penukaran Mata Wang', fee: '2.5%', description: 'Untuk transaksi antarabangsa' }
            ]
          }
        ]
      },
      payouts: {
        title: 'Pengurusan Pembayaran',
        schedule: {
          weekly: {
            title: 'Pembayaran Mingguan',
            description: 'Terima pembayaran setiap minggu',
            details: [
              'Pembayaran diproses setiap Isnin',
              'Ambang minimum: B$50',
              'Masa pemprosesan: 1-2 hari perniagaan',
              'Tersedia untuk semua pelan langganan'
            ]
          },
          monthly: {
            title: 'Pembayaran Bulanan',
            description: 'Terima pembayaran sekali sebulan',
            details: [
              'Pembayaran diproses pada hari pertama setiap bulan',
              'Ambang minimum: B$100',
              'Masa pemprosesan: 3-5 hari perniagaan',
              'Yuran lebih rendah berbanding pembayaran mingguan'
            ]
          }
        }
      },
      reporting: {
        title: 'Pelaporan Kewangan',
        features: [
          {
            title: 'Laporan Transaksi',
            description: 'Pecahan terperinci semua transaksi',
            items: ['Jualan mengikut julat tarikh', 'Analisis kaedah pembayaran', 'Penjejakan bayaran balik', 'Laporan chargeback']
          },
          {
            title: 'Laporan Cukai',
            description: 'Pengiraan dan pelaporan cukai automatik',
            items: ['Ringkasan cukai bulanan', 'Laporan cukai tahunan', 'Eksport untuk perisian perakaunan', 'Pengiraan GST/VAT']
          },
          {
            title: 'Laporan Pembayaran',
            description: 'Sejarah pembayaran lengkap dan penjejakan',
            items: ['Penjejakan jadual pembayaran', 'Pengesahan pemindahan bank', 'Pecahan yuran', 'Kemas kini status pembayaran']
          }
        ]
      },
      troubleshooting: {
        title: 'Isu Biasa',
        issues: [
          {
            problem: 'Pembayaran tidak diterima',
            solution: 'Semak status pengesahan akaun bank dan jadual pembayaran. Hubungi sokongan jika isu berterusan.'
          },
          {
            problem: 'Yuran transaksi tinggi',
            solution: 'Semak pelan langganan anda dan pertimbangkan untuk menaik taraf untuk kadar komisen yang lebih rendah.'
          },
          {
            problem: 'Ralat pemprosesan pembayaran',
            solution: 'Sahkan konfigurasi kaedah pembayaran dan semak sebarang notifikasi penyelenggaraan sistem.'
          },
          {
            problem: 'Perbezaan laporan cukai',
            solution: 'Pastikan semua transaksi dikategorikan dengan betul dan hubungi sokongan perakaunan untuk bantuan.'
          }
        ]
      }
    }
  }

  const c = content[language]

  return (
    <ManualLayout
      prevPath="/manual/analytics-reporting"
      prevTitle={{ en: 'Analytics & Reporting', ms: 'Analitik & Laporan' }}
      nextPath="/manual/account-settings"
      nextTitle={{ en: 'Account Settings', ms: 'Tetapan Akaun' }}
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{c.title}</h1>
          <p className="text-xl text-muted-foreground mb-8">{c.subtitle}</p>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">{c.overview}</p>
        </div>

        {/* Key Features */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-primary" />
              {language === 'en' ? 'Key Features' : 'Ciri Utama'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {c.keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Setup Process */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="w-6 h-6 text-primary" />
              {c.setup.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {c.setup.steps.map((step, index) => (
              <div key={index} className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">{step.step}</h3>
                <p className="text-muted-foreground mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Fee Structure */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="w-6 h-6 text-primary" />
              {c.fees.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {c.fees.sections.map((section, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">{item.name}</h4>
                        <Badge variant="secondary">{item.fee}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Payout Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Banknote className="w-6 h-6 text-primary" />
              {c.payouts.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-3">{c.payouts.schedule.weekly.title}</h3>
                <p className="text-muted-foreground mb-4">{c.payouts.schedule.weekly.description}</p>
                <ul className="space-y-2">
                  {c.payouts.schedule.weekly.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-semibold mb-3">{c.payouts.schedule.monthly.title}</h3>
                <p className="text-muted-foreground mb-4">{c.payouts.schedule.monthly.description}</p>
                <ul className="space-y-2">
                  {c.payouts.schedule.monthly.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 shrink-0" />
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Financial Reporting */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-6 h-6 text-primary" />
              {c.reporting.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {c.reporting.features.map((feature, index) => (
                <div key={index} className="p-6 border rounded-lg">
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Troubleshooting */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-orange-500" />
              {c.troubleshooting.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {c.troubleshooting.issues.map((issue, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">{issue.problem}</h4>
                  <p className="text-sm text-muted-foreground">{issue.solution}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </ManualLayout>
  )
}

export default PaymentsPayoutsManual
