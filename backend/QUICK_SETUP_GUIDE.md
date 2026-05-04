# Profile Picture Upload - Quick API Setup Guide

## Quick Summary

The frontend is now ready to upload profile pictures! You need to update your backend to handle file uploads.

---

## What Frontend Does

1. ✅ User selects image via drag-and-drop or file picker
2. ✅ Image is validated (type, size ≤ 5MB)
3. ✅ Image preview is shown
4. ✅ FormData is created with image + other fields
5. ✅ PUT request sent to: `/api/v1/hr/employees/:id`

---

## What Backend Needs to Do

Handle **PUT** request at `/api/v1/hr/employees/:id` with:
- ✅ Extract multipart form data
- ✅ Save image file to disk/cloud
- ✅ Update employee database with image path
- ✅ Return updated employee data

---

## Option 1: Using Express + Multer (Recommended)

### Step 1: Install Dependencies
```bash
npm install multer
```

### Step 2: Add to Employee Model

```javascript
// models/Employee.js
const employeeSchema = new Schema({
  // ... existing fields ...
  
  profilePicture: {
    type: String,
    default: null
  },
  avatar: {
    type: String,
    default: null
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});
```

### Step 3: Create Upload Middleware

```javascript
// middleware/upload.js
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Create uploads directory
const uploadsDir = path.join(__dirname, '../uploads/profile-pictures');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}_${Math.round(Math.random() * 1E9)}`;
    const ext = path.extname(file.originalname);
    cb(null, `${req.params.id}${uniqueSuffix}${ext}`);
  }
});

const fileFilter = (req, file, cb) => {
  const allowedMimes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
  if (allowedMimes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed'));
  }
};

module.exports = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB
});
```

### Step 4: Update Route Handler

```javascript
// routes/employees.js
const upload = require('../middleware/upload');

router.put('/employees/:id', upload.single('profilePicture'), async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, address, department, designation, joiningDate } = req.body;

    const employee = await Employee.findById(id);
    if (!employee) {
      if (req.file) fs.unlinkSync(req.file.path);
      return res.status(404).json({ success: false, message: 'Employee not found' });
    }

    // Update fields
    if (name) employee.name = name;
    if (email) employee.email = email;
    if (phone) employee.phone = phone;
    if (address) employee.address = address;
    if (department) employee.department = department;
    if (designation) employee.designation = designation;
    if (joiningDate) employee.joiningDate = joiningDate;

    // Handle profile picture
    if (req.file) {
      // Delete old file if exists
      if (employee.profilePicture && fs.existsSync(employee.profilePicture)) {
        fs.unlinkSync(employee.profilePicture);
      }
      employee.profilePicture = `uploads/profile-pictures/${req.file.filename}`;
      employee.avatar = employee.profilePicture;
    }

    employee.updatedAt = new Date();
    await employee.save();

    res.status(200).json({
      success: true,
      message: 'Profile updated successfully',
      data: employee
    });
  } catch (error) {
    if (req.file) fs.unlinkSync(req.file.path);
    res.status(500).json({ success: false, message: 'Failed to update profile' });
  }
});
```

### Step 5: Serve Static Files

In your main `app.js`:
```javascript
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
```

---

## Option 2: Using AWS S3

### Step 1: Install AWS SDK
```bash
npm install aws-sdk
```

### Step 2: Configure AWS

```javascript
// middleware/uploadS3.js
const AWS = require('aws-sdk');
const multer = require('multer');

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }
});

module.exports = { upload, s3 };
```

### Step 3: Route Handler with S3

```javascript
const { upload, s3 } = require('../middleware/uploadS3');

