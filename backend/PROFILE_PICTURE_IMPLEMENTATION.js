/**
 * Profile Picture Upload Route Handler
 * Path: backend/routes/employees.js or backend/controllers/employees.js
 * 
 * This is a reference implementation for handling profile picture uploads
 * Integrate this into your existing employee routes/controllers
 */

const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const router = express.Router();

// ============================================
// MULTER CONFIGURATION
// ============================================

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, '../uploads/profile-pictures');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    // Generate unique filename: userId_timestamp_originalname
    const uniqueSuffix = `${Date.now()}_${Math.round(Math.random() * 1E9)}`;
    const ext = path.extname(file.originalname);
    const name = path.basename(file.originalname, ext);
    cb(null, `${req.params.id}_${uniqueSuffix}${ext}`);
  }
});

// File filter to accept only images
const fileFilter = (req, file, cb) => {
  const allowedMimes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
  
  if (allowedMimes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed (jpeg, jpg, png, gif, webp)'));
  }
};

// Create multer instance
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

// ============================================
// MIDDLEWARE FOR ERROR HANDLING
// ============================================

const handleMulterError = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'FILE_TOO_LARGE') {
      return res.status(400).json({
        success: false,
        message: 'File size exceeds 5MB limit'
      });
    }
    if (err.code === 'LIMIT_FILE_COUNT') {
      return res.status(400).json({
        success: false,
        message: 'Only one file is allowed'
      });
    }
  } else if (err) {
    return res.status(400).json({
      success: false,
      message: err.message
    });
  }
  next();
};

// ============================================
// UPDATE EMPLOYEE WITH PROFILE PICTURE
// ============================================

/**
 * PUT /api/v1/hr/employees/:id
 * Update employee profile including profile picture
 */
router.put('/employees/:id', upload.single('profilePicture'), handleMulterError, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, address, department, designation, joiningDate } = req.body;

    // Validate employee exists
    const employee = await Employee.findById(id);
    if (!employee) {
      // Clean up uploaded file if validation fails
      if (req.file) {
        fs.unlinkSync(req.file.path);
      }
      return res.status(404).json({
        success: false,
        message: 'Employee not found'
      });
    }

    // Update text fields
    if (name) employee.name = name;
    if (email) employee.email = email;
    if (phone) employee.phone = phone;
    if (address) employee.address = address;
    if (department) employee.department = department;
    if (designation) employee.designation = designation;
    if (joiningDate) employee.joiningDate = joiningDate;

    // Handle profile picture upload
    if (req.file) {
      // Delete old profile picture if exists
      if (employee.profilePicture) {
        const oldFilePath = path.join(__dirname, '../', employee.profilePicture);
        if (fs.existsSync(oldFilePath)) {
          try {
            fs.unlinkSync(oldFilePath);
          } catch (err) {
            console.error('Error deleting old profile picture:', err);
            // Don't fail the request if deletion fails
          }
        }
      }

      // Save new profile picture path (relative path)
      const relativePath = `uploads/profile-pictures/${req.file.filename}`;
      employee.profilePicture = relativePath;
      employee.avatar = relativePath; // For compatibility
    }

    // Update timestamp
    employee.updatedAt = new Date();

    // Save to database
    await employee.save();

    // Build response with absolute URL for image
    const responseData = employee.toObject();
    if (responseData.profilePicture) {
      responseData.profilePictureUrl = `${req.protocol}://${req.get('host')}/${responseData.profilePicture}`;
    }

    res.status(200).json({
      success: true,
      message: 'Profile updated successfully',
      data: responseData
    });

  } catch (error) {
    // Clean up uploaded file on error
    if (req.file) {
      try {
        fs.unlinkSync(req.file.path);
      } catch (err) {
        console.error('Error cleaning up file:', err);
      }
    }

    console.error('Error updating profile:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update profile',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    });
  }
});

// ============================================
// GET PROFILE PICTURE
// ============================================

