import React from 'react'
import ManualLayout from './ManualLayout'
import { useLanguage } from '@/contexts/LanguageContext'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, Clock, AlertCircle, ArrowRight } from 'lucide-react'

const GettingStartedManual = () => {
  const { language } = useLanguage()
  
  const content = {
    en: {
      title: 'Getting Started',
      subtitle: 'Complete setup guide for new merchants',
      overview: 'Welcome to CariGo! This guide will help you set up your merchant account and start selling in just a few steps.',
      checklist: [
        { text: 'Create your merchant account', completed: false },
        { text: 'Complete verification (KYC/KYB)', completed: false },
        { text: 'Set up payment method and bank details', completed: false },
        { text: 'Add your first product', completed: false },
        { text: 'Configure shipping options', completed: false },
        { text: 'Review fees (3.5% payment fee included)', completed: false },
        { text: 'Make a test order and verify payout', completed: false }
      ],
      requirements: {
        title: 'Requirements',
        items: [
          'Valid business registration',
          'Brunei phone number',
          'Email address',
          'Bank account details',
          'Product photos (min 3 per product)',
          'Product descriptions'
        ]
      },
      timeline: {
        title: 'Timeline',
        steps: [
          { step: 'Account Creation', duration: '10 minutes', description: 'Fill out the application form' },
          { step: 'Verification', duration: '24-48 hours', description: 'KYC/KYB process' },
          { step: 'Store Setup', duration: '2-4 hours', description: 'Configure store and add products' },
          { step: 'First Sale', duration: 'Immediate', description: 'Start receiving orders' }
        ]
      }
    },
    ms: {
      title: 'Mula',
      subtitle: 'Panduan penyediaan lengkap untuk peniaga baru',
      overview: 'Selamat datang ke CariGo! Panduan ini akan membantu anda menyediakan akaun peniaga dan mula menjual dalam beberapa langkah sahaja.',
      checklist: [
        { text: 'Cipta akaun peniaga anda', completed: false },
        { text: 'Lengkapkan pengesahan (KYC/KYB)', completed: false },
        { text: 'Sediakan kaedah pembayaran dan butiran bank', completed: false },
        { text: 'Tambah produk pertama anda', completed: false },
        { text: 'Konfigur pilihan penghantaran', completed: false },
        { text: 'Semak yuran (termasuk yuran pembayaran 3.5%)', completed: false },
        { text: 'Buat pesanan ujian dan sahkan pembayaran keluar', completed: false }
      ],
      requirements: {
        title: 'Keperluan',
        items: [
          'Pendaftaran perniagaan yang sah',
          'Nombor telefon Brunei',
          'Alamat e-mel',
          'Butiran akaun bank',
          'Foto produk (min 3 setiap produk)',
          'Penerangan produk'
        ]
      },
      timeline: {
        title: 'Jadual',
        steps: [
          { step: 'Penciptaan Akaun', duration: '10 minit', description: 'Isi borang permohonan' },
          { step: 'Pengesahan', duration: '24-48 jam', description: 'Proses KYC/KYB' },
          { step: 'Penyediaan Kedai', duration: '2-4 jam', description: 'Konfigur kedai dan tambah produk' },
          { step: 'Jualan Pertama', duration: 'Segera', description: 'Mula menerima pesanan' }
        ]
      }
    }
  }
  
  const c = content[language]

  return (
    <ManualLayout 
      nextPath="/manual/store-management"
      nextTitle={{ en: 'Store Management', ms: 'Pengurusan Kedai' }}
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="border-b border-slate-200 pb-6">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary" className="px-3 py-1">
              {language === 'en' ? 'Basics' : 'Asas'}
            </Badge>
            <Badge variant="outline" className="px-3 py-1">
              {language === 'en' ? 'Required' : 'Diperlukan'}
            </Badge>
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">{c.title}</h1>
          <p className="text-lg text-slate-600">{c.subtitle}</p>
        </div>

        {/* Overview */}
        <div id="overview">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">{language === 'en' ? 'Overview' : 'Gambaran Keseluruhan'}</h2>
          <Card className="border-slate-200">
            <CardContent className="p-6">
              <p className="text-slate-700 leading-relaxed">{c.overview}</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Checklist */}
        <div id="checklist">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">{language === 'en' ? 'Quick Checklist' : 'Senarai Semak Pantas'}</h2>
          <Card className="border-slate-200">
            <CardContent className="p-6">
              <div className="space-y-3">
                {c.checklist.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50">
                    <div className="w-6 h-6 rounded-full border-2 border-slate-300 flex items-center justify-center">
                      <span className="text-sm font-medium text-slate-600">{index + 1}</span>
                    </div>
                    <span className="text-slate-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Requirements */}
        <div id="requirements">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">{c.requirements.title}</h2>
          <Card className="border-slate-200">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {c.requirements.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <div id="timeline">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">{c.timeline.title}</h2>
          <Card className="border-slate-200">
            <CardContent className="p-6">
              <div className="space-y-4">
                {c.timeline.steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-slate-50">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-slate-900">{step.step}</h3>
                        <Badge variant="outline" className="text-xs">
                          <Clock className="w-3 h-3 mr-1" />
                          {step.duration}
                        </Badge>
                      </div>
                      <p className="text-slate-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Next Steps */}
        <div id="next-steps">
          <h2 className="text-2xl font-semibold text-slate-900 mb-4">{language === 'en' ? 'Next Steps' : 'Langkah Seterusnya'}</h2>
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <ArrowRight className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    {language === 'en' ? 'Ready to set up your store?' : 'Bersedia untuk menyediakan kedai anda?'}
                  </h3>
                  <p className="text-slate-600 mb-4">
                    {language === 'en' 
                      ? 'Once you\'ve completed the initial setup, move on to configuring your store settings and adding your first products.'
                      : 'Setelah anda melengkapkan penyediaan awal, teruskan dengan mengkonfigur tetapan kedai dan menambah produk pertama anda.'
                    }
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    <span>{language === 'en' ? 'Continue to Store Management' : 'Teruskan ke Pengurusan Kedai'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </ManualLayout>
  )
}

export default GettingStartedManual


