const express = require('express');
const sgMail = require('@sendgrid/mail');
const supabaseService = require('../services/supabaseService');

const router = express.Router();

// Initialize SendGrid for testing
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Set EU data residency if using EU subuser
if (process.env.SENDGRID_EU_DATA_RESIDENCY === 'true') {
  sgMail.setDataResidency('eu');
}

/**
 * POST /api/test/sendgrid
 * Test SendGrid email sending functionality
 */
router.post('/sendgrid', async (req, res) => {
  try {
    const { to, from, subject, text, html } = req.body;

    // Default values for testing
    const testMsg = {
      to: to || 'test@example.com',
      from: from || process.env.SENDGRID_FROM_EMAIL || 'test@example.com',
      subject: subject || 'Sending with SendGrid is Fun',
      text: text || 'and easy to do anywhere, even with Node.js',
      html: html || '<strong>and easy to do anywhere, even with Node.js</strong>',
    };

    console.log('Sending test email with SendGrid...');
    console.log('Message:', testMsg);

    await sgMail.send(testMsg);
    
    console.log('Email sent successfully');
    
    res.json({
      success: true,
      message: 'Email sent successfully',
      data: {
        to: testMsg.to,
        from: testMsg.from,
        subject: testMsg.subject,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('SendGrid test error:', error);
    
    res.status(500).json({
      success: false,
      error: 'SendGrid Test Failed',
      message: error.message,
      details: error.response?.body || null
    });
  }
});

/**
 * GET /api/test/sendgrid/status
 * Check SendGrid configuration status
 */
router.get('/sendgrid/status', (req, res) => {
  const config = {
    apiKey: process.env.SENDGRID_API_KEY ? 'Set' : 'Not Set',
    fromEmail: process.env.SENDGRID_FROM_EMAIL || 'Not Set',
    fromName: process.env.SENDGRID_FROM_NAME || 'Not Set',
    euDataResidency: process.env.SENDGRID_EU_DATA_RESIDENCY || 'false',
    dataResidency: process.env.SENDGRID_EU_DATA_RESIDENCY === 'true' ? 'EU' : 'Global'
  };

  res.json({
    success: true,
    message: 'SendGrid configuration status',
    config
  });
});

/**
 * POST /api/test/contact
 * Test contact form email functionality
 */
router.post('/contact', async (req, res) => {
  try {
    const emailService = require('../services/emailService');
    
    const testData = {
      name: 'Test User',
      email: req.body.email || 'test@example.com',
      phone: '+673 123 4567',
      subject: 'Test Contact Form',
      message: 'This is a test message to verify contact form email functionality.'
    };

    console.log('Testing contact form email...');
    
    await emailService.sendContactConfirmation(testData);
    
    res.json({
      success: true,
      message: 'Contact form test email sent successfully',
      data: testData
    });

  } catch (error) {
    console.error('Contact form test error:', error);
    
    res.status(500).json({
      success: false,
      error: 'Contact Form Test Failed',
      message: error.message
    });
  }
});

/**
 * POST /api/test/donation
 * Test donation form email functionality
 */
router.post('/donation', async (req, res) => {
  try {
    const emailService = require('../services/emailService');
    
    const testData = {
      name: 'Test Donor',
      email: req.body.email || 'test@example.com',
      amount: 100,
      purpose: 'Test Donation',
      anonymous: false,
      message: 'This is a test donation to verify donation form email functionality.'
    };

    console.log('Testing donation form email...');
    
    await emailService.sendDonationConfirmation(testData);
    
    res.json({
      success: true,
      message: 'Donation form test email sent successfully',
      data: testData
    });

  } catch (error) {
    console.error('Donation form test error:', error);
    
    res.status(500).json({
      success: false,
      error: 'Donation Form Test Failed',
      message: error.message
    });
  }
});

/**
 * POST /api/test/application
 * Test application form email functionality
 */
router.post('/application', async (req, res) => {
  try {
    const emailService = require('../services/emailService');
    
    const testData = {
      name: 'Test Applicant',
      email: req.body.email || 'test@example.com',
      phone: '+673 123 4567',
      businessName: 'Test Business',
      businessType: 'corporation',
      businessRegistration: 'TEST123456',
      businessAddress: '123 Test Street, Bandar Seri Begawan, Brunei',
      industry: 'Technology',
      yearsInBusiness: 5,
      numberOfEmployees: 10,
      annualRevenue: '100k-500k',
      productCategories: ['Electronics', 'Accessories'],
      estimatedMonthlySales: '5k-10k',
      hasExistingInventory: true,
      previousEcommerceExperience: true,
      platformsUsed: ['Shopify', 'Amazon'],
      marketingChannels: ['Social Media', 'Google Ads'],
      specialRequirements: 'This is a test application to verify application form email functionality.',
      howDidYouHear: 'Test referral',
      agreeToTerms: true,
      agreeToMarketing: false
    };

    console.log('Testing application form email...');
    
    await emailService.sendApplicationConfirmation(testData);
    
    res.json({
      success: true,
      message: 'Application form test email sent successfully',
      data: testData
    });

  } catch (error) {
    console.error('Application form test error:', error);
    
    res.status(500).json({
      success: false,
      error: 'Application Form Test Failed',
      message: error.message
    });
  }
});

/**
 * POST /api/test/investment
 * Test investment form email functionality
 */
router.post('/investment', async (req, res) => {
  try {
    const emailService = require('../services/emailService');
    
    const testData = {
      name: 'Test Investor',
      company: 'Test Company',
      email: req.body.email || 'test@example.com',
      phone: '+673 123 4567',
      amount: 10000,
      type: 'equity',
      experience: 'experienced',
      message: 'This is a test investment inquiry to verify investment form email functionality.'
    };

    console.log('Testing investment form email...');
    
    await emailService.sendInvestmentConfirmation(testData);
    
    res.json({
      success: true,
      message: 'Investment form test email sent successfully',
      data: testData
    });

  } catch (error) {
    console.error('Investment form test error:', error);
    
    res.status(500).json({
      success: false,
      error: 'Investment Form Test Failed',
      message: error.message
    });
  }
});

/**
 * GET /api/test/supabase
 * Test Supabase database connection
 */
router.get('/supabase', async (req, res) => {
  try {
    const result = await supabaseService.testConnection();
    
    res.json({
      success: result.success,
      message: result.success ? 'Supabase connection successful' : 'Supabase connection failed',
      error: result.error || null,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Supabase test error:', error);
    res.status(500).json({
      success: false,
      error: 'Supabase test failed',
      message: error.message
    });
  }
});

/**
 * POST /api/test/supabase/application
 * Test saving application to Supabase
 */
router.post('/supabase/application', async (req, res) => {
  try {
    const testData = {
      name: 'テスト太郎',
      email: 'test@example.com',
      phone: '090-1234-5678',
      businessName: 'テストビジネス株式会社',
      businessType: 'LLC',
      businessRegistration: '1234567890123',
      businessAddress: '東京都渋谷区テスト1-2-3',
      specialRequirements: 'テスト用の特別要件です。',
      productCategories: ['Electronics', 'Clothing'],
      estimatedMonthlySales: '1k-5k',
      howDidYouHear: 'Google検索',
      platformsUsed: ['Amazon', '楽天'],
      marketingChannels: ['SNS', 'SEO']
    };

    const result = await supabaseService.saveVendorApplication(testData);
    
    res.json({
      success: result.success,
      message: result.success ? 'Application saved to Supabase successfully' : 'Failed to save application to Supabase',
      error: result.error || null,
      data: result.data || null,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Supabase application test error:', error);
    res.status(500).json({
      success: false,
      error: 'Supabase application test failed',
      message: error.message
    });
  }
});

/**
 * POST /api/test/supabase/inquiry
 * Test saving inquiry to Supabase
 */
router.post('/supabase/inquiry', async (req, res) => {
  try {
    const testData = {
      name: 'テスト太郎',
      email: 'test@example.com',
      phone: '090-1234-5678',
      subject: 'テスト問い合わせ',
      message: 'これはテスト用の問い合わせメッセージです。'
    };

    const result = await supabaseService.saveVendorInquiry(testData);
    
    res.json({
      success: result.success,
      message: result.success ? 'Inquiry saved to Supabase successfully' : 'Failed to save inquiry to Supabase',
      error: result.error || null,
      data: result.data || null,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Supabase inquiry test error:', error);
    res.status(500).json({
      success: false,
      error: 'Supabase inquiry test failed',
      message: error.message
    });
  }
});

module.exports = router;
