import React from 'react'
import ManualLayout from './ManualLayout'
import { useLanguage } from '../../contexts/LanguageContext'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'
import { CheckCircle2, Clock, AlertCircle, ArrowRight, Settings, User, Shield, Bell, Key, Trash2, Edit } from 'lucide-react'

const AccountSettingsManual = () => {
  const { language } = useLanguage()
  
  const content = {
    en: {
      title: 'Account Settings',
      subtitle: 'Manage your account and preferences',
      overview: 'Learn how to update your business information, manage security settings, configure notifications, and maintain your CariGo merchant account.',
      keyFeatures: [
        'Update business information and contact details',
        'Change password and security settings',
        'Configure notification preferences',
        'Manage account verification status',
        'Update profile and branding',
        'Account closure and data management'
      ],
      profile: {
        title: 'Business Information Management',
        sections: [
          {
            title: 'Basic Information',
            items: [
              {
                name: 'Business Name',
                description: 'Your registered business name as it appears to customers',
                action: 'Update business name and legal entity information'
              },
              {
                name: 'Contact Information',
                description: 'Email, phone, and address details for your business',
                action: 'Modify contact details and business address'
              },
              {
                name: 'Business Registration',
                description: 'Legal registration number and business type',
                action: 'Update registration details and business category'
              }
            ]
          },
          {
            title: 'Profile Settings',
            items: [
              {
                name: 'Store Logo',
                description: 'Upload and manage your store logo and branding',
                action: 'Change logo, update store description and tagline'
              },
              {
                name: 'Social Media Links',
                description: 'Connect your social media accounts',
                action: 'Add Facebook, Instagram, and other social links'
              },
              {
                name: 'Business Hours',
                description: 'Set your operating hours and availability',
                action: 'Configure business hours and holiday schedules'
              }
            ]
          }
        ]
      },
      security: {
        title: 'Security & Access Control',
        features: [
          {
            title: 'Password Management',
            description: 'Secure your account with strong passwords',
            steps: [
              'Navigate to Settings > Security',
              'Click "Change Password"',
              'Enter current password',
              'Create new strong password (8+ characters)',
              'Confirm new password and save'
            ]
          },
          {
            title: 'Two-Factor Authentication',
            description: 'Add an extra layer of security to your account',
            steps: [
              'Enable 2FA in Security settings',
              'Download authenticator app (Google Authenticator)',
              'Scan QR code with authenticator app',
              'Enter verification code to confirm setup',
              'Save backup codes for emergency access'
            ]
          },
          {
            title: 'Login Activity',
            description: 'Monitor account access and suspicious activity',
            features: [
              'View recent login history',
              'Monitor device access',
              'Set up login alerts',
              'Revoke access from unknown devices'
            ]
          }
        ]
      },
      notifications: {
        title: 'Notification Preferences',
        categories: [
          {
            title: 'Order Notifications',
            settings: [
              { name: 'New Order Alerts', description: 'Get notified when you receive new orders', default: true },
              { name: 'Order Status Updates', description: 'Updates on order processing and fulfillment', default: true },
              { name: 'Cancellation Notices', description: 'Notifications for order cancellations', default: true },
              { name: 'Refund Requests', description: 'Alerts for customer refund requests', default: true }
            ]
          },
          {
            title: 'Business Notifications',
            settings: [
              { name: 'Payment Confirmations', description: 'Notifications for successful payments and payouts', default: true },
              { name: 'Account Updates', description: 'Important account and policy updates', default: true },
              { name: 'Security Alerts', description: 'Login attempts and security notifications', default: true },
              { name: 'System Maintenance', description: 'Platform maintenance and downtime notices', default: false }
            ]
          },
          {
            title: 'Marketing Communications',
            settings: [
              { name: 'Product Recommendations', description: 'Tips and suggestions for improving your store', default: false },
              { name: 'Promotional Offers', description: 'Special offers and discounts for merchants', default: false },
              { name: 'Newsletter', description: 'Weekly newsletter with platform updates', default: true },
              { name: 'Survey Invitations', description: 'Participate in user experience surveys', default: false }
            ]
          }
        ]
      },
      verification: {
        title: 'Account Verification',
        statuses: [
          {
            status: 'Unverified',
            description: 'Account requires verification to access all features',
            actions: ['Upload business registration documents', 'Provide identity verification', 'Complete KYC/KYB process']
          },
          {
            status: 'Pending Review',
            description: 'Documents submitted and under review',
            actions: ['Wait for review completion (24-48 hours)', 'Check email for updates', 'Contact support if delayed']
          },
          {
            status: 'Verified',
            description: 'Account fully verified with access to all features',
            actions: ['Access to all platform features', 'Priority customer support', 'Enhanced trust indicators']
          },
          {
            status: 'Rejected',
            description: 'Verification documents need to be resubmitted',
            actions: ['Review rejection reasons', 'Gather required documents', 'Resubmit verification materials']
          }
        ]
      },
      dataManagement: {
        title: 'Data Management & Privacy',
        sections: [
          {
            title: 'Data Export',
            description: 'Download your business data and transaction history',
            features: [
              'Export transaction history (CSV/PDF)',
              'Download customer data (with consent)',
              'Generate financial reports',
              'Archive business documents'
            ]
          },
          {
            title: 'Privacy Settings',
            description: 'Control how your data is used and shared',
            options: [
              'Data processing consent management',
              'Marketing communication preferences',
              'Third-party data sharing controls',
              'Analytics and tracking preferences'
            ]
          },
          {
            title: 'Account Deletion',
            description: 'Permanently delete your account and data',
            warning: 'This action is irreversible and will permanently delete all your data.',
            steps: [
              'Ensure all pending orders are completed',
              'Withdraw any remaining funds',
              'Download important data',
              'Contact support to initiate deletion process',
              'Confirm deletion request'
            ]
          }
        ]
      },
      troubleshooting: {
        title: 'Common Issues',
        issues: [
          {
            problem: 'Cannot update business information',
            solution: 'Ensure all required fields are filled and documents are properly uploaded. Contact support if verification is required.'
          },
          {
            problem: 'Password reset not working',
            solution: 'Check spam folder for reset emails. Try using a different email address or contact support for assistance.'
          },
          {
            problem: 'Notifications not received',
            solution: 'Check notification settings and ensure email addresses are correct. Whitelist CariGo emails to avoid spam filtering.'
          },
          {
            problem: 'Verification stuck in pending',
            solution: 'Verification typically takes 24-48 hours. Contact support if it has been longer than expected.'
          },
          {
            problem: 'Two-factor authentication issues',
            solution: 'Use backup codes if authenticator app is not working. Contact support to disable 2FA if needed.'
          }
        ]
      }
    },
    ms: {
      title: 'Tetapan Akaun',
      subtitle: 'Urus akaun dan keutamaan anda',
      overview: 'Pelajari cara mengemas kini maklumat perniagaan, mengurus tetapan keselamatan, mengkonfigur pemberitahuan, dan mengekalkan akaun peniaga CariGo anda.',
      keyFeatures: [
        'Kemas kini maklumat perniagaan dan butiran hubungan',
        'Tukar kata laluan dan tetapan keselamatan',
        'Konfigur keutamaan pemberitahuan',
        'Urus status pengesahan akaun',
        'Kemas kini profil dan jenama',
        'Penutupan akaun dan pengurusan data'
      ],
      profile: {
        title: 'Pengurusan Maklumat Perniagaan',
        sections: [
          {
            title: 'Maklumat Asas',
            items: [
              {
                name: 'Nama Perniagaan',
                description: 'Nama perniagaan berdaftar anda seperti yang kelihatan kepada pelanggan',
                action: 'Kemas kini nama perniagaan dan maklumat entiti undang-undang'
              },
              {
                name: 'Maklumat Hubungan',
                description: 'Butiran e-mel, telefon, dan alamat untuk perniagaan anda',
                action: 'Ubah butiran hubungan dan alamat perniagaan'
              },
              {
                name: 'Pendaftaran Perniagaan',
                description: 'Nombor pendaftaran undang-undang dan jenis perniagaan',
                action: 'Kemas kini butiran pendaftaran dan kategori perniagaan'
              }
            ]
          },
          {
            title: 'Tetapan Profil',
            items: [
              {
                name: 'Logo Kedai',
                description: 'Muat naik dan urus logo kedai dan jenama anda',
                action: 'Tukar logo, kemas kini penerangan kedai dan tagline'
              },
              {
                name: 'Pautan Media Sosial',
                description: 'Sambungkan akaun media sosial anda',
                action: 'Tambah pautan Facebook, Instagram, dan media sosial lain'
              },
              {
                name: 'Waktu Perniagaan',
                description: 'Tetapkan waktu operasi dan ketersediaan anda',
                action: 'Konfigur waktu perniagaan dan jadual cuti'
              }
            ]
          }
        ]
      },
      security: {
        title: 'Keselamatan & Kawalan Akses',
        features: [
          {
            title: 'Pengurusan Kata Laluan',
            description: 'Lindungi akaun anda dengan kata laluan yang kuat',
            steps: [
              'Navigasi ke Tetapan > Keselamatan',
              'Klik "Tukar Kata Laluan"',
              'Masukkan kata laluan semasa',
              'Cipta kata laluan kuat baru (8+ aksara)',
              'Sahkan kata laluan baru dan simpan'
            ]
          },
          {
            title: 'Pengesahan Dua Faktor',
            description: 'Tambah lapisan keselamatan tambahan ke akaun anda',
            steps: [
              'Aktifkan 2FA dalam tetapan Keselamatan',
              'Muat turun aplikasi pengesah (Google Authenticator)',
              'Imbas kod QR dengan aplikasi pengesah',
              'Masukkan kod pengesahan untuk mengesahkan penyediaan',
              'Simpan kod sandaran untuk akses kecemasan'
            ]
          },
          {
            title: 'Aktiviti Log Masuk',
            description: 'Pantau akses akaun dan aktiviti yang mencurigakan',
            features: [
              'Lihat sejarah log masuk terkini',
              'Pantau akses peranti',
              'Sediakan amaran log masuk',
              'Tarik balik akses dari peranti yang tidak dikenali'
            ]
          }
        ]
      },
      notifications: {
        title: 'Keutamaan Pemberitahuan',
        categories: [
          {
            title: 'Pemberitahuan Pesanan',
            settings: [
              { name: 'Amalan Pesanan Baru', description: 'Dapatkan pemberitahuan apabila anda menerima pesanan baru', default: true },
              { name: 'Kemas Kini Status Pesanan', description: 'Kemas kini mengenai pemprosesan dan pemenuhan pesanan', default: true },
              { name: 'Notis Pembatalan', description: 'Pemberitahuan untuk pembatalan pesanan', default: true },
              { name: 'Permintaan Bayaran Balik', description: 'Amalan untuk permintaan bayaran balik pelanggan', default: true }
            ]
          },
          {
            title: 'Pemberitahuan Perniagaan',
            settings: [
              { name: 'Pengesahan Pembayaran', description: 'Pemberitahuan untuk pembayaran dan pembayaran berjaya', default: true },
              { name: 'Kemas Kini Akaun', description: 'Kemas kini akaun dan dasar penting', default: true },
              { name: 'Amalan Keselamatan', description: 'Cubaan log masuk dan pemberitahuan keselamatan', default: true },
              { name: 'Penyelenggaraan Sistem', description: 'Notis penyelenggaraan platform dan downtime', default: false }
            ]
          },
          {
            title: 'Komunikasi Pemasaran',
            settings: [
              { name: 'Cadangan Produk', description: 'Petua dan cadangan untuk memperbaiki kedai anda', default: false },
              { name: 'Tawaran Promosi', description: 'Tawaran khas dan diskaun untuk peniaga', default: false },
              { name: 'Surat Berita', description: 'Surat berita mingguan dengan kemas kini platform', default: true },
              { name: 'Jemputan Tinjauan', description: 'Ambil bahagian dalam tinjauan pengalaman pengguna', default: false }
            ]
          }
        ]
      },
      verification: {
        title: 'Pengesahan Akaun',
        statuses: [
          {
            status: 'Tidak Disahkan',
            description: 'Akaun memerlukan pengesahan untuk mengakses semua ciri',
            actions: ['Muat naik dokumen pendaftaran perniagaan', 'Berikan pengesahan identiti', 'Lengkapkan proses KYC/KYB']
          },
          {
            status: 'Menunggu Semakan',
            description: 'Dokumen diserahkan dan sedang dalam semakan',
            actions: ['Tunggu penyiapan semakan (24-48 jam)', 'Semak e-mel untuk kemas kini', 'Hubungi sokongan jika ditangguhkan']
          },
          {
            status: 'Disahkan',
            description: 'Akaun disahkan sepenuhnya dengan akses ke semua ciri',
            actions: ['Akses ke semua ciri platform', 'Sokongan pelanggan keutamaan', 'Penunjuk kepercayaan yang dipertingkatkan']
          },
          {
            status: 'Ditolak',
            description: 'Dokumen pengesahan perlu diserahkan semula',
            actions: ['Semak sebab penolakan', 'Kumpulkan dokumen yang diperlukan', 'Serahkan semula bahan pengesahan']
          }
        ]
      },
      dataManagement: {
        title: 'Pengurusan Data & Privasi',
        sections: [
          {
            title: 'Eksport Data',
            description: 'Muat turun data perniagaan dan sejarah transaksi anda',
            features: [
              'Eksport sejarah transaksi (CSV/PDF)',
              'Muat turun data pelanggan (dengan persetujuan)',
              'Jana laporan kewangan',
              'Arkib dokumen perniagaan'
            ]
          },
          {
            title: 'Tetapan Privasi',
            description: 'Kawal bagaimana data anda digunakan dan dikongsi',
            options: [
              'Pengurusan persetujuan pemprosesan data',
              'Keutamaan komunikasi pemasaran',
              'Kawalan perkongsian data pihak ketiga',
              'Keutamaan analitik dan penjejakan'
            ]
          },
          {
            title: 'Pemadaman Akaun',
            description: 'Padam akaun dan data anda secara kekal',
            warning: 'Tindakan ini tidak dapat dibatalkan dan akan memadam semua data anda secara kekal.',
            steps: [
              'Pastikan semua pesanan tertunda diselesaikan',
              'Keluarkan sebarang dana yang tinggal',
              'Muat turun data penting',
              'Hubungi sokongan untuk memulakan proses pemadaman',
              'Sahkan permintaan pemadaman'
            ]
          }
        ]
      },
      troubleshooting: {
        title: 'Isu Biasa',
        issues: [
          {
            problem: 'Tidak dapat mengemas kini maklumat perniagaan',
            solution: 'Pastikan semua medan yang diperlukan diisi dan dokumen dimuat naik dengan betul. Hubungi sokongan jika pengesahan diperlukan.'
          },
          {
            problem: 'Reset kata laluan tidak berfungsi',
            solution: 'Semak folder spam untuk e-mel reset. Cuba gunakan alamat e-mel yang berbeza atau hubungi sokongan untuk bantuan.'
          },
          {
            problem: 'Pemberitahuan tidak diterima',
            solution: 'Semak tetapan pemberitahuan dan pastikan alamat e-mel betul. Whitelist e-mel CariGo untuk mengelakkan penapisan spam.'
          },
          {
            problem: 'Pengesahan terperangkap dalam pending',
            solution: 'Pengesahan biasanya mengambil masa 24-48 jam. Hubungi sokongan jika ia telah lebih lama daripada yang dijangkakan.'
          },
          {
            problem: 'Isu pengesahan dua faktor',
            solution: 'Gunakan kod sandaran jika aplikasi pengesah tidak berfungsi. Hubungi sokongan untuk melumpuhkan 2FA jika diperlukan.'
          }
        ]
      }
    }
  }

  const c = content[language]

  return (
    <ManualLayout
      prevPath="/manual/payments-payouts"
      prevTitle={{ en: 'Payments & Payouts', ms: 'Pembayaran & Pembayaran' }}
    >
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{c.title}</h1>
          <p className="text-xl text-muted-foreground mb-8">{c.subtitle}</p>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">{c.overview}</p>
        </div>

        {/* Key Features */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-6 h-6 text-primary" />
              {language === 'en' ? 'Key Features' : 'Ciri Utama'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {c.keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Business Information Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-6 h-6 text-primary" />
              {c.profile.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {c.profile.sections.map((section, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">{item.name}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
                      <p className="text-xs text-primary">{item.action}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Security & Access Control */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              {c.security.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {c.security.features.map((feature, index) => (
              <div key={index} className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {(feature.steps || feature.features).map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Notification Preferences */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-6 h-6 text-primary" />
              {c.notifications.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {c.notifications.categories.map((category, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.settings.map((setting, settingIndex) => (
                    <div key={settingIndex} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium">{setting.name}</h4>
                        <p className="text-sm text-muted-foreground">{setting.description}</p>
                      </div>
                      <Badge variant={setting.default ? "default" : "secondary"}>
                        {setting.default ? (language === 'en' ? 'On' : 'Hidup') : (language === 'en' ? 'Off' : 'Mati')}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Account Verification */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              {c.verification.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {c.verification.statuses.map((status, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={status.status === 'Verified' || status.status === 'Disahkan' ? "default" : "secondary"}>
                      {status.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{status.description}</p>
                  <ul className="space-y-1">
                    {status.actions.map((action, actionIndex) => (
                      <li key={actionIndex} className="flex items-start gap-2">
                        <ArrowRight className="w-3 h-3 text-primary mt-1 shrink-0" />
                        <span className="text-xs">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Data Management */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="w-6 h-6 text-primary" />
              {c.dataManagement.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {c.dataManagement.sections.map((section, index) => (
              <div key={index} className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                <p className="text-muted-foreground mb-4">{section.description}</p>
                {section.warning && (
                  <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg mb-4">
                    <AlertCircle className="w-5 h-5 text-orange-600 inline mr-2" />
                    <span className="text-sm text-orange-800">{section.warning}</span>
                  </div>
                )}
                <ul className="space-y-2">
                  {(section.features || section.options || section.steps).map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Troubleshooting */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-orange-500" />
              {c.troubleshooting.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {c.troubleshooting.issues.map((issue, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">{issue.problem}</h4>
                  <p className="text-sm text-muted-foreground">{issue.solution}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </ManualLayout>
  )
}

export default AccountSettingsManual
