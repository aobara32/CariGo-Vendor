const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api';

interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
  details?: string[];
}

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

interface DonationFormData {
  name: string;
  email: string;
  amount: number;
  purpose: string;
  anonymous: boolean;
  message?: string;
}

interface InvestmentFormData {
  name: string;
  company?: string;
  email: string;
  phone: string;
  amount: number;
  type: 'equity' | 'debt' | 'hybrid' | 'other';
  experience: 'beginner' | 'intermediate' | 'experienced' | 'professional';
  message: string;
}

interface ApplicationFormData {
  // Personal Information
  name: string;
  email: string;
  phone: string;
  
  // Business Information
  businessName: string;
  businessType: 'individual' | 'partnership' | 'corporation' | 'other';
  businessRegistration?: string;
  businessAddress: string;
  
  // Business Details
  industry: string;
  yearsInBusiness: number;
  numberOfEmployees: number;
  annualRevenue: 'under-10k' | '10k-50k' | '50k-100k' | '100k-500k' | '500k-1m' | 'over-1m';
  
  // Product Information
  productCategories: string[];
  estimatedMonthlySales: 'under-1k' | '1k-5k' | '5k-10k' | '10k-25k' | '25k-50k' | 'over-50k';
  hasExistingInventory: boolean;
  
  // Platform Experience
  previousEcommerceExperience: boolean;
  platformsUsed?: string[];
  
  // Additional Information
  marketingChannels?: string[];
  specialRequirements?: string;
  howDidYouHear?: string;
  
  // Agreement
  agreeToTerms: boolean;
  agreeToMarketing?: boolean;
}

class ApiService {
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const defaultOptions: RequestInit = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, defaultOptions);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || data.error || 'Request failed');
      }

      return data;
    } catch (error) {
      console.error('API request error:', error);
      throw error;
    }
  }

  /**
   * Submit contact form
   */
  async submitContactForm(data: ContactFormData): Promise<ApiResponse> {
    return this.request('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  /**
   * Submit donation form
   */
  async submitDonationForm(data: DonationFormData): Promise<ApiResponse> {
    return this.request('/donation', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  /**
   * Submit investment form
   */
  async submitInvestmentForm(data: InvestmentFormData): Promise<ApiResponse> {
    return this.request('/investment', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  /**
   * Submit application form
   */
  async   submitApplicationForm(data: ApplicationFormData): Promise<ApiResponse> {
    return this.request('/application', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  /**
   * Upload application files
   */
  async uploadApplicationFiles(files: {
    businessCert?: File;
    idDoc?: File;
    bankInfo?: File;
  }): Promise<ApiResponse> {
    const formData = new FormData();
    
    if (files.businessCert) formData.append('businessCert', files.businessCert);
    if (files.idDoc) formData.append('idDoc', files.idDoc);
    if (files.bankInfo) formData.append('bankInfo', files.bankInfo);

    return this.request('/upload/application-files', {
      method: 'POST',
      body: formData,
    });
  }

  /**
   * Upload address document
   */
  async uploadAddressDocument(file: File): Promise<ApiResponse> {
    const formData = new FormData();
    formData.append('addressDoc', file);

    return this.request('/upload/address-document', {
      method: 'POST',
      body: formData,
    });
  }

  /**
   * Health check for all services
   */
  async healthCheck(): Promise<{
    server: ApiResponse;
    contact: ApiResponse;
    donation: ApiResponse;
    investment: ApiResponse;
    application: ApiResponse;
    upload: ApiResponse;
  }> {
    const [server, contact, donation, investment, application, upload] = await Promise.all([
      this.request('/health'),
      this.request('/contact/health'),
      this.request('/donation/health'),
      this.request('/investment/health'),
      this.request('/application/health'),
      this.request('/upload/health'),
    ]);

    return { server, contact, donation, investment, application, upload };
  }
}

export const apiService = new ApiService();
export type { ContactFormData, DonationFormData, InvestmentFormData, ApplicationFormData, ApiResponse };
