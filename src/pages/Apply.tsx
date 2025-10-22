import React, { useState } from 'react'
import MerchantLayout from '../layouts/MerchantLayout'
import { Card } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Textarea } from '../components/ui/textarea'
import { Link, useLocation } from 'react-router-dom'
import { 
  CheckCircle2,
  ArrowRight,
  Upload,
  FileText,
  User,
  Building2,
  Mail,
  Phone,
  CreditCard,
  MapPin,
  Calendar,
  AlertCircle,
  Info,
  Star,
  Shield,
  Zap,
  Target,
  Award,
  ArrowLeft,
  Package
} from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { supabaseService, VendorApplicationData, ApplicationFiles } from '../services/supabaseService'
import { apiService } from '../services/apiService'

const Apply = () => {
  const { language } = useLanguage()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const initialPlan = (queryParams.get('plan') || 'basic').toLowerCase()
  const [selectedPlan, setSelectedPlan] = useState<'core'|'basic'|'pro'>(
    initialPlan === 'core' || initialPlan === 'pro' ? (initialPlan as any) : 'basic'
  )
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phoneCountry: '+673', // Brunei default
    phone: '',
    
    // Business Information
    businessName: '',
    businessType: '',
    hasBusinessNumber: false,
    businessRegistration: '',
    businessAddress: '',
    businessDescription: '',
    
    // Product Information
    productCategory: '',
    productCount: '',
    monthlySales: '',
    productDescription: '',
    
    // Additional Information
    experience: '',
    marketing: '',
    expectations: '',
    
    // Documents
    documents: {
      businessRegistration: null as File | null,
      bankStatement: null as File | null,
      proofOfAddress: null as File | null
    }
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  // Country codes with Brunei first, Malaysia second, then alphabetical
  const countryCodes = [
    { code: '+673', country: 'Brunei', flag: '🇧🇳' },
    { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
    { code: '+93', country: 'Afghanistan', flag: '🇦🇫' },
    { code: '+355', country: 'Albania', flag: '🇦🇱' },
    { code: '+213', country: 'Algeria', flag: '🇩🇿' },
    { code: '+1', country: 'American Samoa', flag: '🇦🇸' },
    { code: '+376', country: 'Andorra', flag: '🇦🇩' },
    { code: '+244', country: 'Angola', flag: '🇦🇴' },
    { code: '+1', country: 'Anguilla', flag: '🇦🇮' },
    { code: '+1', country: 'Antarctica', flag: '🇦🇶' },
    { code: '+1', country: 'Antigua and Barbuda', flag: '🇦🇬' },
    { code: '+54', country: 'Argentina', flag: '🇦🇷' },
    { code: '+374', country: 'Armenia', flag: '🇦🇲' },
    { code: '+297', country: 'Aruba', flag: '🇦🇼' },
    { code: '+61', country: 'Australia', flag: '🇦🇺' },
    { code: '+43', country: 'Austria', flag: '🇦🇹' },
    { code: '+994', country: 'Azerbaijan', flag: '🇦🇿' },
    { code: '+1', country: 'Bahamas', flag: '🇧🇸' },
    { code: '+973', country: 'Bahrain', flag: '🇧🇭' },
    { code: '+880', country: 'Bangladesh', flag: '🇧🇩' },
    { code: '+1', country: 'Barbados', flag: '🇧🇧' },
    { code: '+375', country: 'Belarus', flag: '🇧🇾' },
    { code: '+32', country: 'Belgium', flag: '🇧🇪' },
    { code: '+501', country: 'Belize', flag: '🇧🇿' },
    { code: '+229', country: 'Benin', flag: '🇧🇯' },
    { code: '+1', country: 'Bermuda', flag: '🇧🇲' },
    { code: '+975', country: 'Bhutan', flag: '🇧🇹' },
    { code: '+591', country: 'Bolivia', flag: '🇧🇴' },
    { code: '+387', country: 'Bosnia and Herzegovina', flag: '🇧🇦' },
    { code: '+267', country: 'Botswana', flag: '🇧🇼' },
    { code: '+55', country: 'Brazil', flag: '🇧🇷' },
    { code: '+246', country: 'British Indian Ocean Territory', flag: '🇮🇴' },
    { code: '+1', country: 'British Virgin Islands', flag: '🇻🇬' },
    { code: '+673', country: 'Brunei', flag: '🇧🇳' },
    { code: '+359', country: 'Bulgaria', flag: '🇧🇬' },
    { code: '+226', country: 'Burkina Faso', flag: '🇧🇫' },
    { code: '+257', country: 'Burundi', flag: '🇧🇮' },
    { code: '+855', country: 'Cambodia', flag: '🇰🇭' },
    { code: '+237', country: 'Cameroon', flag: '🇨🇲' },
    { code: '+1', country: 'Canada', flag: '🇨🇦' },
    { code: '+238', country: 'Cape Verde', flag: '🇨🇻' },
    { code: '+1', country: 'Cayman Islands', flag: '🇰🇾' },
    { code: '+236', country: 'Central African Republic', flag: '🇨🇫' },
    { code: '+235', country: 'Chad', flag: '🇹🇩' },
    { code: '+56', country: 'Chile', flag: '🇨🇱' },
    { code: '+86', country: 'China', flag: '🇨🇳' },
    { code: '+61', country: 'Christmas Island', flag: '🇨🇽' },
    { code: '+61', country: 'Cocos Islands', flag: '🇨🇨' },
    { code: '+57', country: 'Colombia', flag: '🇨🇴' },
    { code: '+269', country: 'Comoros', flag: '🇰🇲' },
    { code: '+242', country: 'Congo', flag: '🇨🇬' },
    { code: '+243', country: 'Congo, Democratic Republic', flag: '🇨🇩' },
    { code: '+682', country: 'Cook Islands', flag: '🇨🇰' },
    { code: '+506', country: 'Costa Rica', flag: '🇨🇷' },
    { code: '+225', country: 'Côte d\'Ivoire', flag: '🇨🇮' },
    { code: '+385', country: 'Croatia', flag: '🇭🇷' },
    { code: '+53', country: 'Cuba', flag: '🇨🇺' },
    { code: '+357', country: 'Cyprus', flag: '🇨🇾' },
    { code: '+420', country: 'Czech Republic', flag: '🇨🇿' },
    { code: '+45', country: 'Denmark', flag: '🇩🇰' },
    { code: '+253', country: 'Djibouti', flag: '🇩🇯' },
    { code: '+1', country: 'Dominica', flag: '🇩🇲' },
    { code: '+1', country: 'Dominican Republic', flag: '🇩🇴' },
    { code: '+593', country: 'Ecuador', flag: '🇪🇨' },
    { code: '+20', country: 'Egypt', flag: '🇪🇬' },
    { code: '+503', country: 'El Salvador', flag: '🇸🇻' },
    { code: '+240', country: 'Equatorial Guinea', flag: '🇬🇶' },
    { code: '+291', country: 'Eritrea', flag: '🇪🇷' },
    { code: '+372', country: 'Estonia', flag: '🇪🇪' },
    { code: '+251', country: 'Ethiopia', flag: '🇪🇹' },
    { code: '+500', country: 'Falkland Islands', flag: '🇫🇰' },
    { code: '+298', country: 'Faroe Islands', flag: '🇫🇴' },
    { code: '+679', country: 'Fiji', flag: '🇫🇯' },
    { code: '+358', country: 'Finland', flag: '🇫🇮' },
    { code: '+33', country: 'France', flag: '🇫🇷' },
    { code: '+594', country: 'French Guiana', flag: '🇬🇫' },
    { code: '+689', country: 'French Polynesia', flag: '🇵🇫' },
    { code: '+241', country: 'Gabon', flag: '🇬🇦' },
    { code: '+220', country: 'Gambia', flag: '🇬🇲' },
    { code: '+995', country: 'Georgia', flag: '🇬🇪' },
    { code: '+49', country: 'Germany', flag: '🇩🇪' },
    { code: '+233', country: 'Ghana', flag: '🇬🇭' },
    { code: '+350', country: 'Gibraltar', flag: '🇬🇮' },
    { code: '+30', country: 'Greece', flag: '🇬🇷' },
    { code: '+299', country: 'Greenland', flag: '🇬🇱' },
    { code: '+1', country: 'Grenada', flag: '🇬🇩' },
    { code: '+590', country: 'Guadeloupe', flag: '🇬🇵' },
    { code: '+1', country: 'Guam', flag: '🇬🇺' },
    { code: '+502', country: 'Guatemala', flag: '🇬🇹' },
    { code: '+224', country: 'Guinea', flag: '🇬🇳' },
    { code: '+245', country: 'Guinea-Bissau', flag: '🇬🇼' },
    { code: '+592', country: 'Guyana', flag: '🇬🇾' },
    { code: '+509', country: 'Haiti', flag: '🇭🇹' },
    { code: '+504', country: 'Honduras', flag: '🇭🇳' },
    { code: '+852', country: 'Hong Kong', flag: '🇭🇰' },
    { code: '+36', country: 'Hungary', flag: '🇭🇺' },
    { code: '+354', country: 'Iceland', flag: '🇮🇸' },
    { code: '+91', country: 'India', flag: '🇮🇳' },
    { code: '+62', country: 'Indonesia', flag: '🇮🇩' },
    { code: '+98', country: 'Iran', flag: '🇮🇷' },
    { code: '+964', country: 'Iraq', flag: '🇮🇶' },
    { code: '+353', country: 'Ireland', flag: '🇮🇪' },
    { code: '+972', country: 'Israel', flag: '🇮🇱' },
    { code: '+39', country: 'Italy', flag: '🇮🇹' },
    { code: '+1', country: 'Jamaica', flag: '🇯🇲' },
    { code: '+81', country: 'Japan', flag: '🇯🇵' },
    { code: '+962', country: 'Jordan', flag: '🇯🇴' },
    { code: '+7', country: 'Kazakhstan', flag: '🇰🇿' },
    { code: '+254', country: 'Kenya', flag: '🇰🇪' },
    { code: '+686', country: 'Kiribati', flag: '🇰🇮' },
    { code: '+965', country: 'Kuwait', flag: '🇰🇼' },
    { code: '+996', country: 'Kyrgyzstan', flag: '🇰🇬' },
    { code: '+856', country: 'Laos', flag: '🇱🇦' },
    { code: '+371', country: 'Latvia', flag: '🇱🇻' },
    { code: '+961', country: 'Lebanon', flag: '🇱🇧' },
    { code: '+266', country: 'Lesotho', flag: '🇱🇸' },
    { code: '+231', country: 'Liberia', flag: '🇱🇷' },
    { code: '+218', country: 'Libya', flag: '🇱🇾' },
    { code: '+423', country: 'Liechtenstein', flag: '🇱🇮' },
    { code: '+370', country: 'Lithuania', flag: '🇱🇹' },
    { code: '+352', country: 'Luxembourg', flag: '🇱🇺' },
    { code: '+853', country: 'Macau', flag: '🇲🇴' },
    { code: '+389', country: 'Macedonia', flag: '🇲🇰' },
    { code: '+261', country: 'Madagascar', flag: '🇲🇬' },
    { code: '+265', country: 'Malawi', flag: '🇲🇼' },
    { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
    { code: '+960', country: 'Maldives', flag: '🇲🇻' },
    { code: '+223', country: 'Mali', flag: '🇲🇱' },
    { code: '+356', country: 'Malta', flag: '🇲🇹' },
    { code: '+692', country: 'Marshall Islands', flag: '🇲🇭' },
    { code: '+596', country: 'Martinique', flag: '🇲🇶' },
    { code: '+222', country: 'Mauritania', flag: '🇲🇷' },
    { code: '+230', country: 'Mauritius', flag: '🇲🇺' },
    { code: '+262', country: 'Mayotte', flag: '🇾🇹' },
    { code: '+52', country: 'Mexico', flag: '🇲🇽' },
    { code: '+691', country: 'Micronesia', flag: '🇫🇲' },
    { code: '+373', country: 'Moldova', flag: '🇲🇩' },
    { code: '+377', country: 'Monaco', flag: '🇲🇨' },
    { code: '+976', country: 'Mongolia', flag: '🇲🇳' },
    { code: '+1', country: 'Montserrat', flag: '🇲🇸' },
    { code: '+212', country: 'Morocco', flag: '🇲🇦' },
    { code: '+258', country: 'Mozambique', flag: '🇲🇿' },
    { code: '+95', country: 'Myanmar', flag: '🇲🇲' },
    { code: '+264', country: 'Namibia', flag: '🇳🇦' },
    { code: '+674', country: 'Nauru', flag: '🇳🇷' },
    { code: '+977', country: 'Nepal', flag: '🇳🇵' },
    { code: '+31', country: 'Netherlands', flag: '🇳🇱' },
    { code: '+599', country: 'Netherlands Antilles', flag: '🇦🇳' },
    { code: '+687', country: 'New Caledonia', flag: '🇳🇨' },
    { code: '+64', country: 'New Zealand', flag: '🇳🇿' },
    { code: '+505', country: 'Nicaragua', flag: '🇳🇮' },
    { code: '+227', country: 'Niger', flag: '🇳🇪' },
    { code: '+234', country: 'Nigeria', flag: '🇳🇬' },
    { code: '+683', country: 'Niue', flag: '🇳🇺' },
    { code: '+672', country: 'Norfolk Island', flag: '🇳🇫' },
    { code: '+850', country: 'North Korea', flag: '🇰🇵' },
    { code: '+1', country: 'Northern Mariana Islands', flag: '🇲🇵' },
    { code: '+47', country: 'Norway', flag: '🇳🇴' },
    { code: '+968', country: 'Oman', flag: '🇴🇲' },
    { code: '+92', country: 'Pakistan', flag: '🇵🇰' },
    { code: '+680', country: 'Palau', flag: '🇵🇼' },
    { code: '+970', country: 'Palestine', flag: '🇵🇸' },
    { code: '+507', country: 'Panama', flag: '🇵🇦' },
    { code: '+675', country: 'Papua New Guinea', flag: '🇵🇬' },
    { code: '+595', country: 'Paraguay', flag: '🇵🇾' },
    { code: '+51', country: 'Peru', flag: '🇵🇪' },
    { code: '+63', country: 'Philippines', flag: '🇵🇭' },
    { code: '+48', country: 'Poland', flag: '🇵🇱' },
    { code: '+351', country: 'Portugal', flag: '🇵🇹' },
    { code: '+1', country: 'Puerto Rico', flag: '🇵🇷' },
    { code: '+974', country: 'Qatar', flag: '🇶🇦' },
    { code: '+262', country: 'Réunion', flag: '🇷🇪' },
    { code: '+40', country: 'Romania', flag: '🇷🇴' },
    { code: '+7', country: 'Russia', flag: '🇷🇺' },
    { code: '+250', country: 'Rwanda', flag: '🇷🇼' },
    { code: '+290', country: 'Saint Helena', flag: '🇸🇭' },
    { code: '+1', country: 'Saint Kitts and Nevis', flag: '🇰🇳' },
    { code: '+1', country: 'Saint Lucia', flag: '🇱🇨' },
    { code: '+508', country: 'Saint Pierre and Miquelon', flag: '🇵🇲' },
    { code: '+1', country: 'Saint Vincent and the Grenadines', flag: '🇻🇨' },
    { code: '+685', country: 'Samoa', flag: '🇼🇸' },
    { code: '+378', country: 'San Marino', flag: '🇸🇲' },
    { code: '+239', country: 'São Tomé and Príncipe', flag: '🇸🇹' },
    { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
    { code: '+221', country: 'Senegal', flag: '🇸🇳' },
    { code: '+381', country: 'Serbia', flag: '🇷🇸' },
    { code: '+248', country: 'Seychelles', flag: '🇸🇨' },
    { code: '+232', country: 'Sierra Leone', flag: '🇸🇱' },
    { code: '+65', country: 'Singapore', flag: '🇸🇬' },
    { code: '+421', country: 'Slovakia', flag: '🇸🇰' },
    { code: '+386', country: 'Slovenia', flag: '🇸🇮' },
    { code: '+677', country: 'Solomon Islands', flag: '🇸🇧' },
    { code: '+252', country: 'Somalia', flag: '🇸🇴' },
    { code: '+27', country: 'South Africa', flag: '🇿🇦' },
    { code: '+82', country: 'South Korea', flag: '🇰🇷' },
    { code: '+34', country: 'Spain', flag: '🇪🇸' },
    { code: '+94', country: 'Sri Lanka', flag: '🇱🇰' },
    { code: '+249', country: 'Sudan', flag: '🇸🇩' },
    { code: '+597', country: 'Suriname', flag: '🇸🇷' },
    { code: '+268', country: 'Swaziland', flag: '🇸🇿' },
    { code: '+46', country: 'Sweden', flag: '🇸🇪' },
    { code: '+41', country: 'Switzerland', flag: '🇨🇭' },
    { code: '+963', country: 'Syria', flag: '🇸🇾' },
    { code: '+886', country: 'Taiwan', flag: '🇹🇼' },
    { code: '+992', country: 'Tajikistan', flag: '🇹🇯' },
    { code: '+255', country: 'Tanzania', flag: '🇹🇿' },
    { code: '+66', country: 'Thailand', flag: '🇹🇭' },
    { code: '+228', country: 'Togo', flag: '🇹🇬' },
    { code: '+690', country: 'Tokelau', flag: '🇹🇰' },
    { code: '+676', country: 'Tonga', flag: '🇹🇴' },
    { code: '+1', country: 'Trinidad and Tobago', flag: '🇹🇹' },
    { code: '+216', country: 'Tunisia', flag: '🇹🇳' },
    { code: '+90', country: 'Turkey', flag: '🇹🇷' },
    { code: '+993', country: 'Turkmenistan', flag: '🇹🇲' },
    { code: '+1', country: 'Turks and Caicos Islands', flag: '🇹🇨' },
    { code: '+688', country: 'Tuvalu', flag: '🇹🇻' },
    { code: '+256', country: 'Uganda', flag: '🇺🇬' },
    { code: '+380', country: 'Ukraine', flag: '🇺🇦' },
    { code: '+971', country: 'United Arab Emirates', flag: '🇦🇪' },
    { code: '+44', country: 'United Kingdom', flag: '🇬🇧' },
    { code: '+1', country: 'United States', flag: '🇺🇸' },
    { code: '+598', country: 'Uruguay', flag: '🇺🇾' },
    { code: '+998', country: 'Uzbekistan', flag: '🇺🇿' },
    { code: '+678', country: 'Vanuatu', flag: '🇻🇺' },
    { code: '+58', country: 'Venezuela', flag: '🇻🇪' },
    { code: '+84', country: 'Vietnam', flag: '🇻🇳' },
    { code: '+1', country: 'Virgin Islands', flag: '🇻🇮' },
    { code: '+681', country: 'Wallis and Futuna', flag: '🇼🇫' },
    { code: '+212', country: 'Western Sahara', flag: '🇪🇭' },
    { code: '+967', country: 'Yemen', flag: '🇾🇪' },
    { code: '+260', country: 'Zambia', flag: '🇿🇲' },
    { code: '+263', country: 'Zimbabwe', flag: '🇿🇼' }
  ]

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleCheckboxChange = (field: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [field]: checked }))
  }

  const handleFileUpload = (field: string, file: File | null) => {
    setFormData(prev => ({
      ...prev,
      documents: { ...prev.documents, [field]: file }
    }))
  }

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {}
    if (step === 1) {
      const fields = c.personalInfo.fields
      fields.forEach(f => {
        if (f.name === 'phoneCountry') {
          // Validate both country and phone number
          if (!formData.phoneCountry || !formData.phone.trim()) {
            newErrors['phoneCountry'] = 'Required'
          }
        } else if (f.required && !String(formData[f.name as keyof typeof formData] || '').trim()) {
          newErrors[f.name] = 'Required'
        }
      })
    }
    if (step === 2) {
      const fields = c.businessInfo.fields
      fields.forEach(f => {
        // Make business registration required only if checkbox is checked
        if (f.name === 'businessRegistration') {
          if (formData.hasBusinessNumber) {
            const v = String(formData[f.name as keyof typeof formData] || '').trim()
            if (!v) newErrors[f.name] = 'Required'
          }
        } else if (f.required) {
          const v = String(formData[f.name as keyof typeof formData] || '').trim()
          if (!v) newErrors[f.name] = 'Required'
        }
      })
    }
    if (step === 3) {
      const fields = c.productInfo.fields
      fields.forEach(f => {
        if (f.required) {
          const v = String(formData[f.name as keyof typeof formData] || '').trim()
          if (!v) newErrors[f.name] = 'Required'
        }
      })
    }
    if (step === 4) {
      (Object.keys(formData.documents) as Array<keyof typeof formData.documents>).forEach(k => {
        // Make business registration document required only if checkbox is checked
        if (k === 'businessRegistration') {
          if (formData.hasBusinessNumber && !formData.documents[k]) {
            newErrors[`doc_${String(k)}`] = 'Required'
          }
        } else if (!formData.documents[k]) {
          newErrors[`doc_${String(k)}`] = 'Required'
        }
      })
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (currentStep < 4) {
      if (validateStep(currentStep)) setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep(4)) return
    
    try {
      setIsSubmitted(true)
      
      // Prepare data for submission
      const applicationData: VendorApplicationData = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: `${formData.phoneCountry} ${formData.phone}`,
        businessName: formData.businessName,
        businessType: formData.businessType as any,
        businessRegistration: formData.businessRegistration,
        businessAddress: formData.businessAddress,
        specialRequirements: formData.businessDescription,
        productCategories: formData.productCategory ? [formData.productCategory] : [],
        estimatedMonthlySales: formData.monthlySales as any,
        howDidYouHear: formData.experience,
        platformsUsed: [],
        marketingChannels: formData.marketing ? [formData.marketing] : []
      }

      const files: ApplicationFiles = {
        businessCert: formData.documents?.businessRegistration || undefined,
        idDoc: formData.documents?.proofOfAddress || undefined,
        bankInfo: formData.documents?.bankStatement || undefined
      }

      // Save to Supabase database
      const supabaseResult = await supabaseService.saveVendorApplication(applicationData, files)
      
      if (supabaseResult.success) {
        console.log('Application saved to Supabase successfully')
      } else {
        console.error('Failed to save to Supabase:', supabaseResult.error)
      }

      // Also send via backend API for email confirmation
      try {
        await apiService.submitApplicationForm({
          name: applicationData.name,
          email: applicationData.email,
          phone: applicationData.phone,
          businessName: applicationData.businessName,
          businessType: applicationData.businessType as any || '',
          businessRegistration: applicationData.businessRegistration || '',
          businessAddress: applicationData.businessAddress || '',
          industry: '',
          yearsInBusiness: 0,
          numberOfEmployees: 0,
          annualRevenue: 'under-10k' as any,
          specialRequirements: applicationData.specialRequirements || '',
          productCategories: applicationData.productCategories || [],
          estimatedMonthlySales: applicationData.estimatedMonthlySales as any || '',
          hasExistingInventory: false,
          previousEcommerceExperience: false,
          howDidYouHear: applicationData.howDidYouHear || '',
          platformsUsed: applicationData.platformsUsed || [],
          marketingChannels: applicationData.marketingChannels || [],
          agreeToTerms: true,
          agreeToMarketing: false
        })
        console.log('Application submitted via API successfully')
      } catch (apiError) {
        console.error('Failed to submit via API:', apiError)
        // Continue even if API fails since Supabase save succeeded
      }

    } catch (error) {
      console.error('Error submitting application:', error)
      setIsSubmitted(false)
    }
  }

  const content = {
    en: {
      hero: {
        title: 'Apply to Sell on CariGo',
        subtitle: 'Join hundreds of successful merchants and start your online journey',
        cta: 'Start Application'
      },
      
      steps: [
        { number: 1, title: 'Personal Info', icon: User },
        { number: 2, title: 'Business Info', icon: Building2 },
        { number: 3, title: 'Products', icon: Package },
        { number: 4, title: 'Documents', icon: FileText }
      ],
      
      personalInfo: {
        title: 'Personal Information',
        subtitle: 'Tell us about yourself',
        fields: [
          { name: 'firstName', label: 'First Name', type: 'text', required: true },
          { name: 'lastName', label: 'Last Name', type: 'text', required: true },
          { name: 'email', label: 'Email Address', type: 'email', required: true },
          { name: 'phoneCountry', label: 'Phone Number', type: 'phoneCountry', required: true }
        ]
      },
      
      businessInfo: {
        title: 'Business Information',
        subtitle: 'Tell us about your business',
        fields: [
          { name: 'businessName', label: 'Business Name', type: 'text', required: true },
          { name: 'businessType', label: 'Business Type', type: 'select', required: true, options: ['Retail', 'Wholesale', 'Manufacturing', 'Service', 'Other'] },
          { name: 'hasBusinessNumber', label: 'Do you have a Business Registration Number?', type: 'checkbox', required: false },
          { name: 'businessRegistration', label: 'Business Registration Number', type: 'text', required: false },
          { name: 'businessAddress', label: 'Business Address', type: 'textarea', required: true },
          { name: 'businessDescription', label: 'Business Description', type: 'textarea', required: false }
        ]
      },
      
      productInfo: {
        title: 'Product Information',
        subtitle: 'Tell us about what you sell',
        fields: [
          { name: 'productCategory', label: 'Product Category', type: 'select', required: true, options: ['Electronics', 'Fashion', 'Home & Garden', 'Beauty & Health', 'Sports & Outdoors', 'Books & Media', 'Food & Beverage', 'Automotive', 'Other'] },
          { name: 'productCount', label: 'Number of Products', type: 'select', required: true, options: ['1-10', '11-50', '51-100', '101-500', '500+'] },
          { name: 'monthlySales', label: 'Expected Monthly Sales (BND)', type: 'select', required: true, options: ['Under $500', '$500-$1,000', '$1,000-$2,500', '$2,500-$5,000', '$5,000+'] },
          { name: 'productDescription', label: 'Product Description', type: 'textarea', required: false }
        ]
      },
      
      documents: {
        title: 'Required Documents',
        subtitle: 'Upload the required documents',
        fields: [
          { name: 'businessRegistration', label: 'Business Registration Certificate', description: 'Valid business license or registration' },
          { name: 'bankStatement', label: 'Bank Statement (Last 3 Months)', description: 'Business bank statements' },
          { name: 'proofOfAddress', label: 'Proof of Address', description: 'Utility bill or bank statement with your address' }
        ]
      },
      
      additionalInfo: {
        title: 'Additional Information',
        subtitle: 'Help us understand your business better',
        fields: [
          { name: 'experience', label: 'E-commerce Experience', type: 'textarea', placeholder: 'Tell us about your experience selling online (if any)' },
          { name: 'marketing', label: 'Marketing Plans', type: 'textarea', placeholder: 'How do you plan to market your products?' },
          { name: 'expectations', label: 'Expectations', type: 'textarea', placeholder: 'What do you hope to achieve with CariGo?' }
        ]
      },
      
      success: {
        title: 'Application Submitted Successfully!',
        subtitle: 'Thank you for applying to sell on CariGo',
        message: 'We\'ve received your application and will review it within 24-48 hours. You\'ll receive an email confirmation shortly.',
        nextSteps: [
          'Check your email for confirmation',
          'Prepare your documents for verification',
          'Start thinking about your product photos',
          'Consider your pricing strategy'
        ]
      },
      
      cta: {
        title: 'Ready to Start Selling?',
        description: 'Join successful merchants on CariGo',
        button: 'Apply Now'
      }
    },
    ms: {
      hero: {
        title: 'Mohon untuk Menjual di CariGo',
        subtitle: 'Sertai beratus pedagang berjaya dan mula perjalanan dalam talian anda',
        cta: 'Mula Permohonan'
      },
      
      steps: [
        { number: 1, title: 'Maklumat Peribadi', icon: User },
        { number: 2, title: 'Maklumat Perniagaan', icon: Building2 },
        { number: 3, title: 'Produk', icon: Package },
        { number: 4, title: 'Dokumen', icon: FileText }
      ],
      
      personalInfo: {
        title: 'Maklumat Peribadi',
        subtitle: 'Ceritakan tentang diri anda',
        fields: [
          { name: 'firstName', label: 'Nama Pertama', type: 'text', required: true },
          { name: 'lastName', label: 'Nama Akhir', type: 'text', required: true },
          { name: 'email', label: 'Alamat E-mel', type: 'email', required: true },
          { name: 'phoneCountry', label: 'Nombor Telefon', type: 'phoneCountry', required: true }
        ]
      },
      
      businessInfo: {
        title: 'Maklumat Perniagaan',
        subtitle: 'Ceritakan tentang perniagaan anda',
        fields: [
          { name: 'businessName', label: 'Nama Perniagaan', type: 'text', required: true },
          { name: 'businessType', label: 'Jenis Perniagaan', type: 'select', required: true, options: ['Peruncitan', 'Borong', 'Pembuatan', 'Perkhidmatan', 'Lain-lain'] },
          { name: 'hasBusinessNumber', label: 'Adakah anda mempunyai Nombor Pendaftaran Perniagaan?', type: 'checkbox', required: false },
          { name: 'businessRegistration', label: 'Nombor Pendaftaran Perniagaan', type: 'text', required: false },
          { name: 'businessAddress', label: 'Alamat Perniagaan', type: 'textarea', required: true },
          { name: 'businessDescription', label: 'Penerangan Perniagaan', type: 'textarea', required: false }
        ]
      },
      
      productInfo: {
        title: 'Maklumat Produk',
        subtitle: 'Ceritakan tentang apa yang anda jual',
        fields: [
          { name: 'productCategory', label: 'Kategori Produk', type: 'select', required: true, options: ['Elektronik', 'Fesyen', 'Rumah & Taman', 'Kecantikan & Kesihatan', 'Sukan & Luar', 'Buku & Media', 'Makanan & Minuman', 'Automotif', 'Lain-lain'] },
          { name: 'productCount', label: 'Bilangan Produk', type: 'select', required: true, options: ['1-10', '11-50', '51-100', '101-500', '500+'] },
          { name: 'monthlySales', label: 'Jualan Bulanan Dijangka (BND)', type: 'select', required: true, options: ['Bawah $500', '$500-$1,000', '$1,000-$2,500', '$2,500-$5,000', '$5,000+'] },
          { name: 'productDescription', label: 'Penerangan Produk', type: 'textarea', required: false }
        ]
      },
      
      documents: {
        title: 'Dokumen Diperlukan',
        subtitle: 'Muat naik dokumen yang diperlukan',
        fields: [
          { name: 'businessRegistration', label: 'Sijil Pendaftaran Perniagaan', description: 'Lesen perniagaan atau pendaftaran yang sah' },
          { name: 'bankStatement', label: 'Penyata Bank (3 Bulan Terakhir)', description: 'Penyata bank perniagaan' },
          { name: 'proofOfAddress', label: 'Bukti Alamat', description: 'Bil utiliti atau penyata bank dengan alamat anda' }
        ]
      },
      
      additionalInfo: {
        title: 'Maklumat Tambahan',
        subtitle: 'Bantu kami memahami perniagaan anda dengan lebih baik',
        fields: [
          { name: 'experience', label: 'Pengalaman E-dagang', type: 'textarea', placeholder: 'Ceritakan tentang pengalaman anda menjual dalam talian (jika ada)' },
          { name: 'marketing', label: 'Rancangan Pemasaran', type: 'textarea', placeholder: 'Bagaimana anda merancang untuk memasarkan produk anda?' },
          { name: 'expectations', label: 'Jangkaan', type: 'textarea', placeholder: 'Apa yang anda harapkan untuk capai dengan CariGo?' }
        ]
      },
      
      success: {
        title: 'Permohonan Dihantar dengan Berjaya!',
        subtitle: 'Terima kasih kerana memohon untuk menjual di CariGo',
        message: 'Kami telah menerima permohonan anda dan akan mengkajinya dalam 24-48 jam. Anda akan menerima pengesahan e-mel tidak lama lagi.',
        nextSteps: [
          'Periksa e-mel anda untuk pengesahan',
          'Sediakan dokumen anda untuk pengesahan',
          'Mula memikirkan tentang foto produk anda',
          'Pertimbangkan strategi harga anda'
        ]
      },
      
      cta: {
        title: 'Bersedia untuk Mula Menjual?',
        description: 'Sertai pedagang berjaya di CariGo',
        button: 'Mohon Sekarang'
      }
    }
  }

  const c = content[language]

  if (isSubmitted) {
    return (
      <MerchantLayout>
        <section className="py-20 min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-12 h-12 text-white" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{c.success.title}</h1>
              <p className="text-xl text-muted-foreground mb-8">{c.success.subtitle}</p>
              <p className="text-lg mb-12">{c.success.message}</p>
              
              <Card className="p-8 mb-8">
                <h3 className="text-2xl font-bold mb-6">{language === 'en' ? 'What\'s Next?' : 'Apa Seterusnya?'}</h3>
                <div className="space-y-4">
                  {c.success.nextSteps.map((step, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-bold">{index + 1}</span>
                      </div>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </Card>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/getting-started">
                  <Button size="lg" variant="default" className="text-lg px-8">
                    {language === 'en' ? 'Getting Started Guide' : 'Panduan Bermula'} <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/support">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    {language === 'en' ? 'Contact Support' : 'Hubungi Sokongan'}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </MerchantLayout>
    )
  }

  return (
    <MerchantLayout>
      {/* Hero Section */}
      <section className="relative min-h-[500px] flex items-center bg-gradient-to-br from-primary via-primary to-primary/90 text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{c.hero.title}</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">{c.hero.subtitle}</p>
            <Link to="/pricing">
              <Button size="lg" variant="outlineWhite" className="text-lg px-8">
                {language === 'en' ? 'View Pricing' : 'Lihat Harga'} <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Plan Selection */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">{language === 'en' ? 'Select a Plan' : 'Pilih Pelan'}</h2>
            <p className="text-muted-foreground mb-6">{language === 'en' ? 'Your selection helps us tailor onboarding.' : 'Pilihan anda membantu kami menyesuaikan onboarding.'}</p>
            <div className="grid grid-cols-3 gap-3">
              {(['core','basic','pro'] as const).map(plan => (
                <button
                  key={plan}
                  onClick={() => setSelectedPlan(plan)}
                  className={`p-3 rounded-md border text-sm font-medium transition-colors ${
                    selectedPlan === plan ? 'border-primary bg-primary text-primary-foreground' : 'border-input hover:bg-muted'
                  }`}
                >
                  {plan.charAt(0).toUpperCase() + plan.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Progress Steps */}
            <div className="flex justify-center mb-12">
              <div className="flex items-center gap-4">
                {c.steps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = currentStep === step.number;
                  const isCompleted = currentStep > step.number;
                  
                  return (
                    <div key={index} className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        isActive ? 'bg-primary text-white' : 
                        isCompleted ? 'bg-primary/20 text-primary' : 
                        'bg-muted text-muted-foreground'
                      }`}>
                        {isCompleted ? (
                          <CheckCircle2 className="w-6 h-6" />
                        ) : (
                          <Icon className="w-6 h-6" />
                        )}
                      </div>
                      <div className="text-center">
                        <div className={`text-sm font-semibold ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                          {step.title}
                        </div>
                      </div>
                      {index < c.steps.length - 1 && (
                        <div className="w-8 h-0.5 bg-muted"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <Card className="p-8">
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div>
                    <h2 className="text-3xl font-bold mb-4">{c.personalInfo.title}</h2>
                    <p className="text-muted-foreground mb-8">{c.personalInfo.subtitle}</p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      {c.personalInfo.fields.map((field) => (
                        <div key={field.name} className={field.type === 'textarea' ? 'md:col-span-2' : ''}>
                          <Label htmlFor={field.name} className="text-sm font-semibold">
                            {field.label} {field.required && <span className="text-primary">*</span>}
                          </Label>
                          {field.type === 'phoneCountry' ? (
                            <div className="mt-2 flex border border-input rounded-md bg-background">
                              <div className="flex items-center px-3 py-2 border-r border-input">
                                <span className="text-sm">
                                  {countryCodes.find(c => c.code === formData.phoneCountry)?.flag || '🇧🇳'}
                                </span>
                                <select
                                  value={formData.phoneCountry}
                                  onChange={(e) => handleInputChange('phoneCountry', e.target.value)}
                                  className="ml-2 bg-transparent border-none outline-none text-sm font-medium"
                                >
                                  {countryCodes.map((country) => (
                                    <option key={country.code} value={country.code}>
                                      {country.code}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <Input
                                type="tel"
                                placeholder={language === 'en' ? 'Enter phone number' : 'Masukkan nombor telefon'}
                                value={formData.phone}
                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                className="border-0 focus-visible:ring-0"
                                required={true}
                              />
                            </div>
                          ) : field.type === 'textarea' ? (
                            <Textarea
                              id={field.name}
                              value={formData[field.name as keyof typeof formData] as string}
                              onChange={(e) => handleInputChange(field.name, e.target.value)}
                              className="mt-2"
                              required={field.required}
                            />
                          ) : field.name === 'phone' ? (
                            // Skip phone field as it's handled in phoneCountry
                            null
                          ) : (
                            <Input
                              id={field.name}
                              type={field.type}
                              value={formData[field.name as keyof typeof formData] as string}
                              onChange={(e) => handleInputChange(field.name, e.target.value)}
                              className="mt-2"
                              required={field.required}
                            />
                          )}
                          {errors[field.name] && (
                            <div className="text-sm text-red-600 mt-1">{language === 'en' ? 'This field is required' : 'Medan ini diperlukan'}</div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Business Information */}
                {currentStep === 2 && (
                  <div>
                    <h2 className="text-3xl font-bold mb-4">{c.businessInfo.title}</h2>
                    <p className="text-muted-foreground mb-8">{c.businessInfo.subtitle}</p>
                    
                    <div className="space-y-6">
                      {c.businessInfo.fields.map((field) => {
                        // Skip business registration fields if checkbox is not checked
                        if (field.name === 'businessRegistration' && !formData.hasBusinessNumber) {
                          return null
                        }
                        
                        return (
                          <div key={field.name}>
                            <Label htmlFor={field.name} className="text-sm font-semibold">
                              {field.label} {(field.required || (field.name === 'businessRegistration' && formData.hasBusinessNumber)) && <span className="text-primary">*</span>}
                            </Label>
                            {field.type === 'checkbox' ? (
                              <div className="mt-2">
                                <label htmlFor={field.name} className="flex items-center gap-3 cursor-pointer">
                                  <input
                                    type="checkbox"
                                    id={field.name}
                                    checked={formData[field.name as keyof typeof formData] as boolean}
                                    onChange={(e) => handleCheckboxChange(field.name, e.target.checked)}
                                    className="w-5 h-5 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2"
                                  />
                                  <span className="text-base font-medium">{field.label}</span>
                                </label>
                              </div>
                            ) : field.type === 'select' ? (
                              <select
                                id={field.name}
                                value={formData[field.name as keyof typeof formData] as string}
                                onChange={(e) => handleInputChange(field.name, e.target.value)}
                                className="mt-2 w-full h-10 px-3 py-2 border border-input rounded-md bg-background"
                                required={field.required}
                              >
                                <option value="">{language === 'en' ? 'Select an option' : 'Pilih pilihan'}</option>
                                {field.options?.map((option) => (
                                  <option key={option} value={option}>{option}</option>
                                ))}
                              </select>
                            ) : field.type === 'textarea' ? (
                              <Textarea
                                id={field.name}
                                value={formData[field.name as keyof typeof formData] as string}
                                onChange={(e) => handleInputChange(field.name, e.target.value)}
                                className="mt-2"
                                required={field.required}
                              />
                            ) : (
                              <Input
                                id={field.name}
                                type={field.type}
                                value={formData[field.name as keyof typeof formData] as string}
                                onChange={(e) => handleInputChange(field.name, e.target.value)}
                                className="mt-2"
                                required={field.required}
                              />
                            )}
                            {errors[field.name] && (
                              <div className="text-sm text-red-600 mt-1">{language === 'en' ? 'This field is required' : 'Medan ini diperlukan'}</div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Step 3: Product Information */}
                {currentStep === 3 && (
                  <div>
                    <h2 className="text-3xl font-bold mb-4">{c.productInfo.title}</h2>
                    <p className="text-muted-foreground mb-8">{c.productInfo.subtitle}</p>
                    
                    <div className="space-y-6">
                      {c.productInfo.fields.map((field) => (
                        <div key={field.name}>
                          <Label htmlFor={field.name} className="text-sm font-semibold">
                            {field.label} {field.required && <span className="text-primary">*</span>}
                          </Label>
                          {field.type === 'select' ? (
                            <select
                              id={field.name}
                              value={formData[field.name as keyof typeof formData] as string}
                              onChange={(e) => handleInputChange(field.name, e.target.value)}
                              className="mt-2 w-full h-10 px-3 py-2 border border-input rounded-md bg-background"
                              required={field.required}
                            >
                              <option value="">{language === 'en' ? 'Select an option' : 'Pilih pilihan'}</option>
                              {field.options?.map((option) => (
                                <option key={option} value={option}>{option}</option>
                              ))}
                            </select>
                          ) : field.type === 'textarea' ? (
                            <Textarea
                              id={field.name}
                              value={formData[field.name as keyof typeof formData] as string}
                              onChange={(e) => handleInputChange(field.name, e.target.value)}
                              className="mt-2"
                              required={field.required}
                            />
                          ) : (
                            <Input
                              id={field.name}
                              type={field.type}
                              value={formData[field.name as keyof typeof formData] as string}
                              onChange={(e) => handleInputChange(field.name, e.target.value)}
                              className="mt-2"
                              required={field.required}
                            />
                          )}
                          {errors[field.name] && (
                            <div className="text-sm text-red-600 mt-1">{language === 'en' ? 'This field is required' : 'Medan ini diperlukan'}</div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Additional Information */}
                    <div className="mt-12 pt-8 border-t">
                      <h3 className="text-2xl font-bold mb-4">{c.additionalInfo.title}</h3>
                      <p className="text-muted-foreground mb-6">{c.additionalInfo.subtitle}</p>
                      
                      <div className="space-y-6">
                        {c.additionalInfo.fields.map((field) => (
                          <div key={field.name}>
                            <Label htmlFor={field.name} className="text-sm font-semibold">
                              {field.label}
                            </Label>
                            <Textarea
                              id={field.name}
                              value={formData[field.name as keyof typeof formData] as string}
                              onChange={(e) => handleInputChange(field.name, e.target.value)}
                              placeholder={field.placeholder}
                              className="mt-2"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Documents */}
                {currentStep === 4 && (
                  <div>
                    <h2 className="text-3xl font-bold mb-4">{c.documents.title}</h2>
                    <p className="text-muted-foreground mb-8">{c.documents.subtitle}</p>
                    
                    <div className="space-y-8">
                      {c.documents.fields.map((field) => {
                        // Skip business registration document if checkbox is not checked
                        if (field.name === 'businessRegistration' && !formData.hasBusinessNumber) {
                          return null
                        }
                        
                        return (
                          <div key={field.name}>
                            <Label className="text-sm font-semibold">
                              {field.label} {(field.name === 'businessRegistration' && formData.hasBusinessNumber) || field.name !== 'businessRegistration' ? <span className="text-primary">*</span> : ''}
                            </Label>
                            <p className="text-sm text-muted-foreground mb-4">{field.description}</p>
                            
                            <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center">
                              <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                              <p className="text-muted-foreground mb-4">
                                {language === 'en' ? 'Click to upload or drag and drop' : 'Klik untuk muat naik atau seret dan lepas'}
                              </p>
                              <input
                                type="file"
                                accept="image/*,.pdf"
                                onChange={(e) => handleFileUpload(field.name, e.target.files?.[0] || null)}
                                className="hidden"
                                id={`file-${field.name}`}
                              />
                              <Button
                                type="button"
                                variant="outline"
                                onClick={() => document.getElementById(`file-${field.name}`)?.click()}
                              >
                                {language === 'en' ? 'Choose File' : 'Pilih Fail'}
                              </Button>
                              {formData.documents[field.name as keyof typeof formData.documents] && (
                                <p className="mt-2 text-sm text-primary">
                                  {formData.documents[field.name as keyof typeof formData.documents]?.name}
                                </p>
                              )}
                              {!formData.documents[field.name as keyof typeof formData.documents] && errors[`doc_${field.name}`] && (
                                <div className="text-sm text-red-600 mt-2">{language === 'en' ? 'This document is required' : 'Dokumen ini diperlukan'}</div>
                              )}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-12 pt-8 border-t">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    {language === 'en' ? 'Previous' : 'Sebelumnya'}
                  </Button>
                  
                  {currentStep < 4 ? (
                    <Button type="button" onClick={nextStep}>
                      {language === 'en' ? 'Next' : 'Seterusnya'} <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button type="submit">
                      {language === 'en' ? 'Submit Application' : 'Hantar Permohonan'} <CheckCircle2 className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              </Card>
            </form>
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
              <Link to="/pricing">
                <Button size="lg" variant="outlineWhite" className="text-lg px-10">
                  {language === 'en' ? 'View Pricing' : 'Lihat Harga'} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/support">
                <Button size="lg" variant="inverseSecondary" className="text-lg px-10">
                  {language === 'en' ? 'Get Support' : 'Dapatkan Sokongan'} <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MerchantLayout>
  )
}

export default Apply
