import { supabase, supabaseAdmin } from '../lib/supabaseClient';
import { apiService } from './apiService';

export interface VendorInquiryData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface VendorApplicationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  businessName: string;
  businessType?: string;
  registrationNumber?: string;
  address?: string;
  description?: string;
  productCategory?: string;
  averageSales?: number;
  freeNote1?: string;
  freeNote2?: string;
  freeNote3?: string;
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
      // サービスロールクライアントが利用可能な場合はそれを使用（RLSをバイパス）
      const client = supabaseAdmin || supabase;
      
      const { error } = await client
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
        
        // RLSエラーの場合はバックエンドAPIにフォールバック
        if (error.message.includes('row-level security policy')) {
          console.log('RLS error detected, falling back to backend API...');
          try {
            const apiResult = await apiService.submitContactForm({
              name: data.name,
              email: data.email,
              phone: data.phone || '',
              subject: data.subject,
              message: data.message
            });
            
            if (apiResult.success) {
              console.log('Vendor inquiry saved via backend API successfully');
              return { success: true };
            } else {
              return { 
                success: false, 
                error: 'データベースとバックエンドAPIの両方でエラーが発生しました。管理者にお問い合わせください。' 
              };
            }
          } catch (apiError) {
            console.error('Backend API fallback also failed:', apiError);
            return { 
              success: false, 
              error: 'データベースのセキュリティポリシーによりアクセスが拒否されました。管理者にお問い合わせください。' 
            };
          }
        }
        
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
      // Upload files to Supabase Storage if provided
      let businessCertPath: string | null = null;
      let idDocPath: string | null = null;
      let bankInfoPath: string | null = null;

      if (files) {
        if (files.businessCert) {
          businessCertPath = await this.uploadFile(files.businessCert, '1617', `business-cert/${Date.now()}_${files.businessCert.name}`);
        }
        if (files.idDoc) {
          idDocPath = await this.uploadFile(files.idDoc, 'ic', `id-doc/${Date.now()}_${files.idDoc.name}`);
        }
        if (files.bankInfo) {
          bankInfoPath = await this.uploadFile(files.bankInfo, 'bank', `bank-info/${Date.now()}_${files.bankInfo.name}`);
        }
      }

      // サービスロールクライアントが利用可能な場合はそれを使用（RLSをバイパス）
      const client = supabaseAdmin || supabase;
      
      const { error } = await client
        .from('vendor_applications')
        .insert([
          {
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            phone: data.phone,
            business_name: data.businessName,
            business_type: data.businessType || null,
            registration_number: data.registrationNumber || null,
            address: data.address || null,
            description: data.description || '',
            product_category: data.productCategory || '',
            average_sales: data.averageSales || 0,
            free_note_1: data.freeNote1 || '',
            free_note_2: data.freeNote2 || '',
            free_note_3: data.freeNote3 || '',
            business_cert_file: businessCertPath,
            id_doc_file: idDocPath,
            bank_info_file: bankInfoPath
          }
        ]);

      if (error) {
        console.error('Error saving vendor application:', error);
        
        // RLSエラーの場合はバックエンドAPIにフォールバック
        if (error.message.includes('row-level security policy')) {
          console.log('RLS error detected, falling back to backend API...');
          try {
            // ファイルアップロードを先に処理
            let uploadedFiles: any = {};
            if (files) {
              try {
                uploadedFiles = await apiService.uploadApplicationFiles(files);
              } catch (uploadError) {
                console.warn('File upload failed, continuing without files:', uploadError);
              }
            }
            
            const apiResult = await apiService.submitApplicationForm({
              name: `${data.firstName} ${data.lastName}`,
              email: data.email,
              phone: data.phone,
              businessName: data.businessName,
              businessType: data.businessType as any || 'other',
              businessRegistration: data.registrationNumber,
              businessAddress: data.address || '',
              industry: data.productCategory || '',
              yearsInBusiness: 0,
              numberOfEmployees: 0,
              annualRevenue: 'under-10k' as any,
              productCategories: data.productCategory ? [data.productCategory] : [],
              estimatedMonthlySales: 'under-1k' as any,
              hasExistingInventory: false,
              previousEcommerceExperience: false,
              marketingChannels: [],
              specialRequirements: data.freeNote1 || '',
              howDidYouHear: data.freeNote2 || '',
              agreeToTerms: true,
              agreeToMarketing: false
            });
            
            if (apiResult.success) {
              console.log('Vendor application saved via backend API successfully');
              return { success: true };
            } else {
              return { 
                success: false, 
                error: 'データベースとバックエンドAPIの両方でエラーが発生しました。管理者にお問い合わせください。' 
              };
            }
          } catch (apiError) {
            console.error('Backend API fallback also failed:', apiError);
            return { 
              success: false, 
              error: 'データベースのセキュリティポリシーによりアクセスが拒否されました。管理者にお問い合わせください。' 
            };
          }
        }
        
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
  async testConnection(): Promise<{ success: boolean; error?: string; details?: any }> {
    try {
      // サービスロールクライアントが利用可能な場合はそれを使用（RLSをバイパス）
      const client = supabaseAdmin || supabase;
      const isUsingAdminClient = !!supabaseAdmin;
      
      console.log('Testing Supabase connection...');
      console.log('Using admin client:', isUsingAdminClient);
      console.log('Service role key available:', !!import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY);
      
      const { data, error } = await client
        .from('vendor_inquiries')
        .select('count')
        .limit(1);

      if (error) {
        console.error('Supabase connection test failed:', error);
        
        // RLSエラーの場合はより詳細な情報を提供
        if (error.message.includes('row-level security policy')) {
          return { 
            success: false, 
            error: 'データベースのセキュリティポリシーによりアクセスが拒否されました。管理者にお問い合わせください。',
            details: {
              isUsingAdminClient,
              hasServiceRoleKey: !!import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY,
              errorMessage: error.message
            }
          };
        }
        
        return { 
          success: false, 
          error: error.message,
          details: {
            isUsingAdminClient,
            hasServiceRoleKey: !!import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY
          }
        };
      }

      console.log('Supabase connection test successful');
      return { 
        success: true,
        details: {
          isUsingAdminClient,
          hasServiceRoleKey: !!import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY
        }
      };
    } catch (error) {
      console.error('Supabase connection test exception:', error);
      return { 
        success: false, 
        error: (error as Error).message,
        details: {
          isUsingAdminClient: !!supabaseAdmin,
          hasServiceRoleKey: !!import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY
        }
      };
    }
  }

  /**
   * vendor_applicationsテーブルのINSERTテスト
   */
  async testVendorApplicationInsert(): Promise<{ success: boolean; error?: string; details?: any }> {
    try {
      const client = supabaseAdmin || supabase;
      const isUsingAdminClient = !!supabaseAdmin;
      
      console.log('Testing vendor_applications INSERT...');
      console.log('Using admin client:', isUsingAdminClient);
      
      // テスト用の最小限のデータでINSERTを試行
      const testData = {
        first_name: 'Test',
        last_name: 'User',
        email: 'test@example.com',
        phone: '+1234567890',
        business_name: 'Test Business',
        business_type: 'individual',
        registration_number: null,
        address: null,
        description: 'Test application',
        product_category: 'test',
        average_sales: 0,
        free_note_1: '',
        free_note_2: '',
        free_note_3: '',
        business_cert_file: null,
        id_doc_file: null,
        bank_info_file: null
      };
      
      const { data, error } = await client
        .from('vendor_applications')
        .insert([testData])
        .select();

      if (error) {
        console.error('vendor_applications INSERT test failed:', error);
        
        if (error.message.includes('row-level security policy')) {
          return { 
            success: false, 
            error: 'vendor_applicationsテーブルのRLSポリシーによりINSERTが拒否されました。',
            details: {
              isUsingAdminClient,
              hasServiceRoleKey: !!import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY,
              errorMessage: error.message,
              errorCode: error.code,
              suggestion: 'SupabaseダッシュボードでRLSポリシーを設定するか、サービスロールキーを設定してください。'
            }
          };
        }
        
        return { 
          success: false, 
          error: error.message,
          details: {
            isUsingAdminClient,
            hasServiceRoleKey: !!import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY,
            errorCode: error.code
          }
        };
      }

      console.log('vendor_applications INSERT test successful:', data);
      return { 
        success: true,
        details: {
          isUsingAdminClient,
          hasServiceRoleKey: !!import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY,
          insertedData: data
        }
      };
    } catch (error) {
      console.error('vendor_applications INSERT test exception:', error);
      return { 
        success: false, 
        error: (error as Error).message,
        details: {
          isUsingAdminClient: !!supabaseAdmin,
          hasServiceRoleKey: !!import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY
        }
      };
    }
  }

  async testStorageUpload(): Promise<{ success: boolean; error?: string; details?: any }> {
    try {
      console.log('Testing storage upload...');
      
      // テスト用のPDFファイルを作成（MIMEタイプエラーを回避）
      const testContent = 'This is a test file for storage upload';
      const testFile = new File([testContent], 'test.pdf', { type: 'application/pdf' });
      
      // 各バケットでアップロードテスト
      const buckets = ['cv', 'ic', '1617', 'bank', 'address'];
      const results: any = {};
      
      for (const bucket of buckets) {
        try {
          const testPath = `test/${Date.now()}_${bucket}_test.txt`;
          const result = await this.uploadFile(testFile, bucket, testPath);
          results[bucket] = { success: true, path: result };
          console.log(`Upload to ${bucket} successful:`, result);
        } catch (error) {
          results[bucket] = { success: false, error: (error as Error).message };
          console.error(`Upload to ${bucket} failed:`, error);
        }
      }
      
      const successCount = Object.values(results).filter((r: any) => r.success).length;
      const totalCount = buckets.length;
      
      return {
        success: successCount === totalCount,
        error: successCount < totalCount ? `${successCount}/${totalCount} buckets accessible` : undefined,
        details: {
          results,
          successCount,
          totalCount
        }
      };
    } catch (error) {
      console.error('Storage upload test exception:', error);
      return {
        success: false,
        error: (error as Error).message
      };
    }
  }
}

export const supabaseService = new SupabaseService();
export default supabaseService;
