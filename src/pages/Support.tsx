import React from 'react'
import MerchantLayout from '../layouts/MerchantLayout'
import { Card } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'
import { 
  HelpCircle,
  BookOpen,
  MessageSquare,
  Users,
  Mail,
  Phone,
  Clock,
  Search,
  FileText,
  Video,
  Download,
  ExternalLink,
  ArrowRight,
  CheckCircle2,
  Star,
  Award,
  Zap,
  Shield,
  Headphones,
  Calendar,
  Globe,
  Target,
  TrendingUp,
  Settings,
  BarChart3,
  CreditCard,
  Package,
  Truck,
  AlertCircle,
  Info,
  Lightbulb,
  GraduationCap,
  Book,
  PlayCircle,
  ChevronRight
} from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Support = () => {
  const { language } = useLanguage()

  const content = {
    en: {
      hero: {
        title: 'Support & Resources',
        subtitle: 'Everything you need to succeed on CariGo',
        cta: 'Get Help Now'
      },
      
      quickHelp: {
        title: 'Quick Help',
        subtitle: 'Find answers to common questions instantly',
        options: [
          {
            icon: Search,
            title: 'Search Help Center',
            description: 'Find answers to your questions',
            action: 'Search Now'
          },
          {
            icon: MessageSquare,
            title: 'Live Chat',
            description: 'Chat with our support team',
            action: 'Coming Soon',
            available: 'Available 9AM-6PM'
          },
          {
            icon: Phone,
            title: 'Phone Support',
            description: 'Speak directly with support',
            action: 'Call Now',
            contact: '+673 212 3456'
          },
          {
            icon: Mail,
            title: 'Email Support',
            description: 'Get help via email',
            action: 'Send Email',
            contact: 'carigobn@gmail.com'
          }
        ]
      },
      
      academy: {
        title: 'CariGo Academy',
        subtitle: 'Learn how to maximize your success',
        categories: [
          {
            title: 'Getting Started',
            description: 'Essential guides for new merchants',
            courses: [
              { title: 'Store Setup Guide', duration: '15 min', type: 'Guide' },
              { title: 'Product Photography Tips', duration: '20 min', type: 'Video' },
              { title: 'Pricing Strategies', duration: '25 min', type: 'Course' }
            ]
          },
          {
            title: 'Growing Your Business',
            description: 'Advanced strategies for scaling',
            courses: [
              { title: 'Digital Marketing Basics', duration: '30 min', type: 'Course' },
              { title: 'Customer Service Excellence', duration: '20 min', type: 'Guide' },
              { title: 'Inventory Management', duration: '25 min', type: 'Video' }
            ]
          },
          {
            title: 'Technical Guides',
            description: 'Platform features and tools',
            courses: [
              { title: 'API Integration Guide', duration: '45 min', type: 'Guide' },
              { title: 'Analytics Deep Dive', duration: '30 min', type: 'Video' },
              { title: 'CSV Import/Export', duration: '15 min', type: 'Tutorial' }
            ]
          }
        ]
      },
      
      documentation: {
        title: 'Documentation',
        subtitle: 'Comprehensive guides and references',
        sections: [
          {
            title: 'Platform Guides',
            icon: BookOpen,
            items: [
              'Store Management',
              'Product Catalog',
              'Order Processing',
              'Customer Management',
              'Analytics & Reporting'
            ]
          },
          {
            title: 'API Documentation',
            icon: Settings,
            items: [
              'Getting Started',
              'Authentication',
              'Product API',
              'Order API',
              'Webhooks'
            ]
          },
          {
            title: 'Policies & Guidelines',
            icon: Shield,
            items: [
              'Seller Agreement',
              'Product Guidelines',
              'Shipping Policies',
              'Return Policies',
              'Platform Guidelines'
            ]
          }
        ]
      },
      
      proSupport: {
        title: 'Pro Support',
        subtitle: 'Premium support for Pro merchants',
        features: [
          {
            icon: Headphones,
            title: 'Dedicated Account Manager',
            description: 'Personal support from a dedicated account manager'
          },
          {
            icon: Phone,
            title: 'Priority Phone Support',
            description: 'Direct line to our support team with faster response times'
          },
          {
            icon: Calendar,
            title: 'Custom Training Sessions',
            description: 'Personalized training sessions tailored to your business needs'
          },
          {
            icon: Zap,
            title: 'Feature Requests',
            description: 'Priority consideration for new feature requests'
          }
        ]
      },
      
      contact: {
        title: 'Contact Us',
        subtitle: 'Get in touch with our support team',
        methods: [
          {
            icon: Mail,
            title: 'Email Support',
            description: 'carigobn@gmail.com',
            response: 'Response within 24 hours'
          },
          {
            icon: Phone,
            title: 'Phone Support',
            description: '+673 212 3456',
            hours: 'Monday-Friday, 9AM-6PM'
          },
          {
            icon: MessageSquare,
            title: 'Live Chat',
            description: 'Available on our platform',
            hours: 'Monday-Friday, 9AM-6PM'
          }
        ]
      },
      
      cta: {
        title: 'Still Need Help?',
        description: 'Our support team is here to help you succeed',
        button: 'Contact Support'
      }
    },
    ms: {
      hero: {
        title: 'Sokongan & Sumber',
        subtitle: 'Semua yang anda perlukan untuk berjaya di CariGo',
        cta: 'Dapatkan Bantuan Sekarang'
      },
      
      quickHelp: {
        title: 'Bantuan Pantas',
        subtitle: 'Cari jawapan kepada soalan biasa dengan segera',
        options: [
          {
            icon: Search,
            title: 'Cari Pusat Bantuan',
            description: 'Cari jawapan kepada soalan anda',
            action: 'Cari Sekarang'
          },
          {
            icon: MessageSquare,
            title: 'Chat Langsung',
            description: 'Chat dengan pasukan sokongan kami',
            action: 'Akan Datang',
            available: 'Tersedia 9AM-6PM'
          },
          {
            icon: Phone,
            title: 'Sokongan Telefon',
            description: 'Bercakap terus dengan sokongan',
            action: 'Panggil Sekarang',
            contact: '+673 212 3456'
          },
          {
            icon: Mail,
            title: 'Sokongan E-mel',
            description: 'Dapatkan bantuan melalui e-mel',
            action: 'Hantar E-mel',
            contact: 'carigobn@gmail.com'
          }
        ]
      },
      
      academy: {
        title: 'Akademi CariGo',
        subtitle: 'Pelajari cara memaksimumkan kejayaan anda',
        categories: [
          {
            title: 'Bermula',
            description: 'Panduan penting untuk pedagang baru',
            courses: [
              { title: 'Panduan Persediaan Kedai', duration: '15 min', type: 'Panduan' },
              { title: 'Petua Fotografi Produk', duration: '20 min', type: 'Video' },
              { title: 'Strategi Harga', duration: '25 min', type: 'Kursus' }
            ]
          },
          {
            title: 'Mengembangkan Perniagaan',
            description: 'Strategi lanjutan untuk pembangunan',
            courses: [
              { title: 'Asas Pemasaran Digital', duration: '30 min', type: 'Kursus' },
              { title: 'Kecemerlangan Perkhidmatan Pelanggan', duration: '20 min', type: 'Panduan' },
              { title: 'Pengurusan Inventori', duration: '25 min', type: 'Video' }
            ]
          },
          {
            title: 'Panduan Teknikal',
            description: 'Ciri dan alatan platform',
            courses: [
              { title: 'Panduan Integrasi API', duration: '45 min', type: 'Panduan' },
              { title: 'Analitik Mendalam', duration: '30 min', type: 'Video' },
              { title: 'Import/Eksport CSV', duration: '15 min', type: 'Tutorial' }
            ]
          }
        ]
      },
      
      documentation: {
        title: 'Dokumentasi',
        subtitle: 'Panduan dan rujukan komprehensif',
        sections: [
          {
            title: 'Panduan Platform',
            icon: BookOpen,
            items: [
              'Pengurusan Kedai',
              'Katalog Produk',
              'Pemprosesan Pesanan',
              'Pengurusan Pelanggan',
              'Analitik & Laporan'
            ]
          },
          {
            title: 'Dokumentasi API',
            icon: Settings,
            items: [
              'Bermula',
              'Pengesahan',
              'API Produk',
              'API Pesanan',
              'Webhooks'
            ]
          },
          {
            title: 'Dasar & Garis Panduan',
            icon: Shield,
            items: [
              'Perjanjian Penjual',
              'Garis Panduan Produk',
              'Dasar Penghantaran',
              'Dasar Pulangan'
            ]
          }
        ]
      },
      
      
      
      proSupport: {
        title: 'Sokongan Pro',
        subtitle: 'Sokongan premium untuk pedagang Pro',
        features: [
          {
            icon: Headphones,
            title: 'Pengurus Akaun Dedikasi',
            description: 'Sokongan peribadi dari pengurus akaun dedikasi'
          },
          {
            icon: Phone,
            title: 'Sokongan Telefon Keutamaan',
            description: 'Talian langsung ke pasukan sokongan kami dengan masa respons lebih cepat'
          },
          {
            icon: Calendar,
            title: 'Sesi Latihan Tersuai',
            description: 'Sesi latihan peribadi yang disesuaikan dengan keperluan perniagaan anda'
          },
          {
            icon: Zap,
            title: 'Permintaan Ciri',
            description: 'Pertimbangan keutamaan untuk permintaan ciri baru'
          }
        ]
      },
      
      contact: {
        title: 'Hubungi Kami',
        subtitle: 'Berhubung dengan pasukan sokongan kami',
        methods: [
          {
            icon: Mail,
            title: 'Sokongan E-mel',
            description: 'carigobn@gmail.com',
            response: 'Respons dalam 24 jam'
          },
          {
            icon: Phone,
            title: 'Sokongan Telefon',
            description: '+673 212 3456',
            hours: 'Isnin-Jumaat, 9AM-6PM'
          },
          {
            icon: MessageSquare,
            title: 'Chat Langsung',
            description: 'Tersedia di platform kami',
            hours: 'Isnin-Jumaat, 9AM-6PM'
          }
        ]
      },
      
      cta: {
        title: 'Masih Perlu Bantuan?',
        description: 'Pasukan sokongan kami di sini untuk membantu anda berjaya',
        button: 'Hubungi Sokongan'
      }
    }
  }

  const c = content[language]

  return (
    <MerchantLayout>
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center bg-gradient-to-br from-primary via-primary to-primary/90 text-white overflow-hidden">
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

      {/* Quick Help */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">{c.quickHelp.title}</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">{c.quickHelp.subtitle}</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {c.quickHelp.options.map((option, index) => {
              const Icon = option.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                  <p className="text-muted-foreground mb-4">{option.description}</p>
                  {option.available && (
                    <p className="text-sm text-secondary mb-4">{option.available}</p>
                  )}
                  {option.contact && (
                    <p className="text-sm font-semibold text-primary mb-4">{option.contact}</p>
                  )}
                  {option.title === (language === 'en' ? 'Search Help Center' : 'Cari Pusat Bantuan') ? (
                    <Link to="/help">
                      <Button variant="outline" className="w-full">
                        {option.action}
                      </Button>
                    </Link>
                  ) : option.title === (language === 'en' ? 'Phone Support' : 'Sokongan Telefon') ? (
                    <a href="tel:+6732123456" className="block">
                      <Button variant="outline" className="w-full">
                        {option.action}
                      </Button>
                    </a>
                  ) : option.title === (language === 'en' ? 'Email Support' : 'Sokongan E-mel') ? (
                    <a href="mailto:carigobn@gmail.com" className="block">
                      <Button variant="outline" className="w-full">
                        {option.action}
                      </Button>
                    </a>
                  ) : (
                    <Button variant="outline" className="w-full">
                      {option.action}
                    </Button>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CariGo Academy */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">{c.academy.title}</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">{c.academy.subtitle}</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {c.academy.categories.map((category, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                  <GraduationCap className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                <p className="text-muted-foreground mb-6">{category.description}</p>
                
                <div className="space-y-3">
                  {category.courses.map((course, courseIndex) => (
                    <div key={courseIndex} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <PlayCircle className="w-5 h-5 text-secondary" />
                        <span className="font-medium">{course.title}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{course.duration}</span>
                        <span className="bg-secondary/10 text-secondary px-2 py-1 rounded text-xs">
                          {course.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">{c.documentation.title}</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">{c.documentation.subtitle}</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {c.documentation.sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6">{section.title}</h3>
                  
                  <div className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-3 hover:text-primary transition-colors cursor-pointer">
                        <ChevronRight className="w-4 h-4" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full mt-6">
                    {language === 'en' ? 'View All' : 'Lihat Semua'}
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pro Support */}
      <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4 text-white">{c.proSupport.title}</h2>
            <p className="text-center text-white/90 mb-16 text-lg">{c.proSupport.subtitle}</p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {c.proSupport.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="p-6 bg-white/10 backdrop-blur hover:bg-white/20 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                    <p className="text-white/80">{feature.description}</p>
                  </Card>
                );
              })}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/pricing">
                <Button size="lg" variant="inverseSecondary" className="text-lg px-8">
                  {language === 'en' ? 'Upgrade to Pro' : 'Naik Taraf ke Pro'} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">{c.contact.title}</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">{c.contact.subtitle}</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {c.contact.methods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card key={index} className="p-8 text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{method.title}</h3>
                  <p className="text-lg font-semibold text-primary mb-2">{method.description}</p>
                  <p className="text-muted-foreground mb-4">{method.response || method.hours}</p>
                  {method.title === (language === 'en' ? 'Phone Support' : 'Sokongan Telefon') ? (
                    <a href="tel:+6732123456" className="block">
                      <Button variant="outline" className="w-full">
                        {language === 'en' ? 'Call Now' : 'Panggil Sekarang'}
                      </Button>
                    </a>
                  ) : method.title === (language === 'en' ? 'Email Support' : 'Sokongan E-mel') ? (
                    <a href="mailto:carigobn@gmail.com" className="block">
                      <Button variant="outline" className="w-full">
                        {language === 'en' ? 'Send Email' : 'Hantar E-mel'}
                      </Button>
                    </a>
                  ) : (
                    <Button variant="outline" className="w-full" disabled>
                      {language === 'en' ? 'Coming Soon' : 'Akan Datang'}
                    </Button>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{c.cta.title}</h2>
            <p className="text-xl md:text-2xl mb-10 text-white/90">{c.cta.description}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/apply">
                <Button size="lg" variant="inverseSecondary" className="text-lg px-10">
                  {c.cta.button} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/faq">
                <Button size="lg" variant="outlineWhite" className="text-lg px-10">
                  {language === 'en' ? 'View FAQ' : 'Lihat FAQ'}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MerchantLayout>
  )
}

export default Support