router.put('/employees/:id', upload.single('profilePicture'), async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ success: false, message: 'Employee not found' });
    }

    if (req.file) {
      const params = {
        Bucket: process.env.AWS_S3_BUCKET,
        Key: `profile-pictures/${req.params.id}_${Date.now()}.jpg`,
        Body: req.file.buffer,
        ContentType: req.file.mimetype,
        ACL: 'public-read'
      };

      const result = await s3.upload(params).promise();
      employee.profilePicture = result.Location;
      employee.avatar = result.Location;
    }

    // ... update other fields ...
    await employee.save();

    res.status(200).json({
      success: true,
      message: 'Profile updated successfully',
      data: employee
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Upload failed' });
  }
});
```

---

## Option 3: Using Cloudinary

### Step 1: Install Cloudinary SDK
```bash
npm install cloudinary multer-storage-cloudinary
```

### Step 2: Setup Cloudinary

```javascript
// middleware/uploadCloudinary.js
const cloudinary = require('cloudinary').v2;
const CloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'hrms/profile-pictures',
  allowedFormats: ['jpg', 'png', 'gif', 'webp'],
  filename: (req, file, cb) => {
    cb(null, `${req.params.id}_${Date.now()}`);
  }
});

module.exports = multer({ storage });
```

### Step 3: Route Handler

```javascript
const upload = require('../middleware/uploadCloudinary');

router.put('/employees/:id', upload.single('profilePicture'), async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ success: false, message: 'Employee not found' });
    }

    if (req.file) {
      employee.profilePicture = req.file.secure_url;
      employee.avatar = req.file.secure_url;
    }

    // ... update other fields ...
    await employee.save();

    res.status(200).json({
      success: true,
      message: 'Profile updated successfully',
      data: employee
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Upload failed' });
  }
});
```

---

## Environment Variables

Add to your `.env` file:

```bash
# For local storage
UPLOAD_DIR=./uploads/profile-pictures
MAX_FILE_SIZE=5242880

# For AWS S3
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
AWS_S3_BUCKET=your_bucket_name
AWS_S3_REGION=us-east-1

# For Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---

## Testing with Postman

1. **Method:** PUT
2. **URL:** `http://localhost:3000/api/v1/hr/employees/{userId}`
3. **Headers:**
   - `Authorization: Bearer YOUR_JWT_TOKEN`
4. **Body:** Select `form-data`
   - `name`: Jainish Gamit
   - `email`: jainish@example.com
   - `phone`: 9574981958
   - `profilePicture`: (select image file)
5. **Send** and check response

---

## Verification Steps

1. ✅ Check if file is saved (local: check `/uploads` folder, S3: check bucket, Cloudinary: check dashboard)
2. ✅ Check if database updated with picture path/URL
3. ✅ Verify image displays in MyProfile page
4. ✅ Test with different image sizes and formats
5. ✅ Verify old image is deleted when new one uploaded

---

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| 413 Payload Too Large | Increase Nginx/Express body size limit |
| File not saving | Check folder permissions and path |
| CORS error | Add CORS headers to response |
| Old image not deleting | Add file deletion logic before saving new one |
| Image URL not loading | Ensure `/uploads` route is served statically |

---

## Frontend-Backend Integration Summary

| Frontend | Backend |
|----------|---------|
| Validates image size & type | Re-validate on server |
| Creates FormData | Parse multipart/form-data |
| Sends to `/employees/:id` | Receive at PUT endpoint |
| Stores in `profilePicture` field | Save to database |
| Displays preview before submit | Display on MyProfile after fetch |

---

## Security Checklist

- ✅ Validate JWT token
- ✅ Check file type (image only)
- ✅ Check file size (≤ 5MB)
- ✅ Validate user ID matches authenticated user
- ✅ Delete old files on update
- ✅ Use strong file names to prevent attacks
- ✅ Set appropriate file permissions
- ✅ Scan for malware (optional)

---

## Reference Files

See the backend folder for complete implementations:
- `API_PROFILE_PICTURE_DOCUMENTATION.md` - Full API documentation
- `PROFILE_PICTURE_IMPLEMENTATION.js` - Complete code example with Multer
