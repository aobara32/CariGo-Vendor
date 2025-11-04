import React from 'react'
import MerchantLayout from '../layouts/MerchantLayout'
import { useLanguage } from '../contexts/LanguageContext'

const TermsOfService = () => {
  const { language } = useLanguage()

  const content = {
    en: {
      title: 'Terms of Service',
      lastUpdated: 'Last updated: October 2025',
      generalTerms: {
        title: 'Terms of Service (For General Users)',
        sections: [
          {
            title: 'Eligibility',
            content: [
              'You must be at least 18 years old to use the Platform. By using CariGo, you represent that you meet this requirement and that the information you provide is accurate and complete.'
            ]
          },
          {
            title: 'Account Registration',
            content: [
              'To make purchases or access certain features, you may be required to create an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You agree to notify us immediately of any unauthorized access.'
            ]
          },
          {
            title: 'Use of the Platform',
            content: [
              'You agree to use the Platform only for lawful purposes and in accordance with applicable laws of Brunei Darussalam. You must not:',
              'Use the Platform to engage in fraudulent, deceptive, or illegal transactions.',
              'Post or upload harmful, obscene, or defamatory content.',
              'Interfere with the operation or security of the Platform.'
            ]
          },
          {
            title: 'Transactions and Payments',
            content: [
              'All payments are processed through secure third-party payment providers. CariGo does not store payment card details. Product prices are determined by individual merchants, and CariGo is not a party to any sale contract between you and the seller. Any refund or dispute must be resolved with the respective seller, unless otherwise stated.'
            ]
          },
          {
            title: 'Product Information and Availability',
            content: [
              'Merchants are solely responsible for the accuracy of their listings. We do not guarantee that product descriptions, pricing, or availability are error-free. In case of error, we reserve the right to cancel orders or update information.'
            ]
          },
          {
            title: 'Delivery and Pickup',
            content: [
              'Delivery options, fees, and timelines are set by each merchant. Some items may be available for pickup. Once you place an order, you will receive confirmation and tracking information where available.'
            ]
          },
          {
            title: 'Returns and Refunds',
            content: [
              'Returns, exchanges, and refunds are subject to the merchant\'s policy. If a transaction is found to be fraudulent, CariGo reserves the right to investigate and take appropriate action, including suspending accounts.'
            ]
          },
          {
            title: 'Intellectual Property',
            content: [
              'All content on the Platform (text, graphics, logos, icons, and software) is owned by CariGo or its licensors. You may not copy, reproduce, or redistribute any content without prior written permission.'
            ]
          },
          {
            title: 'Limitation of Liability',
            content: [
              'CariGo provides the Platform "as is" without warranties of any kind. To the maximum extent permitted by law, we are not liable for indirect, incidental, or consequential damages arising from the use of the Platform or goods purchased.'
            ]
          },
          {
            title: 'Termination',
            content: [
              'We may suspend or terminate your account if you violate these Terms. You may terminate your account at any time by contacting support.'
            ]
          },
          {
            title: 'Governing Law and Jurisdiction',
            content: [
              'These Terms are governed by the laws of Brunei Darussalam. Any disputes shall be submitted to the competent courts of Brunei Darussalam.'
            ]
          }
        ]
      },
      merchantTerms: {
        title: 'Merchant / Vendor Terms of Service',
        sections: [
          {
            title: 'Eligibility',
            content: [
              'To sell on CariGo, you must be a legally registered business entity or individual authorized to engage in commercial activity in Brunei Darussalam.'
            ]
          },
          {
            title: 'Account and Verification',
            content: [
              'Merchants must complete Know Your Business (KYB) or Know Your Customer (KYC) verification, providing valid business registration, identification, and bank account information. We reserve the right to reject or suspend accounts that fail verification or compliance requirements.'
            ]
          },
          {
            title: 'Listing and Content',
            content: [
              'You are responsible for all listings, images, and product information.',
              'Product descriptions must be accurate and not misleading.',
              'Prohibited goods (e.g., counterfeit, hazardous, or restricted items) are not allowed.',
              'You grant CariGo a non-exclusive license to use your content for promotional and operational purposes.'
            ]
          },
          {
            title: 'Fees and Payments',
            content: [
              'You agree to the following structure:',
              'Core Plan: US$0/month, 15.0% platform fee + 2.5% payment fee (total 17.5%)',
              'Basic Plan: US$48/month, 9.5% platform fee + 2.5% payment fee (total 12.0%)',
              'Pro Plan: US$90/month, 6.5% platform fee + 2.5% payment fee (total 9.0%)',
              'Payment processing is handled by external PCI-compliant providers. Subscription fees are billed monthly.'
            ]
          },
          {
            title: 'Payouts',
            content: [
              'Core: monthly payouts',
              'Basic: bi-weekly payouts',
              'Pro: weekly (or on-request) payouts',
              'All payouts are made in BND/USD (depending on settings) after deduction of applicable fees and chargebacks.'
            ]
          },
          {
            title: 'Taxes',
            content: [
              'You are responsible for collecting, reporting, and remitting all applicable taxes. CariGo may provide transaction summaries but does not file taxes on your behalf.'
            ]
          },
          {
            title: 'Refunds and Chargebacks',
            content: [
              'You must honor your stated refund policy and cooperate in resolving disputes. In case of chargebacks, CariGo reserves the right to deduct corresponding amounts from future payouts.'
            ]
          },
          {
            title: 'Compliance and Audits',
            content: [
              'CariGo may audit your listings for compliance with marketplace policies. Repeated violations may result in suspension or termination.'
            ]
          },
          {
            title: 'Data and Confidentiality',
            content: [
              'You agree not to misuse buyer data and to comply with applicable privacy laws. Customer data may only be used for fulfilling orders placed through the Platform.'
            ]
          },
          {
            title: 'Limitation of Liability',
            content: [
              'CariGo is not liable for lost profits, data, or indirect damages arising from your use of the Platform. Our aggregate liability shall not exceed the total fees paid by you in the three months preceding the claim.'
            ]
          },
          {
            title: 'Termination',
            content: [
              'Either party may terminate this Agreement with 30 days\' notice. Immediate termination may occur for violations of law, fraud, or prohibited products.'
            ]
          },
          {
            title: 'Governing Law',
            content: [
              'This Agreement is governed by the laws of Brunei Darussalam.'
            ]
          }
        ]
      },
      contact: {
        title: 'Contact Information',
        description: 'For questions about these Terms of Service, please contact us:',
        email: 'support@carigobn.com',
        phone: '+673 822 8250',
        address: 'CariGo Legal Department, Brunei Darussalam'
      }
    },
    ms: {
      title: 'Terma Perkhidmatan',
      lastUpdated: 'Kemaskini terakhir: Oktober 2025',
      generalTerms: {
        title: 'Terma Perkhidmatan (Untuk Pengguna Umum)',
        sections: [
          {
            title: 'Kelayakan',
            content: [
              'Anda mestilah sekurang-kurangnya 18 tahun untuk menggunakan Platform. Dengan menggunakan CariGo, anda mewakili bahawa anda memenuhi keperluan ini dan maklumat yang anda berikan adalah tepat dan lengkap.'
            ]
          },
          {
            title: 'Pendaftaran Akaun',
            content: [
              'Untuk membuat pembelian atau mengakses ciri-ciri tertentu, anda mungkin dikehendaki untuk mencipta akaun. Anda bertanggungjawab untuk mengekalkan kerahsiaan kredensial akaun anda dan untuk semua aktiviti di bawah akaun anda. Anda bersetuju untuk memberitahu kami dengan segera tentang sebarang akses tanpa kebenaran.'
            ]
          },
          {
            title: 'Penggunaan Platform',
            content: [
              'Anda bersetuju untuk menggunakan Platform hanya untuk tujuan yang sah dan selaras dengan undang-undang yang berkenaan di Brunei Darussalam. Anda tidak boleh:',
              'Menggunakan Platform untuk terlibat dalam transaksi yang menipu, mengelirukan, atau haram.',
              'Menyampaikan atau memuat naik kandungan yang berbahaya, lucah, atau fitnah.',
              'Mengganggu operasi atau keselamatan Platform.'
            ]
          },
          {
            title: 'Transaksi dan Pembayaran',
            content: [
              'Semua pembayaran diproses melalui penyedia pembayaran pihak ketiga yang selamat. CariGo tidak menyimpan butiran kad pembayaran. Harga produk ditentukan oleh peniaga individu, dan CariGo bukan pihak kepada sebarang kontrak jualan antara anda dan penjual. Sebarang bayaran balik atau pertikaian mesti diselesaikan dengan penjual masing-masing, melainkan dinyatakan sebaliknya.'
            ]
          },
          {
            title: 'Maklumat dan Ketersediaan Produk',
            content: [
              'Peniaga bertanggungjawab sepenuhnya untuk ketepatan penyenaraian mereka. Kami tidak menjamin bahawa penerangan produk, harga, atau ketersediaan bebas ralat. Sekiranya berlaku ralat, kami berhak untuk membatalkan pesanan atau mengemas kini maklumat.'
            ]
          },
          {
            title: 'Penghantaran dan Pengambilan',
            content: [
              'Pilihan penghantaran, yuran, dan masa ditetapkan oleh setiap peniaga. Sesetengah item mungkin tersedia untuk pengambilan. Setelah anda membuat pesanan, anda akan menerima pengesahan dan maklumat penjejakan jika tersedia.'
            ]
          },
          {
            title: 'Pemulangan dan Bayaran Balik',
            content: [
              'Pemulangan, pertukaran, dan bayaran balik tertakluk kepada polisi peniaga. Sekiranya transaksi didapati menipu, CariGo berhak untuk menyiasat dan mengambil tindakan yang sesuai, termasuk menggantung akaun.'
            ]
          },
          {
            title: 'Harta Intelek',
            content: [
              'Semua kandungan di Platform (teks, grafik, logo, ikon, dan perisian) dimiliki oleh CariGo atau pemberi lesennya. Anda tidak boleh menyalin, menghasilkan semula, atau mengedarkan semula sebarang kandungan tanpa kebenaran bertulis terlebih dahulu.'
            ]
          },
          {
            title: 'Had Liabiliti',
            content: [
              'CariGo menyediakan Platform "sebagaimana adanya" tanpa jaminan apa-apa jenis. Sejauh maksimum yang dibenarkan oleh undang-undang, kami tidak bertanggungjawab untuk kerosakan tidak langsung, insidental, atau akibat yang timbul daripada penggunaan Platform atau barang yang dibeli.'
            ]
          },
          {
            title: 'Penamatan',
            content: [
              'Kami boleh menggantung atau menamatkan akaun anda jika anda melanggar Terma ini. Anda boleh menamatkan akaun anda pada bila-bila masa dengan menghubungi sokongan.'
            ]
          },
          {
            title: 'Undang-undang yang Mengatur dan Bidang Kuasa',
            content: [
              'Terma ini diatur oleh undang-undang Brunei Darussalam. Sebarang pertikaian hendaklah dikemukakan kepada mahkamah yang berwibawa di Brunei Darussalam.'
            ]
          }
        ]
      },
      merchantTerms: {
        title: 'Terma Perkhidmatan Peniaga / Vendor',
        sections: [
          {
            title: 'Kelayakan',
            content: [
              'Untuk menjual di CariGo, anda mestilah entiti perniagaan yang didaftarkan secara sah atau individu yang diberi kuasa untuk terlibat dalam aktiviti komersial di Brunei Darussalam.'
            ]
          },
          {
            title: 'Akaun dan Pengesahan',
            content: [
              'Peniaga mesti melengkapkan pengesahan Know Your Business (KYB) atau Know Your Customer (KYC), memberikan pendaftaran perniagaan yang sah, pengenalan, dan maklumat akaun bank. Kami berhak untuk menolak atau menggantung akaun yang gagal memenuhi keperluan pengesahan atau pematuhan.'
            ]
          },
          {
            title: 'Penyenaraian dan Kandungan',
            content: [
              'Anda bertanggungjawab untuk semua penyenaraian, imej, dan maklumat produk.',
              'Penerangan produk mestilah tepat dan tidak mengelirukan.',
              'Barang yang dilarang (cth. tiruan, berbahaya, atau item terhad) tidak dibenarkan.',
              'Anda memberikan CariGo lesen bukan eksklusif untuk menggunakan kandungan anda untuk tujuan promosi dan operasi.'
            ]
          },
          {
            title: 'Yuran dan Pembayaran',
            content: [
              'Anda bersetuju dengan struktur berikut:',
              'Pelan Core: US$0/bulan, yuran platform 15.0% + yuran pembayaran 2.5% (jumlah 17.5%)',
              'Pelan Basic: US$48/bulan, yuran platform 9.5% + yuran pembayaran 2.5% (jumlah 12.0%)',
              'Pelan Pro: US$90/bulan, yuran platform 6.5% + yuran pembayaran 2.5% (jumlah 9.0%)',
              'Pemprosesan pembayaran dikendalikan oleh penyedia yang patuh PCI. Yuran langganan ditagih bulanan.'
            ]
          },
          {
            title: 'Pembayaran Keluar',
            content: [
              'Core: pembayaran keluar bulanan',
              'Basic: pembayaran keluar dua minggu',
              'Pro: pembayaran keluar mingguan (atau atas permintaan)',
              'Semua pembayaran keluar dibuat dalam BND/USD (bergantung pada tetapan) selepas potongan yuran yang berkenaan dan chargeback.'
            ]
          },
          {
            title: 'Cukai',
            content: [
              'Anda bertanggungjawab untuk mengutip, melaporkan, dan membayar semua cukai yang berkenaan. CariGo mungkin menyediakan ringkasan transaksi tetapi tidak memfailkan cukai bagi pihak anda.'
            ]
          },
          {
            title: 'Bayaran Balik dan Chargeback',
            content: [
              'Anda mesti menghormati polisi bayaran balik yang dinyatakan dan bekerjasama dalam menyelesaikan pertikaian. Sekiranya berlaku chargeback, CariGo berhak untuk memotong jumlah yang sepadan daripada pembayaran keluar masa depan.'
            ]
          },
          {
            title: 'Pematuhan dan Audit',
            content: [
              'CariGo boleh mengaudit penyenaraian anda untuk pematuhan dengan polisi pasaran. Pelanggaran berulang mungkin mengakibatkan penggantungan atau penamatan.'
            ]
          },
          {
            title: 'Data dan Kerahsiaan',
            content: [
              'Anda bersetuju untuk tidak menyalahgunakan data pembeli dan mematuhi undang-undang privasi yang berkenaan. Data pelanggan hanya boleh digunakan untuk memenuhi pesanan yang dibuat melalui Platform.'
            ]
          },
          {
            title: 'Had Liabiliti',
            content: [
              'CariGo tidak bertanggungjawab untuk kehilangan keuntungan, data, atau kerosakan tidak langsung yang timbul daripada penggunaan Platform anda. Liabiliti agregat kami tidak boleh melebihi jumlah yuran yang dibayar oleh anda dalam tiga bulan sebelum tuntutan.'
            ]
          },
          {
            title: 'Penamatan',
            content: [
              'Mana-mana pihak boleh menamatkan Perjanjian ini dengan notis 30 hari. Penamatan serta-merta mungkin berlaku untuk pelanggaran undang-undang, penipuan, atau produk yang dilarang.'
            ]
          },
          {
            title: 'Undang-undang yang Mengatur',
            content: [
              'Perjanjian ini diatur oleh undang-undang Brunei Darussalam.'
            ]
          }
        ]
      },
      contact: {
        title: 'Maklumat Hubungan',
        description: 'Untuk soalan tentang Terma Perkhidmatan ini, sila hubungi kami:',
        email: 'support@carigobn.com',
        phone: '+673 822 8250',
        address: 'Jabatan Undang-undang CariGo, Brunei Darussalam'
      }
    }
  }

  const c = content[language]

  return (
    <MerchantLayout>
      {/* Hero Section */}
      <section className="relative min-h-[400px] flex items-center bg-gradient-to-br from-primary via-primary to-primary/90 text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{c.title}</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">{c.lastUpdated}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* General Terms */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">{c.generalTerms.title}</h2>
              <div className="space-y-8">
                {c.generalTerms.sections.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold mb-4">{index + 1}. {section.title}</h3>
                    <div className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <p key={itemIndex} className="text-muted-foreground leading-relaxed">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Merchant Terms */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">{c.merchantTerms.title}</h2>
              <div className="space-y-8">
                {c.merchantTerms.sections.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold mb-4">{index + 1}. {section.title}</h3>
                    <div className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <p key={itemIndex} className="text-muted-foreground leading-relaxed">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="border-t pt-8">
              <h3 className="text-xl font-semibold mb-4">{c.contact.title}</h3>
              <p className="text-muted-foreground mb-4">{c.contact.description}</p>
              <div className="space-y-2">
                <p><strong>Email:</strong> <a href={`mailto:${c.contact.email}`} className="text-primary hover:underline">{c.contact.email}</a></p>
                <p><strong>Phone:</strong> <a href={`tel:${c.contact.phone}`} className="text-primary hover:underline">{c.contact.phone}</a></p>
                <p><strong>Address:</strong> {c.contact.address}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MerchantLayout>
  )
}

export default TermsOfService