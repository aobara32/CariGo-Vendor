const express = require('express');
const Joi = require('joi');
const emailService = require('../services/emailService');

const router = express.Router();

// Validation schema for application form
const applicationSchema = Joi.object({
  // Personal Information
  name: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(10).max(20).required(),
  
  // Business Information
  businessName: Joi.string().min(2).max(200).required(),
  businessType: Joi.string().valid('individual', 'partnership', 'corporation', 'other').required(),
  businessRegistration: Joi.string().min(5).max(100).optional().allow(''),
  businessAddress: Joi.string().min(10).max(500).required(),
  
  // Business Details
  industry: Joi.string().min(2).max(100).required(),
  yearsInBusiness: Joi.number().min(0).max(50).required(),
  numberOfEmployees: Joi.number().min(1).max(10000).required(),
  annualRevenue: Joi.string().valid('under-10k', '10k-50k', '50k-100k', '100k-500k', '500k-1m', 'over-1m').required(),
  
  // Product Information
  productCategories: Joi.array().items(Joi.string()).min(1).required(),
  estimatedMonthlySales: Joi.string().valid('under-1k', '1k-5k', '5k-10k', '10k-25k', '25k-50k', 'over-50k').required(),
  hasExistingInventory: Joi.boolean().required(),
  
  // Platform Experience
  previousEcommerceExperience: Joi.boolean().required(),
  platformsUsed: Joi.array().items(Joi.string()).optional().allow([]),
  
  // Additional Information
  marketingChannels: Joi.array().items(Joi.string()).optional().allow([]),
  specialRequirements: Joi.string().max(1000).optional().allow(''),
  howDidYouHear: Joi.string().max(200).optional().allow(''),
  
  // Agreement
  agreeToTerms: Joi.boolean().valid(true).required(),
  agreeToMarketing: Joi.boolean().default(false)
});

/**
 * POST /api/application
 * Submit merchant application form
 */
router.post('/', async (req, res) => {
  try {
    // Validate request data
    const { error, value } = applicationSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        error: 'Validation Error',
        details: error.details.map(detail => detail.message)
      });
    }

    const applicationData = value;

    // Send confirmation email to applicant
    await emailService.sendApplicationConfirmation(applicationData);

    // Send internal notification to admin
    await emailService.sendInternalNotification('application', {
      ...applicationData,
      timestamp: new Date().toISOString()
    });

    res.json({
      success: true,
      message: 'アプリケーションを受け付けました。確認メールを送信いたしました。',
      data: {
        email: applicationData.email,
        businessName: applicationData.businessName,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Application form error:', error);
    
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'アプリケーションの送信に失敗しました。しばらく時間をおいて再度お試しください。'
    });
  }
});

/**
 * GET /api/application/health
 * Health check for application service
 */
router.get('/health', (req, res) => {
  res.json({
    success: true,
    service: 'application',
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
