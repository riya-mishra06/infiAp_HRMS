const Employee = require('../models/Employee');
const Job = require('../models/Job');

let attendanceCorrections = [];
let leaveApplications = [
    {
        id: 'leave_1001',
        employeeId: 'EMP001',
        employeeName: 'Aarav Shah',
        department: 'Engineering',
        fromDate: '2026-04-16',
        toDate: '2026-04-17',
        days: 2,
        type: 'Sick Leave',
        reason: 'Fever',
        status: 'Pending',
        requestedAt: '2026-04-15T10:00:00.000Z'
    },
    {
        id: 'leave_1002',
        employeeId: 'EMP002',
        employeeName: 'Nisha Rao',
        department: 'HR',
        fromDate: '2026-04-10',
        toDate: '2026-04-10',
        days: 1,
        type: 'Casual Leave',
        reason: 'Personal work',
        status: 'Approved',
        requestedAt: '2026-04-08T09:00:00.000Z'
    },
    {
        id: 'leave_1003',
        employeeId: 'EMP003',
        employeeName: 'Ritika Sen',
        department: 'Finance',
        fromDate: '2026-04-12',
        toDate: '2026-04-13',
        days: 2,
        type: 'Earned Leave',
        reason: 'Family event',
        status: 'Rejected',
        requestedAt: '2026-04-07T11:30:00.000Z'
    }
];

let candidates = [
    {
        id: 'cand_001',
        name: 'Jane Doe',
        email: 'jane@example.com',
        department: 'Engineering',
        jobTitle: 'Frontend Developer',
        stage: 'Screening',
        status: 'In Review',
        appliedOn: '2026-04-10',
        updatedAt: '2026-04-15T12:00:00.000Z'
    },
    {
        id: 'cand_002',
        name: 'Rahul Verma',
        email: 'rahul@example.com',
        department: 'Engineering',
        jobTitle: 'Backend Developer',
        stage: 'Interview',
        status: 'Shortlisted',
        appliedOn: '2026-04-09',
        updatedAt: '2026-04-16T09:15:00.000Z'
    },
    {
        id: 'cand_003',
        name: 'Megha Iyer',
        email: 'megha@example.com',
        department: 'HR',
        jobTitle: 'HR Executive',
        stage: 'Offer',
        status: 'Selected',
        appliedOn: '2026-04-05',
        updatedAt: '2026-04-14T16:20:00.000Z'
    }
];

let performanceRecords = [
    {
        id: 'perf_001',
        employeeId: 'EMP001',
        employeeName: 'Aarav Shah',
        department: 'Engineering',
        rating: 4.3,
        period: 'Q1-2026',
        status: 'Reviewed',
        feedbackCount: 2,
        updatedAt: '2026-04-14T10:00:00.000Z'
    },
    {
        id: 'perf_002',
        employeeId: 'EMP002',
        employeeName: 'Nisha Rao',
        department: 'HR',
        rating: 4.1,
        period: 'Q1-2026',
        status: 'Pending',
        feedbackCount: 1,
        updatedAt: '2026-04-13T11:00:00.000Z'
    }
];

let performanceFeedback = [
    {
        id: 'fb_001',
        employeeId: 'EMP001',
        rating: 4,
        comment: 'Strong ownership in sprint delivery.',
        createdAt: '2026-04-15T08:45:00.000Z'
    },
    {
        id: 'fb_002',
        employeeId: 'EMP002',
        rating: 5,
        comment: 'Excellent cross-team collaboration.',
        createdAt: '2026-04-13T10:30:00.000Z'
    }
];

let payrollRecords = [
    {
        id: 'pay_001',
        userId: 'EMP001',
        month: 'April',
        year: 2026,
        basicSalary: 50000,
        bonus: 2000,
        deductions: 500,
        netSalary: 51500,
        status: 'Processed',
        updatedAt: '2026-04-16T09:00:00.000Z'
    },
    {
        id: 'pay_002',
        userId: 'EMP002',
        month: 'April',
        year: 2026,
        basicSalary: 55000,
        bonus: 1500,
        deductions: 1000,
        netSalary: 55500,
        status: 'Processed',
        updatedAt: '2026-04-16T09:05:00.000Z'
    }
];

