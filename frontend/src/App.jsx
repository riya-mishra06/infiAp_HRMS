import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './components/layout/DashboardLayout';
import Dashboard from './pages/hr-dashboard/Dashboard';
import EmployeeDirectory from './pages/hr-dashboard/employee-management/EmployeeDirectory';
import AddEmployee from './pages/hr-dashboard/employee-management/AddEmployee';
import EditEmployee from './pages/hr-dashboard/employee-management/EditEmployee';
import EmployeeProfiles from './pages/hr-dashboard/employee-management/EmployeeProfiles';
import EmployeeProfilesHub from './pages/hr-dashboard/employee-management/EmployeeProfilesHub';
import AttendanceDashboard from './pages/hr-dashboard/attendance-management/AttendanceDashboard';
import CheckInRecords from './pages/hr-dashboard/attendance-management/CheckInRecords';
import MonthlyAttendance from './pages/hr-dashboard/attendance-management/MonthlyAttendance';
import AttendanceReports from './pages/hr-dashboard/attendance-management/AttendanceReports';
import DailyAttendanceAudit from './pages/hr-dashboard/attendance-management/reports/DailyAttendanceAudit';
import LateArrivalDiagnostic from './pages/hr-dashboard/attendance-management/reports/LateArrivalDiagnostic';
import CorrectionWorkflow from './pages/hr-dashboard/attendance-management/CorrectionWorkflow';
import LeaveManagement from './pages/hr-dashboard/leave-management/LeaveManagement';
import LeaveRequests from './pages/hr-dashboard/leave-management/LeaveRequests';
import LeaveApproval from './pages/hr-dashboard/leave-management/LeaveApproval';
import LeaveHistory from './pages/hr-dashboard/leave-management/LeaveHistory';
import EmployeeLeaveProfile from './pages/hr-dashboard/leave-management/EmployeeLeaveProfile';
import PayrollManagement from './pages/hr-dashboard/payroll-management/PayrollManagement';
import PayrollOverview from './pages/hr-dashboard/payroll-management/PayrollOverview';
import SalaryProcessing from './pages/hr-dashboard/payroll-management/SalaryProcessing';
import PayslipManagement from './pages/hr-dashboard/payroll-management/PayslipManagement';
import RecruitmentManagement from './pages/hr-dashboard/recruitment-management/RecruitmentManagement';
import Candidates from './pages/hr-dashboard/recruitment/Candidates';
import Applications from './pages/hr-dashboard/recruitment/Applications';
import Interviews from './pages/hr-dashboard/recruitment/Interviews';
import InterviewFeedback from './pages/hr-dashboard/recruitment/InterviewFeedback';
import ScheduleInterview from './pages/hr-dashboard/recruitment/ScheduleInterview';
import CandidateProfile from './pages/hr-dashboard/recruitment/CandidateProfile';
import PerformanceManagement from './pages/hr-dashboard/performance-management/PerformanceManagement';
import MonthlyPerformance from './pages/hr-dashboard/performance-management/MonthlyPerformance';
import ManagerFeedback from './pages/hr-dashboard/performance-management/ManagerFeedback';
import PerformanceReports from './pages/hr-dashboard/performance-management/PerformanceReports';
import AnalyticsManagement from './pages/hr-dashboard/analytics-management/AnalyticsManagement';
import EmployeeReports from './pages/hr-dashboard/analytics-management/EmployeeReports';
import AttendanceAnalytics from './pages/hr-dashboard/analytics-management/AttendanceAnalytics';
import PerformanceInsights from './pages/hr-dashboard/analytics-management/PerformanceInsights';
import ResignationHub from './pages/hr-dashboard/resignation-management/ResignationHub';
import SubmitResignation from './pages/hr-dashboard/resignation-management/SubmitResignation';
import ResignationRequests from './pages/hr-dashboard/resignation-management/ResignationRequests';
import ExitProcess from './pages/hr-dashboard/resignation-management/ExitProcess';
import SplashScreen from './pages/auth/SplashScreen';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import TwoFactor from './pages/auth/TwoFactor';
import ResetPassword from './pages/auth/ResetPassword';
import Success from './pages/auth/Success';
import { EmployeeProvider } from './context/EmployeeContext';

