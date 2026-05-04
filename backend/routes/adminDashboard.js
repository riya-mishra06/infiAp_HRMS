const express = require('express');

const {
    getSummary,
    getInsights,
    getAnalyticsReport,
    getProfile,
    updateProfile,
    getAccountSettings,
    updatePersonalInformation,
    updateSecuritySettings,
    updatePassword,
    updateNotificationPreferences,
    getDepartments,
    getCreateDepartmentForm,
    createDepartment,
    getAddDepartmentEmployeeForm,
    addDepartmentEmployee,
    updateDepartment,
    deleteDepartment,
    getTeams,
    getTeamSummary,
    createTeam,
    updateTeam,
    deleteTeam,
    getPayrollDashboard,
    getSalaryStructure,
    createSalaryStructure,
    getJobs,
    getJobPostingForm,
    createJob,
    updateJob,
    deleteJob,
    getCandidates,
    getCandidateTracking,
    getInterviewManagement,
    updateCandidateStatus,
    scheduleInterview,
    getNotificationPanel,
    getNotifications,
    getRecentBroadcasts,
    getAnnouncementForm,
    createAnnouncement,
    editAnnouncement,
    resendAnnouncement,
    getDocuments,
    createDocument,
    deleteDocument,
    getSystemSettings,
    updateSystemSettings,
    getPendingLeaves,
    handleLeaveAction,
    getStaffDirectory,
    getHrStaff,
    updateHrPermissions,
    deleteHrUser,
    getRecentActivities,
    createActivity
} = require('../controllers/adminDashboard');

const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.use(protect, authorize('admin', 'Main Admin'));

// Summary and insights
router.get('/summary', getSummary);
router.get('/insights', getInsights);
router.get('/analytics/report', getAnalyticsReport);

// Profile and account settings
router.route('/profile').get(getProfile).patch(updateProfile);
router.get('/account-settings', getAccountSettings);
router.patch('/account-settings/personal-information', updatePersonalInformation);
router.patch('/account-settings/security', updateSecuritySettings);
router.patch('/account-settings/password', updatePassword);
router.patch('/account-settings/notifications', updateNotificationPreferences);

// Departments
router.route('/departments').get(getDepartments).post(createDepartment);
router.get('/departments/create/form', getCreateDepartmentForm);
router.get('/departments/add-employee/form', getAddDepartmentEmployeeForm);
router.post('/departments/add-employee', addDepartmentEmployee);
router.route('/departments/:id').patch(updateDepartment).delete(deleteDepartment);

// Teams
router.get('/teams', getTeams);
router.get('/teams/manage/summary', getTeamSummary);
router.post('/teams', createTeam);
router.route('/teams/:id').patch(updateTeam).delete(deleteTeam);

// Payroll
router.get('/payroll/dashboard', getPayrollDashboard);
router.get('/payroll/salary-structure', getSalaryStructure);
router.post('/payroll/salary-structure', createSalaryStructure);

// Recruitment
router.get('/jobs', getJobs);
router.get('/jobs/posting/form', getJobPostingForm);
router.post('/jobs', createJob);
router.patch('/jobs/:id', updateJob);
router.delete('/jobs/:id', deleteJob);

router.get('/candidates', getCandidates);
router.get('/candidates/tracking', getCandidateTracking);
router.get('/candidates/interview-management', getInterviewManagement);
router.patch('/candidates/:id/status', updateCandidateStatus);
router.post('/candidates/schedule-interview', scheduleInterview);

// Notifications
router.get('/notifications/panel', getNotificationPanel);
router.get('/notifications/recent-broadcasts', getRecentBroadcasts);
router.get('/notifications/create/form', getAnnouncementForm);
router.get('/notifications', getNotifications);
router.post('/notifications', createAnnouncement);
router.patch('/notifications/:id', editAnnouncement);
router.post('/notifications/:id/resend', resendAnnouncement);

// Documents and settings
router.get('/documents', getDocuments);
router.post('/documents', createDocument);
router.delete('/documents/:id', deleteDocument);
router.route('/settings').get(getSystemSettings).patch(updateSystemSettings);

// Leave management
router.get('/leaves/pending', getPendingLeaves);
router.post('/leaves/action', handleLeaveAction);

// HR management
router.get('/staff-directory', getStaffDirectory);
router.get('/hr-staff', getHrStaff);
router.patch('/hr-staff/permissions', updateHrPermissions);
router.delete('/hr-staff/:hrId', deleteHrUser);

// Activities
router.get('/activities', getRecentActivities);
router.post('/activities', createActivity);

module.exports = router;
