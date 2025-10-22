const express = require('express');
const Joi = require('joi');
const emailService = require('../services/emailService');

const router = express.Router();

// Validation schema for investment form
const investmentSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  company: Joi.string().max(200).optional().allow(''),
  email: Joi.string().email().required(),
  phone: Joi.string().min(10).max(20).required(),
  amount: Joi.number().min(1000).max(10000000).required(),
  type: Joi.string().valid('equity', 'debt', 'hybrid', 'other').required(),
  experience: Joi.string().valid('beginner', 'intermediate', 'experienced', 'professional').required(),
  message: Joi.string().min(10).max(2000).required()
});

/**
 * POST /api/investment
 * Submit investment form
 */
router.post('/', async (req, res) => {
  try {
    // Validate request data
    const { error, value } = investmentSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        error: 'Validation Error',
        details: error.details.map(detail => detail.message)
      });
    }

    const { name, company, email, phone, amount, type, experience, message } = value;

    // Send confirmation email to user
    await emailService.sendInvestmentConfirmation({
      name,
      company,
      email,
      phone,
      amount,
      type,
      experience,
      message
    });

    // Send internal notification to admin
    await emailService.sendInternalNotification('investment', {
      name,
      company,
      email,
      phone,
      amount,
      type,
      experience,
      message,
      timestamp: new Date().toISOString()
    });

    res.json({
      success: true,
      message: '投資のお申し込みを受け付けました。確認メールを送信いたしました。',
      data: {
        email,
        amount,
        type,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Investment form error:', error);
    
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: '投資のお申し込みの送信に失敗しました。しばらく時間をおいて再度お試しください。'
    });
  }
});

/**
 * GET /api/investment/health
 * Health check for investment service
 */
router.get('/health', (req, res) => {
  res.json({
    success: true,
    service: 'investment',
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
