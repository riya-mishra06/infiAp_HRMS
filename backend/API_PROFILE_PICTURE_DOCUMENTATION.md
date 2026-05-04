# Profile Picture Upload API Documentation

## Overview
This document outlines the API endpoint requirements for handling profile picture uploads in the HR Management System.

---

## Endpoint Details

### Update Employee with Profile Picture
**Route:** `PUT /api/v1/hr/employees/:id`

**Purpose:** Update employee profile including name, email, phone, address, department, designation, and profile picture.

---

## Request Details

### Method
```
PUT
```

### URL
```
/api/v1/hr/employees/:id
```

### Headers
```
Authorization: Bearer <JWT_TOKEN>
Content-Type: multipart/form-data
```

### URL Parameters
| Parameter | Type | Description |
|-----------|------|-------------|
| id | string | Employee/User ID (required) |

### Body (Form Data)
| Field | Type | Description |
|-------|------|-------------|
| name | string | Employee full name |
| email | string | Employee email address |
| phone | string | Employee phone number |
| address | string | Employee address |
| department | string | Employee department |
| designation | string | Employee job designation/role |
| joiningDate | string | Employee joining date (YYYY-MM-DD format) |
| profilePicture | file | Profile picture image file (PNG, JPG, GIF) |
| avatar | file | Alternative field name for profile picture (for compatibility) |

---

## Request Example

### Using cURL
```bash
curl -X PUT http://localhost:3000/api/v1/hr/employees/USER_ID \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -F "name=Jainish Gamit" \
  -F "email=jainish@example.com" \
  -F "phone=9574981958" \
  -F "address=Mumbai, India" \
  -F "department=Developer" \
  -F "designation=Software Developer" \
  -F "joiningDate=2023-01-15" \
  -F "profilePicture=@/path/to/image.jpg"
```

### Using JavaScript (Fetch)
```javascript
const formData = new FormData();
formData.append('name', 'Jainish Gamit');
formData.append('email', 'jainish@example.com');
formData.append('phone', '9574981958');
formData.append('address', 'Mumbai, India');
formData.append('department', 'Developer');
formData.append('designation', 'Software Developer');
formData.append('joiningDate', '2023-01-15');
formData.append('profilePicture', fileObject); // File from input

const response = await fetch(`/api/v1/hr/employees/${userId}`, {
  method: 'PUT',
  headers: {
    'Authorization': `Bearer ${token}`
  },
  body: formData
});
```

### Using Node.js (Express with Multer)
```javascript
const multer = require('multer');
const path = require('path');

// Configure multer
const upload = multer({
  dest: 'uploads/profile-pictures/',
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only image files are allowed (jpeg, jpg, png, gif)'));
    }
  }
});

// Route handler
router.put('/employees/:id', upload.single('profilePicture'), async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, address, department, designation, joiningDate } = req.body;

    // Find employee
    const employee = await Employee.findById(id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    // Update basic fields
    if (name) employee.name = name;
    if (email) employee.email = email;
    if (phone) employee.phone = phone;
    if (address) employee.address = address;
    if (department) employee.department = department;
    if (designation) employee.designation = designation;
    if (joiningDate) employee.joiningDate = joiningDate;

    // Handle profile picture
    if (req.file) {
      // Delete old profile picture if exists
      if (employee.profilePicture && fs.existsSync(employee.profilePicture)) {
        fs.unlinkSync(employee.profilePicture);
      }

      // Save new profile picture path
      employee.profilePicture = req.file.path;
      // Or if storing in cloud storage (AWS S3, Cloudinary, etc.):
      // employee.profilePicture = `https://your-cdn.com/${req.file.filename}`;
    }

    await employee.save();

    res.status(200).json({
      success: true,
      message: 'Profile updated successfully',
      data: employee
    });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update profile',
      error: error.message
    });
  }
});
```

---

## Response Examples

### Success Response
```json
{
  "success": true,
  "message": "Profile updated successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "Jainish Gamit",
    "email": "jainish@example.com",
    "phone": "9574981958",
    "address": "Mumbai, India",
    "department": "Developer",
    "designation": "Software Developer",
    "joiningDate": "2023-01-15T00:00:00.000Z",
    "profilePicture": "uploads/profile-pictures/1620000000-profile.jpg",
    "avatar": "uploads/profile-pictures/1620000000-profile.jpg",
    "updatedAt": "2026-05-04T10:30:00.000Z"
  }
}
```

### Error Response
```json
{
  "success": false,
  "message": "Failed to update profile",
  "error": "File size exceeds 5MB limit"
}
```

---

## File Upload Specifications

### Supported Image Formats
- PNG (.png)
- JPEG (.jpg, .jpeg)
- GIF (.gif)
- WebP (.webp) - optional

### File Size Limit
- **Maximum Size:** 5 MB
- **Frontend Validation:** Already implemented in EditProfile.jsx
- **Backend Validation:** Should also validate

### Image Dimensions (Recommended)
- **Minimum:** 300x300 pixels
- **Recommended:** 500x500 pixels or larger
- **Aspect Ratio:** Square (1:1) is recommended

---

## Storage Options

### Option 1: Local File System
```javascript
// Store in local uploads folder
const uploadPath = `uploads/profile-pictures/${userId}_${Date.now()}.jpg`;
employee.profilePicture = uploadPath;
```

### Option 2: Cloud Storage (AWS S3)
```javascript
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const params = {
  Bucket: 'your-bucket-name',
  Key: `profile-pictures/${userId}/${filename}`,
  Body: req.file.buffer,
  ContentType: req.file.mimetype,
  ACL: 'public-read'
};

