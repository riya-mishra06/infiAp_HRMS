const express = require('express');
const { 
    register, 
    login, 
    verifyTwoFactor,
    getMe,
    getUsers,
    deleteUser
} = require('../controllers/auth');

const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

router.post('/register', register);
router.post('/login', login);
router.post('/verify-2fa', verifyTwoFactor);
router.get('/me', protect, getMe);
router.get('/users', protect, authorize('admin', 'Main Admin'), getUsers);
router.delete('/users/:id', protect, authorize('admin', 'Main Admin'), deleteUser);

module.exports = router;
