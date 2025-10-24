import React, { useState } from 'react'
import MerchantLayout from '../layouts/MerchantLayout'
import { Card } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { 
  BookOpen,
  Video,
  FileText,
  MessageSquare,
  Phone,
  Mail,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  HelpCircle,
  Lightbulb,
  Settings,
  CreditCard,
  Package,
  BarChart3,
  Shield
} from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const HelpCenter = () => {
  const { language } = useLanguage()
  const navigate = useNavigate()
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)

  // キーワードからマニュアルページへのマッピング
  const keywordToManualMap: Record<string, string> = {
    // Getting Started関連
    'getting started': '/manual/getting-started',
    'getting-started': '/manual/getting-started',
    'account setup': '/manual/getting-started',
    'verification': '/manual/getting-started',
    'fees': '/manual/getting-started',
    'dashboard': '/manual/getting-started',
    'merchant account': '/manual/getting-started',
    'setup': '/manual/getting-started',
    'create': '/manual/getting-started',
    'account': '/manual/getting-started',
    'overview': '/manual/getting-started',
    'basics': '/manual/getting-started',
    'first product': '/manual/product-catalog',
    'understanding': '/manual/getting-started',
    'process': '/manual/getting-started',
    'explained': '/manual/getting-started',
    
    // Store Management関連
    'store management': '/manual/store-management',
    'store-management': '/manual/store-management',
    'store settings': '/manual/store-management',
    'business information': '/manual/store-management',
    'store': '/manual/store-management',
    'management': '/manual/store-management',
    'business': '/manual/store-management',
    'information': '/manual/store-management',
    'settings': '/manual/store-management',
    'branding': '/manual/store-management',
    'policies': '/manual/store-management',
    'methods': '/manual/store-management',
    'monitor': '/manual/analytics-reporting',
    
    // Product Management関連
    'product management': '/manual/product-catalog',
    'product catalog': '/manual/product-catalog',
    'product-catalog': '/manual/product-catalog',
    'products': '/manual/product-catalog',
    'product guidelines': '/manual/product-guidelines',
    'product-guidelines': '/manual/product-guidelines',
    'product api': '/manual/product-api',
    'product-api': '/manual/product-api',
    'catalog': '/manual/product-catalog',
    'inventory': '/manual/product-catalog',
    'listing': '/manual/product-catalog',
    'images': '/manual/product-catalog',
    'pricing': '/manual/product-catalog',
    'variants': '/manual/product-catalog',
    'categories': '/manual/product-catalog',
    'tags': '/manual/product-catalog',
    'adding': '/manual/product-catalog',
    'upload': '/manual/product-catalog',
    'bulk': '/manual/product-catalog',
    'csv': '/manual/product-catalog',
    'managing': '/manual/product-catalog',
    'guidelines': '/manual/product-guidelines',
    'image': '/manual/product-guidelines',
    
    // Order Processing関連
    'order processing': '/manual/order-processing',
    'order-processing': '/manual/order-processing',
    'orders': '/manual/order-processing',
    'order api': '/manual/order-api',
    'order-api': '/manual/order-api',
    'shipping': '/manual/shipping-policies',
    'shipping policies': '/manual/shipping-policies',
    'shipping-policies': '/manual/shipping-policies',
    'returns': '/manual/return-policies',
    'return policies': '/manual/return-policies',
    'return-policies': '/manual/return-policies',
    'fulfillment': '/manual/order-processing',
    'processing': '/manual/order-processing',
    'delivery': '/manual/shipping-policies',
    'refunds': '/manual/return-policies',
    'communication': '/manual/order-processing',
    'options': '/manual/shipping-policies',
    'status': '/manual/order-processing',
    'handling': '/manual/return-policies',
    'customer': '/manual/customer-management',
    
    // Customer Management関連
    'customer management': '/manual/customer-management',
    'customer-management': '/manual/customer-management',
    'customers': '/manual/customer-management',
    'relationships': '/manual/customer-management',
    'inquiries': '/manual/customer-management',
    'support': '/manual/customer-management',
    'view': '/manual/customer-management',
    'manage': '/manual/customer-management',
    'track': '/manual/customer-management',
    'history': '/manual/customer-management',
    'build': '/manual/customer-management',
    
    // Analytics関連
    'analytics': '/manual/analytics-reporting',
    'analytics reporting': '/manual/analytics-reporting',
    'analytics-reporting': '/manual/analytics-reporting',
    'reporting': '/manual/analytics-reporting',
    'reports': '/manual/analytics-reporting',
    'performance': '/manual/analytics-reporting',
    'metrics': '/manual/analytics-reporting',
    'insights': '/manual/analytics-reporting',
    'sales': '/manual/analytics-reporting',
    'revenue': '/manual/analytics-reporting',
    'data': '/manual/analytics-reporting',
    'behavior': '/manual/analytics-reporting',
    'trends': '/manual/analytics-reporting',
    'margins': '/manual/analytics-reporting',
    'generate': '/manual/analytics-reporting',
    'exporting': '/manual/analytics-reporting',
    
    // Authentication関連
    'authentication': '/manual/authentication',
    'security': '/manual/authentication',
    'login': '/manual/authentication',
    'password': '/manual/authentication',
    'permissions': '/manual/authentication',
    'access': '/manual/authentication',
    'two-factor': '/manual/authentication',
    'secure': '/manual/authentication',
    'changing': '/manual/authentication',
    'notification': '/manual/authentication',
    'preferences': '/manual/authentication',
    'closing': '/manual/authentication',
    
    // API関連
    'api': '/manual/product-api',
    'webhooks': '/manual/webhooks',
    'integration': '/manual/product-api',
    'external': '/manual/product-api',
    'systems': '/manual/product-api',
    'automate': '/manual/order-api',
    'notifications': '/manual/webhooks',
    'real-time': '/manual/webhooks',
    'documentation': '/manual/product-api',
    'getting': '/manual/getting-started',
    
    // Payments & Payouts関連
    'payments': '/manual/payments-payouts',
    'payouts': '/manual/payments-payouts',
    'payment processing': '/manual/payments-payouts',
    'payment processing setup': '/manual/payments-payouts',
    'payout schedules': '/manual/payments-payouts',
    'fee structure': '/manual/payments-payouts',
    'financial statements': '/manual/payments-payouts',
    'tax reporting': '/manual/payments-payouts',
    'bank account': '/manual/payments-payouts',
    'bank details': '/manual/payments-payouts',
    'payment methods': '/manual/payments-payouts',
    'transaction fees': '/manual/payments-payouts',
    'commission': '/manual/payments-payouts',
    'chargeback': '/manual/payments-payouts',
    'refund processing': '/manual/payments-payouts',
    'currency conversion': '/manual/payments-payouts',
    'weekly payouts': '/manual/payments-payouts',
    'monthly payouts': '/manual/payments-payouts',
    'transaction reports': '/manual/payments-payouts',
    'payout reports': '/manual/payments-payouts',
    'financial reporting': '/manual/payments-payouts',
    
    // Account Settings関連
    'account settings': '/manual/account-settings',
    'updating': '/manual/account-settings',
    'changing password': '/manual/account-settings',
    'notification preferences': '/manual/account-settings',
    'account verification': '/manual/account-settings',
    'closing account': '/manual/account-settings',
    'profile': '/manual/account-settings',
    'contact details': '/manual/account-settings',
    'store logo': '/manual/account-settings',
    'social media': '/manual/account-settings',
    'business hours': '/manual/account-settings',
    'two-factor authentication': '/manual/account-settings',
    'login activity': '/manual/account-settings',
    'order notifications': '/manual/account-settings',
    'business notifications': '/manual/account-settings',
    'marketing communications': '/manual/account-settings',
    'data export': '/manual/account-settings',
    'privacy settings': '/manual/account-settings',
    'data management': '/manual/account-settings',
    'account deletion': '/manual/account-settings',
    
    // Legal関連
    'seller agreement': '/manual/seller-agreement',
    'seller-agreement': '/manual/seller-agreement',
    'terms': '/manual/seller-agreement',
    'agreement': '/manual/seller-agreement',
    'conditions': '/manual/seller-agreement',
    'standards': '/manual/product-guidelines',
    'rules': '/manual/shipping-policies',
    'rates': '/manual/shipping-policies',
    'procedures': '/manual/return-policies'
  }

  // キーワードをクリックした時の処理
  const handleKeywordClick = (keyword: string) => {
    const normalizedKeyword = keyword.toLowerCase().trim()
    
    // まず完全一致を試す
    let manualPath = keywordToManualMap[normalizedKeyword]
    
    // 完全一致がない場合、部分一致を試す
    if (!manualPath) {
      const keywords = Object.keys(keywordToManualMap)
      for (const key of keywords) {
        if (normalizedKeyword.includes(key) || key.includes(normalizedKeyword)) {
          manualPath = keywordToManualMap[key]
          break
        }
      }
    }
    
    // 複数キーワードを含む場合の優先順位付け
    if (!manualPath) {
      const priorityKeywords = [
        'getting started', 'store management', 'product catalog', 'order processing',
        'customer management', 'analytics reporting', 'authentication', 'product api',
        'order api', 'webhooks', 'seller agreement', 'product guidelines',
        'shipping policies', 'return policies', 'payments payouts', 'account settings'
      ]
      
      for (const priorityKey of priorityKeywords) {
        if (normalizedKeyword.includes(priorityKey)) {
          manualPath = keywordToManualMap[priorityKey]
          break
        }
      }
    }
    
    if (manualPath) {
      navigate(manualPath)
    }
  }

  // テキスト内のキーワードをハイライトしてクリック可能にする関数
  const renderClickableText = (text: string) => {
    const keywords = Object.keys(keywordToManualMap)
    let result = text
    
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi')
      result = result.replace(regex, `<span class="keyword-link" data-keyword="${keyword}">$&</span>`)
    })
    
    return result
  }

  const normalize = (s: string) => s.toLowerCase()

  const content = {
    en: {
      hero: {
        title: 'Help Center',
        subtitle: 'Find answers to your questions and get the support you need',
        searchPlaceholder: 'Search for help articles, guides, and FAQs...'
      },
      categories: [
        {
          id: 'getting-started',
          title: 'Getting Started',
          icon: BookOpen,
          description: 'Learn the basics of CariGo',
          articles: [
            'How to create your merchant account',
            'Setting up your first product',
            'Understanding CariGo fees',
            'Verification process explained',
            'Dashboard overview'
          ]
        },
        {
          id: 'products',
          title: 'Product Management',
          icon: Package,
          description: 'Manage your inventory and listings',
          articles: [
            'Adding products to your store',
            'Bulk product upload with CSV',
            'Product categories and tags',
            'Managing product variants',
            'Product image guidelines'
          ]
        },
        {
          id: 'orders',
          title: 'Orders & Fulfillment',
          icon: CreditCard,
          description: 'Handle orders and shipping',
          articles: [
            'Processing orders',
            'Shipping and delivery options',
            'Order status management',
            'Handling returns and refunds',
            'Customer communication'
          ]
        },
        {
          id: 'analytics',
          title: 'Analytics & Reports',
          icon: BarChart3,
          description: 'Track your business performance',
          articles: [
            'Understanding your dashboard',
            'Sales reports and insights',
            'Customer analytics',
            'Performance metrics',
            'Exporting data'
          ]
        },
        {
          id: 'payments',
          title: 'Payments & Payouts',
          icon: CreditCard,
          description: 'Manage your finances',
          articles: [
            'Payment processing setup',
            'Payout schedules',
            'Fee structure explained',
            'Tax reporting',
            'Financial statements'
          ]
        },
        {
          id: 'account',
          title: 'Account Settings',
          icon: Settings,
          description: 'Manage your account',
          articles: [
            'Updating business information',
            'Changing password and security',
            'Notification preferences',
            'Account verification',
            'Closing your account'
          ]
        }
      ],
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
              'Return Policies'
            ]
          }
        ]
      },
      quickActions: [
        {
          title: 'Video Tutorials',
          description: 'Step-by-step video guides',
          icon: Video,
          action: 'Coming Soon',
          color: 'bg-blue-500'
        },
        {
          title: 'Documentation',
          description: 'Comprehensive guides and API docs',
          icon: FileText,
          action: 'Read Docs',
          color: 'bg-green-500'
        },
        {
          title: 'Contact Support',
          description: 'Get help from our team',
          icon: MessageSquare,
          action: 'Contact Us',
          color: 'bg-orange-500'
        }
      ],
      faqs: [
        {
          question: 'How do I get started as a new merchant?',
          answer: 'Simply apply through our application form, complete the verification process, and start adding your products. The entire process typically takes 3-5 days.'
        },
        {
          question: 'What are CariGo\'s fees?',
          answer: 'CariGo charges a commission on sales (varies by plan), payment processing fees, and optional monthly subscription fees. See our pricing page for detailed information.'
        },
        {
          question: 'How do I receive payments?',
          answer: 'Payments are automatically processed and transferred to your bank account according to your payout schedule (weekly or monthly).'
        },
        {
          question: 'Can I sell internationally?',
          answer: 'Currently, CariGo focuses on the Brunei market. International expansion is planned for future updates.'
        }
      ],
      contact: {
        title: 'Still Need Help?',
        subtitle: 'Our support team is here to assist you',
        methods: [
          {
            icon: MessageSquare,
            title: 'Live Chat',
            description: 'Available 9AM-6PM',
            action: 'Coming Soon',
            available: true
          },
          {
            icon: Phone,
            title: 'Phone Support',
            description: '+673 212 3456',
            action: 'Call Now',
            available: true
          },
          {
            icon: Mail,
            title: 'Email Support',
            description: 'support@carigobn.com',
            action: 'Contact Us',
            available: true
          }
        ]
      }
    },
    ms: {
      hero: {
        title: 'Pusat Bantuan',
        subtitle: 'Cari jawapan kepada soalan anda dan dapatkan sokongan yang anda perlukan',
        searchPlaceholder: 'Cari artikel bantuan, panduan, dan FAQ...'
      },
      categories: [
        {
          id: 'getting-started',
          title: 'Bermula',
          icon: BookOpen,
          description: 'Pelajari asas-asas CariGo',
          articles: [
            'Cara membuat akaun pedagang anda',
            'Menyediakan produk pertama anda',
            'Memahami yuran CariGo',
            'Proses pengesahan dijelaskan',
            'Gambaran keseluruhan papan pemuka'
          ]
        },
        {
          id: 'products',
          title: 'Pengurusan Produk',
          icon: Package,
          description: 'Urus inventori dan senarai anda',
          articles: [
            'Menambah produk ke kedai anda',
            'Muat naik produk pukal dengan CSV',
            'Kategori dan tag produk',
            'Mengurus variasi produk',
            'Garis panduan imej produk'
          ]
        },
        {
          id: 'orders',
          title: 'Pesanan & Pemenuhan',
          icon: CreditCard,
          description: 'Urus pesanan dan penghantaran',
          articles: [
            'Memproses pesanan',
            'Pilihan penghantaran dan penghantaran',
            'Pengurusan status pesanan',
            'Menguruskan pulangan dan bayaran balik',
            'Komunikasi pelanggan'
          ]
        },
        {
          id: 'analytics',
          title: 'Analitik & Laporan',
          icon: BarChart3,
          description: 'Trak prestasi perniagaan anda',
          articles: [
            'Memahami papan pemuka anda',
            'Laporan dan pandangan jualan',
            'Analitik pelanggan',
            'Metrik prestasi',
            'Mengeksport data'
          ]
        },
        {
          id: 'payments',
          title: 'Pembayaran & Pembayaran',
          icon: CreditCard,
          description: 'Urus kewangan anda',
          articles: [
            'Penyediaan pemprosesan pembayaran',
            'Jadual pembayaran',
            'Struktur yuran dijelaskan',
            'Pelaporan cukai',
            'Penyata kewangan'
          ]
        },
        {
          id: 'account',
          title: 'Tetapan Akaun',
          icon: Settings,
          description: 'Urus akaun anda',
          articles: [
            'Mengemas kini maklumat perniagaan',
            'Menukar kata laluan dan keselamatan',
            'Keutamaan pemberitahuan',
            'Pengesahan akaun',
            'Menutup akaun anda'
          ]
        }
      ],
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
      quickActions: [
        {
          title: 'Tutorial Video',
          description: 'Panduan video langkah demi langkah',
          icon: Video,
          action: 'Akan Datang',
          color: 'bg-blue-500'
        },
        {
          title: 'Dokumentasi',
          description: 'Panduan komprehensif dan dokumen API',
          icon: FileText,
          action: 'Baca Dokumen',
          color: 'bg-green-500'
        },
        {
          title: 'Hubungi Sokongan',
          description: 'Dapatkan bantuan dari pasukan kami',
          icon: MessageSquare,
          action: 'Hubungi Kami',
          color: 'bg-orange-500'
        }
      ],
      faqs: [
        {
          question: 'Bagaimana saya boleh bermula sebagai pedagang baru?',
          answer: 'Hanya mohon melalui borang permohonan kami, lengkapkan proses pengesahan, dan mula menambah produk anda. Seluruh proses biasanya mengambil masa 3-5 hari.'
        },
        {
          question: 'Apakah yuran CariGo?',
          answer: 'CariGo mengenakan komisen pada jualan (berbeza mengikut pelan), yuran pemprosesan pembayaran, dan yuran langganan bulanan pilihan. Lihat halaman harga kami untuk maklumat terperinci.'
        },
        {
          question: 'Bagaimana saya menerima pembayaran?',
          answer: 'Pembayaran diproses secara automatik dan dipindahkan ke akaun bank anda mengikut jadual pembayaran anda (mingguan atau bulanan).'
        },
        {
          question: 'Bolehkah saya menjual secara antarabangsa?',
          answer: 'Pada masa ini, CariGo memberi tumpuan kepada pasaran Brunei. Pengembangan antarabangsa dirancang untuk kemas kini masa depan.'
        }
      ],
      contact: {
        title: 'Masih Perlu Bantuan?',
        subtitle: 'Pasukan sokongan kami di sini untuk membantu anda',
        methods: [
          {
            icon: MessageSquare,
            title: 'Chat Langsung',
            description: 'Tersedia 9AM-6PM',
            action: 'Akan Datang',
            available: true
          },
          {
            icon: Phone,
            title: 'Sokongan Telefon',
            description: '+673 212 3456',
            action: 'Panggil Sekarang',
            available: true
          },
          {
            icon: Mail,
            title: 'Sokongan E-mel',
            description: 'support@carigobn.com',
            action: 'Hubungi Kami',
            available: true
          }
        ]
      }
    }
  }

  const c = content[language]

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId)
  }

  return (
    <MerchantLayout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{c.hero.title}</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">{c.hero.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
              {c.quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow cursor-pointer group">
                    <div className={`w-16 h-16 rounded-full ${action.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{action.title}</h3>
                    <p className="text-muted-foreground mb-4">{action.description}</p>
                    {action.title === (language === 'en' ? 'Contact Support' : 'Hubungi Sokongan') ? (
                      <Link to="/inquiry">
                        <Button variant="outline" className="w-full">
                          {action.action}
                        </Button>
                      </Link>
                    ) : action.title === (language === 'en' ? 'Documentation' : 'Dokumentasi') ? (
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => {
                          const documentationSection = document.getElementById('documentation');
                          if (documentationSection) {
                            documentationSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        {action.action}
                      </Button>
                    ) : (
                      <Button variant="outline" className="w-full" disabled>
                        {action.action}
                      </Button>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            {language === 'en' ? 'Browse by Category' : 'Layari mengikut Kategori'}
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {c.categories.map((category) => {
              const Icon = category.icon;
              const isExpanded = expandedCategory === category.id;
              
              return (
                <Card key={category.id} className="overflow-hidden">
                  <div 
                    className="p-6 cursor-pointer hover:bg-muted/50 transition-colors"
                    onClick={() => toggleCategory(category.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 
                            className="text-xl font-bold hover:underline cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleKeywordClick(category.title)
                            }}
                          >
                            {category.title}
                          </h3>
                          <p 
                            className="text-muted-foreground hover:underline cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleKeywordClick(category.description)
                            }}
                          >
                            {category.description}
                          </p>
                        </div>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-6 h-6 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-6 h-6 text-muted-foreground" />
                      )}
                    </div>
                  </div>
                  
                  {isExpanded && (
                    <div className="border-t bg-muted/20 p-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        {category.articles.map((article, index) => (
                          <div 
                            key={index} 
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition-colors cursor-pointer"
                            onClick={() => handleKeywordClick(article)}
                          >
                            <HelpCircle className="w-5 h-5 text-primary" />
                            <span className="text-sm hover:underline">
                              {article}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section id="documentation" className="py-20">
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
                      <div 
                        key={itemIndex} 
                        className="flex items-center gap-3 hover:text-primary transition-colors cursor-pointer"
                        onClick={() => handleKeywordClick(item)}
                      >
                        <ChevronRight className="w-4 h-4" />
                        <span className="hover:underline">{item}</span>
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

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            {language === 'en' ? 'Frequently Asked Questions' : 'Soalan Lazim'}
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {c.faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <Lightbulb className="w-6 h-6 text-secondary" />
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{c.contact.title}</h2>
            <p className="text-xl md:text-2xl mb-16 text-white/90">{c.contact.subtitle}</p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {c.contact.methods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card key={index} className="p-8 bg-white/10 backdrop-blur hover:bg-white/20 transition-colors">
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{method.title}</h3>
                    <p className="text-white/80 mb-6">{method.description}</p>
                    {method.title === (language === 'en' ? 'Email Support' : 'Sokongan E-mel') ? (
                      <Link to="/inquiry">
                        <Button 
                          variant="outlineWhite" 
                          className="w-full"
                        >
                          {method.action}
                        </Button>
                      </Link>
                    ) : method.title === (language === 'en' ? 'Phone Support' : 'Sokongan Telefon') ? (
                      <a href="tel:+6738228250">
                        <Button 
                          variant="outlineWhite" 
                          className="w-full"
                        >
                          {method.action}
                        </Button>
                      </a>
                    ) : (
                      <Button 
                        variant="outlineWhite" 
                        className="w-full"
                        disabled={true}
                      >
                        {method.action}
                      </Button>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </MerchantLayout>
  )
}

export default HelpCenter
