import React from 'react'
import MerchantLayout from '../layouts/MerchantLayout'
import { Card } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'
import { 
  Users, 
  TrendingUp, 
  Shield, 
  Heart,
  Target,
  Award,
  Zap,
  Globe,
  ArrowRight,
  Building2,
  Lightbulb,
  Handshake,
  Star,
  CheckCircle2
} from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

// Using free stock images from Unsplash
const heroImage = "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
const teamImage = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
const valuesImage = "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"

const About = () => {
  const { language } = useLanguage()

  const content = {
    en: {
      hero: {
        title: 'About CariGo',
        subtitle: 'Empowering Local Businesses to Thrive Online',
        cta: 'Start with CariGo'
      },
      intro: 'CariGo is Brunei\'s premier e-commerce platform designed specifically for local merchants. We understand the unique challenges of selling online in Brunei and have built a platform that makes it simple, affordable, and profitable.',
      
      mission: {
        title: 'Our Mission',
        description: 'To empower every local business in Brunei to succeed in the digital economy by providing world-class tools, support, and infrastructure that levels the playing field.',
      },
      
      vision: {
        title: 'Our Vision',
        description: 'To become the backbone of Brunei\'s digital commerce ecosystem, connecting local merchants with customers seamlessly while preserving the personal touch that makes local shopping special.',
      },
      
      values: [
        {
          icon: Heart,
          title: 'Local First',
          description: 'We prioritize the needs of Brunei businesses and understand local market dynamics.',
        },
        {
          icon: Shield,
          title: 'Trust & Transparency',
          description: 'Clear pricing, honest communication, and secure transactions are our foundation.',
        },
        {
          icon: Zap,
          title: 'Innovation',
          description: 'We continuously improve our platform with the latest technology and features.',
        },
        {
          icon: Users,
          title: 'Partnership',
          description: 'Your success is our success. We grow together through mutual support.',
        },
      ],
      
      stats: [
        { number: '250+', label: 'Active Merchants' },
        { number: '$2M+', label: 'Annual GMV' },
        { number: '98%', label: 'Satisfaction Rate' },
        { number: '24/7', label: 'Platform Uptime' },
      ],
      
      difference: {
        title: 'What Makes Us Different',
        items: [
          {
            icon: Target,
            title: 'Built for Brunei',
            description: 'Unlike generic platforms, we\'re designed specifically for the Brunei market with features that matter locally.',
          },
          {
            icon: TrendingUp,
            title: 'Transparent Economics',
            description: 'No hidden fees, no surprises. You always know exactly what you\'re paying and why.',
          },
          {
            icon: Award,
            title: 'Practical Support',
            description: 'Real people, based in Brunei, ready to help you succeed. Not just automated responses.',
          },
          {
            icon: Globe,
            title: 'Modern Technology',
            description: 'Enterprise-grade infrastructure that scales with your business, from day one to thousands of orders.',
          },
        ],
      },
      
      cta: {
        title: 'Ready to Start Selling?',
        description: 'Join hundreds of successful local merchants already selling on CariGo.',
        button: 'Apply to Sell',
      },
    },
    ms: {
      hero: {
        title: 'Tentang CariGo',
        subtitle: 'Memperkasakan Perniagaan Tempatan untuk Berkembang Dalam Talian',
        cta: 'Mula dengan CariGo'
      },
      intro: 'CariGo adalah platform e-dagang utama Brunei yang direka khusus untuk pedagang tempatan. Kami memahami cabaran unik menjual dalam talian di Brunei dan telah membina platform yang menjadikannya mudah, berpatutan, dan menguntungkan.',
      
      mission: {
        title: 'Misi Kami',
        description: 'Untuk memperkasakan setiap perniagaan tempatan di Brunei untuk berjaya dalam ekonomi digital dengan menyediakan alatan, sokongan, dan infrastruktur bertaraf dunia yang menyamakan peluang.',
      },
      
      vision: {
        title: 'Visi Kami',
        description: 'Untuk menjadi tulang belakang ekosistem perdagangan digital Brunei, menghubungkan pedagang tempatan dengan pelanggan dengan lancar sambil mengekalkan sentuhan peribadi yang menjadikan membeli-belah tempatan istimewa.',
      },
      
      values: [
        {
          icon: Heart,
          title: 'Tempatan Dahulu',
          description: 'Kami mengutamakan keperluan perniagaan Brunei dan memahami dinamik pasaran tempatan.',
        },
        {
          icon: Shield,
          title: 'Kepercayaan & Ketelusan',
          description: 'Harga yang jelas, komunikasi jujur, dan transaksi selamat adalah asas kami.',
        },
        {
          icon: Zap,
          title: 'Inovasi',
          description: 'Kami terus meningkatkan platform kami dengan teknologi dan ciri terkini.',
        },
        {
          icon: Users,
          title: 'Perkongsian',
          description: 'Kejayaan anda adalah kejayaan kami. Kami berkembang bersama melalui sokongan bersama.',
        },
      ],
      
      stats: [
        { number: '250+', label: 'Pedagang Aktif' },
        { number: '$2J+', label: 'GMV Tahunan' },
        { number: '98%', label: 'Kadar Kepuasan' },
        { number: '24/7', label: 'Masa Aktif Platform' },
      ],
      
      difference: {
        title: 'Apa Yang Membezakan Kami',
        items: [
          {
            icon: Target,
            title: 'Dibina untuk Brunei',
            description: 'Tidak seperti platform generik, kami direka khusus untuk pasaran Brunei dengan ciri yang penting di tempatan.',
          },
          {
            icon: TrendingUp,
            title: 'Ekonomi Telus',
            description: 'Tiada yuran tersembunyi, tiada kejutan. Anda sentiasa tahu tepat apa yang anda bayar dan mengapa.',
          },
          {
            icon: Award,
            title: 'Sokongan Praktikal',
            description: 'Orang sebenar, berpangkalan di Brunei, bersedia membantu anda berjaya. Bukan hanya respons automatik.',
          },
          {
            icon: Globe,
            title: 'Teknologi Moden',
            description: 'Infrastruktur gred perusahaan yang berkembang dengan perniagaan anda, dari hari pertama hingga beribu pesanan.',
          },
        ],
      },
      
      cta: {
        title: 'Bersedia untuk Mula Menjual?',
        description: 'Sertai beratus pedagang tempatan yang berjaya sudah menjual di CariGo.',
        button: 'Mohon untuk Menjual',
      },
    },
  }

  const c = content[language]

  return (
    <MerchantLayout>
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center bg-gradient-to-br from-primary via-primary to-primary/90 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
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

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              {c.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">{c.mission.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{c.mission.description}</p>
            </Card>
            
            <Card className="p-8">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="text-3xl font-bold mb-4">{c.vision.title}</h2>
              <p className="text-muted-foreground leading-relaxed">{c.vision.description}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            {language === 'en' ? 'Our Core Values' : 'Nilai Teras Kami'}
          </h2>
          <div className="relative rounded-2xl overflow-hidden mb-16">
            <div className="absolute inset-0">
              <img src={valuesImage} alt="Company values" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary/70"></div>
            </div>
            <div className="relative z-10 py-20 px-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {c.values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow bg-white/95 backdrop-blur">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {c.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl md:text-6xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">{c.difference.title}</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {c.difference.items.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </Card>
              );
            })}
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
              <Link to="/features">
                <Button size="lg" variant="outlineWhite" className="text-lg px-10">
                  {language === 'en' ? 'Explore Features' : 'Terokai Ciri'}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MerchantLayout>
  )
}

export default About
