const User = require('../models/User');
const ErrorResponse = require('../middleware/error');

const otpStore = new Map();
const OTP_TTL_MS = 5 * 60 * 1000;

const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

// @desc    Register user
// @route   POST /api/v1/auth/register
// @access  Public
exports.register = async (req, res, next) => {
    try {
        const { name, email, password, role } = req.body;

        const user = await User.create({
            name,
            email,
            password,
            role
        });

        sendTokenResponse(user, 200, res);
    } catch (err) {
        next(err);
    }
};

// @desc    Login user
// @route   POST /api/v1/auth/login
// @access  Public
exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        // Validate email & password
        if (!email || !password) {
            return res.status(400).json({ success: false, error: 'Please provide an email and password' });
        }

        // Check for user
        const user = await User.findOne({ email }).select('+password');

        if (!user) {
            return res.status(401).json({ success: false, error: 'Invalid credentials' });
        }

        // Check if password matches
        const isMatch = await user.matchPassword(password);

        if (!isMatch) {
            return res.status(401).json({ success: false, error: 'Invalid credentials' });
        }

        const userId = user._id.toString();
        const otp = process.env.NODE_ENV === 'production'
            ? generateOtp()
            : (process.env.DEV_2FA_OTP || '123456');

        otpStore.set(userId, {
            otp,
            expiresAt: Date.now() + OTP_TTL_MS
        });

        const response = {
            success: true,
            message: 'OTP sent successfully. Please verify 2FA to continue.',
            data: {
                userId,
                role: user.role,
                requires2FA: true,
                expiresInSeconds: Math.floor(OTP_TTL_MS / 1000)
            }
        };

        // Keep local/dev testing simple when no OTP provider is configured.
        if (process.env.NODE_ENV !== 'production') {
            response.devOtp = otp;
        }

        res.status(200).json(response);
    } catch (err) {
        next(err);
    }
};

// @desc    Verify login 2FA and issue token
// @route   POST /api/v1/auth/verify-2fa
// @access  Public
exports.verifyTwoFactor = async (req, res, next) => {
    try {
        const { userId, otp } = req.body;

        if (!userId || !otp) {
            return res.status(400).json({ success: false, error: 'Please provide userId and otp' });
        }

        const otpEntry = otpStore.get(userId);

        if (!otpEntry) {
            return res.status(400).json({ success: false, error: 'OTP not found. Please login again.' });
        }

        if (Date.now() > otpEntry.expiresAt) {
            otpStore.delete(userId);
            return res.status(400).json({ success: false, error: 'OTP expired. Please login again.' });
        }

        if (otpEntry.otp !== otp) {
            return res.status(400).json({ success: false, error: 'Invalid OTP' });
        }

        const user = await User.findById(userId);

        if (!user) {
            otpStore.delete(userId);
            return res.status(404).json({ success: false, error: 'User not found' });
        }

        otpStore.delete(userId);
        sendTokenResponse(user, 200, res);
    } catch (err) {
        next(err);
    }
};

// @desc    Get current logged in user
// @route   GET /api/v1/auth/me
// @access  Private
exports.getMe = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);

        res.status(200).json({
            success: true,
            data: user
        });
    } catch (err) {
        next(err);
    }
};

// @desc    Get all users
// @route   GET /api/v1/auth/users
// @access  Private/Admin
exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            data: users
        });
    } catch (err) {
        next(err);
    }
};

// @desc    Delete user
// @route   DELETE /api/v1/auth/users/:id
// @access  Private/Admin
exports.deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        next(err);
    }
};

// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
    // Create token
    const token = user.getSignedJwtToken();

    const options = {
        expires: new Date(
            Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    };

    if (process.env.NODE_ENV === 'production') {
        options.secure = true;
    }

    res
        .status(statusCode)
        .cookie('token', token, options)
        .json({
            success: true,
            token,
            data: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        });
};
