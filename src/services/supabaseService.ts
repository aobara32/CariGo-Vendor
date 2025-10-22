import { supabase } from '../lib/supabaseClient';

export interface VendorInquiryData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface VendorApplicationData {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  businessType?: string;
  businessRegistration?: string;
  businessAddress?: string;
  specialRequirements?: string;
  productCategories?: string[];
  estimatedMonthlySales?: string;
  howDidYouHear?: string;
  platformsUsed?: string[];
  marketingChannels?: string[];
}

export interface ApplicationFiles {
  businessCert?: File;
  idDoc?: File;
  bankInfo?: File;
}

class SupabaseService {
  /**
   * ベンダー問い合わせをデータベースに保存
   */
  async saveVendorInquiry(data: VendorInquiryData): Promise<{ success: boolean; error?: string }> {
    try {
      const { error } = await supabase
        .from('vendor_inquiries')
        .insert([
          {
            name: data.name,
            email: data.email,
            phone: data.phone || null,
            category: data.subject,
            title: data.subject,
            message: data.message
          }
        ]);

      if (error) {
        console.error('Error saving vendor inquiry:', error);
        return { success: false, error: error.message };
      }

      console.log('Vendor inquiry saved successfully');
      return { success: true };
    } catch (error) {
      console.error('Exception saving vendor inquiry:', error);
      return { success: false, error: (error as Error).message };
    }
  }

  /**
   * ベンダー申請をデータベースに保存
   */
  async saveVendorApplication(data: VendorApplicationData, files?: ApplicationFiles): Promise<{ success: boolean; error?: string }> {
    try {
      // Parse name into first_name and last_name
      const nameParts = data.name.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      // Upload files to Supabase Storage if provided
      let businessCertPath: string | null = null;
      let idDocPath: string | null = null;
      let bankInfoPath: string | null = null;

      if (files) {
        if (files.businessCert) {
          businessCertPath = await this.uploadFile(files.businessCert, '1617', `certs/${Date.now()}_${files.businessCert.name}`);
        }
        if (files.idDoc) {
          idDocPath = await this.uploadFile(files.idDoc, 'IC', `id/${Date.now()}_${files.idDoc.name}`);
        }
        if (files.bankInfo) {
          bankInfoPath = await this.uploadFile(files.bankInfo, 'bank', `bank/${Date.now()}_${files.bankInfo.name}`);
        }
      }

      // Parse sales amount from string to number
      const salesMap: Record<string, number> = {
        'under-1k': 500,
        '1k-5k': 3000,
        '5k-10k': 7500,
        '10k-25k': 17500,
        '25k-50k': 37500,
        'over-50k': 75000
      };
      const averageSales = salesMap[data.estimatedMonthlySales || ''] || 0;

      const { error } = await supabase
        .from('vendor_applications')
        .insert([
          {
            last_name: lastName,
            first_name: firstName,
            email: data.email,
            phone: data.phone,
            business_name: data.businessName,
            business_type: data.businessType || null,
            registration_number: data.businessRegistration || null,
            address: data.businessAddress || null,
            description: data.specialRequirements || '',
            product_category: data.productCategories ? data.productCategories.join(', ') : '',
            average_sales: averageSales,
            free_note_1: data.howDidYouHear || '',
            free_note_2: data.platformsUsed ? data.platformsUsed.join(', ') : '',
            free_note_3: data.marketingChannels ? data.marketingChannels.join(', ') : '',
            business_cert_file: businessCertPath,
            id_doc_file: idDocPath,
            bank_info_file: bankInfoPath
          }
        ]);

      if (error) {
        console.error('Error saving vendor application:', error);
        return { success: false, error: error.message };
      }

      console.log('Vendor application saved successfully');
      return { success: true };
    } catch (error) {
      console.error('Exception saving vendor application:', error);
      return { success: false, error: (error as Error).message };
    }
  }

  /**
   * ファイルをSupabase Storageにアップロード
   */
  private async uploadFile(file: File, bucket: string, path: string): Promise<string> {
    try {
      const { data, error } = await supabase.storage
        .from(bucket)
        .upload(path, file, { 
          cacheControl: '3600',
          upsert: false 
        });

      if (error) {
        console.error('Error uploading file:', error);
        throw error;
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from(bucket)
        .getPublicUrl(path);

      console.log('File uploaded successfully:', urlData.publicUrl);
      return data.path;
    } catch (error) {
      console.error('Exception uploading file:', error);
      throw error;
    }
  }

  /**
   * 住所証明書をアップロード
   */
  async uploadAddressDocument(file: File): Promise<{ success: boolean; path?: string; error?: string }> {
    try {
      const path = `address/${Date.now()}_${file.name}`;
      await this.uploadFile(file, 'address', path);
      return { success: true, path };
    } catch (error) {
      return { success: false, error: (error as Error).message };
    }
  }

  /**
   * Supabase接続テスト
   */
  async testConnection(): Promise<{ success: boolean; error?: string }> {
    try {
      const { data, error } = await supabase
        .from('vendor_inquiries')
        .select('count')
        .limit(1);

      if (error) {
        return { success: false, error: error.message };
      }

      return { success: true };
    } catch (error) {
      return { success: false, error: (error as Error).message };
    }
  }
}

export const supabaseService = new SupabaseService();
export default supabaseService;
