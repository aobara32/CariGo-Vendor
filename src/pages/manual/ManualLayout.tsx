import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../../contexts/LanguageContext'
import { supabaseService, VendorInquiryData } from '../../services/supabaseService'
import { apiService } from '../../services/apiService'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Textarea } from '../../components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { Badge } from '../../components/ui/badge'
import { 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  FileText, 
  Download,
  MessageCircle,
  Mail,
  Send,
  Clock,
  CheckCircle2
} from 'lucide-react'
import MerchantLayout from '../../layouts/MerchantLayout'

type ManualNavItem = {
  key: string
  path: string
  title: { en: string; ms: string }
  description?: { en: string; ms: string }
  category?: string
  isPro?: boolean
}

export const manualNavItems: ManualNavItem[] = [
  { 
    key: 'getting-started', 
    path: '/manual/getting-started', 
    title: { en: 'Getting Started', ms: 'Mula' },
    description: { en: 'Complete setup guide', ms: 'Panduan penyediaan lengkap' },
    category: 'basics'
  },
  { 
    key: 'store-management', 
    path: '/manual/store-management', 
    title: { en: 'Store Management', ms: 'Pengurusan Kedai' },
    description: { en: 'Manage your store settings', ms: 'Urus tetapan kedai anda' },
    category: 'management'
  },
  { 
    key: 'product-catalog', 
    path: '/manual/product-catalog', 
    title: { en: 'Product Catalog', ms: 'Katalog Produk' },
    description: { en: 'Add and manage products', ms: 'Tambah dan urus produk' },
    category: 'management'
  },
  { 
    key: 'order-processing', 
    path: '/manual/order-processing', 
    title: { en: 'Order Processing', ms: 'Pemprosesan Pesanan' },
    description: { en: 'Handle orders and fulfillment', ms: 'Urus pesanan dan penghantaran' },
    category: 'operations'
  },
  { 
    key: 'customer-management', 
    path: '/manual/customer-management', 
    title: { en: 'Customer Management', ms: 'Pengurusan Pelanggan' },
    description: { en: 'Manage customer relationships', ms: 'Urus hubungan pelanggan' },
    category: 'management'
  },
  { 
    key: 'analytics-reporting', 
    path: '/manual/analytics-reporting', 
    title: { en: 'Analytics & Reporting', ms: 'Analitik & Laporan' },
    description: { en: 'Track performance and sales', ms: 'Pantau prestasi dan jualan' },
    category: 'analytics'
  },
  { 
    key: 'authentication', 
    path: '/manual/authentication', 
    title: { en: 'Authentication', ms: 'Pengesahan' },
    description: { en: 'Account security and login', ms: 'Keselamatan akaun dan log masuk' },
    category: 'security'
  },
  { 
    key: 'product-api', 
    path: '/manual/product-api', 
    title: { en: 'Product API', ms: 'API Produk' },
    description: { en: 'Integrate with external systems', ms: 'Integrasi dengan sistem luaran' },
    category: 'api',
    isPro: true
  },
  { 
    key: 'order-api', 
    path: '/manual/order-api', 
    title: { en: 'Order API', ms: 'API Pesanan' },
    description: { en: 'Automate order processing', ms: 'Automasi pemprosesan pesanan' },
    category: 'api',
    isPro: true
  },
  { 
    key: 'webhooks', 
    path: '/manual/webhooks', 
    title: { en: 'Webhooks', ms: 'Webhook' },
    description: { en: 'Real-time notifications', ms: 'Notifikasi masa nyata' },
    category: 'api',
    isPro: true
  },
  { 
    key: 'seller-agreement', 
    path: '/manual/seller-agreement', 
    title: { en: 'Seller Agreement', ms: 'Perjanjian Penjual' },
    description: { en: 'Terms and conditions', ms: 'Terma dan syarat' },
    category: 'legal'
  },
  { 
    key: 'product-guidelines', 
    path: '/manual/product-guidelines', 
    title: { en: 'Product Guidelines', ms: 'Garis Panduan Produk' },
    description: { en: 'Product listing standards', ms: 'Piawaian penyenaraian produk' },
    category: 'guidelines'
  },
  { 
    key: 'shipping-policies', 
    path: '/manual/shipping-policies', 
    title: { en: 'Shipping Policies', ms: 'Dasar Penghantaran' },
    description: { en: 'Shipping rules and rates', ms: 'Peraturan dan kadar penghantaran' },
    category: 'policies'
  },
  { 
    key: 'return-policies', 
    path: '/manual/return-policies', 
    title: { en: 'Return Policies', ms: 'Dasar Pemulangan' },
    description: { en: 'Return and refund procedures', ms: 'Prosedur pemulangan dan bayaran balik' },
    category: 'policies'
  },
  { 
    key: 'payments-payouts', 
    path: '/manual/payments-payouts', 
    title: { en: 'Payments & Payouts', ms: 'Pembayaran & Pembayaran' },
    description: { en: 'Manage your finances', ms: 'Urus kewangan anda' },
    category: 'finance'
  },
  { 
    key: 'account-settings', 
    path: '/manual/account-settings', 
    title: { en: 'Account Settings', ms: 'Tetapan Akaun' },
    description: { en: 'Manage your account', ms: 'Urus akaun anda' },
    category: 'management'
  },
]

