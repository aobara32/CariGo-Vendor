import React from 'react'
import MerchantLayout from '../layouts/MerchantLayout'
import { Card } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Link } from 'react-router-dom'
import { 
  ChevronDown,
  ChevronUp,
  HelpCircle,
  ArrowRight,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle2,
  Info,
  AlertCircle
} from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

const FAQ = () => {
  const { language } = useLanguage()
  const [openItems, setOpenItems] = React.useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const content = {
    en: {
      hero: {
        title: 'Frequently Asked Questions',
        subtitle: 'Find answers to common questions about selling on CariGo',
        cta: 'Still Have Questions?'
      },
      
      categories: [
        {
          title: 'Getting Started',
          icon: '🚀',
          questions: [
            {
              question: 'How do I apply to sell on CariGo?',
              answer: 'You can apply to sell on CariGo by visiting our application page and filling out the simple form. You\'ll need your business registration details, contact information, and bank account details. The application process takes about 10 minutes.'
            },
            {
              question: 'What documents do I need to provide?',
              answer: 'You\'ll need to provide your business registration certificate, national ID or passport, proof of address (utility bill or bank statement), and bank statements from the last 3 months. All documents should be clear and legible.'
            },
            {
              question: 'How long does the approval process take?',
              answer: 'The approval process typically takes 24-48 hours after you submit all required documents. We\'ll notify you via email once your application is approved and you can start setting up your store.'
            },
            {
              question: 'Is there a fee to join CariGo?',
              answer: 'No, there\'s no fee to join CariGo. You can start with our free Core plan and upgrade to Basic ($48/month) or Pro ($90/month) when you\'re ready for more features.'
            }
          ]
        },
        {
          title: 'Pricing & Fees',
          icon: '💰',
          questions: [
            {
              question: 'What are CariGo\'s fees?',
              answer: 'CariGo charges platform fees based on your plan: Core (15%), Basic (9.5%), and Pro (6.5%). There\'s also a 2.5% payment processing fee for all transactions. Monthly subscription fees apply for Basic ($48) and Pro ($90) plans.'
            },
            {
              question: 'When do I get paid?',
              answer: 'Payout frequency depends on your plan: Core (monthly), Basic (weekly), and Pro (daily). Your first payout will be processed 7 days after your first sale to ensure transaction security.'
            },
            {
              question: 'Are there any hidden fees?',
              answer: 'No, CariGo is completely transparent about fees. You can see exactly what you\'ll pay using our revenue calculator. The only additional costs are payment processing fees (2.5%) which are standard across the industry.'
            },
            {
              question: 'Can I change my plan anytime?',
              answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any subscription fees. You can manage your plan from your account dashboard.'
            }
          ]
        },
        {
          title: 'Store Management',
          icon: '🏪',
          questions: [
            {
              question: 'How many products can I list?',
              answer: 'Product limits depend on your plan: Core (50 products), Basic (500 products), and Pro (unlimited products). You can upgrade your plan anytime to list more products.'
            },
            {
              question: 'How do I add products to my store?',
              answer: 'You can add products individually through your dashboard or use our CSV import feature (Basic and Pro plans). Each product needs photos, descriptions, pricing, and inventory information.'
            },
            {
              question: 'Can I customize my store appearance?',
              answer: 'Yes! Basic and Pro plans include store customization options. You can choose colors, upload a logo, customize your store description, and arrange product categories to match your brand.'
            },
            {
              question: 'How do I manage inventory?',
              answer: 'You can manage inventory through your dashboard, where you can update quantities, set low-stock alerts, and track sales. Pro plan users also get advanced inventory management tools and API access.'
            }
          ]
        },
        {
          title: 'Orders & Shipping',
          icon: '📦',
          questions: [
            {
              question: 'How do I receive and process orders?',
              answer: 'You\'ll receive order notifications via email and in your dashboard. You can view order details, customer information, and shipping requirements. Process orders by confirming inventory and arranging shipping.'
            },
            {
              question: 'Who handles shipping?',
              answer: 'You\'re responsible for shipping your products to customers. You can set your own shipping rates and policies. We recommend partnering with reliable local courier services for timely delivery.'
            },
            {
              question: 'What if a customer wants to return an item?',
              answer: 'You can set your own return policy in your store settings. CariGo provides tools to process returns and refunds. We recommend having a clear return policy to build customer trust.'
            },
            {
              question: 'How do I handle customer inquiries?',
              answer: 'Customers can contact you through your store\'s messaging system (Basic and Pro plans). You can also provide contact information in your store profile. We recommend responding within 24 hours for better customer satisfaction.'
            }
          ]
        },
        {
          title: 'Support & Resources',
          icon: '🆘',
          questions: [
            {
              question: 'What support is available?',
              answer: 'All merchants get email support and access to our knowledge base. Basic plan users get priority support and phone support. Pro plan users get dedicated account managers and custom training sessions.'
            },
            {
              question: 'Is there training available?',
              answer: 'CariGo Academy is coming soon! We are preparing comprehensive training content including store setup, product photography, digital marketing, and more. Pro plan users will also get personalized training sessions with our experts.'
            },
            {
              question: 'Can I get help with my store setup?',
              answer: 'Absolutely! Our support team can help you with store setup, product uploads, and configuration. Pro plan users get dedicated onboarding assistance to ensure everything is set up perfectly.'
            },
            {
              question: 'What if I have technical issues?',
              answer: 'Our technical support team is available to help with any platform issues. You can reach them via email, phone (Basic/Pro), or live chat. We also have comprehensive documentation and troubleshooting guides.'
            }
          ]
        }
      ],
      
      contact: {
        title: 'Still Have Questions?',
        subtitle: 'Our support team is here to help',
        options: [
          {
            icon: Mail,
            title: 'Email Support',
            description: 'support@carigobn.com',
            action: 'Contact Us'
          },
          {
            icon: Phone,
            title: 'Phone Support',
            description: '+673 822 8250',
            action: 'Call Now'
          },
          {
            icon: MessageSquare,
            title: 'Live Chat',
            description: 'Available 9AM-6PM',
            action: 'Coming Soon'
          }
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
        title: 'Soalan Lazim',
        subtitle: 'Cari jawapan kepada soalan biasa tentang menjual di CariGo',
        cta: 'Masih Ada Soalan?'
      },
      
      categories: [
        {
          title: 'Bermula',
          icon: '🚀',
          questions: [
            {
              question: 'Bagaimana saya memohon untuk menjual di CariGo?',
              answer: 'Anda boleh memohon untuk menjual di CariGo dengan melawat halaman permohonan kami dan mengisi borang mudah. Anda memerlukan butiran pendaftaran perniagaan, maklumat hubungan, dan butiran akaun bank. Proses permohonan mengambil masa kira-kira 10 minit.'
            },
            {
              question: 'Dokumen apa yang perlu saya sediakan?',
              answer: 'Anda perlu menyediakan sijil pendaftaran perniagaan, kad pengenalan atau pasport, bukti alamat (bil utiliti atau penyata bank), dan penyata bank dari 3 bulan terakhir. Semua dokumen harus jelas dan boleh dibaca.'
            },
            {
              question: 'Berapa lama proses kelulusan mengambil masa?',
              answer: 'Proses kelulusan biasanya mengambil masa 24-48 jam selepas anda menyerahkan semua dokumen yang diperlukan. Kami akan memaklumkan anda melalui e-mel sebaik sahaja permohonan anda diluluskan dan anda boleh mula menyediakan kedai anda.'
            },
            {
              question: 'Adakah ada yuran untuk menyertai CariGo?',
              answer: 'Tidak, tiada yuran untuk menyertai CariGo. Anda boleh bermula dengan pelan Core percuma kami dan naik taraf ke Basic ($48/bulan) atau Pro ($90/bulan) apabila anda bersedia untuk lebih banyak ciri.'
            }
          ]
        },
        {
          title: 'Harga & Yuran',
          icon: '💰',
          questions: [
            {
              question: 'Apakah yuran CariGo?',
              answer: 'CariGo mengenakan yuran platform berdasarkan pelan anda: Core (15%), Basic (9.5%), dan Pro (6.5%). Terdapat juga yuran pemprosesan pembayaran 2.5% untuk semua transaksi. Yuran langganan bulanan dikenakan untuk pelan Basic ($48) dan Pro ($90).'
            },
            {
              question: 'Bilakah saya dibayar?',
              answer: 'Kekerapan pembayaran bergantung pada pelan anda: Core (bulanan), Basic (mingguan), dan Pro (harian). Pembayaran pertama anda akan diproses 7 hari selepas jualan pertama anda untuk memastikan keselamatan transaksi.'
            },
            {
              question: 'Adakah ada yuran tersembunyi?',
              answer: 'Tidak, CariGo benar-benar telus tentang yuran. Anda boleh melihat tepat apa yang anda akan bayar menggunakan kalkulator pendapatan kami. Satu-satunya kos tambahan adalah yuran pemprosesan pembayaran (2.5%) yang standard dalam industri.'
            },
            {
              question: 'Bolehkah saya menukar pelan saya bila-bila masa?',
              answer: 'Ya, anda boleh menaik atau menurunkan taraf pelan anda bila-bila masa. Perubahan berkuat kuasa serta-merta, dan kami akan mengira semula sebarang yuran langganan. Anda boleh mengurus pelan anda dari papan pemuka akaun anda.'
            }
          ]
        },
        {
          title: 'Pengurusan Kedai',
          icon: '🏪',
          questions: [
            {
              question: 'Berapa banyak produk yang boleh saya senaraikan?',
              answer: 'Had produk bergantung pada pelan anda: Core (50 produk), Basic (500 produk), dan Pro (produk tanpa had). Anda boleh menaik taraf pelan anda bila-bila masa untuk menyenaraikan lebih banyak produk.'
            },
            {
              question: 'Bagaimana saya menambah produk ke kedai saya?',
              answer: 'Anda boleh menambah produk secara individu melalui papan pemuka anda atau menggunakan ciri import CSV kami (pelan Basic dan Pro). Setiap produk memerlukan foto, penerangan, harga, dan maklumat inventori.'
            },
            {
              question: 'Bolehkah saya menyesuaikan penampilan kedai saya?',
              answer: 'Ya! Pelan Basic dan Pro termasuk pilihan penyesuaian kedai. Anda boleh memilih warna, muat naik logo, menyesuaikan penerangan kedai anda, dan mengatur kategori produk untuk sepadan dengan jenama anda.'
            },
            {
              question: 'Bagaimana saya mengurus inventori?',
              answer: 'Anda boleh mengurus inventori melalui papan pemuka anda, di mana anda boleh mengemas kini kuantiti, menetapkan amaran stok rendah, dan menjejaki jualan. Pengguna pelan Pro juga mendapat alatan pengurusan inventori lanjutan dan akses API.'
            }
          ]
        },
        {
          title: 'Pesanan & Penghantaran',
          icon: '📦',
          questions: [
            {
              question: 'Bagaimana saya menerima dan memproses pesanan?',
              answer: 'Anda akan menerima notifikasi pesanan melalui e-mel dan dalam papan pemuka anda. Anda boleh melihat butiran pesanan, maklumat pelanggan, dan keperluan penghantaran. Proses pesanan dengan mengesahkan inventori dan mengatur penghantaran.'
            },
            {
              question: 'Siapa yang mengendalikan penghantaran?',
              answer: 'Anda bertanggungjawab untuk menghantar produk anda kepada pelanggan. Anda boleh menetapkan kadar dan dasar penghantaran anda sendiri. Kami mengesyorkan bekerjasama dengan perkhidmatan kurier tempatan yang boleh dipercayai untuk penghantaran tepat pada masanya.'
            },
            {
              question: 'Bagaimana jika pelanggan mahu memulangkan item?',
              answer: 'Anda boleh menetapkan dasar pulangan anda sendiri dalam tetapan kedai anda. CariGo menyediakan alatan untuk memproses pulangan dan bayaran balik. Kami mengesyorkan mempunyai dasar pulangan yang jelas untuk membina kepercayaan pelanggan.'
            },
            {
              question: 'Bagaimana saya mengendalikan pertanyaan pelanggan?',
              answer: 'Pelanggan boleh menghubungi anda melalui sistem pemesejan kedai anda (pelan Basic dan Pro). Anda juga boleh menyediakan maklumat hubungan dalam profil kedai anda. Kami mengesyorkan membalas dalam 24 jam untuk kepuasan pelanggan yang lebih baik.'
            }
          ]
        },
        {
          title: 'Sokongan & Sumber',
          icon: '🆘',
          questions: [
            {
              question: 'Sokongan apa yang tersedia?',
              answer: 'Semua pedagang mendapat sokongan e-mel dan akses ke pangkalan pengetahuan kami. Pengguna pelan Basic mendapat sokongan keutamaan dan sokongan telefon. Pengguna pelan Pro mendapat pengurus akaun dedikasi dan sesi latihan tersuai.'
            },
            {
              question: 'Adakah latihan tersedia?',
              answer: 'Akademi CariGo akan datang! Kami sedang menyediakan kandungan latihan komprehensif termasuk persediaan kedai, fotografi produk, pemasaran digital, dan banyak lagi. Pengguna pelan Pro juga akan mendapat sesi latihan peribadi dengan pakar kami.'
            },
            {
              question: 'Bolehkah saya mendapat bantuan dengan persediaan kedai saya?',
              answer: 'Sudah tentu! Pasukan sokongan kami boleh membantu anda dengan persediaan kedai, muat naik produk, dan konfigurasi. Pengguna pelan Pro mendapat bantuan onboarding dedikasi untuk memastikan semuanya disediakan dengan sempurna.'
            },
            {
              question: 'Bagaimana jika saya menghadapi masalah teknikal?',
              answer: 'Pasukan sokongan teknikal kami tersedia untuk membantu dengan sebarang masalah platform. Anda boleh menghubungi mereka melalui e-mel, telefon (Basic/Pro), atau chat langsung. Kami juga mempunyai dokumentasi komprehensif dan panduan penyelesaian masalah.'
            }
          ]
        }
      ],
      
      contact: {
        title: 'Masih Ada Soalan?',
        subtitle: 'Pasukan sokongan kami di sini untuk membantu',
        options: [
          {
            icon: Mail,
            title: 'Sokongan E-mel',
            description: 'support@carigobn.com',
            action: 'Hubungi Kami'
          },
          {
            icon: Phone,
            title: 'Sokongan Telefon',
            description: '+673 822 8250',
            action: 'Panggil Sekarang'
          },
          {
            icon: MessageSquare,
            title: 'Chat Langsung',
            description: 'Tersedia 9AM-6PM',
            action: 'Akan Datang'
          }
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
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{c.hero.title}</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">{c.hero.subtitle}</p>
            <Link to="/support">
              <Button size="lg" variant="inverseSecondary" className="text-lg px-8">
                {c.hero.cta} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {c.categories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-4xl">{category.icon}</span>
                  <h2 className="text-3xl font-bold">{category.title}</h2>
                </div>
                
                <div className="space-y-4">
                  {category.questions.map((item, itemIndex) => {
                    const globalIndex = categoryIndex * 100 + itemIndex;
                    const isOpen = openItems.includes(globalIndex);
                    
                    return (
                      <Card key={itemIndex} className="overflow-hidden">
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                        >
                          <h3 className="text-lg font-semibold pr-4">{item.question}</h3>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-primary shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-primary shrink-0" />
                          )}
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-6">
                            <div className="border-t pt-4">
                              <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                            </div>
                          </div>
                        )}
                      </Card>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">{c.contact.title}</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">{c.contact.subtitle}</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {c.contact.options.map((option, index) => {
              const Icon = option.icon;
              return (
                <Card key={index} className="p-8 text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{option.title}</h3>
                  <p className="text-lg font-semibold text-primary mb-4">{option.description}</p>
                  {option.title === (language === 'en' ? 'Phone Support' : 'Sokongan Telefon') ? (
                        <a href="tel:+6738228250" className="block">
                      <Button variant="outline" className="w-full">
                        {option.action}
                      </Button> 
                    </a>
                  ) : option.title === (language === 'en' ? 'Email Support' : 'Sokongan E-mel') ? (
                    <Link to="/inquiry" className="block">
                      <Button variant="outline" className="w-full">
                        {language === 'en' ? 'Contact Us' : 'Hubungi Kami'}
                      </Button>
                    </Link>
                  ) : option.title === (language === 'en' ? 'Live Chat' : 'Chat Langsung') ? (
                    <Button variant="outline" className="w-full" disabled>
                      {language === 'en' ? 'Coming Soon' : 'Akan Datang'}
                    </Button>
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

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-white">
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
              <Link to="/getting-started">
                <Button size="lg" variant="outlineWhite" className="text-lg px-10">
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

export default FAQ
