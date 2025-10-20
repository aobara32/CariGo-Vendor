import React from 'react'
import MerchantLayout from '../layouts/MerchantLayout'
import { Card } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'
import { 
  BarChart3,
  Zap,
  Shield,
  Clock,
  Users,
  Heart,
  Smartphone,
  Laptop,
  Package,
  CreditCard,
  Globe,
  Target,
  Award,
  ArrowRight,
  CheckCircle2,
  Upload,
  Download,
  MessageSquare,
  Settings,
  Eye,
  TrendingUp,
  Calendar,
  DollarSign,
  FileText,
  Database,
  Lock,
  Bell,
  Search,
  Filter,
  Star,
  ShoppingCart,
  Truck,
  Headphones
} from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const Features = ({ children }: { children?: React.ReactNode }) => {
  const { language } = useLanguage()

  const content = {
    en: {
      hero: {
        title: 'Everything You Need to Sell Online',
        subtitle: 'Professional tools without the complexity. Built specifically for Brunei merchants.',
        cta: 'Start Selling Today'
      },
      
      coreFeatures: [
        {
          icon: BarChart3,
          title: 'Analytics Dashboard',
          description: 'Track your sales, monitor performance, and understand your customers with detailed analytics.',
          features: ['Real-time sales data', 'Customer insights', 'Product performance', 'Revenue trends']
        },
        {
          icon: Zap,
          title: 'Fast Inventory Sync',
          description: 'Keep your inventory updated across all channels with our lightning-fast sync technology.',
          features: ['Real-time updates', 'Bulk operations', 'Automated alerts', 'Multi-channel sync']
        },
        {
          icon: Shield,
          title: 'Secure Payments',
          description: 'Accept payments safely with our secure payment processing and fraud protection.',
          features: ['PCI compliance', 'Fraud detection', 'Multiple payment methods', 'Secure transactions']
        },
        {
          icon: Clock,
          title: 'Flexible Payouts',
          description: 'Get paid on your schedule with flexible payout options that suit your business needs.',
          features: ['Daily/Weekly/Monthly', 'Instant transfers', 'Low fees', 'Transparent timing']
        },
        {
          icon: Users,
          title: 'Customer Support',
          description: 'Dedicated support team ready to help you succeed with your online business.',
          features: ['24/7 platform support', 'Email & phone support', 'Live chat', 'Knowledge base']
        },
        {
          icon: Heart,
          title: 'Built for Brunei',
          description: 'Designed specifically for the Brunei market with local features and support.',
          features: ['Local payment methods', 'Brunei shipping', 'Malay & English support', 'Local regulations']
        }
      ],
      
      tools: [
        {
          icon: Upload,
          title: 'CSV Import/Export',
          description: 'Easily manage large product catalogs with bulk import and export capabilities.',
          available: ['Basic', 'Pro']
        },
        {
          icon: MessageSquare,
          title: 'Customer Messaging',
          description: 'Communicate directly with customers through our integrated messaging system.',
          available: ['Basic', 'Pro']
        },
        {
          icon: Settings,
          title: 'Store Customization',
          description: 'Customize your store appearance and functionality to match your brand.',
          available: ['Basic', 'Pro']
        },
        {
          icon: Eye,
          title: 'Advanced Analytics',
          description: 'Deep insights into customer behavior, sales patterns, and business performance.',
          available: ['Basic', 'Pro']
        },
        {
          icon: Database,
          title: 'API Access',
          description: 'Integrate with your existing systems using our comprehensive API.',
          available: ['Pro']
        },
        {
          icon: FileText,
          title: 'Custom Reporting',
          description: 'Generate detailed reports tailored to your business needs.',
          available: ['Pro']
        }
      ],
      
      support: {
        title: 'Comprehensive Support',
        subtitle: 'We\'re here to help you succeed every step of the way',
        levels: [
          {
            name: 'Core Support',
            description: 'Email support and comprehensive knowledge base',
            features: ['Email support', 'Knowledge base', 'Basic tutorials'],
            icon: MessageSquare
          },
          {
            name: 'Priority Support',
            description: 'Faster response times and additional support channels',
            features: ['Priority email', 'Phone support', 'Live chat', 'Video tutorials'],
            icon: Headphones
          },
          {
            name: 'Dedicated Support',
            description: 'Personal account manager and premium support',
            features: ['Dedicated manager', 'Priority phone', 'Custom training', 'Direct line'],
            icon: Users
          }
        ]
      },
      
      academy: {
        title: 'CariGo Academy',
        subtitle: 'Learn how to maximize your online sales potential',
        courses: [
          {
            title: 'Getting Started',
            description: 'Learn the basics of setting up and managing your online store',
            duration: '2 hours',
            level: 'Beginner'
          },
          {
            title: 'Product Photography',
            description: 'Master the art of product photography to increase sales',
            duration: '3 hours',
            level: 'Intermediate'
          },
          {
            title: 'Digital Marketing',
            description: 'Learn how to promote your store and attract customers',
            duration: '4 hours',
            level: 'Advanced'
          },
          {
            title: 'Inventory Management',
            description: 'Optimize your inventory and reduce stockouts',
            duration: '2 hours',
            level: 'Intermediate'
          }
        ]
      },
      
      cta: {
        title: 'Ready to Get Started?',
        description: 'Choose the plan that fits your business and start selling today.',
        button: 'View Pricing'
      }
    },
    ms: {
      hero: {
        title: 'Semua Yang Anda Perlukan untuk Menjual Dalam Talian',
        subtitle: 'Alatan profesional tanpa kerumitan. Dibina khusus untuk pedagang Brunei.',
        cta: 'Mula Menjual Hari Ini'
      },
      
      coreFeatures: [
        {
          icon: BarChart3,
          title: 'Papan Pemuka Analitik',
          description: 'Pantau jualan anda, monitor prestasi, dan fahami pelanggan anda dengan analitik terperinci.',
          features: ['Data jualan masa nyata', 'Wawasan pelanggan', 'Prestasi produk', 'Trend pendapatan']
        },
        {
          icon: Zap,
          title: 'Penyegerakan Inventori Pantas',
          description: 'Pastikan inventori anda dikemas kini di semua saluran dengan teknologi penyegerakan pantas kami.',
          features: ['Kemas kini masa nyata', 'Operasi pukal', 'Amaran automatik', 'Penyegerakan multi-saluran']
        },
        {
          icon: Shield,
          title: 'Pembayaran Selamat',
          description: 'Terima pembayaran dengan selamat dengan pemprosesan pembayaran selamat dan perlindungan penipuan kami.',
          features: ['Pematuhan PCI', 'Pengesanan penipuan', 'Pelbagai kaedah pembayaran', 'Transaksi selamat']
        },
        {
          icon: Clock,
          title: 'Pembayaran Fleksibel',
          description: 'Dapatkan bayaran mengikut jadual anda dengan pilihan pembayaran fleksibel yang sesuai dengan keperluan perniagaan anda.',
          features: ['Harian/Mingguan/Bulanan', 'Pemindahan segera', 'Yuran rendah', 'Masa yang telus']
        },
        {
          icon: Users,
          title: 'Sokongan Pelanggan',
          description: 'Pasukan sokongan dedikasi bersedia membantu anda berjaya dengan perniagaan dalam talian anda.',
          features: ['Sokongan platform 24/7', 'Sokongan e-mel & telefon', 'Chat langsung', 'Pangkalan pengetahuan']
        },
        {
          icon: Heart,
          title: 'Dibina untuk Brunei',
          description: 'Direka khusus untuk pasaran Brunei dengan ciri tempatan dan sokongan.',
          features: ['Kaedah pembayaran tempatan', 'Penghantaran Brunei', 'Sokongan Melayu & Inggeris', 'Peraturan tempatan']
        }
      ],
      
      tools: [
        {
          icon: Upload,
          title: 'Import/Eksport CSV',
          description: 'Urus katalog produk besar dengan mudah dengan keupayaan import dan eksport pukal.',
          available: ['Basic', 'Pro']
        },
        {
          icon: MessageSquare,
          title: 'Pemesejan Pelanggan',
          description: 'Berkomunikasi terus dengan pelanggan melalui sistem pemesejan bersepadu kami.',
          available: ['Basic', 'Pro']
        },
        {
          icon: Settings,
          title: 'Penyesuaian Kedai',
          description: 'Sesuaikan penampilan dan fungsi kedai anda untuk sepadan dengan jenama anda.',
          available: ['Basic', 'Pro']
        },
        {
          icon: Eye,
          title: 'Analitik Lanjutan',
          description: 'Wawasan mendalam tentang tingkah laku pelanggan, corak jualan, dan prestasi perniagaan.',
          available: ['Basic', 'Pro']
        },
        {
          icon: Database,
          title: 'Akses API',
          description: 'Integrasikan dengan sistem sedia ada anda menggunakan API komprehensif kami.',
          available: ['Pro']
        },
        {
          icon: FileText,
          title: 'Laporan Tersuai',
          description: 'Jana laporan terperinci yang disesuaikan dengan keperluan perniagaan anda.',
          available: ['Pro']
        }
      ],
      
      support: {
        title: 'Sokongan Komprehensif',
        subtitle: 'Kami di sini untuk membantu anda berjaya pada setiap langkah',
        levels: [
          {
            name: 'Sokongan Core',
            description: 'Sokongan e-mel dan pangkalan pengetahuan komprehensif',
            features: ['Sokongan e-mel', 'Pangkalan pengetahuan', 'Tutorial asas'],
            icon: MessageSquare
          },
          {
            name: 'Sokongan Keutamaan',
            description: 'Masa respons lebih cepat dan saluran sokongan tambahan',
            features: ['E-mel keutamaan', 'Sokongan telefon', 'Chat langsung', 'Tutorial video'],
            icon: Headphones
          },
          {
            name: 'Sokongan Dedikasi',
            description: 'Pengurus akaun peribadi dan sokongan premium',
            features: ['Pengurus dedikasi', 'Telefon keutamaan', 'Latihan tersuai', 'Talian langsung'],
            icon: Users
          }
        ]
      },
      
      academy: {
        title: 'Akademi CariGo',
        subtitle: 'Pelajari cara memaksimumkan potensi jualan dalam talian anda',
        courses: [
          {
            title: 'Bermula',
            description: 'Pelajari asas-asas menyediakan dan mengurus kedai dalam talian anda',
            duration: '2 jam',
            level: 'Pemula'
          },
          {
            title: 'Fotografi Produk',
            description: 'Kuasai seni fotografi produk untuk meningkatkan jualan',
            duration: '3 jam',
            level: 'Sederhana'
          },
          {
            title: 'Pemasaran Digital',
            description: 'Pelajari cara mempromosikan kedai anda dan menarik pelanggan',
            duration: '4 jam',
            level: 'Lanjutan'
          },
          {
            title: 'Pengurusan Inventori',
            description: 'Optimumkan inventori anda dan kurangkan kehabisan stok',
            duration: '2 jam',
            level: 'Sederhana'
          }
        ]
      },
      
      cta: {
        title: 'Bersedia untuk Bermula?',
        description: 'Pilih pelan yang sesuai dengan perniagaan anda dan mula menjual hari ini.',
        button: 'Lihat Harga'
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

      {/* Core Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            {language === 'en' ? 'Core Features' : 'Ciri Teras'}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {c.coreFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>
                  
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Advanced Tools */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            {language === 'en' ? 'Advanced Tools' : 'Alatan Lanjutan'}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {c.tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{tool.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{tool.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {tool.available.map((plan, planIndex) => (
                      <span key={planIndex} className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-semibold">
                        {plan}
                      </span>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support Levels */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">{c.support.title}</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">{c.support.subtitle}</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {c.support.levels.map((level, index) => {
              const Icon = level.icon;
              return (
                <Card key={index} className={`p-8 hover:shadow-xl transition-shadow ${index === 1 ? 'border-2 border-primary' : ''}`}>
                  {index === 1 && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {language === 'en' ? 'Most Popular' : 'Paling Popular'}
                    </div>
                  )}
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{level.name}</h3>
                  <p className="text-muted-foreground mb-6">{level.description}</p>
                  
                  <ul className="space-y-3">
                    {level.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CariGo Academy - Coming Soon */}
      <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{c.academy.title}</h2>
            <p className="text-xl text-white/90 mb-10">{c.academy.subtitle}</p>
            <Card className="p-10 bg-white/10 backdrop-blur border-white/20 inline-block">
              <div className="text-2xl font-bold text-white mb-2">{language === 'en' ? 'Coming Soon' : 'Akan Datang'}</div>
              <p className="text-white/80 max-w-xl">
                {language === 'en' ? 'We are preparing comprehensive learning materials for merchants.' : 'Kami sedang menyediakan bahan pembelajaran komprehensif untuk peniaga.'}
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{c.cta.title}</h2>
            <p className="text-xl md:text-2xl mb-10 text-muted-foreground">{c.cta.description}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pricing">
                <Button size="lg" variant="default" className="text-lg px-10">
                  {c.cta.button} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/getting-started">
                <Button size="lg" variant="outline" className="text-lg px-10">
                  {language === 'en' ? 'Getting Started' : 'Bermula'}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MerchantLayout>
  )
}

export default Features