/**
 * GET /api/v1/hr/employees/:id/profile-picture
 * Retrieve employee profile picture with caching headers
 */
router.get('/employees/:id/profile-picture', async (req, res) => {
  try {
    const { id } = req.params;
    
    const employee = await Employee.findById(id);
    if (!employee || !employee.profilePicture) {
      return res.status(404).json({
        success: false,
        message: 'Profile picture not found'
      });
    }

    const filePath = path.join(__dirname, '../', employee.profilePicture);
    
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({
        success: false,
        message: 'Profile picture file not found'
      });
    }

    // Set cache headers for 30 days
    res.set('Cache-Control', 'public, max-age=2592000');
    res.sendFile(filePath);

  } catch (error) {
    console.error('Error retrieving profile picture:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to retrieve profile picture'
    });
  }
});

// ============================================
// DELETE PROFILE PICTURE
// ============================================

/**
 * DELETE /api/v1/hr/employees/:id/profile-picture
 * Remove employee profile picture
 */
router.delete('/employees/:id/profile-picture', async (req, res) => {
  try {
    const { id } = req.params;
    
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({
        success: false,
        message: 'Employee not found'
      });
    }

    if (employee.profilePicture) {
      const filePath = path.join(__dirname, '../', employee.profilePicture);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }

      employee.profilePicture = null;
      employee.avatar = null;
      await employee.save();
    }

    res.status(200).json({
      success: true,
      message: 'Profile picture deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting profile picture:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to delete profile picture'
    });
  }
});

// ============================================
// STATIC FILE SERVING (OPTIONAL)
// ============================================

/**
 * In your main app.js, add this line to serve uploaded files:
 * 
 * app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
 * 
 * This allows serving files at: http://localhost:3000/uploads/profile-pictures/...
 */

// ============================================
// BATCH DELETE OLD PROFILE PICTURES
// ============================================

/**
 * Cleanup function to delete profile pictures older than 30 days
 * (for users who uploaded multiple times)
 * Call this periodically (e.g., cron job)
 */
function cleanupOldProfilePictures() {
  const RETENTION_DAYS = 30;
  const retentionTime = RETENTION_DAYS * 24 * 60 * 60 * 1000; // milliseconds
  const now = Date.now();

  try {
    const files = fs.readdirSync(uploadsDir);
    
    files.forEach(file => {
      const filePath = path.join(uploadsDir, file);
      const stats = fs.statSync(filePath);
      const fileAge = now - stats.mtime.getTime();

      if (fileAge > retentionTime) {
        // Check if file is still referenced in database
        Employee.findOne({ profilePicture: `uploads/profile-pictures/${file}` })
          .then(employee => {
            if (!employee) {
              // File is not referenced, safe to delete
              fs.unlinkSync(filePath);
              console.log(`Deleted orphaned profile picture: ${file}`);
            }
          })
          .catch(err => console.error('Error checking file reference:', err));
      }
    });
  } catch (error) {
    console.error('Error in cleanup job:', error);
  }
}

// Schedule cleanup job (optional)
// const cron = require('node-cron');
// cron.schedule('0 0 * * *', cleanupOldProfilePictures); // Daily at midnight

module.exports = router;

/**
 * ============================================
 * SETUP INSTRUCTIONS
 * ============================================
 * 
 * 1. Install dependencies:
 *    npm install multer
 * 
 * 2. Update your Employee model:
 *    - Add profilePicture field (String)
 *    - Add avatar field (String) for compatibility
 *    - Add updatedAt field (Date)
 * 
 * 3. In your main app.js, add this middleware:
 *    app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
 * 
 * 4. Import and use this router:
 *    const employeeRoutes = require('./routes/employees');
 *    app.use('/api/v1/hr', employeeRoutes);
 * 
 * 5. Test the endpoint using Postman or curl
 * 
 * 6. (Optional) Set up cron job for cleanup:
 *    npm install node-cron
 *    Uncomment the cron.schedule line above
 */
