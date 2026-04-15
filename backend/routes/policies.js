const express = require('express');
const { getPolicies, createPolicy, deletePolicy } = require('../controllers/policy');

const router = express.Router();
const { protect, authorize } = require('../middleware/auth');

router.get('/', protect, authorize('admin', 'Main Admin'), getPolicies);
router.post('/', protect, authorize('admin', 'Main Admin'), createPolicy);
router.delete('/:id', protect, authorize('admin', 'Main Admin'), deletePolicy);

module.exports = router;
