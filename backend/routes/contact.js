const express = require('express');
const Joi = require('joi');
const emailService = require('../services/emailService');
const supabaseService = require('../services/supabaseService');

const router = express.Router();

// Validation schema for contact form
const contactSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().min(10).max(20).optional().allow(''),
  subject: Joi.string().min(5).max(200).required(),
  message: Joi.string().min(10).max(2000).required()
});

/**
 * POST /api/contact
 * Submit contact form
 */
router.post('/', async (req, res) => {
  try {
    // Validate request data
    const { error, value } = contactSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        error: 'Validation Error',
        details: error.details.map(detail => detail.message)
      });
    }

    const contactData = value;

    // Save to database
    const dbResult = await supabaseService.saveVendorInquiry(contactData);
    
    if (!dbResult.success) {
      console.error('Failed to save inquiry to database:', dbResult.error);
      // Continue with email sending even if database save fails
    }

    // Send confirmation email to user
    await emailService.sendContactConfirmation(contactData);

    // Send internal notification to admin
    await emailService.sendInternalNotification('contact', {
      ...contactData,
      timestamp: new Date().toISOString(),
      databaseSaved: dbResult.success
    });

    res.json({
      success: true,
      message: 'お問い合わせを受け付けました。確認メールを送信いたしました。',
      data: {
        email: contactData.email,
        subject: contactData.subject,
        databaseSaved: dbResult.success,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Contact form error:', error);
    
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: 'お問い合わせの送信に失敗しました。しばらく時間をおいて再度お試しください。'
    });
  }
});

/**
 * GET /api/contact/health
 * Health check for contact service
 */
router.get('/health', (req, res) => {
  res.json({
    success: true,
    service: 'contact',
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
