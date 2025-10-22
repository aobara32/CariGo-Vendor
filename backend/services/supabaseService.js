const { createClient } = require('@supabase/supabase-js');

class SupabaseService {
  constructor() {
    this.supabaseUrl = process.env.SUPABASE_URL;
    this.supabaseKey = process.env.SUPABASE_ANON_KEY;
    
    if (!this.supabaseUrl || !this.supabaseKey) {
      console.warn('Supabase credentials not found. Database operations will be skipped.');
      this.supabase = null;
    } else {
      this.supabase = createClient(this.supabaseUrl, this.supabaseKey);
    }
  }

  /**
   * Save vendor inquiry to database
   */
  async saveVendorInquiry(data) {
    if (!this.supabase) {
      console.log('Supabase not configured, skipping database save');
      return { success: false, error: 'Database not configured' };
    }

    try {
      const { data: result, error } = await this.supabase
        .from('vendor_inquiries')
        .insert([
          {
            name: data.name,
            email: data.email,
            phone: data.phone,
            category: data.subject,
            title: data.subject,
            message: data.message
          }
        ])
        .select();

      if (error) {
        console.error('Error saving vendor inquiry:', error);
        return { success: false, error: error.message };
      }

      console.log('Vendor inquiry saved successfully:', result);
      return { success: true, data: result };
    } catch (error) {
      console.error('Exception saving vendor inquiry:', error);
      return { success: false, error: error.message };
    }
  }

  /**
   * Save vendor application to database
   */
  async saveVendorApplication(data) {
    if (!this.supabase) {
      console.log('Supabase not configured, skipping database save');
      return { success: false, error: 'Database not configured' };
    }

    try {
      // Parse name into first_name and last_name
      const nameParts = data.name.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      const applicationData = {
        last_name: lastName,
        first_name: firstName,
        email: data.email,
        phone: data.phone,
        business_name: data.businessName,
        business_type: data.businessType,
        registration_number: data.businessRegistration || null,
        address: data.businessAddress,
        description: data.specialRequirements || '',
        product_category: data.productCategories ? data.productCategories.join(', ') : '',
        average_sales: this.parseSalesAmount(data.estimatedMonthlySales),
        free_note_1: data.howDidYouHear || '',
        free_note_2: data.platformsUsed ? data.platformsUsed.join(', ') : '',
        free_note_3: data.marketingChannels ? data.marketingChannels.join(', ') : '',
        business_cert_file: null, // Will be updated after file upload
        id_doc_file: null, // Will be updated after file upload
        bank_info_file: null // Will be updated after file upload
      };

      const { data: result, error } = await this.supabase
        .from('vendor_applications')
        .insert([applicationData])
        .select();

      if (error) {
        console.error('Error saving vendor application:', error);
        return { success: false, error: error.message };
      }

      console.log('Vendor application saved successfully:', result);
      return { success: true, data: result };
    } catch (error) {
      console.error('Exception saving vendor application:', error);
      return { success: false, error: error.message };
    }
  }

  /**
   * Upload file to Supabase storage
   */
  async uploadFile(file, bucket, fileName) {
    if (!this.supabase) {
      console.log('Supabase not configured, skipping file upload');
      return { success: false, error: 'Storage not configured' };
    }

    try {
      const { data, error } = await this.supabase.storage
        .from(bucket)
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (error) {
        console.error('Error uploading file:', error);
        return { success: false, error: error.message };
      }

      // Get public URL
      const { data: urlData } = this.supabase.storage
        .from(bucket)
        .getPublicUrl(fileName);

      console.log('File uploaded successfully:', urlData.publicUrl);
      return { 
        success: true, 
        data: { 
          path: data.path, 
          url: urlData.publicUrl 
        } 
      };
    } catch (error) {
      console.error('Exception uploading file:', error);
      return { success: false, error: error.message };
    }
  }

  /**
   * Update application with file paths
   */
  async updateApplicationFiles(applicationId, filePaths) {
    if (!this.supabase) {
      console.log('Supabase not configured, skipping file update');
      return { success: false, error: 'Database not configured' };
    }

    try {
      const updateData = {};
      if (filePaths.businessCert) updateData.business_cert_file = filePaths.businessCert;
      if (filePaths.idDoc) updateData.id_doc_file = filePaths.idDoc;
      if (filePaths.bankInfo) updateData.bank_info_file = filePaths.bankInfo;

      const { data: result, error } = await this.supabase
        .from('vendor_applications')
        .update(updateData)
        .eq('id', applicationId)
        .select();

      if (error) {
        console.error('Error updating application files:', error);
        return { success: false, error: error.message };
      }

      console.log('Application files updated successfully:', result);
      return { success: true, data: result };
    } catch (error) {
      console.error('Exception updating application files:', error);
      return { success: false, error: error.message };
    }
  }

  /**
   * Parse sales amount from string to number
   */
  parseSalesAmount(salesString) {
    const salesMap = {
      'under-1k': 500,
      '1k-5k': 3000,
      '5k-10k': 7500,
      '10k-25k': 17500,
      '25k-50k': 37500,
      'over-50k': 75000
    };
    return salesMap[salesString] || 0;
  }

  /**
   * Test database connection
   */
  async testConnection() {
    if (!this.supabase) {
      return { success: false, error: 'Supabase not configured' };
    }

    try {
      const { data, error } = await this.supabase
        .from('vendor_inquiries')
        .select('count')
        .limit(1);

      if (error) {
        return { success: false, error: error.message };
      }

      return { success: true, message: 'Database connection successful' };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}

module.exports = new SupabaseService();