let resignations = [
    {
        id: 'res_001',
        userId: 'EMP020',
        employeeName: 'Karan Malhotra',
        department: 'Engineering',
        noticePeriodEnd: '2026-05-10',
        reason: 'Higher studies',
        status: 'In Progress',
        createdAt: '2026-04-01T08:00:00.000Z'
    }
];

const attendanceRecords = [
    {
        id: 'att_001',
        employeeId: 'EMP001',
        employeeName: 'Aarav Shah',
        department: 'Engineering',
        date: '2026-04-16',
        status: 'Present',
        checkIn: '09:05',
        checkOut: '18:07'
    },
    {
        id: 'att_002',
        employeeId: 'EMP002',
        employeeName: 'Nisha Rao',
        department: 'HR',
        date: '2026-04-16',
        status: 'Late',
        checkIn: '09:40',
        checkOut: '18:15'
    },
    {
        id: 'att_003',
        employeeId: 'EMP003',
        employeeName: 'Ritika Sen',
        department: 'Finance',
        date: '2026-04-16',
        status: 'Absent',
        checkIn: null,
        checkOut: null
    }
];

const toInt = (value, defaultValue) => {
    const parsed = Number.parseInt(value, 10);
    return Number.isNaN(parsed) || parsed <= 0 ? defaultValue : parsed;
};

const formatDate = (value) => {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return null;
    }
    return date.toISOString().slice(0, 10);
};

const applyCommonFilters = (items, query, dateFields = ['date']) => {
    const statusFilter = query.status ? query.status.toLowerCase() : null;
    const deptFilter = query.department ? query.department.toLowerCase() : null;
    const dateFilter = query.date ? formatDate(query.date) : null;

    return items.filter((item) => {
        const statusMatch = !statusFilter || (item.status && item.status.toLowerCase() === statusFilter);
        const deptMatch = !deptFilter || (item.department && item.department.toLowerCase() === deptFilter);

        let dateMatch = true;
        if (dateFilter) {
            dateMatch = dateFields.some((key) => {
                if (!item[key]) {
                    return false;
                }
                const itemDate = formatDate(item[key]);
                return itemDate === dateFilter;
            });
        }

        return statusMatch && deptMatch && dateMatch;
    });
};

const paginate = (items, query) => {
    const page = toInt(query.page, 1);
    const limit = toInt(query.limit, 20);
    const total = items.length;
    const pages = Math.max(1, Math.ceil(total / limit));
    const start = (page - 1) * limit;
    const data = items.slice(start, start + limit);

    return {
        data,
        meta: {
            page,
            limit,
            total,
            pages
        }
    };
};

const sendList = (res, items, query, dateFields) => {
    const filtered = applyCommonFilters(items, query, dateFields);
    const { data, meta } = paginate(filtered, query);

    return res.status(200).json({
        success: true,
        ...meta,
        count: data.length,
        data
    });
};

const mapEmployeeCreatePayload = (body) => ({
    employeeId: body.employeeId,
    name: body.name,
    email: body.email,
    phone: body.phone,
    department: body.department,
    role: body.designation || body.role || 'Employee',
    manager: body.reportingManager || body.manager,
    joiningDate: body.joiningDate || new Date(),
    salary: body.annualSalary ?? body.salary,
    status: body.status || 'Active',
    user: body.userId
});

const mapEmployeeUpdatePayload = (body) => {
    const updates = {};

    if (body.name !== undefined) updates.name = body.name;
    if (body.email !== undefined) updates.email = body.email;
    if (body.phone !== undefined) updates.phone = body.phone;
    if (body.department !== undefined) updates.department = body.department;
    if (body.designation !== undefined) updates.role = body.designation;
    if (body.role !== undefined) updates.role = body.role;
    if (body.reportingManager !== undefined) updates.manager = body.reportingManager;
    if (body.manager !== undefined) updates.manager = body.manager;
    if (body.joiningDate !== undefined) updates.joiningDate = body.joiningDate;
    if (body.annualSalary !== undefined) updates.salary = body.annualSalary;
    if (body.salary !== undefined) updates.salary = body.salary;
    if (body.status !== undefined) updates.status = body.status;

    return updates;
};

const findCandidate = (id) => candidates.find((candidate) => candidate.id === id);

