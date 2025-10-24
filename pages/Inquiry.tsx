import React, { useState } from 'react'
import MerchantLayout from '../layouts/MerchantLayout'
import { useLanguage } from '../contexts/LanguageContext'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Label } from '../components/ui/label'
import { supabase } from '../lib/supabaseClient'
import { useToast } from '../hooks/use-toast'
import { Link } from 'react-router-dom'
import { Mail, Phone, Building, MessageSquare, Send } from 'lucide-react'

const Inquiry = () => {
  const { language } = useLanguage()
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const { error } = await supabase
        .from('vendor_inquiries')
        .insert([formData])

      if (error) {
        throw error
      }

      toast({
        title: language === 'en' ? 'Inquiry Sent Successfully' : 'Pertanyaan Berjaya Dihantar',
        description: language === 'en' 
          ? 'Thank you for your inquiry. We will get back to you soon.' 
          : 'Terima kasih atas pertanyaan anda. Kami akan menghubungi anda tidak lama lagi.',
      })

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      console.error('Error submitting inquiry:', error)
      toast({
        title: language === 'en' ? 'Error' : 'Ralat',
        description: language === 'en' 
          ? 'Failed to send inquiry. Please try again.' 
          : 'Gagal menghantar pertanyaan. Sila cuba lagi.',
        variant: 'destructive'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const isFormValid = formData.name && formData.email && formData.subject && formData.message

  return (
    <MerchantLayout>
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center bg-gradient-to-br from-primary via-primary to-primary/90 text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {language === 'en' ? 'Contact Us' : 'Hubungi Kami'}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              {language === 'en' 
                ? 'Have questions about CariGo? We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.'
                : 'Ada soalan tentang CariGo? Kami ingin mendengar daripada anda. Hantar mesej kepada kami dan kami akan membalas secepat mungkin.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <Card className="h-fit">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-primary" />
                      {language === 'en' ? 'Get in Touch' : 'Hubungi Kami'}
                    </CardTitle>
                    <CardDescription>
                      {language === 'en' 
                        ? 'We\'re here to help and answer any question you might have.'
                        : 'Kami di sini untuk membantu dan menjawab sebarang soalan yang anda ada.'
                      }
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <div>
                        <p className="font-medium text-sm text-gray-900">
                          {language === 'en' ? 'Email' : 'E-mel'}
                        </p>
                        <a 
                          href="mailto:carigobn@gmail.com" 
                          className="text-sm text-gray-600 hover:text-primary transition-colors"
                        >
                          carigobn@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <div>
                        <p className="font-medium text-sm text-gray-900">
                          {language === 'en' ? 'Phone' : 'Telefon'}
                        </p>
                        <a 
                          href="tel:+6738228250" 
                          className="text-sm text-gray-600 hover:text-primary transition-colors"
                        >
                          +673 822 8250
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Building className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <div>
                        <p className="font-medium text-sm text-gray-900">
                          {language === 'en' ? 'Business Hours' : 'Waktu Perniagaan'}
                        </p>
                        <p className="text-sm text-gray-600">
                          {language === 'en' 
                            ? 'Monday - Friday: 9:00 AM - 6:00 PM'
                            : 'Isnin - Jumaat: 9:00 AM - 6:00 PM'
                          }
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Send className="w-5 h-5 text-primary" />
                      {language === 'en' ? 'Send us a Message' : 'Hantar Mesej kepada Kami'}
                    </CardTitle>
                    <CardDescription>
                      {language === 'en' 
                        ? 'Fill out the form below and we\'ll get back to you within 24 hours.'
                        : 'Isi borang di bawah dan kami akan membalas dalam masa 24 jam.'
                      }
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">
                            {language === 'en' ? 'Full Name' : 'Nama Penuh'} *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder={language === 'en' ? 'Enter your full name' : 'Masukkan nama penuh anda'}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">
                            {language === 'en' ? 'Email Address' : 'Alamat E-mel'} *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder={language === 'en' ? 'Enter your email' : 'Masukkan e-mel anda'}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="phone">
                            {language === 'en' ? 'Phone Number' : 'Nombor Telefon'}
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder={language === 'en' ? 'Enter your phone number' : 'Masukkan nombor telefon anda'}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="company">
                            {language === 'en' ? 'Company Name' : 'Nama Syarikat'}
                          </Label>
                          <Input
                            id="company"
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder={language === 'en' ? 'Enter your company name' : 'Masukkan nama syarikat anda'}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">
                          {language === 'en' ? 'Subject' : 'Subjek'} *
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder={language === 'en' ? 'What is this about?' : 'Apakah perkara ini tentang?'}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">
                          {language === 'en' ? 'Message' : 'Mesej'} *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder={language === 'en' 
                            ? 'Tell us more about your inquiry...' 
                            : 'Beritahu kami lebih lanjut tentang pertanyaan anda...'
                          }
                          rows={6}
                          required
                        />
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full" 
                        disabled={!isFormValid || isSubmitting}
                      >
                        {isSubmitting ? (
                          language === 'en' ? 'Sending...' : 'Menghantar...'
                        ) : (
                          language === 'en' ? 'Send Message' : 'Hantar Mesej'
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {language === 'en' ? 'Frequently Asked Questions' : 'Soalan Lazim'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {language === 'en' 
                    ? 'Before contacting us, you might find the answer to your question in our FAQ section.'
                    : 'Sebelum menghubungi kami, anda mungkin akan menemui jawapan kepada soalan anda di bahagian FAQ kami.'
                  }
                </p>
                <Button variant="outline">
                  <Link to="/faq">
                    {language === 'en' ? 'Visit FAQ' : 'Lawati FAQ'}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </MerchantLayout>
  )
}

export default Inquiry
