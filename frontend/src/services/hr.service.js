import apiClient from "./apiClient";

export const hrService = {
  // --- Welcome / Profile ---
  getDashboardSummary: () =>
    apiClient.get("/hr/dashboard/summary").then(r => r.data),

  getProfile: () =>
    apiClient.get("/hr/profile").then(r => r.data),

  // --- Employees ---
  getEmployees: (params = {}) =>
    apiClient.get("/hr/employees", { params }).then(r => r.data),

  addEmployee: (data) =>
    apiClient.post("/hr/employees", data).then(r => r.data),

  updateEmployee: (id, data) =>
    apiClient.put(`/hr/employees/${id}`, data).then(r => r.data),

  getEmployeeProfile: (id) =>
    apiClient.get(`/hr/employees/${id}/profile`).then(r => r.data),

  // --- Attendance ---
  getAttendanceDailyOverview: (date) =>
    apiClient.get("/hr/attendance/daily-overview", { params: { date } }).then(r => r.data),

  getCheckInRecords: (params) =>
    apiClient.get("/hr/attendance/records", { params }).then(r => r.data),

  submitCorrectionRequest: (data) =>
    apiClient.post("/hr/attendance/correction/submit", data).then(r => r.data),

  getCorrectionRequests: (status) =>
    apiClient.get("/hr/attendance/correction/requests", { params: { status } }).then(r => r.data),

  reviewCorrectionRequest: (correctionId, status, remarks) =>
    apiClient.put("/hr/attendance/correction/review", {
      correctionId, status, reviewRemarks: remarks
    }).then(r => r.data),

  getAttendanceReports: (filter, department) =>
    apiClient.get("/hr/attendance/reports", { params: { filter, department } }).then(r => r.data),

  generateAttendanceReport: (startDate, endDate, department) =>
    apiClient.post("/hr/attendance/generate-report", {
      startDate, endDate, department
    }).then(r => r.data),

  // --- Leaves ---
  getLeaveStats: () =>
    apiClient.get("/hr/leaves/stats").then(r => r.data),

  getPendingLeaves: () =>
    apiClient.get("/hr/leaves/pending-detailed").then(r => r.data),

  getLeaveApplications: (status) =>
    apiClient.get("/hr/leaves/applications", { params: { status } }).then(r => r.data),

  approveLeave: (leaveId, status) =>
    apiClient.put("/hr/leaves/approve", { leaveId, status }).then(r => r.data),

  // --- Recruitment ---
  getRecruitmentDashboard: () =>
    apiClient.get("/hr/recruitment/dashboard").then(r => r.data),

  getCandidates: (status) =>
    apiClient.get("/hr/recruitment/candidates/tracking", { params: { status } }).then(r => r.data),

  getReviewApplications: () =>
    apiClient.get("/hr/recruitment/candidates/review").then(r => r.data),

  getCandidateProfile: (id) =>
    apiClient.get(`/hr/recruitment/candidates/${id}/profile`).then(r => r.data),

  shortlistCandidate: (id) =>
    apiClient.put(`/hr/recruitment/candidates/${id}/shortlist`).then(r => r.data),

  rejectCandidate: (id, reason) =>
    apiClient.put(`/hr/recruitment/candidates/${id}/reject`, { reason }).then(r => r.data),

  scheduleInterview: (id, date, interviewer) =>
    apiClient.put(`/hr/recruitment/candidates/${id}/schedule-interview`, {
      date, interviewer
    }).then(r => r.data),

  selectCandidate: (id) =>
    apiClient.put(`/hr/recruitment/candidates/${id}/select`).then(r => r.data),

  sendOfferLetter: (id) =>
    apiClient.post(`/hr/recruitment/candidates/${id}/offer`).then(r => r.data),

  // --- Performance ---
  getPerformanceDashboard: (month, year) =>
    apiClient.get("/hr/performance/dashboard", { params: { month, year } }).then(r => r.data),

  getPerformanceList: (month, department) =>
    apiClient.get("/hr/performance/list", { params: { month, department } }).then(r => r.data),

  addPerformanceFeedback: (data) =>
    apiClient.post("/hr/performance/feedback", data).then(r => r.data),

  // --- Finance ---
  getSalaryList: (month, year) =>
    apiClient.get("/hr/finance/salary-list", { params: { month, year } }).then(r => r.data),

  processSalary: (data) =>
    apiClient.post("/hr/finance/salary/process", data).then(r => r.data),

  getPayslip: (id) =>
    apiClient.get(`/hr/finance/payslip/${id}`).then(r => r.data),

  // --- Analytics ---
  getAnalyticsReport: () =>
    apiClient.get("/hr/analytics/report").then(r => r.data),

  getAttendanceAnalytics: (params) =>
    apiClient.get("/hr/analytics/attendance", { params }).then(r => r.data),

  getPerformanceAnalytics: (params) =>
    apiClient.get("/hr/analytics/performance", { params }).then(r => r.data),
};
