import React, { useState } from 'react'
import MerchantLayout from '../layouts/MerchantLayout'
import { Card } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

// Free stock images from Unsplash
const pricingHeroImage = "https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
const calculatorImage = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"

const Pricing = () => {
  const { language } = useLanguage()
  const [gmv, setGmv] = useState(2000)
  const [selectedPlan, setSelectedPlan] = useState('basic')

  const calculateRevenue = (gmvAmount: number, plan: string) => {
    const platformFees = { core: 0.15, basic: 0.095, pro: 0.065 }
    const paymentFee = 0.025
    const subscriptionFees = { core: 0, basic: 48, pro: 90 }

    const platformFee = platformFees[plan as keyof typeof platformFees]
    const platformCommission = gmvAmount * platformFee
    const paymentCost = gmvAmount * paymentFee
    const subscription = subscriptionFees[plan as keyof typeof subscriptionFees]
    const sellerNet = gmvAmount - platformCommission - paymentCost - subscription

    return {
      platformCommission,
      paymentCost,
      subscription,
      sellerNet,
      effectiveRate: ((platformCommission + paymentCost + subscription) / gmvAmount * 100).toFixed(1)
    }
  }

  // Calculate plan recommendation thresholds
  const calculatePlanThresholds = () => {
    // Core to Basic: When Basic becomes more profitable than Core
    // Core effective rate: 17.5%, Basic effective rate: 12% + $48
    // 17.5% * GMV = 12% * GMV + $48
    // 5.5% * GMV = $48
    // GMV = $48 / 0.055 = $872.73
    const coreToBasic = Math.ceil(48 / 0.055)

    // Basic to Pro: When Pro becomes more profitable than Basic
    // Basic effective rate: 12% + $48, Pro effective rate: 9% + $90
    // 12% * GMV + $48 = 9% * GMV + $90
    // 3% * GMV = $42
    // GMV = $42 / 0.03 = $1400
    const basicToPro = Math.ceil(42 / 0.03)

    return { coreToBasic, basicToPro }
  }

  const thresholds = calculatePlanThresholds()
  const revenue = calculateRevenue(gmv, selectedPlan)

  const content = {
    en: {
      hero: {
        title: 'Simple, Transparent Pricing',
        subtitle: 'Choose the plan that fits your business size. Upgrade or downgrade anytime.',
      },
      plans: [
        {
          name: 'Core',
          price: '$0',
          period: '/month',
          description: 'Perfect for testing the platform',
          features: [
            'Up to 50 products',
            'Basic store setup',
            'Email support',
            'Standard payout (monthly)',
            'Mobile app access',
            'Basic analytics'
          ],
          cta: 'Start Free',
          variant: 'outline' as const,
        },
        {
          name: 'Basic',
          price: '$48',
          period: '/month',
          description: 'Most popular for growing businesses',
          badge: 'Most Popular',
          features: [
            'Up to 500 products',
            'Advanced store customization',
            'Priority support',
            'Weekly payouts',
            'CSV import/export',
            'Advanced analytics',
            'Inventory management',
            'Customer messaging'
          ],
          cta: 'Get Started',
          variant: 'default' as const,
        },
        {
          name: 'Pro',
          price: '$90',
          period: '/month',
          description: 'For established businesses',
          features: [
            'Unlimited products',
            'Full store customization',
            'Dedicated account manager',
            'Daily payouts',
            'API access',
            'Advanced integrations',
            'Custom reporting',
            'White-label options',
            'Priority feature requests'
          ],
          cta: 'Go Pro',
          variant: 'secondary' as const,
        }
      ],
      calculator: {
        title: 'Revenue Calculator',
        subtitle: 'See how much you\'ll earn on each plan',
        gmvLabel: 'Monthly GMV (Gross Merchandise Value)',
        planLabel: 'Select Plan',
        breakdown: 'Fee Breakdown',
        gmvAmount: 'Gross Merchandise Value:',
        platformCommission: 'Platform commission',
        paymentProcessing: 'Payment processing (2.5%):',
        monthlySubscription: 'Monthly subscription:',
        youReceive: 'You receive (net):',
        effectiveRate: 'Effective rate:',
        presets: [
          { label: 'Small business', amount: 500 },
          { label: 'Growing business', amount: 2000 },
          { label: 'Established business', amount: 10000 }
        ]
      },
      recommendation: {
        title: 'Which Plan is Right for You?',
        subtitle: 'Based on your monthly sales volume',
        core: {
          title: 'Core Plan Recommended',
          range: `Up to $${thresholds.coreToBasic.toLocaleString()}/month`,
          description: 'Perfect for testing the platform or small businesses just starting online'
        },
        basic: {
          title: 'Basic Plan Recommended',
          range: `$${thresholds.coreToBasic.toLocaleString()} - $${thresholds.basicToPro.toLocaleString()}/month`,
          description: 'Ideal for growing businesses that need more features and faster payouts'
        },
        pro: {
          title: 'Pro Plan Recommended',
          range: `$${thresholds.basicToPro.toLocaleString()}+/month`,
          description: 'Best for established businesses that need advanced features and dedicated support'
        }
      },
      comparison: {
        title: 'Detailed Plan Comparison',
        features: [
          { name: 'Monthly fee', core: 'US$0', basic: 'US$48', pro: 'US$90' },
          { name: 'Platform fee', core: '15.0%', basic: '9.5%', pro: '6.5%' },
          { name: 'Payment processing', core: '2.5%', basic: '2.5%', pro: '2.5%' },
          { name: 'Product limit', core: '50', basic: '500', pro: 'Unlimited' },
          { name: 'Payout frequency', core: 'Monthly', basic: 'Weekly', pro: 'Daily' },
          { name: 'Support level', core: 'Email', basic: 'Priority', pro: 'Dedicated' },
          { name: 'API access', core: 'No', basic: 'No', pro: 'Yes' },
          { name: 'CSV import', core: 'No', basic: 'Yes', pro: 'Yes' },
          { name: 'Custom analytics', core: 'Basic', basic: 'Advanced', pro: 'Custom' }
        ]
      },
      cta: {
        title: 'Ready to Start Selling?',
        description: 'Join hundreds of successful merchants on CariGo',
        button: 'Apply Now'
      }
    },
    ms: {
      hero: {
        title: 'Harga Mudah, Telus',
        subtitle: 'Pilih pelan yang sesuai dengan saiz perniagaan anda. Naik atau turun taraf bila-bila masa.',
      },
      plans: [
        {
          name: 'Core',
          price: '$0',
          period: '/bulan',
          description: 'Sempurna untuk menguji platform',
          features: [
            'Sehingga 50 produk',
            'Persediaan kedai asas',
            'Sokongan e-mel',
            'Pembayaran standard (bulanan)',
            'Akses aplikasi mudah alih',
            'Analitik asas'
          ],
          cta: 'Mula Percuma',
          variant: 'outline' as const,
        },
        {
          name: 'Basic',
          price: '$48',
          period: '/bulan',
          description: 'Paling popular untuk perniagaan berkembang',
          badge: 'Paling Popular',
          features: [
            'Sehingga 500 produk',
            'Penyesuaian kedai lanjutan',
            'Sokongan keutamaan',
            'Pembayaran mingguan',
            'Import/eksport CSV',
            'Analitik lanjutan',
            'Pengurusan inventori',
            'Pemesejan pelanggan'
          ],
          cta: 'Mulakan',
          variant: 'default' as const,
        },
        {
          name: 'Pro',
          price: '$90',
          period: '/bulan',
          description: 'Untuk perniagaan mantap',
          features: [
            'Produk tanpa had',
            'Penyesuaian kedai penuh',
            'Pengurus akaun dedikasi',
            'Pembayaran harian',
            'Akses API',
            'Integrasi lanjutan',
            'Laporan tersuai',
            'Pilihan jenama putih',
            'Permintaan ciri keutamaan'
          ],
          cta: 'Pergi Pro',
          variant: 'secondary' as const,
        }
      ],
      calculator: {
        title: 'Kalkulator Pendapatan',
        subtitle: 'Lihat berapa banyak yang anda akan perolehi pada setiap pelan',
        gmvLabel: 'GMV Bulanan (Nilai Barangan Kasar)',
        planLabel: 'Pilih Pelan',
        breakdown: 'Pecahan Yuran',
        gmvAmount: 'Nilai Barangan Kasar:',
        platformCommission: 'Komisen platform',
        paymentProcessing: 'Pemprosesan pembayaran (2.5%):',
        monthlySubscription: 'Langganan bulanan:',
        youReceive: 'Anda terima (bersih):',
        effectiveRate: 'Kadar efektif:',
        presets: [
          { label: 'Perniagaan kecil', amount: 500 },
          { label: 'Perniagaan berkembang', amount: 2000 },
          { label: 'Perniagaan mantap', amount: 10000 }
        ]
      },
      recommendation: {
        title: 'Pelan Mana Yang Sesuai Untuk Anda?',
        subtitle: 'Berdasarkan jumlah jualan bulanan anda',
        core: {
          title: 'Pelan Core Disyorkan',
          range: `Sehingga $${thresholds.coreToBasic.toLocaleString()}/bulan`,
          description: 'Sempurna untuk menguji platform atau perniagaan kecil yang baru bermula dalam talian'
        },
        basic: {
          title: 'Pelan Basic Disyorkan',
          range: `$${thresholds.coreToBasic.toLocaleString()} - $${thresholds.basicToPro.toLocaleString()}/bulan`,
          description: 'Ideal untuk perniagaan berkembang yang memerlukan lebih banyak ciri dan pembayaran lebih cepat'
        },
        pro: {
          title: 'Pelan Pro Disyorkan',
          range: `$${thresholds.basicToPro.toLocaleString()}+/bulan`,
          description: 'Terbaik untuk perniagaan mantap yang memerlukan ciri lanjutan dan sokongan dedikasi'
        }
      },
      comparison: {
        title: 'Perbandingan Pelan Terperinci',
        features: [
          { name: 'Yuran bulanan', core: 'US$0', basic: 'US$48', pro: 'US$90' },
          { name: 'Yuran platform', core: '15.0%', basic: '9.5%', pro: '6.5%' },
          { name: 'Pemprosesan pembayaran', core: '2.5%', basic: '2.5%', pro: '2.5%' },
          { name: 'Had produk', core: '50', basic: '500', pro: 'Tanpa had' },
          { name: 'Kekerapan pembayaran', core: 'Bulanan', basic: 'Mingguan', pro: 'Harian' },
          { name: 'Tahap sokongan', core: 'E-mel', basic: 'Keutamaan', pro: 'Dedikasi' },
          { name: 'Akses API', core: 'Tidak', basic: 'Tidak', pro: 'Ya' },
          { name: 'Import CSV', core: 'Tidak', basic: 'Ya', pro: 'Ya' },
          { name: 'Analitik tersuai', core: 'Asas', basic: 'Lanjutan', pro: 'Tersuai' }
        ]
      },
      cta: {
        title: 'Bersedia untuk Mula Menjual?',
        description: 'Sertai beratus pedagang berjaya di CariGo',
        button: 'Mohon Sekarang'
      }
    }
  }

  const c = content[language]

  return (
    <MerchantLayout>
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center bg-gradient-to-br from-primary via-primary to-primary/90 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={pricingHeroImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{c.hero.title}</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">{c.hero.subtitle}</p>
            <Link to={`/apply?plan=${selectedPlan}`}>
              <Button size="lg" variant="inverseSecondary" className="text-lg px-8">
                {c.cta.button} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {c.plans.map((plan, index) => (
              <Card key={index} className={`p-8 relative hover:shadow-xl transition-shadow ${plan.badge ? 'border-2 border-primary' : ''}`}>
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {plan.badge}
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {plan.price}<span className="text-lg text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to={`/apply?plan=${plan.name.toLowerCase()}`} className="block">
                  <Button variant={plan.variant} className="w-full">
                    {plan.cta}
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Calculator */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">{c.calculator.title}</h2>
              <p className="text-xl text-muted-foreground">{c.calculator.subtitle}</p>
            </div>

            <Card className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <Label htmlFor="gmv" className="text-lg font-semibold mb-2 block">
                    {c.calculator.gmvLabel}
                  </Label>
                  <Input
                    id="gmv"
                    type="number"
                    value={gmv}
                    onChange={(e) => setGmv(Number(e.target.value) || 0)}
                    className="mb-4"
                  />
                  
                  <div className="mb-6">
                    <Label className="text-lg font-semibold mb-2 block">
                      {c.calculator.planLabel}
                    </Label>
                    <div className="grid grid-cols-3 gap-2">
                      {['core', 'basic', 'pro'].map((plan) => (
                        <button
                          key={plan}
                          onClick={() => setSelectedPlan(plan)}
                          className={`p-3 rounded-md border text-sm font-medium transition-colors ${
                            selectedPlan === plan
                              ? 'border-primary bg-primary text-primary-foreground'
                              : 'border-input hover:bg-muted'
                          }`}
                        >
                          {plan.charAt(0).toUpperCase() + plan.slice(1)}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold">{c.calculator.presets[0].label}</h4>
                    {c.calculator.presets.map((preset, index) => (
                      <button
                        key={index}
                        onClick={() => setGmv(preset.amount)}
                        className="block w-full text-left p-2 rounded hover:bg-muted transition-colors"
                      >
                        {preset.label}: ${preset.amount.toLocaleString()}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">{c.calculator.breakdown}</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>{c.calculator.gmvAmount}</span>
                      <span className="font-semibold">${gmv.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{c.calculator.platformCommission}:</span>
                      <span>${revenue.platformCommission.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{c.calculator.paymentProcessing}</span>
                      <span>${revenue.paymentCost.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{c.calculator.monthlySubscription}:</span>
                      <span>${revenue.subscription.toFixed(2)}</span>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between text-lg font-bold">
                        <span>{c.calculator.youReceive}</span>
                        <span className="text-primary">${revenue.sellerNet.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{c.calculator.effectiveRate}:</span>
                        <span>{revenue.effectiveRate}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Plan Recommendation */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">{c.recommendation.title}</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">{c.recommendation.subtitle}</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-primary">C</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{c.recommendation.core.title}</h3>
              <div className="text-3xl font-bold text-primary mb-4">{c.recommendation.core.range}</div>
              <p className="text-muted-foreground leading-relaxed">{c.recommendation.core.description}</p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow border-2 border-primary">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white">B</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{c.recommendation.basic.title}</h3>
              <div className="text-3xl font-bold text-primary mb-4">{c.recommendation.basic.range}</div>
              <p className="text-muted-foreground leading-relaxed">{c.recommendation.basic.description}</p>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-secondary">P</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{c.recommendation.pro.title}</h3>
              <div className="text-3xl font-bold text-secondary mb-4">{c.recommendation.pro.range}</div>
              <p className="text-muted-foreground leading-relaxed">{c.recommendation.pro.description}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">{c.comparison.title}</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full max-w-6xl mx-auto border-collapse rounded-lg overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left p-6 font-semibold text-lg">{language === 'en' ? 'Features' : 'Ciri'}</th>
                  <th className="text-center p-6 font-semibold text-lg bg-primary/90">
                    <div className="flex flex-col items-center">
                      <span>Core</span>
                      <span className="text-sm opacity-80">{language === 'en' ? 'Free' : 'Percuma'}</span>
                    </div>
                  </th>
                  <th className="text-center p-6 font-semibold text-lg bg-primary/80 border-l-2 border-white/20">
                    <div className="flex flex-col items-center">
                      <span>Basic</span>
                      <span className="text-sm opacity-80">$48/mo</span>
                      <span className="bg-secondary text-xs px-2 py-1 rounded-full mt-1">{language === 'en' ? 'Popular' : 'Popular'}</span>
                    </div>
                  </th>
                  <th className="text-center p-6 font-semibold text-lg bg-primary/70 border-l-2 border-white/20">
                    <div className="flex flex-col items-center">
                      <span>Pro</span>
                      <span className="text-sm opacity-80">$90/mo</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {c.comparison.features.map((feature, index) => (
                  <tr key={index} className={`border-b hover:bg-muted/50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-muted/20'}`}>
                    <td className="p-6 font-medium">{feature.name}</td>
                    <td className="p-6 text-center">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        feature.core === 'No' || feature.core === 'Tidak' ? 'bg-red-100 text-red-800' :
                        feature.core === 'Yes' || feature.core === 'Ya' ? 'bg-green-100 text-green-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {feature.core}
                      </span>
                    </td>
                    <td className="p-6 text-center border-l border-muted">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        feature.basic === 'No' || feature.basic === 'Tidak' ? 'bg-red-100 text-red-800' :
                        feature.basic === 'Yes' || feature.basic === 'Ya' ? 'bg-green-100 text-green-800' :
                        feature.basic === 'Advanced' || feature.basic === 'Lanjutan' ? 'bg-blue-100 text-blue-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {feature.basic}
                      </span>
                    </td>
                    <td className="p-6 text-center border-l border-muted">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        feature.pro === 'No' || feature.pro === 'Tidak' ? 'bg-red-100 text-red-800' :
                        feature.pro === 'Yes' || feature.pro === 'Ya' ? 'bg-green-100 text-green-800' :
                        feature.pro === 'Custom' || feature.pro === 'Tersuai' ? 'bg-purple-100 text-purple-800' :
                        feature.pro === 'Unlimited' || feature.pro === 'Tanpa had' ? 'bg-orange-100 text-orange-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {feature.pro}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Detailed Pricing Simulation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            {language === 'en' ? 'Detailed Pricing Simulation' : 'Simulasi Harga Terperinci'}
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            {language === 'en' 
              ? 'See exactly how much you\'ll pay and earn with different monthly sales volumes' 
              : 'Lihat tepat berapa banyak yang akan anda bayar dan perolehi dengan jumlah jualan bulanan yang berbeza'
            }
          </p>

          <div className="max-w-6xl mx-auto">
            {/* Sales Volume Scenarios */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: language === 'en' ? 'Small Business' : 'Perniagaan Kecil',
                  gmv: 500,
                  description: language === 'en' ? 'Just starting online' : 'Baru bermula dalam talian',
                  recommended: 'core'
                },
                {
                  title: language === 'en' ? 'Growing Business' : 'Perniagaan Berkembang',
                  gmv: 2000,
                  description: language === 'en' ? 'Regular online sales' : 'Jualan dalam talian tetap',
                  recommended: 'basic'
                },
                {
                  title: language === 'en' ? 'Established Business' : 'Perniagaan Mantap',
                  gmv: 8000,
                  description: language === 'en' ? 'High volume sales' : 'Jualan volum tinggi',
                  recommended: 'pro'
                }
              ].map((scenario, index) => {
                const coreRevenue = calculateRevenue(scenario.gmv, 'core')
                const basicRevenue = calculateRevenue(scenario.gmv, 'basic')
                const proRevenue = calculateRevenue(scenario.gmv, 'pro')
                
                return (
                  <Card key={index} className="p-8 hover:shadow-xl transition-shadow">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-2">{scenario.title}</h3>
                      <div className="text-3xl font-bold text-primary mb-2">${scenario.gmv.toLocaleString()}</div>
                      <p className="text-muted-foreground">{scenario.description}</p>
                      <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mt-2 ${
                        scenario.recommended === 'core' ? 'bg-gray-100 text-gray-800' :
                        scenario.recommended === 'basic' ? 'bg-primary/10 text-primary' :
                        'bg-secondary/10 text-secondary'
                      }`}>
                        {language === 'en' ? 'Recommended: ' : 'Disyorkan: '}
                        {scenario.recommended === 'core' ? 'Core' : 
                         scenario.recommended === 'basic' ? 'Basic' : 'Pro'}
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* Core Plan */}
                      <div className={`p-4 rounded-lg border-2 ${
                        scenario.recommended === 'core' ? 'border-primary bg-primary/5' : 'border-muted'
                      }`}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold">Core</span>
                          <span className="text-sm text-muted-foreground">{coreRevenue.effectiveRate}%</span>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-primary">${coreRevenue.sellerNet.toFixed(0)}</div>
                          <div className="text-xs text-muted-foreground">
                            {language === 'en' ? 'Net Revenue' : 'Pendapatan Bersih'}
                          </div>
                        </div>
                      </div>

                      {/* Basic Plan */}
                      <div className={`p-4 rounded-lg border-2 ${
                        scenario.recommended === 'basic' ? 'border-primary bg-primary/5' : 'border-muted'
                      }`}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold">Basic</span>
                          <span className="text-sm text-muted-foreground">{basicRevenue.effectiveRate}%</span>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-primary">${basicRevenue.sellerNet.toFixed(0)}</div>
                          <div className="text-xs text-muted-foreground">
                            {language === 'en' ? 'Net Revenue' : 'Pendapatan Bersih'}
                          </div>
                        </div>
                      </div>

                      {/* Pro Plan */}
                      <div className={`p-4 rounded-lg border-2 ${
                        scenario.recommended === 'pro' ? 'border-secondary bg-secondary/5' : 'border-muted'
                      }`}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold">Pro</span>
                          <span className="text-sm text-muted-foreground">{proRevenue.effectiveRate}%</span>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-secondary">${proRevenue.sellerNet.toFixed(0)}</div>
                          <div className="text-xs text-muted-foreground">
                            {language === 'en' ? 'Net Revenue' : 'Pendapatan Bersih'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Break-even Analysis */}
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5">
              <h3 className="text-2xl font-bold mb-6 text-center">
                {language === 'en' ? 'Break-even Analysis' : 'Analisis Pulang Modal'}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    {language === 'en' ? 'When to Upgrade from Core to Basic' : 'Bila Naik Taraf dari Core ke Basic'}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {language === 'en' 
                      ? 'Basic becomes more profitable when your monthly sales exceed $873'
                      : 'Basic menjadi lebih menguntungkan apabila jualan bulanan anda melebihi $873'
                    }
                  </p>
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="text-sm font-semibold text-green-800">
                      {language === 'en' ? 'Break-even Point:' : 'Titik Pulang Modal:'}
                    </div>
                    <div className="text-2xl font-bold text-green-600">$873/month</div>
                    <div className="text-xs text-green-700 mt-1">
                      {language === 'en' 
                        ? 'Above this amount, Basic saves you money'
                        : 'Melebihi jumlah ini, Basic menjimatkan wang anda'
                      }
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-600" />
                    {language === 'en' ? 'When to Upgrade from Basic to Pro' : 'Bila Naik Taraf dari Basic ke Pro'}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {language === 'en' 
                      ? 'Pro becomes more profitable when your monthly sales exceed $1,400'
                      : 'Pro menjadi lebih menguntungkan apabila jualan bulanan anda melebihi $1,400'
                    }
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="text-sm font-semibold text-blue-800">
                      {language === 'en' ? 'Break-even Point:' : 'Titik Pulang Modal:'}
                    </div>
                    <div className="text-2xl font-bold text-blue-600">$1,400/month</div>
                    <div className="text-xs text-blue-700 mt-1">
                      {language === 'en' 
                        ? 'Above this amount, Pro saves you money'
                        : 'Melebihi jumlah ini, Pro menjimatkan wang anda'
                      }
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-lg border">
                <h4 className="font-semibold mb-4 text-center">
                  {language === 'en' ? 'Quick Decision Guide' : 'Panduan Keputusan Pantas'}
                </h4>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-gray-600 mb-2">$0 - $873</div>
                    <div className="text-sm font-semibold text-primary mb-1">Core Plan</div>
                    <div className="text-xs text-muted-foreground">
                      {language === 'en' ? 'Best for testing & small sales' : 'Terbaik untuk ujian & jualan kecil'}
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg border-primary bg-primary/5">
                    <div className="text-2xl font-bold text-primary mb-2">$873 - $1,400</div>
                    <div className="text-sm font-semibold text-primary mb-1">Basic Plan</div>
                    <div className="text-xs text-muted-foreground">
                      {language === 'en' ? 'Sweet spot for growing businesses' : 'Titik manis untuk perniagaan berkembang'}
                    </div>
                  </div>
                  <div className="p-4 border rounded-lg border-secondary bg-secondary/5">
                    <div className="text-2xl font-bold text-secondary mb-2">$1,400+</div>
                    <div className="text-sm font-semibold text-secondary mb-1">Pro Plan</div>
                    <div className="text-xs text-muted-foreground">
                      {language === 'en' ? 'Best for established businesses' : 'Terbaik untuk perniagaan mantap'}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{c.cta.title}</h2>
            <p className="text-xl md:text-2xl mb-10 text-white/90">{c.cta.description}</p>
            
            <Link to="/apply">
              <Button size="lg" variant="inverseSecondary" className="text-lg px-10">
                {c.cta.button} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MerchantLayout>
  )
}

export default Pricing
