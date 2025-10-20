import React from 'react'
import MerchantLayout from '../layouts/MerchantLayout'
import { Card } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Button } from '../components/ui/button'
import { Search } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { Link } from 'react-router-dom'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion'

const HelpCenter = () => {
  const { language } = useLanguage()

  const content = {
    en: {
      title: 'Help Center',
      subtitle: 'Search guides, FAQs, and troubleshooting tips',
      placeholder: 'Search the help center...',
      popular: 'Popular Topics',
      topics: ['Getting Started', 'Account & Billing', 'Orders & Shipping', 'Products & Catalog', 'Policies & Guidelines'],
    },
    ms: {
      title: 'Pusat Bantuan',
      subtitle: 'Cari panduan, FAQ, dan tip penyelesaian masalah',
      placeholder: 'Cari di pusat bantuan...',
      popular: 'Topik Popular',
      topics: ['Bermula', 'Akaun & Bil', 'Pesanan & Penghantaran', 'Produk & Katalog', 'Dasar & Garis Panduan'],
    },
  } as const

  const c = content[language]

  const getManualPathBySection = (sectionTitle: string): string | undefined => {
    if (sectionTitle === 'Store Management') return '/manual/store-management'
    if (sectionTitle === 'Product Catalog') return '/manual/product-catalog'
    if (sectionTitle === 'Order Processing') return '/manual/order-processing'
    if (sectionTitle === 'Customer Management') return '/manual/customer-management'
    if (sectionTitle === 'Analytics & Reporting') return '/manual/analytics-reporting'
    if (sectionTitle === 'Getting Started') return '/manual/getting-started'
    if (sectionTitle === 'Authentication') return '/manual/authentication'
    if (sectionTitle === 'Product API') return '/manual/product-api'
    if (sectionTitle === 'Order API') return '/manual/order-api'
    if (sectionTitle === 'Webhooks') return '/manual/webhooks'
    if (sectionTitle === 'Seller Agreement') return '/manual/seller-agreement'
    if (sectionTitle === 'Product Guidelines') return '/manual/product-guidelines'
    if (sectionTitle === 'Shipping Policies') return '/manual/shipping-policies'
    if (sectionTitle === 'Return Policies') return '/manual/return-policies'
    return undefined
  }

  const getManualPathByKeyword = (keyword: string): string | undefined => {
    // Getting Started
    if (keyword === 'How to create your merchant account') return '/manual/getting-started'
    if (keyword === 'Verification process explained') return '/manual/getting-started'
    if (keyword === 'Dashboard overview') return '/manual/getting-started'

    // Product Catalog
    if (keyword === 'Setting up your first product') return '/manual/product-catalog'
    if (keyword === 'Adding products to your store') return '/manual/product-catalog'
    if (keyword === 'Bulk product upload with CSV') return '/manual/product-catalog'
    if (keyword === 'Product categories and tags') return '/manual/product-catalog'
    if (keyword === 'Managing product variants') return '/manual/product-catalog'
    if (keyword === 'Product image guidelines') return '/manual/product-guidelines'

    // Order Processing
    if (keyword === 'Processing orders') return '/manual/order-processing'
    if (keyword === 'Shipping and delivery options') return '/manual/order-processing'
    if (keyword === 'Order status management') return '/manual/order-processing'
    if (keyword === 'Handling returns and refunds') return '/manual/return-policies'

    // Customer Management
    if (keyword === 'Customer communication') return '/manual/customer-management'

    // Analytics & Reporting
    if (keyword === 'Understanding your dashboard') return '/manual/analytics-reporting'
    if (keyword === 'Sales reports and insights') return '/manual/analytics-reporting'
    if (keyword === 'Customer analytics') return '/manual/analytics-reporting'
    if (keyword === 'Performance metrics') return '/manual/analytics-reporting'
    if (keyword === 'Exporting data') return '/manual/analytics-reporting'

    // Authentication / Account
    if (keyword === 'Changing password and security') return '/manual/authentication'
    if (keyword === 'Account verification') return '/manual/authentication'
    if (keyword === 'Updating business information') return '/manual/store-management'
    if (keyword === 'Notification preferences') return '/manual/webhooks'
    if (keyword === 'Closing your account') return '/manual/authentication'

    // Payments & Policies
    if (keyword === 'Payment processing setup') return '/manual/seller-agreement'
    if (keyword === 'Payout schedules') return '/manual/seller-agreement'
    if (keyword === 'Fee structure explained') return '/manual/seller-agreement'
    if (keyword === 'Tax reporting') return '/manual/seller-agreement'
    if (keyword === 'Financial statements') return '/manual/seller-agreement'

    return undefined
  }

  const getEmojiForKeyword = (keyword: string): string => {
    if (keyword.includes('merchant account')) return '👤'
    if (keyword.includes('Verification')) return '✅'
    if (keyword.includes('Dashboard')) return '📊'
    if (keyword.includes('Setting up your first product')) return '🛒'
    if (keyword.includes('Adding products')) return '➕'
    if (keyword.includes('Bulk product upload') || keyword.includes('CSV')) return '📄'
    if (keyword.includes('categories and tags')) return '🏷️'
    if (keyword.includes('variants')) return '🧩'
    if (keyword.includes('image')) return '🖼️'
    if (keyword.includes('Processing orders')) return '🧾'
    if (keyword.includes('Shipping')) return '🚚'
    if (keyword.includes('Order status')) return '⌛'
    if (keyword.includes('returns and refunds')) return '↩️'
    if (keyword.includes('communication')) return '✉️'
    if (keyword.includes('Sales')) return '💹'
    if (keyword.includes('analytics')) return '📈'
    if (keyword.includes('Performance')) return '🚀'
    if (keyword.includes('Exporting')) return '⬇️'
    if (keyword.includes('password') || keyword.includes('security')) return '🔒'
    if (keyword.includes('Notification')) return '🔔'
    if (keyword.includes('Closing your account')) return '🗝️'
    if (keyword.includes('Payment')) return '💳'
    if (keyword.includes('Payout')) return '💸'
    if (keyword.includes('Fee')) return '💲'
    if (keyword.includes('Tax')) return '🧾'
    if (keyword.includes('Financial')) return '📑'
    return '🔹'
  }

  return (
    <MerchantLayout>
      <section className="relative py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{c.title}</h1>
          <p className="text-muted-foreground mb-8 text-lg">{c.subtitle}</p>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <Search className="w-5 h-5 text-muted-foreground" />
              <Input placeholder={c.placeholder} className="flex-1" />
              <Button variant="outline">{language === 'en' ? 'Search' : 'Cari'}</Button>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-10">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl font-bold mb-6">{c.popular}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.topics.map((topic) => (
              <Card key={topic} className="p-5 hover:shadow-md transition-shadow cursor-pointer text-left">
                <div className="font-medium">{topic}</div>
                <div className="text-sm text-muted-foreground mt-1">
                  {language === 'en' ? 'View articles' : 'Lihat artikel'}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-bold mb-6">{language === 'en' ? 'Browse by section' : 'Lihat mengikut seksyen'}</h2>

          {/** Sections & Keywords Accordion */}
          <Accordion type="multiple" className="w-full">
            {[
              {
                title: 'Store Management',
                keywords: [
                  'Dashboard overview',
                  'Customer communication',
                  'Updating business information',
                  'Notification preferences',
                ],
              },
              {
                title: 'Product Catalog',
                keywords: [
                  'Setting up your first product',
                  'Adding products to your store',
                  'Bulk product upload with CSV',
                  'Product categories and tags',
                  'Managing product variants',
                  'Product image guidelines',
                ],
              },
              {
                title: 'Order Processing',
                keywords: [
                  'Processing orders',
                  'Shipping and delivery options',
                  'Order status management',
                  'Handling returns and refunds',
                ],
              },
              {
                title: 'Customer Management',
                keywords: [
                  'Customer communication',
                ],
              },
              {
                title: 'Analytics & Reporting',
                keywords: [
                  'Understanding your dashboard',
                  'Sales reports and insights',
                  'Customer analytics',
                  'Performance metrics',
                  'Exporting data',
                ],
              },
              {
                title: 'Getting Started',
                keywords: [
                  'How to create your merchant account',
                  'Verification process explained',
                  'Dashboard overview',
                ],
              },
              {
                title: 'Authentication',
                keywords: [
                  'Changing password and security',
                  'Account verification',
                ],
              },
              {
                title: 'Product API',
                keywords: [
                  'Bulk product upload with CSV',
                ],
              },
              {
                title: 'Order API',
                keywords: [
                  'Order status management',
                ],
              },
              {
                title: 'Webhooks',
                keywords: [
                  'Notification preferences',
                ],
              },
              {
                title: 'Seller Agreement',
                keywords: [
                  'Fee structure explained',
                ],
              },
              {
                title: 'Product Guidelines',
                keywords: [
                  'Product image guidelines',
                ],
              },
              {
                title: 'Shipping Policies',
                keywords: [
                  'Shipping and delivery options',
                ],
              },
              {
                title: 'Return Policies',
                keywords: [
                  'Handling returns and refunds',
                ],
              },
              {
                title: 'Payments & Finance',
                keywords: [
                  'Payment processing setup',
                  'Payout schedules',
                  'Fee structure explained',
                  'Tax reporting',
                  'Financial statements',
                ],
              },
              {
                title: 'Account',
                keywords: [
                  'Updating business information',
                  'Changing password and security',
                  'Notification preferences',
                  'Account verification',
                  'Closing your account',
                ],
              },
            ].map((section) => {
              const target = getManualPathBySection(section.title)
              return (
                <Card key={section.title} className="mb-3">
                  <AccordionItem value={section.title}>
                    <AccordionTrigger className="px-4">{section.title}</AccordionTrigger>
                    <AccordionContent>
                      <div className="grid md:grid-cols-2 gap-2 px-4 pb-4">
                        {section.keywords.map((kw) => {
                          const kwPath = getManualPathByKeyword(kw) || target
                          const emoji = getEmojiForKeyword(kw)
                          return kwPath ? (
                            <Link key={kw} to={kwPath} className="text-sm text-muted-foreground hover:text-primary inline-flex items-center gap-2">
                              <span>{emoji}</span>
                              <span className="underline-offset-2 hover:underline">{kw}</span>
                            </Link>
                          ) : (
                            <div key={kw} className="text-sm text-muted-foreground inline-flex items-center gap-2">
                              <span>{emoji}</span>
                              <span>{kw}</span>
                            </div>
                          )
                        })}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Card>
              )
            })}
          </Accordion>
        </div>
      </section>
    </MerchantLayout>
  )
}

export default HelpCenter


