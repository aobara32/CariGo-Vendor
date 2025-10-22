const express = require('express');
const Joi = require('joi');
const emailService = require('../services/emailService');

const router = express.Router();

// Validation schema for donation form
const donationSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
  amount: Joi.number().min(1).max(100000).required(),
  purpose: Joi.string().min(5).max(200).required(),
  anonymous: Joi.boolean().default(false),
  message: Joi.string().max(1000).optional().allow('')
});

/**
 * POST /api/donation
 * Submit donation form
 */
router.post('/', async (req, res) => {
  try {
    // Validate request data
    const { error, value } = donationSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        success: false,
        error: 'Validation Error',
        details: error.details.map(detail => detail.message)
      });
    }

    const { name, email, properties, anonymous, message } = value;

    // Send confirmation email to user
    await emailService.sendDonationConfirmation({
      name,
      email,
      amount: value.amount,
      purpose: value.purpose,
      anonymous,
      message
    });

    // Send internal notification to admin
    await emailService.sendInternalNotification('donation', {
      name,
      email,
      amount: value.amount,
      purpose: value.purpose,
      anonymous,
      message,
      timestamp: new Date().toISOString()
    });

    res.json({
      success: true,
      message: '寄付のお申し込みを受け付けました。確認メールを送信いたしました。',
      data: {
        email,
        amount: value.amount,
        anonymous,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Donation form error:', error);
    
    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      message: '寄付のお申し込みの送信に失敗しました。しばらく時間をおいて再度お試しください。'
    });
  }
});

/**
 * GET /api/donation/health
 * Health check for donation service
 */
router.get('/health', (req, res) => {
  res.json({
    success: true,
    service: 'donation',
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
