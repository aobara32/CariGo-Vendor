import React, { useState } from 'react'
import MerchantLayout from '../layouts/MerchantLayout'
import { Card } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Textarea } from '../components/ui/textarea'
import { Link, useLocation } from 'react-router-dom'
import { 
  CheckCircle2,
  ArrowRight,
  Upload,
  FileText,
  User,
  Building2,
  Mail,
  Phone,
  CreditCard,
  MapPin,
  Calendar,
  AlertCircle,
  Info,
  Star,
  Shield,
  Zap,
  Target,
  Award,
  ArrowLeft,
  Package
} from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Apply = () => {
  const { language } = useLanguage()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const initialPlan = (queryParams.get('plan') || 'basic').toLowerCase()
  const [selectedPlan, setSelectedPlan] = useState<'core'|'basic'|'pro'>(
    initialPlan === 'core' || initialPlan === 'pro' ? (initialPlan as any) : 'basic'
  )
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    nationalId: '',
    
    // Business Information
    businessName: '',
    businessType: '',
    businessRegistration: '',
    businessAddress: '',
    businessDescription: '',
    
    // Product Information
    productCategory: '',
    productCount: '',
    monthlySales: '',
    productDescription: '',
    
    // Additional Information
    experience: '',
    marketing: '',
    expectations: '',
    
    // Documents
    documents: {
      nationalId: null as File | null,
      businessRegistration: null as File | null,
      bankStatement: null as File | null,
      proofOfAddress: null as File | null
    }
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFileUpload = (field: string, file: File | null) => {
    setFormData(prev => ({
      ...prev,
      documents: { ...prev.documents, [field]: file }
    }))
  }

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {}
    if (step === 1) {
      const fields = c.personalInfo.fields
      fields.forEach(f => {
        if (f.required && !String(formData[f.name as keyof typeof formData] || '').trim()) {
          newErrors[f.name] = 'Required'
        }
      })
    }
    if (step === 2) {
      const fields = c.businessInfo.fields
      fields.forEach(f => {
        if (f.required) {
          const v = String(formData[f.name as keyof typeof formData] || '').trim()
          if (!v) newErrors[f.name] = 'Required'
        }
      })
    }
    if (step === 3) {
      const fields = c.productInfo.fields
      fields.forEach(f => {
        if (f.required) {
          const v = String(formData[f.name as keyof typeof formData] || '').trim()
          if (!v) newErrors[f.name] = 'Required'
        }
      })
    }
    if (step === 4) {
      (Object.keys(formData.documents) as Array<keyof typeof formData.documents>).forEach(k => {
        if (!formData.documents[k]) newErrors[`doc_${String(k)}`] = 'Required'
      })
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (currentStep < 4) {
      if (validateStep(currentStep)) setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep(4)) return
    setIsSubmitted(true)
  }

  const content = {
    en: {
      hero: {
        title: 'Apply to Sell on CariGo',
        subtitle: 'Join hundreds of successful merchants and start your online journey',
        cta: 'Start Application'
      },
      
      steps: [
        { number: 1, title: 'Personal Info', icon: User },
        { number: 2, title: 'Business Info', icon: Building2 },
        { number: 3, title: 'Products', icon: Package },
        { number: 4, title: 'Documents', icon: FileText }
      ],
      
      personalInfo: {
        title: 'Personal Information',
        subtitle: 'Tell us about yourself',
        fields: [
          { name: 'firstName', label: 'First Name', type: 'text', required: true },
          { name: 'lastName', label: 'Last Name', type: 'text', required: true },
          { name: 'email', label: 'Email Address', type: 'email', required: true },
          { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
          { name: 'nationalId', label: 'National ID Number', type: 'text', required: true }
        ]
      },
      
      businessInfo: {
        title: 'Business Information',
        subtitle: 'Tell us about your business',
        fields: [
          { name: 'businessName', label: 'Business Name', type: 'text', required: true },
          { name: 'businessType', label: 'Business Type', type: 'select', required: true, options: ['Retail', 'Wholesale', 'Manufacturing', 'Service', 'Other'] },
          { name: 'businessRegistration', label: 'Business Registration Number', type: 'text', required: true },
          { name: 'businessAddress', label: 'Business Address', type: 'textarea', required: true },
          { name: 'businessDescription', label: 'Business Description', type: 'textarea', required: false }
        ]
      },
      
      productInfo: {
        title: 'Product Information',
        subtitle: 'Tell us about what you sell',
        fields: [
          { name: 'productCategory', label: 'Product Category', type: 'select', required: true, options: ['Electronics', 'Fashion', 'Home & Garden', 'Beauty & Health', 'Sports & Outdoors', 'Books & Media', 'Food & Beverage', 'Automotive', 'Other'] },
          { name: 'productCount', label: 'Number of Products', type: 'select', required: true, options: ['1-10', '11-50', '51-100', '101-500', '500+'] },
          { name: 'monthlySales', label: 'Expected Monthly Sales (BND)', type: 'select', required: true, options: ['Under $500', '$500-$1,000', '$1,000-$2,500', '$2,500-$5,000', '$5,000+'] },
          { name: 'productDescription', label: 'Product Description', type: 'textarea', required: false }
        ]
      },
      
      documents: {
        title: 'Required Documents',
        subtitle: 'Upload the required documents',
        fields: [
          { name: 'nationalId', label: 'National ID (Front & Back)', description: 'Clear photos of your national ID card' },
          { name: 'businessRegistration', label: 'Business Registration Certificate', description: 'Valid business license or registration' },
          { name: 'bankStatement', label: 'Bank Statement (Last 3 Months)', description: 'Business bank statements' },
          { name: 'proofOfAddress', label: 'Proof of Address', description: 'Utility bill or bank statement with your address' }
        ]
      },
      
      additionalInfo: {
        title: 'Additional Information',
        subtitle: 'Help us understand your business better',
        fields: [
          { name: 'experience', label: 'E-commerce Experience', type: 'textarea', placeholder: 'Tell us about your experience selling online (if any)' },
          { name: 'marketing', label: 'Marketing Plans', type: 'textarea', placeholder: 'How do you plan to market your products?' },
          { name: 'expectations', label: 'Expectations', type: 'textarea', placeholder: 'What do you hope to achieve with CariGo?' }
        ]
      },
      
      success: {
        title: 'Application Submitted Successfully!',
        subtitle: 'Thank you for applying to sell on CariGo',
        message: 'We\'ve received your application and will review it within 24-48 hours. You\'ll receive an email confirmation shortly.',
        nextSteps: [
          'Check your email for confirmation',
          'Prepare your documents for verification',
          'Start thinking about your product photos',
          'Consider your pricing strategy'
        ]
      },
      
      cta: {
        title: 'Ready to Start Selling?',
        description: 'Join successful merchants on CariGo',
        button: 'Apply Now'
      }
    },
    ms: {
      hero: {
        title: 'Mohon untuk Menjual di CariGo',
        subtitle: 'Sertai beratus pedagang berjaya dan mula perjalanan dalam talian anda',
        cta: 'Mula Permohonan'
      },
      
      steps: [
        { number: 1, title: 'Maklumat Peribadi', icon: User },
        { number: 2, title: 'Maklumat Perniagaan', icon: Building2 },
        { number: 3, title: 'Produk', icon: Package },
        { number: 4, title: 'Dokumen', icon: FileText }
      ],
      
      personalInfo: {
        title: 'Maklumat Peribadi',
        subtitle: 'Ceritakan tentang diri anda',
        fields: [
          { name: 'firstName', label: 'Nama Pertama', type: 'text', required: true },
          { name: 'lastName', label: 'Nama Akhir', type: 'text', required: true },
          { name: 'email', label: 'Alamat E-mel', type: 'email', required: true },
          { name: 'phone', label: 'Nombor Telefon', type: 'tel', required: true },
          { name: 'nationalId', label: 'Nombor Kad Pengenalan', type: 'text', required: true }
        ]
      },
      
      businessInfo: {
        title: 'Maklumat Perniagaan',
        subtitle: 'Ceritakan tentang perniagaan anda',
        fields: [
          { name: 'businessName', label: 'Nama Perniagaan', type: 'text', required: true },
          { name: 'businessType', label: 'Jenis Perniagaan', type: 'select', required: true, options: ['Peruncitan', 'Borong', 'Pembuatan', 'Perkhidmatan', 'Lain-lain'] },
          { name: 'businessRegistration', label: 'Nombor Pendaftaran Perniagaan', type: 'text', required: true },
          { name: 'businessAddress', label: 'Alamat Perniagaan', type: 'textarea', required: true },
          { name: 'businessDescription', label: 'Penerangan Perniagaan', type: 'textarea', required: false }
        ]
      },
      
      productInfo: {
        title: 'Maklumat Produk',
        subtitle: 'Ceritakan tentang apa yang anda jual',
        fields: [
          { name: 'productCategory', label: 'Kategori Produk', type: 'select', required: true, options: ['Elektronik', 'Fesyen', 'Rumah & Taman', 'Kecantikan & Kesihatan', 'Sukan & Luar', 'Buku & Media', 'Makanan & Minuman', 'Automotif', 'Lain-lain'] },
          { name: 'productCount', label: 'Bilangan Produk', type: 'select', required: true, options: ['1-10', '11-50', '51-100', '101-500', '500+'] },
          { name: 'monthlySales', label: 'Jualan Bulanan Dijangka (BND)', type: 'select', required: true, options: ['Bawah $500', '$500-$1,000', '$1,000-$2,500', '$2,500-$5,000', '$5,000+'] },
          { name: 'productDescription', label: 'Penerangan Produk', type: 'textarea', required: false }
        ]
      },
      
      documents: {
        title: 'Dokumen Diperlukan',
        subtitle: 'Muat naik dokumen yang diperlukan',
        fields: [
          { name: 'nationalId', label: 'Kad Pengenalan (Depan & Belakang)', description: 'Foto jelas kad pengenalan anda' },
          { name: 'businessRegistration', label: 'Sijil Pendaftaran Perniagaan', description: 'Lesen perniagaan atau pendaftaran yang sah' },
          { name: 'bankStatement', label: 'Penyata Bank (3 Bulan Terakhir)', description: 'Penyata bank perniagaan' },
          { name: 'proofOfAddress', label: 'Bukti Alamat', description: 'Bil utiliti atau penyata bank dengan alamat anda' }
        ]
      },
      
      additionalInfo: {
        title: 'Maklumat Tambahan',
        subtitle: 'Bantu kami memahami perniagaan anda dengan lebih baik',
        fields: [
          { name: 'experience', label: 'Pengalaman E-dagang', type: 'textarea', placeholder: 'Ceritakan tentang pengalaman anda menjual dalam talian (jika ada)' },
          { name: 'marketing', label: 'Rancangan Pemasaran', type: 'textarea', placeholder: 'Bagaimana anda merancang untuk memasarkan produk anda?' },
          { name: 'expectations', label: 'Jangkaan', type: 'textarea', placeholder: 'Apa yang anda harapkan untuk capai dengan CariGo?' }
        ]
      },
      
      success: {
        title: 'Permohonan Dihantar dengan Berjaya!',
        subtitle: 'Terima kasih kerana memohon untuk menjual di CariGo',
        message: 'Kami telah menerima permohonan anda dan akan mengkajinya dalam 24-48 jam. Anda akan menerima pengesahan e-mel tidak lama lagi.',
        nextSteps: [
          'Periksa e-mel anda untuk pengesahan',
          'Sediakan dokumen anda untuk pengesahan',
          'Mula memikirkan tentang foto produk anda',
          'Pertimbangkan strategi harga anda'
        ]
      },
      
      cta: {
        title: 'Bersedia untuk Mula Menjual?',
        description: 'Sertai pedagang berjaya di CariGo',
        button: 'Mohon Sekarang'
      }
    }
  }

  const c = content[language]

  if (isSubmitted) {
    return (
      <MerchantLayout>
        <section className="py-20 min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-12 h-12 text-white" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{c.success.title}</h1>
              <p className="text-xl text-muted-foreground mb-8">{c.success.subtitle}</p>
              <p className="text-lg mb-12">{c.success.message}</p>
              
              <Card className="p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6">{language === 'en' ? 'What\'s Next?' : 'Apa Seterusnya?'}</h3>
                <div className="space-y-4">
                  {c.success.nextSteps.map((step, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-bold">{index + 1}</span>
                      </div>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </Card>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/getting-started">
                  <Button size="lg" variant="default" className="text-lg px-8">
                    {language === 'en' ? 'Getting Started Guide' : 'Panduan Bermula'} <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/support">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    {language === 'en' ? 'Contact Support' : 'Hubungi Sokongan'}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </MerchantLayout>
    )
  }

  return (
    <MerchantLayout>
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center bg-gradient-to-br from-primary via-primary to-primary/90 text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{c.hero.title}</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">{c.hero.subtitle}</p>
            <Link to="/pricing">
              <Button size="lg" variant="outlineWhite" className="text-lg px-8">
                {language === 'en' ? 'View Pricing' : 'Lihat Harga'} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Plan Selection */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">{language === 'en' ? 'Select a Plan' : 'Pilih Pelan'}</h2>
            <p className="text-muted-foreground mb-6">{language === 'en' ? 'Your selection helps us tailor onboarding.' : 'Pilihan anda membantu kami menyesuaikan onboarding.'}</p>
            <div className="grid grid-cols-3 gap-3">
              {(['core','basic','pro'] as const).map(plan => (
                <button
                  key={plan}
                  onClick={() => setSelectedPlan(plan)}
                  className={`p-3 rounded-md border text-sm font-medium transition-colors ${
                    selectedPlan === plan ? 'border-primary bg-primary text-primary-foreground' : 'border-input hover:bg-muted'
                  }`}
                >
                  {plan.charAt(0).toUpperCase() + plan.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Progress Steps */}
            <div className="flex justify-center mb-12">
              <div className="flex items-center gap-4">
                {c.steps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = currentStep === step.number;
                  const isCompleted = currentStep > step.number;
                  
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        isActive ? 'bg-primary text-white' : 
                        isCompleted ? 'bg-primary/20 text-primary' : 
                        'bg-muted text-muted-foreground'
                      }`}>
                        {isCompleted ? (
                          <CheckCircle2 className="w-6 h-6" />
                        ) : (
                          <Icon className="w-6 h-6" />
                        )}
                      </div>
                      <div className="text-center">
                        <div className={`text-sm font-semibold ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                          {step.title}
                        </div>
                      </div>
                      {index < c.steps.length - 1 && (
                        <div className="w-8 h-0.5 bg-muted"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <Card className="p-8">
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div>
                    <h2 className="text-3xl font-bold mb-4">{c.personalInfo.title}</h2>
                    <p className="text-muted-foreground mb-8">{c.personalInfo.subtitle}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {c.personalInfo.fields.map((field) => (
                        <div key={field.name} className={field.type === 'textarea' ? 'md:col-span-2' : ''}>
                          <Label htmlFor={field.name} className="text-sm font-semibold">
                            {field.label} {field.required && <span className="text-primary">*</span>}
                          </Label>
                          {field.type === 'textarea' ? (
                            <Textarea
                              id={field.name}
                              value={formData[field.name as keyof typeof formData] as string}
                              onChange={(e) => handleInputChange(field.name, e.target.value)}
                              className="mt-2"
                              required={field.required}
                            />
                          ) : (
                            <Input
                              id={field.name}
                              type={field.type}
                              value={formData[field.name as keyof typeof formData] as string}
                              onChange={(e) => handleInputChange(field.name, e.target.value)}
                              className="mt-2"
                              required={field.required}
                            />
                          )}
                          {errors[field.name] && (
                            <div className="text-sm text-red-600 mt-1">{language === 'en' ? 'This field is required' : 'Medan ini diperlukan'}</div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Business Information */}
                {currentStep === 2 && (
                  <div>
                    <h2 className="text-3xl font-bold mb-4">{c.businessInfo.title}</h2>
                    <p className="text-muted-foreground mb-8">{c.businessInfo.subtitle}</p>
                    
                    <div className="space-y-6">
                      {c.businessInfo.fields.map((field) => (
                        <div key={field.name}>
                          <Label htmlFor={field.name} className="text-sm font-semibold">
                            {field.label} {field.required && <span className="text-primary">*</span>}
                          </Label>
                          {field.type === 'select' ? (
                            <select
                              id={field.name}
                              value={formData[field.name as keyof typeof formData] as string}
                              onChange={(e) => handleInputChange(field.name, e.target.value)}
                              className="mt-2 w-full h-10 px-3 py-2 border border-input rounded-md bg-background"
                              required={field.required}
                            >
                              <option value="">{language === 'en' ? 'Select an option' : 'Pilih pilihan'}</option>
                              {field.options?.map((option) => (
                                <option key={option} value={option}>{option}</option>
                              ))}
                            </select>
                          ) : field.type === 'textarea' ? (
                            <Textarea
                              id={field.name}
                              value={formData[field.name as keyof typeof formData] as string}
                              onChange={(e) => handleInputChange(field.name, e.target.value)}
                              className="mt-2"
                              required={field.required}
                            />
                          ) : (
                            <Input
                              id={field.name}
                              type={field.type}
                              value={formData[field.name as keyof typeof formData] as string}
                              onChange={(e) => handleInputChange(field.name, e.target.value)}
                              className="mt-2"
                              required={field.required}
                            />
                          )}
                          {errors[field.name] && (
                            <div className="text-sm text-red-600 mt-1">{language === 'en' ? 'This field is required' : 'Medan ini diperlukan'}</div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Product Information */}
                {currentStep === 3 && (
                  <div>
                    <h2 className="text-3xl font-bold mb-4">{c.productInfo.title}</h2>
                    <p className="text-muted-foreground mb-8">{c.productInfo.subtitle}</p>
                    
                    <div className="space-y-6">
                      {c.productInfo.fields.map((field) => (
                        <div key={field.name}>
                          <Label htmlFor={field.name} className="text-sm font-semibold">
                            {field.label} {field.required && <span className="text-primary">*</span>}
                          </Label>
                          {field.type === 'select' ? (
                            <select
                              id={field.name}
                              value={formData[field.name as keyof typeof formData] as string}
                              onChange={(e) => handleInputChange(field.name, e.target.value)}
                              className="mt-2 w-full h-10 px-3 py-2 border border-input rounded-md bg-background"
                              required={field.required}
                            >
                              <option value="">{language === 'en' ? 'Select an option' : 'Pilih pilihan'}</option>
                              {field.options?.map((option) => (
                                <option key={option} value={option}>{option}</option>
                              ))}
                            </select>
                          ) : field.type === 'textarea' ? (
                            <Textarea
                              id={field.name}
                              value={formData[field.name as keyof typeof formData] as string}
                              onChange={(e) => handleInputChange(field.name, e.target.value)}
                              className="mt-2"
                              required={field.required}
                            />
                          ) : (
                            <Input
                              id={field.name}
                              type={field.type}
                              value={formData[field.name as keyof typeof formData] as string}
                              onChange={(e) => handleInputChange(field.name, e.target.value)}
                              className="mt-2"
                              required={field.required}
                            />
                          )}
                          {errors[field.name] && (
                            <div className="text-sm text-red-600 mt-1">{language === 'en' ? 'This field is required' : 'Medan ini diperlukan'}</div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Additional Information */}
                    <div className="mt-12 pt-8 border-t">
                      <h3 className="text-2xl font-bold mb-4">{c.additionalInfo.title}</h3>
                      <p className="text-muted-foreground mb-6">{c.additionalInfo.subtitle}</p>
                      
                      <div className="space-y-6">
                        {c.additionalInfo.fields.map((field) => (
                          <div key={field.name}>
                            <Label htmlFor={field.name} className="text-sm font-semibold">
                              {field.label}
                            </Label>
                            <Textarea
                              id={field.name}
                              value={formData[field.name as keyof typeof formData] as string}
                              onChange={(e) => handleInputChange(field.name, e.target.value)}
                              placeholder={field.placeholder}
                              className="mt-2"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Documents */}
                {currentStep === 4 && (
                  <div>
                    <h2 className="text-3xl font-bold mb-4">{c.documents.title}</h2>
                    <p className="text-muted-foreground mb-8">{c.documents.subtitle}</p>
                    
                    <div className="space-y-8">
                      {c.documents.fields.map((field) => (
                        <div key={field.name}>
                          <Label className="text-sm font-semibold">
                            {field.label} <span className="text-primary">*</span>
                          </Label>
                          <p className="text-sm text-muted-foreground mb-4">{field.description}</p>
                          
                          <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center">
                            <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                            <p className="text-muted-foreground mb-4">
                              {language === 'en' ? 'Click to upload or drag and drop' : 'Klik untuk muat naik atau seret dan lepas'}
                            </p>
                            <input
                              type="file"
                              accept="image/*,.pdf"
                              onChange={(e) => handleFileUpload(field.name, e.target.files?.[0] || null)}
                              className="hidden"
                              id={`file-${field.name}`}
                            />
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => document.getElementById(`file-${field.name}`)?.click()}
                            >
                              {language === 'en' ? 'Choose File' : 'Pilih Fail'}
                            </Button>
                            {formData.documents[field.name as keyof typeof formData.documents] && (
                              <p className="mt-2 text-sm text-primary">
                                {formData.documents[field.name as keyof typeof formData.documents]?.name}
                              </p>
                            )}
                            {!formData.documents[field.name as keyof typeof formData.documents] && errors[`doc_${field.name}`] && (
                              <div className="text-sm text-red-600 mt-2">{language === 'en' ? 'This document is required' : 'Dokumen ini diperlukan'}</div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-12 pt-8 border-t">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {language === 'en' ? 'Previous' : 'Sebelumnya'}
                  </Button>
                  
                  {currentStep < 4 ? (
                    <Button type="button" onClick={nextStep}>
                      {language === 'en' ? 'Next' : 'Seterusnya'} <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button type="submit">
                      {language === 'en' ? 'Submit Application' : 'Hantar Permohonan'} <CheckCircle2 className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              </Card>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{c.cta.title}</h2>
            <p className="text-xl md:text-2xl mb-10 text-white/90">{c.cta.description}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pricing">
                <Button size="lg" variant="outlineWhite" className="text-lg px-10">
                  {language === 'en' ? 'View Pricing' : 'Lihat Harga'} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/support">
                <Button size="lg" variant="inverseSecondary" className="text-lg px-10">
                  {language === 'en' ? 'Get Support' : 'Dapatkan Sokongan'} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MerchantLayout>
  )
}

export default Apply