const ContactForm = () => {
  const { language } = useLanguage()
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      return
    }

    try {
      setIsSubmitting(true)

      const inquiryData: VendorInquiryData = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      }

      // Save to Supabase database
      const supabaseResult = await supabaseService.saveVendorInquiry(inquiryData)
      
      if (supabaseResult.success) {
        console.log('Inquiry saved to Supabase successfully')
      } else {
        console.error('Failed to save to Supabase:', supabaseResult.error)
      }

      // Also send via backend API for email confirmation
      try {
        await apiService.submitContactForm({
          name: formData.name,
          email: formData.email,
          phone: '',
          subject: formData.subject,
          message: formData.message
        })
        console.log('Contact form submitted via API successfully')
      } catch (apiError) {
        console.error('Failed to submit via API:', apiError)
      }

      setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })

    } catch (error) {
      console.error('Error submitting contact form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="sticky top-6">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <MessageCircle className="w-5 h-5 text-primary" />
            {language === 'en' ? 'Message Sent!' : 'Mesej Dihantar!'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <p className="text-sm text-muted-foreground">
              {language === 'en' ? 'We\'ll get back to you within 24 hours' : 'Kami akan membalas dalam 24 jam'}
            </p>
          </div>
          <Button 
            className="w-full h-10" 
            variant="outline"
            onClick={() => setIsSubmitted(false)}
          >
            {language === 'en' ? 'Send Another Message' : 'Hantar Mesej Lain'}
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="sticky top-6">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-lg">
          <MessageCircle className="w-5 h-5 text-primary" />
          {language === 'en' ? 'Need Help?' : 'Perlu Bantuan?'}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input 
            placeholder={language === 'en' ? 'Your name' : 'Nama anda'} 
            className="h-10"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <Input 
            placeholder={language === 'en' ? 'Your email' : 'Emel anda'} 
            className="h-10"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <Input 
            placeholder={language === 'en' ? 'Subject' : 'Subjek'} 
            className="h-10"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            required
          />
          <Textarea 
            placeholder={language === 'en' ? 'How can we help?' : 'Bagaimana kami boleh bantu?'} 
            rows={4} 
            className="resize-none"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
          <Button 
            type="submit" 
            className="w-full h-10" 
            disabled={isSubmitting}
          >
            <Send className="w-4 h-4 mr-2" />
            {isSubmitting 
              ? (language === 'en' ? 'Sending...' : 'Menghantar...')
              : (language === 'en' ? 'Send Message' : 'Hantar Mesej')
            }
          </Button>
        </form>
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {language === 'en' ? 'We\'ll get back to you within 24 hours' : 'Kami akan membalas dalam 24 jam'}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

const ManualLayout = ({
  children,
  prevPath,
  nextPath,
  prevTitle,
  nextTitle,
}: {
  children: React.ReactNode
  prevPath?: string
  nextPath?: string
  prevTitle?: { en: string; ms: string }
  nextTitle?: { en: string; ms: string }
}) => {
  const { language } = useLanguage()
  const location = useLocation()
  
  // Get current page info
  const currentItem = manualNavItems.find(item => item.path === location.pathname)
  
  // Group items by category
  const groupedItems = manualNavItems.reduce((acc, item) => {
    const category = item.category || 'other'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(item)
    return acc
  }, {} as Record<string, ManualNavItem[]>)
  
  const categoryLabels = {
    basics: { en: 'Getting Started', ms: 'Mula' },
    management: { en: 'Store Management', ms: 'Pengurusan Kedai' },
    operations: { en: 'Operations', ms: 'Operasi' },
    analytics: { en: 'Analytics', ms: 'Analitik' },
    security: { en: 'Security', ms: 'Keselamatan' },
    api: { en: 'API & Integration', ms: 'API & Integrasi' },
    legal: { en: 'Legal', ms: 'Undang-undang' },
    guidelines: { en: 'Guidelines', ms: 'Garis Panduan' },
    policies: { en: 'Policies', ms: 'Dasar' },
    finance: { en: 'Finance', ms: 'Kewangan' },
    other: { en: 'Other', ms: 'Lain-lain' }
  }

  // Helper functions for page-specific content
  const getPageKeyPoints = (pathname: string, lang: string) => {
    const keyPoints: Record<string, { en: string[]; ms: string[] }> = {
      '/manual/getting-started': {
        en: [
          'Complete account setup process',
          'Understand verification requirements',
          'Learn about fees and payment structure',
          'Set up your first product listing'
        ],
        ms: [
          'Proses penyediaan akaun lengkap',
          'Memahami keperluan pengesahan',
          'Belajar tentang yuran dan struktur pembayaran',
          'Sediakan penyenaraian produk pertama'
        ]
      },
      '/manual/store-management': {
        en: [
          'Configure store settings and branding',
          'Manage store policies and information',
          'Set up payment and shipping methods',
          'Monitor store performance metrics'
        ],
        ms: [
          'Konfigur tetapan kedai dan jenama',
          'Urus dasar kedai dan maklumat',
          'Sediakan kaedah pembayaran dan penghantaran',
          'Pantau metrik prestasi kedai'
        ]
      },
      '/manual/product-catalog': {
        en: [
          'Add and manage product listings',
          'Upload product images and descriptions',
          'Set pricing and inventory levels',
          'Organize products with categories and tags'
        ],
        ms: [
          'Tambah dan urus penyenaraian produk',
          'Muat naik gambar dan penerangan produk',
          'Tetapkan harga dan tahap inventori',
          'Susun produk dengan kategori dan tag'
        ]
      },
      '/manual/order-processing': {
        en: [
          'Process incoming orders efficiently',
          'Handle order fulfillment and shipping',
          'Manage returns and refunds',
          'Track order status and customer communication'
        ],
        ms: [
          'Proses pesanan masuk dengan cekap',
          'Urus pemenuhan pesanan dan penghantaran',
          'Urus pemulangan dan bayaran balik',
          'Pantau status pesanan dan komunikasi pelanggan'
        ]
      },
      '/manual/customer-management': {
        en: [
          'View and manage customer information',
          'Handle customer inquiries and support',
          'Track customer order history',
          'Build customer relationships'
        ],
        ms: [
          'Lihat dan urus maklumat pelanggan',
          'Urus pertanyaan dan sokongan pelanggan',
          'Pantau sejarah pesanan pelanggan',
          'Bina hubungan dengan pelanggan'
        ]
      },
      '/manual/analytics-reporting': {
        en: [
          'Understand sales performance metrics',
          'Analyze customer behavior and trends',
          'Track revenue and profit margins',
          'Generate reports for business insights'
        ],
        ms: [
          'Memahami metrik prestasi jualan',
          'Analisis tingkah laku dan trend pelanggan',
          'Pantau hasil dan margin keuntungan',
          'Jana laporan untuk pandangan perniagaan'
        ]
      },
      '/manual/authentication': {
        en: [
          'Secure account login and password management',
          'Enable two-factor authentication',
          'Manage account permissions and access',
          'Understand security best practices'
        ],
        ms: [
          'Log masuk akaun selamat dan pengurusan kata laluan',
          'Aktifkan pengesahan dua faktor',
          'Urus kebenaran dan akses akaun',
          'Memahami amalan keselamatan terbaik'
        ]
      }
    }
    
    return keyPoints[pathname]?.[lang as 'en' | 'ms'] || []
  }

  const getReadingTime = (pathname: string, lang: string) => {
    const readingTimes: Record<string, { en: string; ms: string }> = {
      '/manual/getting-started': { en: '5-7 minutes', ms: '5-7 minit' },
      '/manual/store-management': { en: '8-10 minutes', ms: '8-10 minit' },
      '/manual/product-catalog': { en: '10-12 minutes', ms: '10-12 minit' },
      '/manual/order-processing': { en: '7-9 minutes', ms: '7-9 minit' },
      '/manual/customer-management': { en: '6-8 minutes', ms: '6-8 minit' },
      '/manual/analytics-reporting': { en: '9-11 minutes', ms: '9-11 minit' },
      '/manual/authentication': { en: '4-6 minutes', ms: '4-6 minit' }
    }
    
    return readingTimes[pathname]?.[lang as 'en' | 'ms'] || (lang === 'en' ? '5-10 minutes' : '5-10 minit')
  }

  const getPrerequisites = (pathname: string, lang: string) => {
    const prerequisites: Record<string, { en: string[]; ms: string[] }> = {
      '/manual/getting-started': {
        en: ['Valid business registration', 'Email address', 'Phone number'],
        ms: ['Pendaftaran perniagaan yang sah', 'Alamat e-mel', 'Nombor telefon']
      },
      '/manual/store-management': {
        en: ['Completed account verification', 'Basic store information'],
        ms: ['Pengesahan akaun selesai', 'Maklumat kedai asas']
      },
      '/manual/product-catalog': {
        en: ['Store setup completed', 'Product images ready', 'Pricing information'],
        ms: ['Penyediaan kedai selesai', 'Gambar produk siap', 'Maklumat harga']
      },
      '/manual/order-processing': {
        en: ['Products listed', 'Payment methods configured', 'Shipping settings'],
        ms: ['Produk disenaraikan', 'Kaedah pembayaran dikonfigur', 'Tetapan penghantaran']
      },
      '/manual/customer-management': {
        en: ['Store operational', 'Customer orders received'],
        ms: ['Kedai beroperasi', 'Pesanan pelanggan diterima']
      },
      '/manual/analytics-reporting': {
        en: ['Store active for 30+ days', 'Sales data available'],
        ms: ['Kedai aktif selama 30+ hari', 'Data jualan tersedia']
      },
      '/manual/authentication': {
        en: ['Account created', 'Email verified'],
        ms: ['Akaun dicipta', 'E-mel disahkan']
      }
    }
    
    return prerequisites[pathname]?.[lang as 'en' | 'ms'] || []
  }

  return (
    <MerchantLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar Navigation */}
            <aside className="lg:col-span-3">
              <div className="sticky top-8 space-y-6">
                {/* Manual Header */}
                <Card className="border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <BookOpen className="w-6 h-6 text-primary" />
                      {language === 'en' ? 'Manual' : 'Manual'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {Object.entries(groupedItems).map(([category, items]) => (
                        <div key={category}>
                          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                            {language === 'en' ? categoryLabels[category as keyof typeof categoryLabels]?.en : categoryLabels[category as keyof typeof categoryLabels]?.ms}
                          </h3>
                          <div className="space-y-1">
                            {items.map((item) => (
                              <Link
                                key={item.key}
                                to={item.path}
                                className={`block p-3 rounded-lg transition-all duration-200 group ${
                                  location.pathname === item.path
                                    ? 'bg-primary text-primary-foreground shadow-md'
                                    : 'hover:bg-slate-100 hover:shadow-sm'
                                }`}
                              >
                                <div className="flex items-start justify-between">
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2">
                                      <h4 className={`font-medium text-sm ${
                                        location.pathname === item.path ? 'text-primary-foreground' : 'text-foreground'
                                      }`}>
                                        {language === 'en' ? item.title.en : item.title.ms}
                                      </h4>
                                      {item.isPro && (
                                        <Badge variant="secondary" className="text-xs px-2 py-0.5">
                                          Pro
                                        </Badge>
                                      )}
                                    </div>
                                    {item.description && (
                                      <p className={`text-xs mt-1 ${
                                        location.pathname === item.path ? 'text-primary-foreground/80' : 'text-muted-foreground'
                                      }`}>
                                        {language === 'en' ? item.description.en : item.description.ms}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Contact Form */}
                <ContactForm />
              </div>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8 pt-12">
                  {children}
                  
                  {/* Navigation Footer */}
                  <div className="mt-12 pt-8 border-t border-slate-200">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        {prevPath && prevTitle && (
                          <Link 
                            to={prevPath} 
                            className="group flex items-center gap-3 p-4 rounded-lg border border-slate-200 hover:border-primary hover:shadow-md transition-all duration-200"
                          >
                            <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                              <ChevronLeft className="w-5 h-5 text-slate-600 group-hover:text-primary" />
                            </div>
                            <div className="text-left">
                              <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                                {language === 'en' ? 'Previous' : 'Sebelum'}
                              </p>
                              <p className="font-medium text-slate-900 group-hover:text-primary transition-colors">
                                {language === 'en' ? prevTitle.en : prevTitle.ms}
                              </p>
                            </div>
                          </Link>
                        )}
                      </div>
                      
                      <div className="flex-1 flex justify-end">
                        {nextPath && nextTitle && (
                          <Link 
                            to={nextPath} 
                            className="group flex items-center gap-3 p-4 rounded-lg border border-slate-200 hover:border-primary hover:shadow-md transition-all duration-200"
                          >
                            <div className="text-right">
                              <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                                {language === 'en' ? 'Next' : 'Seterusnya'}
                              </p>
                              <p className="font-medium text-slate-900 group-hover:text-primary transition-colors">
                                {language === 'en' ? nextTitle.en : nextTitle.ms}
                              </p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                              <ChevronRight className="w-5 h-5 text-slate-600 group-hover:text-primary" />
                            </div>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </main>

            {/* Right Sidebar - What You'll Learn */}
            <aside className="lg:col-span-3">
              <div className="sticky top-8">
                <Card className="border-0 shadow-lg">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <FileText className="w-5 h-5 text-primary" />
                      {language === 'en' ? 'What You\'ll Learn' : 'Apa Yang Anda Akan Pelajari'}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Current Page Summary */}
                      {currentItem && (
                        <div className="p-4 rounded-lg bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="w-2 h-2 rounded-full bg-primary"></div>
                            <span className="text-sm font-medium text-primary">
                              {language === 'en' ? 'This Page' : 'Halaman Ini'}
                            </span>
                          </div>
                          <h3 className="font-semibold text-slate-900 text-sm mb-2">
                            {language === 'en' ? currentItem.title.en : currentItem.title.ms}
                          </h3>
                          {currentItem.description && (
                            <p className="text-xs text-slate-600 leading-relaxed">
                              {language === 'en' ? currentItem.description.en : currentItem.description.ms}
                            </p>
                          )}
                        </div>
                      )}

                      {/* Key Learning Points */}
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 mb-3">
                          {language === 'en' ? 'Key Points' : 'Perkara Penting'}
                        </h4>
                        <div className="space-y-2">
                          {getPageKeyPoints(location.pathname, language).map((point, index) => (
                            <div key={index} className="flex items-start gap-2 p-2 rounded-md bg-slate-50">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
                              <span className="text-xs text-slate-700 leading-relaxed">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Time Required */}
                      <div className="p-3 rounded-lg bg-slate-50 border border-slate-200">
                        <div className="flex items-center gap-2 mb-2">
                          <Clock className="w-4 h-4 text-slate-600" />
                          <span className="text-sm font-medium text-slate-900">
                            {language === 'en' ? 'Reading Time' : 'Masa Membaca'}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600">
                          {getReadingTime(location.pathname, language)}
                        </p>
                      </div>

                      {/* Prerequisites */}
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 mb-3">
                          {language === 'en' ? 'Prerequisites' : 'Prasyarat'}
                        </h4>
                        <div className="space-y-1">
                          {getPrerequisites(location.pathname, language).map((prereq, index) => (
                            <div key={index} className="flex items-center gap-2 text-xs text-slate-600">
                              <CheckCircle2 className="w-3 h-3 text-green-600 shrink-0" />
                              <span>{prereq}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Quick Links */}
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900 mb-3">
                          {language === 'en' ? 'Quick Links' : 'Pautan Pantas'}
                        </h4>
                        <div className="space-y-1">
                          <Link to="/help" className="block text-sm text-slate-600 hover:text-primary py-1 px-2 rounded hover:bg-slate-50 transition-colors">
                            {language === 'en' ? 'Help Center' : 'Pusat Bantuan'}
                          </Link>
                          <Link to="/support" className="block text-sm text-slate-600 hover:text-primary py-1 px-2 rounded hover:bg-slate-50 transition-colors">
                            {language === 'en' ? 'Contact Support' : 'Hubungi Sokongan'}
                          </Link>
                          <Link to="/faq" className="block text-sm text-slate-600 hover:text-primary py-1 px-2 rounded hover:bg-slate-50 transition-colors">
                            {language === 'en' ? 'FAQ' : 'Soalan Lazim'}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </MerchantLayout>
  )
}

export default ManualLayout