const updateCandidate = (id, changes) => {
    candidates = candidates.map((candidate) => {
        if (candidate.id !== id) {
            return candidate;
        }

        return {
            ...candidate,
            ...changes,
            updatedAt: new Date().toISOString()
        };
    });

    return findCandidate(id);
};

// GET /api/v1/hr/dashboard/summary
exports.getDashboardSummary = async (req, res, next) => {
    try {
        const [employeeCount, openJobs] = await Promise.all([
            Employee.countDocuments(),
            Job.countDocuments({ status: 'Open' })
        ]);

        const leavePending = leaveApplications.filter((leave) => leave.status === 'Pending').length;
        const resignationOpen = resignations.filter((item) => item.status !== 'Completed').length;
        
        const presentCount = attendanceRecords.filter((record) => record.status === 'Present' && record.date === new Date().toISOString().slice(0, 10)).length;

        res.status(200).json({
            success: true,
            data: {
                totalEmployees: employeeCount,
                presentCount: presentCount || attendanceRecords.length,
                isHoliday: false,
                holidayDetails: null,
                greeting: "Welcome to HR Dashboard",
                // legacy fields just in case
                employees: employeeCount,
                openJobs,
                attendanceToday: attendanceRecords.length,
                leavePending,
                resignationOpen
            }
        });
    } catch (err) {
        next(err);
    }
};

