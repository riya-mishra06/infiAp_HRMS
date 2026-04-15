const express = require('express');
const {
    getJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
} = require('../controllers/jobs');

const router = express.Router();

const { protect, authorize } = require('../middleware/auth');

router
    .route('/')
    .get(getJobs)
    .post(protect, authorize('admin', 'hr'), createJob);

router
    .route('/:id')
    .get(getJob)
    .put(protect, authorize('admin', 'hr'), updateJob)
    .delete(protect, authorize('admin', 'hr'), deleteJob);

module.exports = router;
