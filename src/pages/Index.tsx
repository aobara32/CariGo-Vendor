import React from 'react'
import MerchantLayout from '../layouts/MerchantLayout'
import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { 
  Store,
  TrendingUp, 
  Users, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Clock,
  Heart,
  Star,
  Smartphone,
  Laptop,
  Package,
  CreditCard,
  Globe,
  Target,
  Award
} from "lucide-react"

// Using free stock images from Unsplash
const heroImage = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
const businessImage = "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
const successImage = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"

const Index = () => {

  const content = {
    en: {
      hero: {
        title: "Your Local Business Deserves a Global Platform",
        subtitle: "Join 250+ Brunei merchants already growing their business online with CariGo",
        cta1: "Start Selling Today",
        cta2: "See How It Works"
      },
      story: {
        title: "Built for Brunei, By People Who Understand Your Business",
        intro: "We know starting online can feel overwhelming. That's why we created CariGo—a platform that makes selling online as simple as running your physical store.",
        stats: [
          { number: "$2M+", label: "Annual Sales Volume" },
          { number: "250+", label: "Active Merchants" },
          { number: "98%", label: "Satisfaction Rate" },
          { number: "3-5", label: "Days to Launch" }
        ]
      },
      journey: {
        title: "From Local Store to Online Success",
        subtitle: "See how merchants like you transformed their business",
        steps: [
          {
            title: "Meet Ahmad",
            description: "Runs a small electronics shop in Bandar. Struggled with foot traffic and wanted to reach more customers.",
            image: "📱",
            icon: Store
          },
          {
            title: "Discovered CariGo",
            description: "Applied online in 10 minutes. Got approved in 24 hours. Set up his store with 50 products in one afternoon.",
            image: "✨",
            icon: Zap
          },
          {
            title: "Growing Every Month",
            description: "Now reaching customers across Brunei. Tripled his revenue in 6 months. Upgraded to Pro plan for API integration.",
            image: "📈",
            icon: TrendingUp
          }
        ]
      },
      whyCarigo: {
        title: "Why Merchants Choose CariGo",
        features: [
          {
            icon: Zap,
            title: "Launch in Days, Not Months",
            description: "Simple application, fast approval, intuitive dashboard. You could be selling by this weekend."
          },
          {
            icon: Shield,
            title: "Transparent & Fair",
            description: "No hidden fees. Clear pricing. You always know exactly what you're paying and why."
          },
          {
            icon: Users,
            title: "Built for Local",
            description: "We understand Brunei's market. Support in English & Malay. Local payment methods."
          },
          {
            icon: TrendingUp,
            title: "Grow at Your Pace",
            description: "Start free, upgrade when ready. From 50 products to unlimited. We scale with you."
          }
        ]
      },
      howItWorks: {
        title: "Getting Started is Simple",
        subtitle: "Four steps to your online store",
        button: "See Detailed Process"
      },
      features: {
        title: "Everything You Need to Succeed",
        subtitle: "Professional tools without the complexity",
        button: "Explore All Features"
      },
      pricing: {
        title: "Plans That Grow With You",
        subtitle: "Start free, upgrade when you're ready",
        plans: [
          { name: "Core", price: "$0/mo", desc: "Perfect for testing" },
          { name: "Basic", price: "$48/mo", desc: "Most popular", badge: true },
          { name: "Pro", price: "$90/mo", desc: "For scaling" }
        ],
        button: "Compare All Plans"
      },
      cta: {
        title: "Ready to Take Your Business Online?",
        description: "Join successful merchants already selling on CariGo",
        button: "Apply Now - It's Free"
      }
    },
    ms: {
      hero: {
        title: "Perniagaan Tempatan Anda Layak Platform Global",
        subtitle: "Sertai 250+ pedagang Brunei yang sudah mengembangkan perniagaan dalam talian dengan CariGo",
        cta1: "Mula Menjual Hari Ini",
        cta2: "Lihat Cara Ia Berfungsi"
      },
      story: {
        title: "Dibina untuk Brunei, Oleh Orang Yang Memahami Perniagaan Anda",
        intro: "Kami tahu bermula dalam talian boleh terasa menakutkan. Itulah sebabnya kami mencipta CariGo—platform yang menjadikan jualan dalam talian semudah mengendalikan kedai fizikal anda.",
        stats: [
          { number: "$2J+", label: "Jumlah Jualan Tahunan" },
          { number: "250+", label: "Pedagang Aktif" },
          { number: "98%", label: "Kadar Kepuasan" },
          { number: "3-5", label: "Hari untuk Lancar" }
        ]
      },
      journey: {
        title: "Dari Kedai Tempatan ke Kejayaan Dalam Talian",
        subtitle: "Lihat bagaimana pedagang seperti anda mengubah perniagaan mereka",
        steps: [
          {
            title: "Kenali Ahmad",
            description: "Mengendalikan kedai elektronik kecil di Bandar. Bergelut dengan trafik kaki dan mahu menjangkau lebih ramai pelanggan.",
            image: "📱",
            icon: Store
          },
          {
            title: "Temui CariGo",
            description: "Memohon dalam talian dalam 10 minit. Diluluskan dalam 24 jam. Menyediakan kedainya dengan 50 produk dalam satu petang.",
            image: "✨",
            icon: Zap
          },
          {
            title: "Berkembang Setiap Bulan",
            description: "Kini menjangkau pelanggan di seluruh Brunei. Tiga kali ganda hasilnya dalam 6 bulan. Naik taraf ke pelan Pro untuk integrasi API.",
            image: "📈",
            icon: TrendingUp
          }
        ]
      },
      whyCarigo: {
        title: "Mengapa Pedagang Memilih CariGo",
        features: [
          {
            icon: Zap,
            title: "Lancar dalam Hari, Bukan Bulan",
            description: "Permohonan mudah, kelulusan pantas, papan pemuka intuitif. Anda boleh menjual hujung minggu ini."
          },
          {
            icon: Shield,
            title: "Telus & Adil",
            description: "Tiada yuran tersembunyi. Harga jelas. Anda sentiasa tahu apa yang anda bayar dan mengapa."
          },
          {
            icon: Users,
            title: "Dibina untuk Tempatan",
            description: "Kami memahami pasaran Brunei. Sokongan dalam Bahasa Inggeris & Melayu. Kaedah pembayaran tempatan."
          },
          {
            icon: TrendingUp,
            title: "Berkembang Mengikut Rentak Anda",
            description: "Mulakan percuma, naik taraf bila bersedia. Dari 50 produk ke tanpa had. Kami berkembang dengan anda."
          }
        ]
      },
      howItWorks: {
        title: "Bermula adalah Mudah",
        subtitle: "Empat langkah ke kedai dalam talian anda",
        button: "Lihat Proses Terperinci"
      },
      features: {
        title: "Semua Yang Anda Perlukan untuk Berjaya",
        subtitle: "Alatan profesional tanpa kerumitan",
        button: "Terokai Semua Ciri"
      },
      pricing: {
        title: "Pelan Yang Berkembang Dengan Anda",
        subtitle: "Mulakan percuma, naik taraf bila bersedia",
        plans: [
          { name: "Core", price: "$0/bln", desc: "Sempurna untuk ujian" },
          { name: "Basic", price: "$48/bln", desc: "Paling popular", badge: true },
          { name: "Pro", price: "$90/bln", desc: "Untuk pembangunan" }
        ],
        button: "Bandingkan Semua Pelan"
      },
      cta: {
        title: "Bersedia untuk Bawa Perniagaan Anda Dalam Talian?",
        description: "Sertai pedagang berjaya yang sudah menjual di CariGo",
        button: "Mohon Sekarang - Percuma"
      }
    }
  }

  const { language } = useLanguage()
  const c = content[language]

  return (
    <MerchantLayout>
      {/* Hero Section with Image */}
      <section className="relative min-h-[600px] flex items-center bg-gradient-to-br from-primary via-primary to-primary/90 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {c.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white/90">
              {c.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/apply">
                <Button size="lg" variant="inverse" className="text-lg px-8">
                  {c.hero.cta1}
                </Button>
              </Link>
              <Link to="/getting-started">
                <Button size="lg" variant="outlineWhite" className="text-lg px-8">
                  {c.hero.cta2}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{c.story.title}</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {c.story.intro}
            </p>
          </div>

          {/* Stats with Background Image */}
          <div className="relative rounded-2xl overflow-hidden mb-16">
            <div className="absolute inset-0">
              <img src={businessImage} alt="Business growth" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary/80"></div>
            </div>
            <div className="relative z-10 py-20 px-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                <Card className="p-8 text-center hover:shadow-lg transition-shadow border-2 bg-white/95 backdrop-blur">
                  <div className="text-5xl font-bold text-primary mb-2">
                    $50M
                  </div>
                  <div className="text-muted-foreground">{language === 'en' ? 'Brunei Market Size' : 'Saiz Pasaran Brunei'}</div>
                </Card>
                <Card className="p-8 text-center hover:shadow-lg transition-shadow border-2 bg-white/95 backdrop-blur">
                  <div className="text-5xl font-bold text-primary mb-2">
                    45,000+
                  </div>
                  <div className="text-muted-foreground">{language === 'en' ? 'Target Customers' : 'Pelanggan Sasaran'}</div>
                </Card>
                <Card className="p-8 text-center hover:shadow-lg transition-shadow border-2 bg-white/95 backdrop-blur">
                  <div className="text-5xl font-bold text-primary mb-2">
                    15%
                  </div>
                  <div className="text-muted-foreground">{language === 'en' ? 'Online Penetration' : 'Penembusan Dalam Talian'}</div>
                </Card>
                <Card className="p-8 text-center hover:shadow-lg transition-shadow border-2 bg-white/95 backdrop-blur">
                  <div className="text-5xl font-bold text-primary mb-2">
                    25%
                  </div>
                  <div className="text-muted-foreground">{language === 'en' ? 'Annual Growth Rate' : 'Kadar Pertumbuhan Tahunan'}</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Journey */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{c.journey.title}</h2>
            <p className="text-xl text-muted-foreground">{c.journey.subtitle}</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {c.journey.steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    {index < c.journey.steps.length - 1 && (
                      <div className="hidden md:block absolute top-24 left-[60%] w-full h-0.5 bg-primary/20">
                        <ArrowRight className="absolute right-0 -top-3 w-6 h-6 text-primary" />
                      </div>
                    )}
                    <Card className="p-8 h-full hover:shadow-xl transition-shadow">
                      <div className="flex items-center justify-center mb-6">
                        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="w-10 h-10 text-primary" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-center">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why CariGo */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">{c.whyCarigo.title}</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {c.whyCarigo.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>


      {/* How It Works Preview */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur flex items-center justify-center mx-auto mb-6">
              <Store className="w-10 h-10" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{c.howItWorks.title}</h2>
            <p className="text-xl mb-8 text-white/90">{c.howItWorks.subtitle}</p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur px-6 py-3 rounded-full">
                <div className="w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center font-bold">1</div>
                <span>{language === 'en' ? 'Apply & Get Approved' : 'Mohon & Diluluskan'}</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur px-6 py-3 rounded-full">
                <div className="w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center font-bold">2</div>
                <span>{language === 'en' ? 'Verify KYC' : 'Sahkan KYC'}</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur px-6 py-3 rounded-full">
                <div className="w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center font-bold">3</div>
                <span>{language === 'en' ? 'Set Up Store' : 'Sediakan Kedai'}</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur px-6 py-3 rounded-full">
                <div className="w-8 h-8 rounded-full bg-white text-primary flex items-center justify-center font-bold">4</div>
                <span>{language === 'en' ? 'Start Selling' : 'Mula Menjual'}</span>
              </div>
            </div>
            
            <Link to="/getting-started">
              <Button size="lg" variant="inverse" className="text-lg px-8">
                {c.howItWorks.button} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{c.features.title}</h2>
            <p className="text-xl text-muted-foreground">{c.features.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {[
              { icon: BarChart3, title: language === 'en' ? 'Analytics Dashboard' : 'Papan Pemuka Analitik' },
              { icon: Zap, title: language === 'en' ? 'Fast Inventory Sync' : 'Penyegerakan Inventori Pantas' },
              { icon: Shield, title: language === 'en' ? 'Secure Payments' : 'Pembayaran Selamat' },
              { icon: Clock, title: language === 'en' ? 'Flexible Payouts' : 'Pembayaran Fleksibel' },
              { icon: Users, title: language === 'en' ? 'Customer Support' : 'Sokongan Pelanggan' },
              { icon: Heart, title: language === 'en' ? 'Built for Brunei' : 'Dibina untuk Brunei' }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <Icon className="w-10 h-10 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold">{item.title}</h3>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Link to="/features">
              <Button size="lg" variant="default" className="text-lg px-8">
                {c.features.button} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{c.pricing.title}</h2>
            <p className="text-xl text-muted-foreground">{c.pricing.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {c.pricing.plans.map((plan, index) => (
              <Card key={index} className={`p-8 text-center hover:shadow-xl transition-shadow relative ${plan.badge ? 'border-2 border-primary' : ''}`}>
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {plan.desc}
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold text-primary mb-4">{plan.price}</div>
                <p className="text-muted-foreground">{plan.desc}</p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/pricing">
              <Button size="lg" variant="default" className="text-lg px-8">
                {c.pricing.button} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">{c.cta.title}</h2>
            <p className="text-xl md:text-2xl mb-10 text-white/90">{c.cta.description}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link to="/apply">
                <Button size="lg" variant="inverseSecondary" className="text-lg px-10">
                  {c.cta.button} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outlineWhite" className="text-lg px-10">
                  {language === 'en' ? 'Learn More About Us' : 'Ketahui Lebih Lanjut'}
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>{language === 'en' ? 'No setup fees' : 'Tiada yuran persediaan'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>{language === 'en' ? 'Free to start' : 'Percuma untuk bermula'}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>{language === 'en' ? 'Cancel anytime' : 'Batalkan bila-bila masa'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MerchantLayout>
  )
}

export default Index