// GET /api/v1/hr/profile
exports.getHrProfile = async (req, res) => {
    try {
        const User = require('../models/User');
        const user = await User.findById(req.user._id);
        
        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.status(200).json({
            success: true,
            data: {
                header: {
                    profileImage: user.profileImage || null,
                    name: user.name,
                    post: user.designation || 'HR Administrator',
                    hrId: user.employeeId || 'HR001'
                },
                personalInfo: {
                    fullName: user.name,
                    joiningDate: user.joiningDate,
                    phoneNumber: user.phone || 'N/A',
                    emailId: user.email
                },
                administrativeAccess: {
                    accessLevel: user.role,
                    complianceStatus: user.complianceStatus || 'Compliant'
                }
            }
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// PUT /api/v1/hr/profile
exports.updateHrProfile = async (req, res) => {
    try {
        const User = require('../models/User');
        
        const updates = {};
        if (req.body.name) updates.name = req.body.name;
        if (req.body.phone) updates.phone = req.body.phone;
        if (req.body.designation) updates.designation = req.body.designation;
        if (req.file) {
            updates.profileImage = `/uploads/profile-pictures/${req.file.filename}`;
        }
        
        const user = await User.findByIdAndUpdate(req.user._id, updates, { new: true });
        
        res.status(200).json({
            success: true,
            data: user,
            message: "Profile updated successfully"
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

// GET /api/v1/hr/employees
exports.getHrEmployees = async (req, res, next) => {
    try {
        const page = toInt(req.query.page, 1);
        const limit = toInt(req.query.limit, 20);
        const query = {};

        if (req.query.status) {
            query.status = req.query.status;
        }
        if (req.query.department) {
            query.department = req.query.department;
        }

        const [employees, total] = await Promise.all([
            Employee.find(query)
                .sort({ createdAt: -1 })
                .skip((page - 1) * limit)
                .limit(limit),
            Employee.countDocuments(query)
        ]);

        res.status(200).json({
            success: true,
            page,
            limit,
            total,
            pages: Math.max(1, Math.ceil(total / limit)),
            count: employees.length,
            data: employees
        });
    } catch (err) {
        next(err);
    }
};

// POST /api/v1/hr/employees
exports.createHrEmployee = async (req, res, next) => {
    try {
        const employee = await Employee.create(mapEmployeeCreatePayload(req.body));

        res.status(201).json({
            success: true,
            data: employee
        });
    } catch (err) {
        next(err);
    }
};

// PUT /api/v1/hr/employees/:id
exports.updateHrEmployee = async (req, res, next) => {
    try {
        const updates = mapEmployeeUpdatePayload(req.body);

        if (req.file) {
            const profilePicturePath = `/uploads/profile-pictures/${req.file.filename}`;
            updates.profilePicture = profilePicturePath;
            updates.avatar = profilePicturePath;
        }

        const employee = await Employee.findByIdAndUpdate(req.params.id, updates, {
            new: true,
            runValidators: true
        });

        if (!employee) {
            return res.status(404).json({ success: false, error: `Employee not found with id of ${req.params.id}` });
        }

        res.status(200).json({
            success: true,
            data: employee
        });
    } catch (err) {
        next(err);
    }
};

// GET /api/v1/hr/employees/:id/profile
exports.getHrEmployeeProfile = async (req, res, next) => {
    try {
        const employee = await Employee.findById(req.params.id);

        if (!employee) {
            return res.status(404).json({ success: false, error: `Employee not found with id of ${req.params.id}` });
        }

        res.status(200).json({
            success: true,
            data: employee
        });
    } catch (err) {
        next(err);
    }
};

// GET /api/v1/hr/attendance/daily-overview
exports.getAttendanceDailyOverview = (req, res) => {
    const requestedDate = formatDate(req.query.date) || formatDate(new Date());
    const dayRecords = attendanceRecords.filter((record) => formatDate(record.date) === requestedDate);

    const present = dayRecords.filter((record) => record.status === 'Present').length;
    const late = dayRecords.filter((record) => record.status === 'Late').length;
    const absent = dayRecords.filter((record) => record.status === 'Absent').length;

    res.status(200).json({
        success: true,
        data: {
            date: requestedDate,
            total: dayRecords.length,
            present,
            late,
            absent
        }
    });
};

// GET /api/v1/hr/attendance/records
exports.getAttendanceRecords = (req, res) => sendList(res, attendanceRecords, req.query, ['date']);

// POST /api/v1/hr/attendance/correction/submit
exports.submitAttendanceCorrection = (req, res) => {
    const correction = {
        id: `corr_${Date.now()}`,
        employeeId: req.body.employeeId,
        employeeName: req.body.employeeName || 'Unknown',
        department: req.body.department || 'General',
        date: req.body.date,
        reason: req.body.reason,
        status: 'Pending',
        submittedAt: new Date().toISOString()
    };

    attendanceCorrections.push(correction);

    res.status(201).json({
        success: true,
        data: correction
    });
};

// GET /api/v1/hr/attendance/correction/requests
exports.getAttendanceCorrectionRequests = (req, res) => {
    sendList(res, attendanceCorrections, req.query, ['date', 'submittedAt']);
};

// PUT /api/v1/hr/attendance/correction/review
exports.reviewAttendanceCorrection = (req, res) => {
    const { correctionId, status, reviewNote } = req.body;

    const correction = attendanceCorrections.find((item) => item.id === correctionId);
    if (!correction) {
        return res.status(404).json({ success: false, error: 'Correction request not found' });
    }

    correction.status = status || correction.status;
    correction.reviewNote = reviewNote || correction.reviewNote;
    correction.reviewedAt = new Date().toISOString();

    res.status(200).json({
        success: true,
        data: correction
    });
};

// GET /api/v1/hr/attendance/notifications
exports.getAttendanceNotifications = (req, res) => {
    const pendingCorrections = attendanceCorrections.filter((item) => item.status === 'Pending').length;
    const lateCount = attendanceRecords.filter((item) => item.status === 'Late').length;

    res.status(200).json({
        success: true,
        data: {
            pendingCorrections,
            lateCount,
            generatedAt: new Date().toISOString()
        }
    });
};

// GET /api/v1/hr/attendance/reports
exports.getAttendanceReports = (req, res) => {
    const groupedByDepartment = attendanceRecords.reduce((acc, item) => {
        if (!acc[item.department]) {
            acc[item.department] = { total: 0, present: 0, late: 0, absent: 0 };
        }

        acc[item.department].total += 1;
        if (item.status === 'Present') acc[item.department].present += 1;
        if (item.status === 'Late') acc[item.department].late += 1;
        if (item.status === 'Absent') acc[item.department].absent += 1;
        return acc;
    }, {});

    res.status(200).json({
        success: true,
        data: groupedByDepartment
    });
};

// POST /api/v1/hr/attendance/generate-report
exports.generateAttendanceReport = (req, res) => {
    res.status(201).json({
        success: true,
        data: {
            reportId: `att_report_${Date.now()}`,
            requestedAt: new Date().toISOString(),
            filters: req.body || {},
            status: 'Queued'
        }
    });
};

// GET /api/v1/hr/leaves/stats
exports.getLeaveStats = (req, res) => {
    const pending = leaveApplications.filter((item) => item.status === 'Pending').length;
    const approved = leaveApplications.filter((item) => item.status === 'Approved').length;
    const rejected = leaveApplications.filter((item) => item.status === 'Rejected').length;

    res.status(200).json({
        success: true,
        data: {
            total: leaveApplications.length,
            pending,
            approved,
            rejected
        }
    });
};

// GET /api/v1/hr/leaves/pending-detailed
exports.getPendingDetailedLeaves = (req, res) => {
    const pending = leaveApplications.filter((item) => item.status === 'Pending');
    sendList(res, pending, req.query, ['fromDate', 'toDate', 'requestedAt']);
};

// GET /api/v1/hr/leaves/applications
exports.getLeaveApplications = (req, res) => {
    sendList(res, leaveApplications, req.query, ['fromDate', 'toDate', 'requestedAt']);
};

// GET /api/v1/hr/leaves/today
exports.getTodayLeaves = (req, res) => {
    const today = formatDate(req.query.date || new Date());
    const todayLeaves = leaveApplications.filter((leave) => {
        const fromDate = formatDate(leave.fromDate);
        const toDate = formatDate(leave.toDate);
        return fromDate <= today && toDate >= today;
    });

    res.status(200).json({
        success: true,
        count: todayLeaves.length,
        data: todayLeaves
    });
};

// GET /api/v1/hr/leaves/requests
exports.getLeaveRequests = (req, res) => {
    sendList(res, leaveApplications, req.query, ['requestedAt', 'fromDate', 'toDate']);
};

// PUT /api/v1/hr/leaves/approve
exports.approveLeave = (req, res) => {
    const { leaveId, status, reviewNote } = req.body;

    const leave = leaveApplications.find((item) => item.id === leaveId);
    if (!leave) {
        return res.status(404).json({ success: false, error: 'Leave request not found' });
    }

    leave.status = status || leave.status;
    leave.reviewNote = reviewNote || leave.reviewNote;
    leave.reviewedAt = new Date().toISOString();

    res.status(200).json({
        success: true,
        data: leave
    });
};

// GET /api/v1/hr/leaves/history
exports.getLeaveHistory = (req, res) => {
    const history = leaveApplications.filter((item) => item.status !== 'Pending');
    sendList(res, history, req.query, ['requestedAt', 'fromDate', 'toDate']);
};

// POST /api/v1/hr/leaves/generate-report
exports.generateLeaveReport = (req, res) => {
    res.status(201).json({
        success: true,
        data: {
            reportId: `leave_report_${Date.now()}`,
            requestedAt: new Date().toISOString(),
            filters: req.body || {},
            status: 'Queued'
        }
    });
};

// GET /api/v1/hr/recruitment/candidates/tracking
exports.getCandidateTracking = (req, res) => {
    sendList(res, candidates, req.query, ['appliedOn', 'updatedAt']);
};

// GET /api/v1/hr/recruitment/candidates/review
exports.getCandidateReview = (req, res) => {
    const reviewList = candidates.filter((candidate) => candidate.status === 'In Review' || candidate.status === 'Shortlisted');
    sendList(res, reviewList, req.query, ['updatedAt']);
};

// GET /api/v1/hr/recruitment/candidates/recent
exports.getRecentCandidates = (req, res) => {
    const recent = [...candidates].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
    sendList(res, recent, req.query, ['updatedAt', 'appliedOn']);
};

// GET /api/v1/hr/recruitment/candidates/:id/profile
exports.getCandidateProfile = (req, res) => {
    const candidate = findCandidate(req.params.id);
    if (!candidate) {
        return res.status(404).json({ success: false, error: 'Candidate not found' });
    }

    return res.status(200).json({
        success: true,
        data: candidate
    });
};

// PUT /api/v1/hr/recruitment/candidates/:id/schedule-interview
exports.scheduleCandidateInterview = (req, res) => {
    const candidate = updateCandidate(req.params.id, {
        stage: 'Interview Scheduled',
        status: 'Interview Scheduled',
        interview: {
            interviewDate: req.body.interviewDate,
            interviewer: req.body.interviewer,
            mode: req.body.mode || 'Online'
        }
    });

    if (!candidate) {
        return res.status(404).json({ success: false, error: 'Candidate not found' });
    }

    return res.status(200).json({ success: true, data: candidate });
};

// PUT /api/v1/hr/recruitment/candidates/:id/shortlist
exports.shortlistCandidate = (req, res) => {
    const candidate = updateCandidate(req.params.id, {
        stage: 'Shortlisted',
        status: 'Shortlisted'
    });

    if (!candidate) {
        return res.status(404).json({ success: false, error: 'Candidate not found' });
    }

    return res.status(200).json({ success: true, data: candidate });
};

// PUT /api/v1/hr/recruitment/candidates/:id/reject
exports.rejectCandidate = (req, res) => {
    const candidate = updateCandidate(req.params.id, {
        stage: 'Rejected',
        status: 'Rejected',
        rejectionReason: req.body.reason || 'Not specified'
    });

    if (!candidate) {
        return res.status(404).json({ success: false, error: 'Candidate not found' });
    }

    return res.status(200).json({ success: true, data: candidate });
};

// PUT /api/v1/hr/recruitment/candidates/:id/interview
exports.updateCandidateInterview = (req, res) => {
    const candidate = updateCandidate(req.params.id, {
        stage: 'Interview',
        status: req.body.status || 'Interview Completed',
        interviewFeedback: req.body.feedback || null,
        interviewScore: req.body.score || null
    });

    if (!candidate) {
        return res.status(404).json({ success: false, error: 'Candidate not found' });
    }

    return res.status(200).json({ success: true, data: candidate });
};

// PUT /api/v1/hr/recruitment/candidates/:id/select
exports.selectCandidate = (req, res) => {
    const candidate = updateCandidate(req.params.id, {
        stage: 'Selected',
        status: 'Selected'
    });

    if (!candidate) {
        return res.status(404).json({ success: false, error: 'Candidate not found' });
    }

    return res.status(200).json({ success: true, data: candidate });
};

// POST /api/v1/hr/recruitment/candidates/:id/offer
exports.sendCandidateOffer = (req, res) => {
    const candidate = updateCandidate(req.params.id, {
        stage: 'Offer Sent',
        status: 'Offer Sent',
        offer: {
            salary: req.body.salary,
            joiningDate: req.body.joiningDate,
            notes: req.body.notes || ''
        }
    });

    if (!candidate) {
        return res.status(404).json({ success: false, error: 'Candidate not found' });
    }

    return res.status(201).json({ success: true, data: candidate });
};

// GET /api/v1/hr/recruitment/jobs
exports.getRecruitmentJobs = async (req, res, next) => {
    try {
        const page = toInt(req.query.page, 1);
        const limit = toInt(req.query.limit, 20);
        const query = {};

        if (req.query.status) {
            query.status = req.query.status;
        }
        if (req.query.department) {
            query.department = req.query.department;
        }

        const [jobs, total] = await Promise.all([
            Job.find(query)
                .sort({ createdAt: -1 })
                .skip((page - 1) * limit)
                .limit(limit),
            Job.countDocuments(query)
        ]);

        res.status(200).json({
            success: true,
            page,
            limit,
            total,
            pages: Math.max(1, Math.ceil(total / limit)),
            count: jobs.length,
            data: jobs
        });
    } catch (err) {
        next(err);
    }
};

// POST /api/v1/hr/recruitment/jobs
exports.createRecruitmentJob = async (req, res, next) => {
    try {
        const payload = {
            title: req.body.title || req.body.designation,
            department: req.body.department,
            type: req.body.type || req.body.employmentType || 'Full-time',
            description: req.body.description || 'Not provided',
            experience: req.body.experience || '0-2 years',
            location: req.body.location || 'Remote',
            deadline: req.body.deadline,
            skills: req.body.skills || [],
            status: req.body.status || 'Open'
        };

        const job = await Job.create(payload);

        res.status(201).json({
            success: true,
            data: job
        });
    } catch (err) {
        next(err);
    }
};

// GET /api/v1/hr/performance/dashboard
exports.getPerformanceDashboard = (req, res) => {
    const reviewed = performanceRecords.filter((item) => item.status === 'Reviewed').length;
    const pending = performanceRecords.filter((item) => item.status === 'Pending').length;

    res.status(200).json({
        success: true,
        data: {
            total: performanceRecords.length,
            reviewed,
            pending,
            averageRating: performanceRecords.length
                ? Number((performanceRecords.reduce((sum, item) => sum + item.rating, 0) / performanceRecords.length).toFixed(2))
                : 0
        }
    });
};

// GET /api/v1/hr/performance/list
exports.getPerformanceList = (req, res) => {
    sendList(res, performanceRecords, req.query, ['updatedAt']);
};

// GET /api/v1/hr/performance/feedback/stats
exports.getFeedbackStats = (req, res) => {
    const total = performanceFeedback.length;
    const averageRating = total
        ? Number((performanceFeedback.reduce((sum, item) => sum + item.rating, 0) / total).toFixed(2))
        : 0;

    res.status(200).json({
        success: true,
        data: {
            total,
            averageRating
        }
    });
};

// GET /api/v1/hr/performance/feedback/recent
exports.getRecentFeedback = (req, res) => {
    const recent = [...performanceFeedback].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    sendList(res, recent, req.query, ['createdAt']);
};

// GET /api/v1/hr/performance/report/summary
exports.getPerformanceReportSummary = (req, res) => {
    res.status(200).json({
        success: true,
        data: {
            generatedAt: new Date().toISOString(),
            totalEmployeesReviewed: performanceRecords.length,
            averageRating: performanceRecords.length
                ? Number((performanceRecords.reduce((sum, item) => sum + item.rating, 0) / performanceRecords.length).toFixed(2))
                : 0
        }
    });
};

// GET /api/v1/hr/performance/report/trends
exports.getPerformanceReportTrends = (req, res) => {
    res.status(200).json({
        success: true,
        data: [
            { month: 'Jan', averageRating: 4.0 },
            { month: 'Feb', averageRating: 4.1 },
            { month: 'Mar', averageRating: 4.2 },
            { month: 'Apr', averageRating: 4.3 }
        ]
    });
};

// POST /api/v1/hr/performance/report/generate
exports.generatePerformanceReport = (req, res) => {
    res.status(201).json({
        success: true,
        data: {
            reportId: `perf_report_${Date.now()}`,
            requestedAt: new Date().toISOString(),
            filters: req.body || {},
            status: 'Queued'
        }
    });
};

// POST /api/v1/hr/performance/feedback
exports.submitPerformanceFeedback = (req, res) => {
    const feedback = {
        id: `fb_${Date.now()}`,
        employeeId: req.body.employeeId,
        rating: req.body.rating,
        comment: req.body.comment || '',
        createdAt: new Date().toISOString()
    };

    performanceFeedback.push(feedback);

    const recordIndex = performanceRecords.findIndex((item) => item.employeeId === req.body.employeeId);
    if (recordIndex >= 0) {
        performanceRecords[recordIndex].feedbackCount += 1;
        performanceRecords[recordIndex].updatedAt = new Date().toISOString();
    }

    res.status(201).json({
        success: true,
        data: feedback
    });
};

// GET /api/v1/hr/finance/salary-list
exports.getSalaryList = (req, res) => {
    sendList(res, payrollRecords, req.query, ['updatedAt']);
};

// GET /api/v1/hr/finance/payroll
exports.getPayroll = (req, res) => {
    const totalPayout = payrollRecords.reduce((sum, item) => sum + item.netSalary, 0);
    const filtered = applyCommonFilters(payrollRecords, req.query, ['updatedAt']);

    res.status(200).json({
        success: true,
        totalPayout,
        count: filtered.length,
        data: filtered
    });
};

// POST /api/v1/hr/finance/salary/process
exports.processSalary = (req, res) => {
    const {
        userId,
        month,
        year,
        basicSalary,
        bonus = 0,
        deductions = 0,
        status = 'Processed'
    } = req.body;

    if (!userId || !month || !year || basicSalary === undefined) {
        return res.status(400).json({
            success: false,
            error: 'userId, month, year, and basicSalary are required'
        });
    }

    const parsedBasic = Number(basicSalary);
    const parsedBonus = Number(bonus);
    const parsedDeductions = Number(deductions);
    const netSalary = parsedBasic + parsedBonus - parsedDeductions;

    const existingIndex = payrollRecords.findIndex((record) => (
        record.userId === userId &&
        record.month.toLowerCase() === month.toLowerCase() &&
        Number(record.year) === Number(year)
    ));

    const payload = {
        id: existingIndex >= 0 ? payrollRecords[existingIndex].id : `pay_${Date.now()}`,
        userId,
        month,
        year: Number(year),
        basicSalary: parsedBasic,
        bonus: parsedBonus,
        deductions: parsedDeductions,
        netSalary,
        status,
        updatedAt: new Date().toISOString()
    };

    if (existingIndex >= 0) {
        payrollRecords[existingIndex] = payload;
    } else {
        payrollRecords.push(payload);
    }

    return res.status(201).json({
        success: true,
        data: payload
    });
};

// GET /api/v1/hr/finance/payslip/:id
exports.getPayslip = (req, res) => {
    const payslip = payrollRecords.find(
        (record) => record.id === req.params.id || record.userId === req.params.id
    );

    if (!payslip) {
        return res.status(404).json({ success: false, error: 'Payslip not found' });
    }

    return res.status(200).json({
        success: true,
        data: payslip
    });
};

// POST /api/v1/hr/resignation
exports.createResignation = (req, res) => {
    const record = {
        id: `res_${Date.now()}`,
        userId: req.body.userId,
        employeeName: req.body.employeeName || 'Unknown',
        department: req.body.department || 'General',
        noticePeriodEnd: req.body.noticePeriodEnd,
        reason: req.body.reason || '',
        status: req.body.status || 'Submitted',
        createdAt: new Date().toISOString()
    };

    resignations.push(record);

    res.status(201).json({
        success: true,
        data: record
    });
};

// GET /api/v1/hr/resignation/register
exports.getResignationRegister = (req, res) => {
    sendList(res, resignations, req.query, ['createdAt', 'noticePeriodEnd']);
};

// PUT /api/v1/hr/resignation/exit-process
exports.updateExitProcess = (req, res) => {
    const { resignationId, status, clearanceNotes } = req.body;

    const record = resignations.find((item) => item.id === resignationId);
    if (!record) {
        return res.status(404).json({ success: false, error: 'Resignation record not found' });
    }

    record.status = status || record.status;
    record.clearanceNotes = clearanceNotes || record.clearanceNotes;
    record.updatedAt = new Date().toISOString();

    return res.status(200).json({
        success: true,
        data: record
    });
};

// GET /api/v1/hr/analytics/report
exports.getAnalyticsReport = (req, res) => {
    res.status(200).json({
        success: true,
        data: {
            totalEmployees: performanceRecords.length,
            avgRating: performanceRecords.length
                ? Number((performanceRecords.reduce((sum, row) => sum + row.rating, 0) / performanceRecords.length).toFixed(2))
                : 0,
            leaveRequests: leaveApplications.length,
            openResignations: resignations.filter((item) => item.status !== 'Completed').length
        }
    });
};

// GET /api/v1/hr/analytics/attendance
exports.getAnalyticsAttendance = (req, res) => {
    const present = attendanceRecords.filter((item) => item.status === 'Present').length;
    const late = attendanceRecords.filter((item) => item.status === 'Late').length;
    const absent = attendanceRecords.filter((item) => item.status === 'Absent').length;

    res.status(200).json({
        success: true,
        data: {
            total: attendanceRecords.length,
            present,
            late,
            absent
        }
    });
};

// GET /api/v1/hr/analytics/performance
exports.getAnalyticsPerformance = (req, res) => {
    const byDepartment = performanceRecords.reduce((acc, row) => {
        if (!acc[row.department]) {
            acc[row.department] = {
                total: 0,
                averageRating: 0
            };
        }

        acc[row.department].total += 1;
        acc[row.department].averageRating += row.rating;
        return acc;
    }, {});

    Object.keys(byDepartment).forEach((department) => {
        const item = byDepartment[department];
        item.averageRating = Number((item.averageRating / item.total).toFixed(2));
    });

    res.status(200).json({
        success: true,
        data: byDepartment
    });
};
