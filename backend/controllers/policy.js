const Policy = require('../models/Policy');

// @desc    Get all policies
// @route   GET /api/v1/policies
// @access  Private
exports.getPolicies = async (req, res, next) => {
    try {
        const policies = await Policy.find().sort('-createdAt');
        res.status(200).json({
            success: true,
            count: policies.length,
            data: policies
        });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Server Error' });
    }
};

// @desc    Create a policy
// @route   POST /api/v1/policies
// @access  Private/Admin
exports.createPolicy = async (req, res, next) => {
    try {
        const policy = await Policy.create(req.body);
        res.status(201).json({
            success: true,
            data: policy
        });
    } catch (err) {
        res.status(400).json({ success: false, error: err.message });
    }
};

// @desc    Delete a policy
// @route   DELETE /api/v1/policies/:id
// @access  Private/Admin
exports.deletePolicy = async (req, res, next) => {
    try {
        const policy = await Policy.findByIdAndDelete(req.params.id);
        if (!policy) {
            return res.status(404).json({ success: false, error: 'Policy not found' });
        }
        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        res.status(500).json({ success: false, error: 'Server Error' });
    }
};