// Placeholder components for Settings
const Placeholder = ({ title }) => (
  <div className="card-soft p-12 text-center mt-20">
    <div className="w-20 h-20 bg-slate-50 rounded-4xl flex items-center justify-center text-slate-300 mx-auto mb-8 shadow-inner border border-slate-100">
       <div className="w-10 h-10 border-4 border-slate-200 border-t-primary-500 rounded-full animate-spin"></div>
    </div>
    <h2 className="text-3xl font-black text-slate-800 mb-2 tracking-tight">{title} Module</h2>
    <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Final Optimization In Progress</p>
  </div>
);

function App() {
  return (
    <Router>
      <EmployeeProvider>
        <Routes>
          {/* 1. Cinematic Auth Flow */}
          <Route path="/" element={<Navigate to="/splash" replace />} />
          <Route path="/splash" element={<SplashScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/2fa" element={<TwoFactor />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/auth-success" element={<Success />} />

          {/* 2. Secure Dashboard Environment (Protected) */}
          <Route path="/*" element={
            <DashboardLayout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/departments" element={<Dashboard />} />
                <Route path="/employees" element={<EmployeeDirectory />} />
                <Route path="/employees/add" element={<AddEmployee />} />
                <Route path="/employees/profiles" element={<EmployeeProfilesHub />} />
                <Route path="/employees/edit/:id" element={<EditEmployee />} />
                <Route path="/employees/profile/:id" element={<EmployeeProfiles />} />
                
                {/* Attendance Module Suite */}
                <Route path="/attendance" element={<AttendanceDashboard />} />
                <Route path="/attendance/records" element={<CheckInRecords />} />
                <Route path="/attendance/monthly" element={<MonthlyAttendance />} />
                <Route path="/attendance-reports" element={<AttendanceReports />} />
                <Route path="/attendance-reports/daily" element={<DailyAttendanceAudit />} />
                <Route path="/attendance-reports/late" element={<LateArrivalDiagnostic />} />
                <Route path="/attendance-correction" element={<CorrectionWorkflow />} />
                
                <Route path="/leave" element={<LeaveManagement />} />
                <Route path="/leave/requests" element={<LeaveRequests />} />
                <Route path="/leave/approval" element={<LeaveApproval />} />
                <Route path="/leave/history" element={<LeaveHistory />} />
                <Route path="/leave/profile/:id" element={<EmployeeLeaveProfile />} />

                <Route path="/recruitment" element={<RecruitmentManagement />} />
                <Route path="/recruitment/candidates" element={<Candidates />} />
                <Route path="/recruitment/applications" element={<Applications />} />
                <Route path="/recruitment/interviews" element={<Interviews />} />
                <Route path="/recruitment/interviews/schedule" element={<ScheduleInterview />} />
                <Route path="/recruitment/interview/:id/feedback" element={<InterviewFeedback />} />
                <Route path="/recruitment/candidate/:id" element={<CandidateProfile />} />

                <Route path="/payroll" element={<PayrollManagement />} />
                <Route path="/payroll/overview" element={<PayrollOverview />} />
                <Route path="/payroll/salary" element={<SalaryProcessing />} />
                <Route path="/payroll/payslips" element={<PayslipManagement />} />

                <Route path="/performance" element={<PerformanceManagement />} />
                <Route path="/performance/monthly" element={<MonthlyPerformance />} />
                <Route path="/performance/feedback" element={<ManagerFeedback />} />
                <Route path="/performance/reports" element={<PerformanceReports />} />

                <Route path="/analytics" element={<AnalyticsManagement />} />
                <Route path="/analytics/employees" element={<EmployeeReports />} />
                <Route path="/analytics/attendance" element={<AttendanceAnalytics />} />
                <Route path="/analytics/performance" element={<PerformanceInsights />} />

                <Route path="/resignation" element={<ResignationHub />} />
                <Route path="/resignation/submit" element={<SubmitResignation />} />
                <Route path="/resignation/requests" element={<ResignationRequests />} />
                <Route path="/resignation/exit" element={<ExitProcess />} />

                <Route path="/settings" element={<Placeholder title="Settings" />} />
              </Routes>
            </DashboardLayout>
          } />
        </Routes>
      </EmployeeProvider>
    </Router>
  );
}

export default App;
