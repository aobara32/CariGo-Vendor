const express = require('express');
const multer = require('multer');
const path = require('path');
const supabaseService = require('../services/supabaseService');

const router = express.Router();

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    // Allow common document types
    const allowedTypes = /jpeg|jpg|png|gif|pdf|doc|docx/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only images and documents are allowed.'));
    }
  }
});

/**
 * POST /api/upload/application-files
 * Upload files for application form
 */
router.post('/application-files', upload.fields([
  { name: 'businessCert', maxCount: 1 },
  { name: 'idDoc', maxCount: 1 },
  { name: 'bankInfo', maxCount: 1 }
]), async (req, res) => {
  try {
    if (!req.files) {
      return res.status(400).json({
        success: false,
        error: 'No files uploaded'
      });
    }

    const uploadedFiles = {};
    const filePaths = {};

    // Process each file type
    for (const [fieldName, files] of Object.entries(req.files)) {
      if (files && files.length > 0) {
        const file = files[0];
        const fileName = `${Date.now()}-${fieldName}-${file.originalname}`;
        
        // Determine bucket based on field name
        let bucket;
        switch (fieldName) {
          case 'businessCert':
            bucket = '1617'; // Business certificate bucket
            break;
          case 'idDoc':
            bucket = 'IC'; // ID document bucket
            break;
          case 'bankInfo':
            bucket = 'bank'; // Bank info bucket
            break;
          default:
            bucket = 'documents'; // Default bucket
        }

        // Upload to Supabase storage
        const uploadResult = await supabaseService.uploadFile(file, bucket, fileName);
        
        if (uploadResult.success) {
          uploadedFiles[fieldName] = uploadResult.data;
          filePaths[fieldName] = uploadResult.data.path;
        } else {
          console.error(`Failed to upload ${fieldName}:`, uploadResult.error);
          return res.status(500).json({
            success: false,
            error: `Failed to upload ${fieldName}: ${uploadResult.error}`
          });
        }
      }
    }

    res.json({
      success: true,
      message: 'Files uploaded successfully',
      data: {
        uploadedFiles,
        filePaths
      }
    });

  } catch (error) {
    console.error('File upload error:', error);
    
    res.status(500).json({
      success: false,
      error: 'File upload failed',
      message: error.message
    });
  }
});

/**
 * POST /api/upload/address-document
 * Upload address document
 */
router.post('/address-document', upload.single('addressDoc'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        error: 'No file uploaded'
      });
    }

    const fileName = `${Date.now()}-address-${req.file.originalname}`;
    const bucket = 'address'; // Address document bucket

    // Upload to Supabase storage
    const uploadResult = await supabaseService.uploadFile(req.file, bucket, fileName);
    
    if (uploadResult.success) {
      res.json({
        success: true,
        message: 'Address document uploaded successfully',
        data: uploadResult.data
      });
    } else {
      res.status(500).json({
        success: false,
        error: 'Failed to upload address document',
        message: uploadResult.error
      });
    }

  } catch (error) {
    console.error('Address document upload error:', error);
    
    res.status(500).json({
      success: false,
      error: 'Address document upload failed',
      message: error.message
    });
  }
});

/**
 * GET /api/upload/health
 * Health check for upload service
 */
router.get('/health', (req, res) => {
  res.json({
    success: true,
    service: 'upload',
    status: 'healthy',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
