import React from 'react'
import MerchantLayout from '../layouts/MerchantLayout'
import { Card } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'
import { 
  FileText,
  CheckCircle2,
  Clock,
  Users,
  Shield,
  ArrowRight,
  Upload,
  CreditCard,
  Store,
  Mail,
  Phone,
  Calendar,
  Download,
  AlertCircle,
  Info,
  Star,
  Zap,
  Target,
  Award
} from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

// Using free stock images from Unsplash
const gettingStartedImage = "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
const setupImage = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"

const GettingStarted = () => {
  const { language } = useLanguage()

  const content = {
    en: {
      hero: {
        title: 'Get Started in 4 Simple Steps',
        subtitle: 'From application to first sale in just a few days',
        cta: 'Apply Now'
      },
      
      steps: [
        {
          number: 1,
          title: 'Apply Online',
          description: 'Fill out our simple application form with your business details',
          duration: '10 minutes',
          icon: FileText,
          details: [
            'Business registration information',
            'Contact details',
            'Product category selection',
            'Expected monthly sales volume'
          ],
          requirements: [
            'Valid business registration',
            'Brunei phone number',
            'Email address',
            'Bank account details'
          ]
        },
        {
          number: 2,
          title: 'KYC Verification',
          description: 'Complete identity and business verification process',
          duration: '24-48 hours',
          icon: Shield,
          details: [
            'Identity document verification',
            'Business document review',
            'Bank account verification',
            'Address confirmation'
          ],
          requirements: [
            'National ID or passport',
            'Business registration certificate',
            'Bank statement (last 3 months)',
            'Proof of address'
          ]
        },
        {
          number: 3,
          title: 'Store Setup',
          description: 'Configure your store and upload your first products',
          duration: '2-4 hours',
          icon: Store,
          details: [
            'Store profile creation',
            'Product catalog setup',
            'Payment method configuration',
            'Shipping settings'
          ],
          requirements: [
            'Product photos (min 3 per product)',
            'Product descriptions',
            'Pricing information',
            'Inventory quantities'
          ]
        },
        {
          number: 4,
          title: 'Go Live',
          description: 'Launch your store and start accepting orders',
          duration: 'Immediate',
          icon: Zap,
          details: [
            'Final review and approval',
            'Store goes live',
            'Start receiving orders',
            'First payout in 7 days'
          ],
          requirements: [
            'All products approved',
            'Payment methods active',
            'Shipping configured',
            'Store policies set'
          ]
        }
      ],
      
      documents: {
        title: 'Required Documents',
        subtitle: 'Have these ready to speed up your application',
        personal: [
          { name: 'National ID Card', description: 'Front and back copy' },
          { name: 'Passport', description: 'If using passport instead of ID' },
          { name: 'Proof of Address', description: 'Utility bill or bank statement (last 3 months)' }
        ],
        business: [
          { name: 'Business Registration Certificate', description: 'Valid business license' },
          { name: 'Bank Statement', description: 'Last 3 months of business bank statements' },
          { name: 'Tax Registration', description: 'Tax registration documents (if applicable)' }
        ]
      },
      
      support: {
        title: 'Need Help Getting Started?',
        subtitle: 'Our team is here to guide you through every step',
        options: [
          {
            icon: Mail,
            title: 'Email Support',
            description: 'Get help via email within 24 hours',
            contact: 'carigobn@gmail.com'
          },
          {
            icon: Phone,
            title: 'Phone Support',
            description: 'Speak directly with our support team',
            contact: '+673 212 3456'
          },
          {
            icon: Calendar,
            title: 'Schedule a Call',
            description: 'Book a personalized onboarding session',
            contact: 'Book online'
          }
        ]
      },
      
      tips: {
        title: 'Pro Tips for Success',
        subtitle: 'Make the most of your CariGo experience',
        items: [
          {
            icon: Star,
            title: 'Quality Product Photos',
            description: 'Invest in good product photography. Clear, well-lit photos increase sales by up to 30%.'
          },
          {
            icon: Target,
            title: 'Detailed Descriptions',
            description: 'Write comprehensive product descriptions. Include dimensions, materials, and care instructions.'
          },
          {
            icon: Zap,
            title: 'Quick Response Times',
            description: 'Respond to customer inquiries within 2 hours. Fast responses build trust and increase conversions.'
          },
          {
            icon: Award,
            title: 'Competitive Pricing',
            description: 'Research your competition and price competitively. Consider offering bundle deals.'
          }
        ]
      },
      
      cta: {
        title: 'Ready to Start Your Journey?',
        description: 'Join hundreds of successful merchants already selling on CariGo',
        button: 'Apply Now - It\'s Free'
      }
    },
    ms: {
      hero: {
        title: 'Bermula dalam 4 Langkah Mudah',
        subtitle: 'Dari permohonan hingga jualan pertama dalam beberapa hari sahaja',
        cta: 'Mohon Sekarang'
      },
      
      steps: [
        {
          number: 1,
          title: 'Mohon Dalam Talian',
          description: 'Isi borang permohonan mudah kami dengan butiran perniagaan anda',
          duration: '10 minit',
          icon: FileText,
          details: [
            'Maklumat pendaftaran perniagaan',
            'Butiran hubungan',
            'Pemilihan kategori produk',
            'Jumlah jualan bulanan yang dijangkakan'
          ],
          requirements: [
            'Pendaftaran perniagaan yang sah',
            'Nombor telefon Brunei',
            'Alamat e-mel',
            'Butiran akaun bank'
          ]
        },
        {
          number: 2,
          title: 'Pengesahan KYC',
          description: 'Lengkapkan proses pengesahan identiti dan perniagaan',
          duration: '24-48 jam',
          icon: Shield,
          details: [
            'Pengesahan dokumen identiti',
            'Semakan dokumen perniagaan',
            'Pengesahan akaun bank',
            'Pengesahan alamat'
          ],
          requirements: [
            'Kad pengenalan atau pasport',
            'Sijil pendaftaran perniagaan',
            'Penyata bank (3 bulan terakhir)',
            'Bukti alamat'
          ]
        },
        {
          number: 3,
          title: 'Persediaan Kedai',
          description: 'Konfigurasi kedai anda dan muat naik produk pertama anda',
          duration: '2-4 jam',
          icon: Store,
          details: [
            'Pembuatan profil kedai',
            'Persediaan katalog produk',
            'Konfigurasi kaedah pembayaran',
            'Tetapan penghantaran'
          ],
          requirements: [
            'Foto produk berkualiti (min 3 setiap produk)',
            'Penerangan produk',
            'Maklumat harga',
            'Kuantiti inventori'
          ]
        },
        {
          number: 4,
          title: 'Mula Beroperasi',
          description: 'Lancarkan kedai anda dan mula menerima pesanan',
          duration: 'Serta-merta',
          icon: Zap,
          details: [
            'Semakan akhir dan kelulusan',
            'Kedai mula beroperasi',
            'Mula menerima pesanan',
            'Pembayaran pertama dalam 7 hari'
          ],
          requirements: [
            'Semua produk diluluskan',
            'Kaedah pembayaran aktif',
            'Penghantaran dikonfigurasi',
            'Dasar kedai ditetapkan'
          ]
        }
      ],
      
      documents: {
        title: 'Dokumen Diperlukan',
        subtitle: 'Sediakan ini untuk mempercepatkan permohonan anda',
        personal: [
          { name: 'Kad Pengenalan Nasional', description: 'Salinan depan dan belakang' },
          { name: 'Pasport', description: 'Jika menggunakan pasport sebagai ganti ID' },
          { name: 'Bukti Alamat', description: 'Bil utiliti atau penyata bank (3 bulan terakhir)' }
        ],
        business: [
          { name: 'Sijil Pendaftaran Perniagaan', description: 'Lesen perniagaan yang sah' },
          { name: 'Penyata Bank', description: '3 bulan terakhir penyata bank perniagaan' },
          { name: 'Pendaftaran Cukai', description: 'Dokumen pendaftaran cukai (jika berkenaan)' }
        ]
      },
      
      support: {
        title: 'Perlu Bantuan untuk Bermula?',
        subtitle: 'Pasukan kami di sini untuk membimbing anda melalui setiap langkah',
        options: [
          {
            icon: Mail,
            title: 'Sokongan E-mel',
            description: 'Dapatkan bantuan melalui e-mel dalam 24 jam',
            contact: 'carigobn@gmail.com'
          },
          {
            icon: Phone,
            title: 'Sokongan Telefon',
            description: 'Bercakap terus dengan pasukan sokongan kami',
            contact: '+673 212 3456'
          },
          {
            icon: Calendar,
            title: 'Jadualkan Panggilan',
            description: 'Tempah sesi onboarding peribadi',
            contact: 'Tempah dalam talian'
          }
        ]
      },
      
      tips: {
        title: 'Petua Pro untuk Kejayaan',
        subtitle: 'Manfaatkan sepenuhnya pengalaman CariGo anda',
        items: [
          {
            icon: Star,
            title: 'Foto Produk Berkualiti',
            description: 'Pelaburan dalam fotografi produk yang baik. Foto yang jelas dan terang meningkatkan jualan sehingga 30%.'
          },
          {
            icon: Target,
            title: 'Penerangan Terperinci',
            description: 'Tulis penerangan produk yang komprehensif. Sertakan dimensi, bahan, dan arahan penjagaan.'
          },
          {
            icon: Zap,
            title: 'Masa Respons Pantas',
            description: 'Balas pertanyaan pelanggan dalam 2 jam. Respons pantas membina kepercayaan dan meningkatkan penukaran.'
          },
          {
            icon: Award,
            title: 'Harga Kompetitif',
            description: 'Kaji persaingan anda dan harga secara kompetitif. Pertimbangkan menawarkan tawaran bundle.'
          }
        ]
      },
      
      cta: {
        title: 'Bersedia untuk Memulakan Perjalanan Anda?',
        description: 'Sertai beratus pedagang berjaya yang sudah menjual di CariGo',
        button: 'Mohon Sekarang - Percuma'
      }
    }
  }

  const c = content[language]

  return (
    <MerchantLayout>
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center bg-gradient-to-br from-primary via-primary to-primary/90 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={gettingStartedImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{c.hero.title}</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">{c.hero.subtitle}</p>
            <Link to="/apply">
              <Button size="lg" variant="inverseSecondary" className="text-lg px-8">
                {c.hero.cta} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {c.steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="mb-16 last:mb-0">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                          <span className="text-2xl font-bold text-white">{step.number}</span>
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold">{step.title}</h2>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{step.duration}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-lg text-muted-foreground mb-6">{step.description}</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold mb-2 flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            {language === 'en' ? 'What You\'ll Do:' : 'Apa Yang Anda Akan Lakukan:'}
                          </h3>
                          <ul className="space-y-1 ml-7">
                            {step.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="text-muted-foreground">• {detail}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="font-semibold mb-2 flex items-center gap-2">
                            <AlertCircle className="w-5 h-5 text-secondary" />
                            {language === 'en' ? 'What You\'ll Need:' : 'Apa Yang Anda Perlukan:'}
                          </h3>
                          <ul className="space-y-1 ml-7">
                            {step.requirements.map((requirement, reqIndex) => (
                              <li key={reqIndex} className="text-muted-foreground">• {requirement}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                      <Card className="p-8 hover:shadow-xl transition-shadow">
                        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                          <Icon className="w-10 h-10 text-primary" />
                        </div>
                        <h3 className="text-2xl font-bold text-center mb-4">{step.title}</h3>
                        <p className="text-muted-foreground text-center">{step.description}</p>
                      </Card>
                    </div>
                  </div>
                  
                  {index < c.steps.length - 1 && (
                    <div className="flex justify-center my-8">
                      <ArrowRight className="w-8 h-8 text-primary rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">{c.documents.title}</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">{c.documents.subtitle}</p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                {language === 'en' ? 'Personal Documents' : 'Dokumen Peribadi'}
              </h3>
              <div className="space-y-4">
                {c.documents.personal.map((doc, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">{doc.name}</div>
                      <div className="text-sm text-muted-foreground">{doc.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Store className="w-6 h-6 text-secondary" />
                {language === 'en' ? 'Business Documents' : 'Dokumen Perniagaan'}
              </h3>
              <div className="space-y-4">
                {c.documents.business.map((doc, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold">{doc.name}</div>
                      <div className="text-sm text-muted-foreground">{doc.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">{c.support.title}</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">{c.support.subtitle}</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {c.support.options.map((option, index) => {
              const Icon = option.icon;
              return (
                <Card key={index} className="p-8 text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{option.title}</h3>
                  <p className="text-muted-foreground mb-6">{option.description}</p>
                  {option.title === (language === 'en' ? 'Email Support' : 'Sokongan E-mel') ? (
                    <a href="mailto:carigobn@gmail.com" className="block">
                      <Button variant="outline" className="w-full">{language === 'en' ? 'Send Email' : 'Hantar E-mel'}</Button>
                    </a>
                  ) : option.title === (language === 'en' ? 'Phone Support' : 'Sokongan Telefon') ? (
                    <a href="tel:+6732123456" className="block">
                      <Button variant="outline" className="w-full">{language === 'en' ? 'Call Now' : 'Panggil Sekarang'}</Button>
                    </a>
                  ) : (
                    <div className="bg-muted/50 px-4 py-2 rounded-lg font-semibold">{option.contact}</div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pro Tips */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">{c.tips.title}</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">{c.tips.subtitle}</p>
          
          <div className="relative rounded-2xl overflow-hidden mb-16">
            <div className="absolute inset-0">
              <img src={setupImage} alt="Store setup" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary/70"></div>
            </div>
            <div className="relative z-10 py-20 px-8">
              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {c.tips.items.map((tip, index) => {
                  const Icon = tip.icon;
                  return (
                    <Card key={index} className="p-6 bg-white/95 backdrop-blur hover:bg-white transition-colors">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{tip.title}</h3>
                          <p className="text-muted-foreground">{tip.description}</p>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{c.cta.title}</h2>
            <p className="text-xl md:text-2xl mb-10 text-white/90">{c.cta.description}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/apply">
                <Button size="lg" variant="inverseSecondary" className="text-lg px-10">
                  {c.cta.button} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outlineWhite" className="text-lg px-10">
                  {language === 'en' ? 'View Pricing' : 'Lihat Harga'}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MerchantLayout>
  )
}

export default GettingStarted
