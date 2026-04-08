import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import PayrollManagement from './pages/hr-dashboard/payroll-management/PayrollManagement';
import RecruitmentManagement from './pages/hr-dashboard/recruitment-management/RecruitmentManagement';
import PerformanceManagement from './pages/hr-dashboard/performance-management/PerformanceManagement';
import AnalyticsManagement from './pages/hr-dashboard/analytics-management/AnalyticsManagement';
import ResignationHub from './pages/hr-dashboard/resignation-management/ResignationHub';
import { EmployeeProvider } from './context/EmployeeContext';

// Placeholder components for Settings
const Placeholder = ({ title }) => (
  <div className="card-soft p-12 text-center mt-20">
    <div className="w-20 h-20 bg-slate-50 rounded-[32px] flex items-center justify-center text-slate-300 mx-auto mb-8 shadow-inner border border-slate-100">
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
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
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
            <Route path="/leave/requests" element={<Placeholder title="Leave Requests" />} />
            <Route path="/leave/approval" element={<Placeholder title="Leave Approval" />} />
            <Route path="/leave/history" element={<Placeholder title="Leave History" />} />

            <Route path="/recruitment" element={<RecruitmentManagement />} />
            <Route path="/recruitment/candidates" element={<Placeholder title="Candidates" />} />
            <Route path="/recruitment/applications" element={<Placeholder title="Hiring Applications" />} />
            <Route path="/recruitment/interviews" element={<Placeholder title="Interview Scheduling" />} />

            <Route path="/payroll" element={<PayrollManagement />} />
            <Route path="/payroll/overview" element={<Placeholder title="Payroll Overview" />} />
            <Route path="/payroll/salary" element={<Placeholder title="Salary Processing" />} />
            <Route path="/payroll/payslips" element={<Placeholder title="Payslip Management" />} />

            <Route path="/performance" element={<PerformanceManagement />} />
            <Route path="/performance/monthly" element={<Placeholder title="Monthly Performance" />} />
            <Route path="/performance/feedback" element={<Placeholder title="Manager Feedback" />} />
            <Route path="/performance/reports" element={<Placeholder title="Performance Reports" />} />

            <Route path="/analytics" element={<AnalyticsManagement />} />
            <Route path="/analytics/employees" element={<Placeholder title="Employee Reports" />} />
            <Route path="/analytics/attendance" element={<Placeholder title="Attendance Analytics" />} />
            <Route path="/analytics/performance" element={<Placeholder title="Performance Insights" />} />

            <Route path="/resignation" element={<ResignationHub />} />
            <Route path="/resignation/submit" element={<Placeholder title="Submit Resignation" />} />
            <Route path="/resignation/requests" element={<Placeholder title="Resignation Requests" />} />
            <Route path="/resignation/exit" element={<Placeholder title="Exit Process" />} />

            <Route path="/settings" element={<Placeholder title="Settings" />} />
          </Routes>
        </DashboardLayout>
      </EmployeeProvider>
    </Router>
  );
}

export default App;
