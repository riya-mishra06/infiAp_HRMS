const express = require('express');
const uploadProfilePicture = require('../middleware/hrUpload');
const {
    getDashboardSummary,
    getHrProfile,
    updateHrProfile,
    getHrEmployees,
    createHrEmployee,
    updateHrEmployee,
    getHrEmployeeProfile,
    getAttendanceDailyOverview,
    getAttendanceRecords,
    submitAttendanceCorrection,
    getAttendanceCorrectionRequests,
    reviewAttendanceCorrection,
    getAttendanceNotifications,
    getAttendanceReports,
    generateAttendanceReport,
    getLeaveStats,
    getPendingDetailedLeaves,
    getLeaveApplications,
    getTodayLeaves,
    getLeaveRequests,
    approveLeave,
    getLeaveHistory,
    generateLeaveReport,
    getCandidateTracking,
    getCandidateReview,
    getRecentCandidates,
    getCandidateProfile,
    scheduleCandidateInterview,
    shortlistCandidate,
    rejectCandidate,
    updateCandidateInterview,
    selectCandidate,
    sendCandidateOffer,
    getRecruitmentJobs,
    createRecruitmentJob,
    getPerformanceDashboard,
    getPerformanceList,
    getFeedbackStats,
    getRecentFeedback,
    getPerformanceReportSummary,
    getPerformanceReportTrends,
    generatePerformanceReport,
    submitPerformanceFeedback,
    getSalaryList,
    getPayroll,
    processSalary,
    getPayslip,
    createResignation,
    getResignationRegister,
    updateExitProcess,
    getAnalyticsReport,
    getAnalyticsAttendance,
    getAnalyticsPerformance
} = require('../controllers/hr');

const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.use(protect, authorize('hr', 'admin', 'Main Admin'));

router.get('/dashboard/summary', getDashboardSummary);
router.get('/profile', getHrProfile);
router.put('/profile', uploadProfilePicture.single('profilePicture'), updateHrProfile);

router.get('/employees', getHrEmployees);
router.post('/employees', createHrEmployee);
router.put('/employees/:id', uploadProfilePicture.single('profilePicture'), updateHrEmployee);
router.get('/employees/:id/profile', getHrEmployeeProfile);

router.get('/attendance/daily-overview', getAttendanceDailyOverview);
router.get('/attendance/records', getAttendanceRecords);
router.post('/attendance/correction/submit', submitAttendanceCorrection);
router.get('/attendance/correction/requests', getAttendanceCorrectionRequests);
router.put('/attendance/correction/review', reviewAttendanceCorrection);
router.get('/attendance/notifications', getAttendanceNotifications);
router.get('/attendance/reports', getAttendanceReports);
router.post('/attendance/generate-report', generateAttendanceReport);

router.get('/leaves/stats', getLeaveStats);
router.get('/leaves/pending-detailed', getPendingDetailedLeaves);
router.get('/leaves/applications', getLeaveApplications);
router.get('/leaves/today', getTodayLeaves);
router.get('/leaves/requests', getLeaveRequests);
router.put('/leaves/approve', approveLeave);
router.get('/leaves/history', getLeaveHistory);
router.post('/leaves/generate-report', generateLeaveReport);

router.get('/recruitment/candidates/tracking', getCandidateTracking);
router.get('/recruitment/candidates/review', getCandidateReview);
router.get('/recruitment/candidates/recent', getRecentCandidates);
router.get('/recruitment/candidates/:id/profile', getCandidateProfile);
router.put('/recruitment/candidates/:id/schedule-interview', scheduleCandidateInterview);
router.put('/recruitment/candidates/:id/shortlist', shortlistCandidate);
router.put('/recruitment/candidates/:id/reject', rejectCandidate);
router.put('/recruitment/candidates/:id/interview', updateCandidateInterview);
router.put('/recruitment/candidates/:id/select', selectCandidate);
router.post('/recruitment/candidates/:id/offer', sendCandidateOffer);

router.get('/recruitment/jobs', getRecruitmentJobs);
router.post('/recruitment/jobs', createRecruitmentJob);

router.get('/performance/dashboard', getPerformanceDashboard);
router.get('/performance/list', getPerformanceList);
router.get('/performance/feedback/stats', getFeedbackStats);
router.get('/performance/feedback/recent', getRecentFeedback);
router.get('/performance/report/summary', getPerformanceReportSummary);
router.get('/performance/report/trends', getPerformanceReportTrends);
router.post('/performance/report/generate', generatePerformanceReport);
router.post('/performance/feedback', submitPerformanceFeedback);

router.get('/finance/salary-list', getSalaryList);
router.get('/finance/payroll', getPayroll);
router.post('/finance/salary/process', processSalary);
router.get('/finance/payslip/:id', getPayslip);

router.post('/resignation', createResignation);
router.get('/resignation/register', getResignationRegister);
router.put('/resignation/exit-process', updateExitProcess);

router.get('/analytics/report', getAnalyticsReport);
router.get('/analytics/attendance', getAnalyticsAttendance);
router.get('/analytics/performance', getAnalyticsPerformance);

module.exports = router;