const result = await s3.upload(params).promise();
employee.profilePicture = result.Location; // URL from S3
```

### Option 3: Cloudinary
```javascript
const cloudinary = require('cloudinary').v2;

const result = await cloudinary.uploader.upload(req.file.path, {
  folder: `hrms/profile-pictures/${userId}`,
  resource_type: 'auto'
});

employee.profilePicture = result.secure_url;
```

---

## Employee Model Update

Update your Employee schema to include profile picture field:

```javascript
// models/Employee.js
const employeeSchema = new Schema({
  // ... existing fields ...
  
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: String,
  address: String,
  department: String,
  designation: String,
  joiningDate: Date,
  
  // NEW: Profile picture field
  profilePicture: {
    type: String,
    default: null,
    description: 'URL or path to profile picture'
  },
  
  // Alternative field name for compatibility
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

---

## Frontend Implementation Details

### Profile Picture Upload Validation
The frontend (EditProfile.jsx) already handles:
- ✅ File type validation (image files only)
- ✅ File size validation (max 5MB)
- ✅ Drag & drop support
- ✅ Image preview
- ✅ Remove/cancel functionality
- ✅ FormData creation and submission

### Image Preview in MyProfile.jsx
The profile page displays profile picture with fallback to initials:
```javascript
{profilePicturePreview ? (
  <img src={profilePicturePreview} alt="Profile" />
) : (
  <span className="text-4xl font-black">{initials}</span>
)}
```

---

## Security Considerations

1. **Authentication:** Always verify JWT token before allowing updates
2. **Authorization:** Ensure user can only update their own profile
3. **File Validation:** Validate file type and size on both frontend and backend
4. **Virus Scanning:** Consider implementing virus scanning for uploaded files
5. **CORS:** Set appropriate CORS headers if storing files on CDN
6. **Rate Limiting:** Implement rate limiting for file uploads
7. **Cleanup:** Delete old profile pictures when new ones are uploaded

---

## Error Handling

Common errors to handle:

| Error Code | Status | Message |
|-----------|--------|---------|
| 400 | Bad Request | Invalid file format |
| 400 | Bad Request | File size exceeds limit |
| 401 | Unauthorized | Authentication token missing/invalid |
| 403 | Forbidden | User cannot update this profile |
| 404 | Not Found | Employee not found |
| 500 | Server Error | Upload failed |

---

## Testing

### Using Postman
1. Set method to **PUT**
2. URL: `http://localhost:3000/api/v1/hr/employees/USER_ID`
3. Go to **Headers** tab, add:
   - Key: `Authorization`
   - Value: `Bearer YOUR_JWT_TOKEN`
4. Go to **Body** tab, select **form-data**
5. Add fields:
   - `name` (text)
   - `email` (text)
   - `phone` (text)
   - `profilePicture` (file) - Select image file
6. Click **Send**

---

## Implementation Checklist

- [ ] Add profile picture field to Employee schema
- [ ] Install and configure multer for file handling
- [ ] Create middleware for file upload validation
- [ ] Implement PUT endpoint with file upload support
- [ ] Add error handling for file upload failures
- [ ] Set up file storage (local/cloud)
- [ ] Add security validations (auth, authorization, file type)
- [ ] Test with various image sizes and formats
- [ ] Set up automatic cleanup of old profile pictures
- [ ] Document API endpoints in Postman collection
