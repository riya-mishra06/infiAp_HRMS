const User = require('../models/User');
const Job = require('../models/Job');
const Employee = require('../models/Employee');

const makeId = (prefix) => `${prefix}_${Date.now()}_${Math.floor(Math.random() * 10000)}`;

const toDateISO = (value = new Date()) => {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
};

let accountSettings = {
    fullName: 'Admin User',
    phoneNumber: '9999999999',
    twoFactorAuth: false,
    emailNotifications: true,
    smsNotifications: false,
    theme: 'light',
    timezone: 'Asia/Kolkata'
};

let systemSettings = {
    maintenanceMode: false,
    backupFrequency: 'daily',
    documentRetentionDays: 365,
    payrollAutoRun: true
};

let departments = [
    {
        id: 'dept_001',
        name: 'Engineering',
        description: 'Product development team',
        head: 'Rahul Sharma',
        sub: 'TECH',
        teams: 2,
        employees: 42,
        color: 'indigo',
        createdAt: toDateISO('2026-01-03')
    },
    {
        id: 'dept_002',
        name: 'Marketing',
        description: 'Brand and growth initiatives',
        head: 'Priya Kapur',
        sub: 'CREATIVE',
        teams: 1,
        employees: 16,
        color: 'orange',
        createdAt: toDateISO('2026-01-10')
    },
    {
        id: 'dept_003',
        name: 'Human Resources',
        description: 'Workforce and culture operations',
        head: 'Amit Verma',
        sub: 'ADMIN',
        teams: 1,
        employees: 10,
        color: 'green',
        createdAt: toDateISO('2026-01-12')
    }
];

let teams = [
    {
        id: 'team_001',
        name: 'Frontend Team',
        departmentId: 'dept_001',
        departmentName: 'Engineering',
        lead: 'Sneha Desai',
        members: 12,
        type: 'Development',
        mission: 'Build responsive, reliable user experiences.',
        keyMembers: [
            {
                name: 'Arjun Mehta',
                role: 'Senior React Dev',
                status: 'ACTIVE',
                img: 'https://ui-avatars.com/api/?name=Arjun+Mehta&background=random'
            },
            {
                name: 'Priya Singh',
                role: 'UI/UX Designer',
                status: 'ACTIVE',
                img: 'https://ui-avatars.com/api/?name=Priya+Singh&background=random'
            }
        ],
        createdAt: toDateISO('2026-01-15')
    },
    {
        id: 'team_002',
        name: 'Backend Team',
        departmentId: 'dept_001',
        departmentName: 'Engineering',
        lead: 'Rohan Sharma',
        members: 9,
        type: 'Development',
        mission: 'Scale secure APIs and core platform services.',
        keyMembers: [
            {
                name: 'Vikas Roy',
                role: 'Node.js Expert',
                status: 'ACTIVE',
                img: 'https://ui-avatars.com/api/?name=Vikas+Roy&background=random'
            }
        ],
        createdAt: toDateISO('2026-01-18')
    },
    {
        id: 'team_003',
        name: 'Brand Team',
        departmentId: 'dept_002',
        departmentName: 'Marketing',
        lead: 'Ishita Rao',
        members: 6,
        type: 'Design',
        mission: 'Drive brand consistency and campaign velocity.',
        keyMembers: [],
        createdAt: toDateISO('2026-01-22')
    }
];

let candidates = [
    {
        id: 'cand_001',
        name: 'Nidhi Patel',
        email: 'nidhi.patel@example.com',
        jobId: 'job_001',
        jobTitle: 'Frontend Developer',
        status: 'In Review',
        stage: 'Screening',
        interviewDate: null,
        interviewTime: null,
        appliedOn: '2026-04-10'
    },
    {
        id: 'cand_002',
        name: 'Rahul Verma',
        email: 'rahul.verma@example.com',
        jobId: 'job_002',
        jobTitle: 'Backend Developer',
        status: 'Shortlisted',
        stage: 'Interview',
        interviewDate: '2026-04-20',
        interviewTime: '11:00',
        appliedOn: '2026-04-08'
    }
];

let salaryStructures = [
    {
        id: 'salary_001',
        role: 'Frontend Developer',
        baseSalary: 750000,
        currency: 'INR',
        createdAt: toDateISO('2026-02-10')
    },
    {
        id: 'salary_002',
        role: 'Backend Developer',
        baseSalary: 820000,
        currency: 'INR',
        createdAt: toDateISO('2026-02-15')
    }
];

let notifications = [
    {
        id: 'note_001',
        title: 'Holiday Notice',
        message: 'Office will remain closed on Friday',
        sentAt: toDateISO('2026-04-10T10:00:00.000Z'),
        recipients: 'all'
    }
];

let documents = [
    {
        id: 'doc_001',
        title: 'Security Policy',
        content: 'Policy content',
        createdAt: toDateISO('2026-03-01')
    }
];

let leaves = [
    {
        id: 'leave_001',
        employeeId: 'emp_001',
        employeeName: 'Aarav Shah',
        action: null,
        reason: 'Family emergency',
        fromDate: '2026-04-19',
        toDate: '2026-04-21',
        status: 'Pending',
        createdAt: toDateISO('2026-04-15')
    }
];

let hrStaff = [
    {
        id: 'hr_001',
        name: 'Shweta Rao',
        email: 'shweta.rao@infiap.com',
        permissions: ['manage_employees', 'manage_leaves']
    },
    {
        id: 'hr_002',
        name: 'Aman Joshi',
        email: 'aman.joshi@infiap.com',
        permissions: ['manage_recruitment']
    }
];

let activities = [
    {
        id: 'act_001',
        title: 'Job posted',
        description: 'Posted Frontend Developer role',
        createdAt: toDateISO('2026-04-12T09:00:00.000Z')
    }
];

const seedJobs = [
    {
        id: 'job_001',
        title: 'Frontend Developer',
        department: 'Engineering',
        type: 'Full-time',
        status: 'Open',
        location: 'Bangalore / Remote',
        applicants: 12,
        postedDate: '2026-04-01'
    },
    {
        id: 'job_002',
        title: 'Backend Developer',
        department: 'Engineering',
        type: 'Full-time',
        status: 'Open',
        location: 'Pune',
        applicants: 8,
        postedDate: '2026-04-03'
    }
];

let cachedJobs = [...seedJobs];

const getAdminJobs = async () => {
    try {
        const dbJobs = await Job.find().sort({ createdAt: -1 });
        if (dbJobs.length > 0) {
            return dbJobs.map((job) => ({
                id: job._id.toString(),
                title: job.title,
                department: job.department,
                type: job.type,
                description: job.description,
                experience: job.experience,
                location: job.location,
                deadline: job.deadline,
                status: job.status,
                applicants: 0,
                postedDate: toDateISO(job.createdAt).slice(0, 10)
            }));
        }
    } catch (err) {
        // Fall back to in-memory data when database lookups fail.
    }

    return cachedJobs;
};

const getStaffDirectoryData = async () => {
    try {
        const employees = await Employee.find().sort({ createdAt: -1 });
        if (employees.length > 0) {
            return employees.map((employee) => ({
                id: employee._id.toString(),
                employeeId: employee.employeeId,
                name: employee.name,
                email: employee.email,
                department: employee.department,
                role: employee.role,
                status: employee.status,
                manager: employee.manager,
                joinedOn: toDateISO(employee.joiningDate).slice(0, 10)
            }));
        }
    } catch (err) {
        // Fall back to lightweight defaults when database lookups fail.
    }

    return [
        {
            id: 'emp_001',
            employeeId: 'EMP001',
            name: 'Aarav Shah',
            email: 'aarav@infiap.com',
            department: 'Engineering',
            role: 'Senior Engineer',
            status: 'Active',
            manager: 'Sneha Desai',
            joinedOn: '2024-01-16'
        },
        {
            id: 'emp_002',
            employeeId: 'EMP002',
            name: 'Nisha Rao',
            email: 'nisha@infiap.com',
            department: 'HR',
            role: 'HR Executive',
            status: 'Active',
            manager: 'Shweta Rao',
            joinedOn: '2024-03-21'
        }
    ];
};

const pushActivity = (title, description) => {
    activities.unshift({
        id: makeId('act'),
        title,
        description,
        createdAt: new Date().toISOString()
    });
};

// Summary and Insights
exports.getSummary = async (req, res, next) => {
    try {
        const [jobs, staffDirectory] = await Promise.all([
            getAdminJobs(),
            getStaffDirectoryData()
        ]);

        const openJobs = jobs.filter((job) => (job.status || '').toLowerCase() === 'open').length;
        const pendingLeaves = leaves.filter((leave) => leave.status === 'Pending').length;

        res.status(200).json({
            success: true,
            data: {
                departments: departments.length,
                teams: teams.length,
                activeStaff: staffDirectory.filter((member) => member.status === 'Active').length,
                openJobs,
                pendingLeaves,
                announcements: notifications.length
            }
        });
    } catch (err) {
        next(err);
    }
};

exports.getInsights = async (req, res, next) => {
    try {
        const jobs = await getAdminJobs();

        res.status(200).json({
            success: true,
            data: {
                hiringMomentum: jobs.length >= 3 ? 'high' : 'moderate',
                topHiringDepartment: jobs[0]?.department || 'Engineering',
                policyHealth: 'stable',
                payrollRunState: systemSettings.payrollAutoRun ? 'auto' : 'manual'
            }
        });
    } catch (err) {
        next(err);
    }
};

exports.getAnalyticsReport = async (req, res, next) => {
    try {
        const jobs = await getAdminJobs();

        res.status(200).json({
            success: true,
            data: {
                generatedAt: new Date().toISOString(),
                summary: {
                    totalJobs: jobs.length,
                    totalDepartments: departments.length,
                    totalTeams: teams.length,
                    totalCandidates: candidates.length
                },
                charts: {
                    departments: departments.map((department) => ({
                        name: department.name,
                        employees: department.employees
                    })),
                    hiring: jobs.map((job) => ({
                        title: job.title,
                        applicants: job.applicants || 0
                    }))
                }
            }
        });
    } catch (err) {
        next(err);
    }
};

// Profile and account settings
exports.getProfile = async (req, res, next) => {
    try {
        const user = await User.findById(req.user?._id);
        const createdAt = user?.createdAt || req.user?.createdAt || new Date().toISOString();
        const updatedAt = user?.updatedAt || req.user?.updatedAt || createdAt;

        res.status(200).json({
            success: true,
            data: {
                id: user?._id || req.user?._id,
                name: user?.name || req.user?.name || 'Admin User',
                email: user?.email || req.user?.email || 'admin@infiap.com',
                role: user?.role || req.user?.role || 'admin',
                createdAt,
                updatedAt
            }
        });
    } catch (err) {
        next(err);
    }
};

exports.updateProfile = async (req, res, next) => {
    try {
        const updates = {};

        if (req.body.name !== undefined) {
            updates.name = req.body.name;
        }

        if (req.body.email !== undefined) {
            updates.email = req.body.email;
        }

        const user = await User.findByIdAndUpdate(req.user?._id, updates, {
            new: true,
            runValidators: true
        });
        const createdAt = user?.createdAt || req.user?.createdAt || new Date().toISOString();
        const updatedAt = user?.updatedAt || new Date().toISOString();

        pushActivity('Profile updated', 'Admin profile details were updated.');

        res.status(200).json({
            success: true,
            data: {
                id: user?._id || req.user?._id,
                name: user?.name || req.body.name || req.user?.name || 'Admin User',
                email: user?.email || req.body.email || req.user?.email || 'admin@infiap.com',
                role: user?.role || req.user?.role || 'admin',
                createdAt,
                updatedAt
            }
        });
    } catch (err) {
        next(err);
    }
};

exports.getAccountSettings = async (req, res) => {
    res.status(200).json({
        success: true,
        data: accountSettings
    });
};

exports.updatePersonalInformation = async (req, res) => {
    accountSettings = {
        ...accountSettings,
        fullName: req.body.fullName ?? accountSettings.fullName,
        phoneNumber: req.body.phoneNumber ?? accountSettings.phoneNumber
    };

    pushActivity('Personal information updated', 'Account personal information was updated.');

    res.status(200).json({
        success: true,
        data: accountSettings
    });
};

exports.updateSecuritySettings = async (req, res) => {
    accountSettings = {
        ...accountSettings,
        twoFactorAuth: req.body.twoFactorAuth ?? accountSettings.twoFactorAuth
    };

    pushActivity('Security settings updated', 'Account security settings were updated.');

    res.status(200).json({
        success: true,
        data: accountSettings
    });
};

exports.updatePassword = async (req, res, next) => {
    try {
        const { oldPassword, newPassword } = req.body;

        if (!oldPassword || !newPassword) {
            return res.status(400).json({ success: false, error: 'Please provide oldPassword and newPassword' });
        }

        const user = await User.findById(req.user?._id).select('+password');

        if (!user) {
            return res.status(404).json({ success: false, error: 'User not found' });
        }

        const isMatch = await user.matchPassword(oldPassword);

        if (!isMatch) {
            return res.status(400).json({ success: false, error: 'Old password is incorrect' });
        }

        user.password = newPassword;
        await user.save();

        pushActivity('Password updated', 'Admin account password was updated.');

        res.status(200).json({
            success: true,
            data: { updated: true }
        });
    } catch (err) {
        next(err);
    }
};

exports.updateNotificationPreferences = async (req, res) => {
    accountSettings = {
        ...accountSettings,
        emailNotifications: req.body.emailNotifications ?? accountSettings.emailNotifications,
        smsNotifications: req.body.smsNotifications ?? accountSettings.smsNotifications
    };

    pushActivity('Notification preferences updated', 'Notification preferences were updated.');

    res.status(200).json({
        success: true,
        data: accountSettings
    });
};

// Departments
exports.getDepartments = async (req, res) => {
    res.status(200).json({
        success: true,
        count: departments.length,
        data: departments
    });
};

exports.getCreateDepartmentForm = async (req, res) => {
    res.status(200).json({
        success: true,
        data: {
            managers: [
                { id: 'rahul', name: 'Rahul Sharma' },
                { id: 'priya', name: 'Priya Kapur' },
                { id: 'amit', name: 'Amit Verma' }
            ],
            colors: ['indigo', 'orange', 'green']
        }
    });
};

exports.createDepartment = async (req, res) => {
    const dept = {
        id: makeId('dept'),
        name: req.body.name,
        description: req.body.description || '',
        head: req.body.head || req.body.manager || 'Unassigned',
        sub: req.body.sub || 'NEW UNIT',
        teams: Number.parseInt(req.body.teams, 10) || 0,
        employees: Number.parseInt(req.body.employees, 10) || 0,
        color: req.body.color || 'indigo',
        createdAt: new Date().toISOString()
    };

    departments.unshift(dept);

    pushActivity('Department created', `${dept.name} department was created.`);

    res.status(201).json({
        success: true,
        data: dept
    });
};

exports.getAddDepartmentEmployeeForm = async (req, res, next) => {
    try {
        const staffDirectory = await getStaffDirectoryData();

        res.status(200).json({
            success: true,
            data: {
                departments: departments.map((department) => ({
                    id: department.id,
                    name: department.name
                })),
                users: staffDirectory.map((member) => ({
                    id: member.id,
                    name: member.name,
                    email: member.email
                }))
            }
        });
    } catch (err) {
        next(err);
    }
};

exports.addDepartmentEmployee = async (req, res) => {
    const { departmentId } = req.body;

    const updated = departments.find((department) => department.id === departmentId);

    if (!updated) {
        return res.status(404).json({ success: false, error: 'Department not found' });
    }

    updated.employees += 1;

    pushActivity('Department member added', `A member was added to ${updated.name}.`);

    res.status(200).json({
        success: true,
        data: updated
    });
};

exports.updateDepartment = async (req, res) => {
    const department = departments.find((item) => item.id === req.params.id);

    if (!department) {
        return res.status(404).json({ success: false, error: 'Department not found' });
    }

    if (req.body.name !== undefined) department.name = req.body.name;
    if (req.body.description !== undefined) department.description = req.body.description;
    if (req.body.head !== undefined) department.head = req.body.head;
    if (req.body.teams !== undefined) department.teams = Number.parseInt(req.body.teams, 10) || department.teams;

    pushActivity('Department updated', `${department.name} department details were updated.`);

    res.status(200).json({
        success: true,
        data: department
    });
};

exports.deleteDepartment = async (req, res) => {
    const initialCount = departments.length;
    departments = departments.filter((department) => department.id !== req.params.id);

    if (departments.length === initialCount) {
        return res.status(404).json({ success: false, error: 'Department not found' });
    }

    teams = teams.filter((team) => team.departmentId !== req.params.id);

    pushActivity('Department deleted', `Department ${req.params.id} was deleted.`);

    res.status(200).json({
        success: true,
        data: {}
    });
};

// Teams
exports.getTeams = async (req, res) => {
    res.status(200).json({
        success: true,
        count: teams.length,
        data: teams
    });
};

exports.getTeamSummary = async (req, res) => {
    const byType = teams.reduce((acc, team) => {
        acc[team.type] = (acc[team.type] || 0) + 1;
        return acc;
    }, {});

    res.status(200).json({
        success: true,
        data: {
            totalTeams: teams.length,
            byType,
            departmentCoverage: departments.map((department) => ({
                departmentId: department.id,
                name: department.name,
                teams: teams.filter((team) => team.departmentId === department.id).length
            }))
        }
    });
};

exports.createTeam = async (req, res) => {
    const department = departments.find((item) => item.id === req.body.departmentId)
        || departments.find((item) => item.name.toLowerCase() === String(req.body.department || '').toLowerCase());

    const team = {
        id: makeId('team'),
        name: req.body.name,
        departmentId: department?.id || req.body.departmentId || null,
        departmentName: department?.name || req.body.department || 'General',
        lead: req.body.lead || 'Unassigned',
        members: Number.parseInt(req.body.members || req.body.capacity, 10) || 0,
        type: req.body.type || (department?.name === 'Marketing' ? 'Design' : 'Development'),
        mission: req.body.mission || '',
        keyMembers: [],
        createdAt: new Date().toISOString()
    };

    teams.unshift(team);

    if (department) {
        department.teams += 1;
    }

    pushActivity('Team created', `${team.name} team was created.`);

    res.status(201).json({
        success: true,
        data: team
    });
};

exports.updateTeam = async (req, res) => {
    const team = teams.find((item) => item.id === req.params.id);

    if (!team) {
        return res.status(404).json({ success: false, error: 'Team not found' });
    }

    if (req.body.name !== undefined) team.name = req.body.name;
    if (req.body.lead !== undefined) team.lead = req.body.lead;
    if (req.body.type !== undefined) team.type = req.body.type;
    if (req.body.mission !== undefined) team.mission = req.body.mission;

    pushActivity('Team updated', `${team.name} team details were updated.`);

    res.status(200).json({
        success: true,
        data: team
    });
};

exports.deleteTeam = async (req, res) => {
    const existing = teams.find((item) => item.id === req.params.id);

    if (!existing) {
        return res.status(404).json({ success: false, error: 'Team not found' });
    }

    teams = teams.filter((team) => team.id !== req.params.id);

    const department = departments.find((item) => item.id === existing.departmentId);
    if (department && department.teams > 0) {
        department.teams -= 1;
    }

    pushActivity('Team deleted', `${existing.name} team was removed.`);

    res.status(200).json({
        success: true,
        data: {}
    });
};

// Payroll
exports.getPayrollDashboard = async (req, res, next) => {
    try {
        const staffDirectory = await getStaffDirectoryData();

        res.status(200).json({
            success: true,
            data: {
                totalEmployees: staffDirectory.length,
                salaryStructures: salaryStructures.length,
                monthlyPayrollEstimate: salaryStructures.reduce((sum, item) => sum + item.baseSalary, 0),
                currency: 'INR'
            }
        });
    } catch (err) {
        next(err);
    }
};

exports.getSalaryStructure = async (req, res) => {
    res.status(200).json({
        success: true,
        count: salaryStructures.length,
        data: salaryStructures
    });
};

exports.createSalaryStructure = async (req, res) => {
    const structure = {
        id: makeId('salary'),
        role: req.body.role,
        baseSalary: Number(req.body.baseSalary) || 0,
        currency: req.body.currency || 'INR',
        createdAt: new Date().toISOString()
    };

    salaryStructures.unshift(structure);

    pushActivity('Salary structure created', `Salary structure created for ${structure.role}.`);

    res.status(201).json({
        success: true,
        data: structure
    });
};

// Recruitment
exports.getJobs = async (req, res, next) => {
    try {
        const jobs = await getAdminJobs();

        res.status(200).json({
            success: true,
            count: jobs.length,
            data: jobs
        });
    } catch (err) {
        next(err);
    }
};

exports.getJobPostingForm = async (req, res) => {
    res.status(200).json({
        success: true,
        data: {
            departments: departments.map((department) => department.name),
            employmentTypes: ['Full-time', 'Contract', 'Freelance', 'Part-time'],
            statuses: ['Open', 'Closed', 'On Hold']
        }
    });
};

exports.createJob = async (req, res, next) => {
    try {
        const payload = {
            title: req.body.title,
            department: req.body.department,
            type: req.body.type || 'Full-time',
            description: req.body.description || 'Role details to be updated.',
            experience: req.body.experience || 'Mid (3-5 years)',
            location: req.body.location || 'Remote',
            deadline: req.body.deadline,
            status: req.body.status || 'Open',
            skills: req.body.skills || []
        };

        let jobData;

        try {
            const createdJob = await Job.create(payload);
            jobData = {
                id: createdJob._id.toString(),
                title: createdJob.title,
                department: createdJob.department,
                type: createdJob.type,
                description: createdJob.description,
                experience: createdJob.experience,
                location: createdJob.location,
                deadline: createdJob.deadline,
                status: createdJob.status,
                applicants: 0,
                postedDate: toDateISO(createdJob.createdAt).slice(0, 10)
            };
        } catch (dbErr) {
            jobData = {
                id: makeId('job'),
                title: payload.title,
                department: payload.department,
                type: payload.type,
                description: payload.description,
                experience: payload.experience,
                location: payload.location,
                deadline: payload.deadline,
                status: payload.status,
                applicants: 0,
                postedDate: new Date().toISOString().slice(0, 10)
            };
            cachedJobs.unshift(jobData);
        }

        pushActivity('Job created', `Job posting created for ${jobData.title}.`);

        res.status(201).json({
            success: true,
            data: jobData
        });
    } catch (err) {
        next(err);
    }
};

exports.updateJob = async (req, res, next) => {
    try {
        let job = null;

        try {
            job = await Job.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true
            });
        } catch (dbErr) {
            // Fall back to in-memory update when ID is not a mongo ObjectId.
        }

        if (job) {
            const result = {
                id: job._id.toString(),
                title: job.title,
                department: job.department,
                type: job.type,
                description: job.description,
                experience: job.experience,
                location: job.location,
                deadline: job.deadline,
                status: job.status,
                applicants: 0,
                postedDate: toDateISO(job.createdAt).slice(0, 10)
            };

            pushActivity('Job updated', `Job ${result.title} was updated.`);

            return res.status(200).json({
                success: true,
                data: result
            });
        }

        const inMemoryJob = cachedJobs.find((item) => item.id === req.params.id);

        if (!inMemoryJob) {
            return res.status(404).json({ success: false, error: 'Job not found' });
        }

        if (req.body.title !== undefined) inMemoryJob.title = req.body.title;
        if (req.body.department !== undefined) inMemoryJob.department = req.body.department;
        if (req.body.type !== undefined) inMemoryJob.type = req.body.type;
        if (req.body.status !== undefined) inMemoryJob.status = req.body.status;
        if (req.body.location !== undefined) inMemoryJob.location = req.body.location;

        pushActivity('Job updated', `Job ${inMemoryJob.title} was updated.`);

        res.status(200).json({
            success: true,
            data: inMemoryJob
        });
    } catch (err) {
        next(err);
    }
};

exports.deleteJob = async (req, res, next) => {
    try {
        let deleted = false;

        try {
            const dbDeleted = await Job.findByIdAndDelete(req.params.id);
            deleted = Boolean(dbDeleted);
        } catch (dbErr) {
            // Fall back to in-memory delete.
        }

        if (!deleted) {
            const initialCount = cachedJobs.length;
            cachedJobs = cachedJobs.filter((job) => job.id !== req.params.id);
            deleted = cachedJobs.length < initialCount;
        }

        if (!deleted) {
            return res.status(404).json({ success: false, error: 'Job not found' });
        }

        pushActivity('Job deleted', `Job ${req.params.id} was deleted.`);

        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        next(err);
    }
};

exports.getCandidates = async (req, res) => {
    res.status(200).json({
        success: true,
        count: candidates.length,
        data: candidates
    });
};

exports.getCandidateTracking = async (req, res) => {
    const byStatus = candidates.reduce((acc, candidate) => {
        acc[candidate.status] = (acc[candidate.status] || 0) + 1;
        return acc;
    }, {});

    res.status(200).json({
        success: true,
        data: {
            total: candidates.length,
            byStatus,
            candidates
        }
    });
};

exports.getInterviewManagement = async (req, res) => {
    res.status(200).json({
        success: true,
        data: candidates.filter((candidate) => candidate.interviewDate)
    });
};

exports.updateCandidateStatus = async (req, res) => {
    const candidate = candidates.find((item) => item.id === req.params.id);

    if (!candidate) {
        return res.status(404).json({ success: false, error: 'Candidate not found' });
    }

    candidate.status = req.body.status || candidate.status;

    pushActivity('Candidate status updated', `${candidate.name} moved to ${candidate.status}.`);

    res.status(200).json({
        success: true,
        data: candidate
    });
};

exports.scheduleInterview = async (req, res) => {
    const candidate = candidates.find((item) => item.id === req.body.candidateId);

    if (!candidate) {
        return res.status(404).json({ success: false, error: 'Candidate not found' });
    }

    candidate.interviewDate = req.body.date;
    candidate.interviewTime = req.body.time;
    candidate.stage = 'Interview';

    pushActivity('Interview scheduled', `Interview scheduled for ${candidate.name}.`);

    res.status(200).json({
        success: true,
        data: candidate
    });
};

// Notifications
exports.getNotificationPanel = async (req, res) => {
    res.status(200).json({
        success: true,
        data: {
            unread: notifications.length,
            recent: notifications.slice(0, 5)
        }
    });
};

exports.getNotifications = async (req, res) => {
    res.status(200).json({
        success: true,
        count: notifications.length,
        data: notifications
    });
};

exports.getRecentBroadcasts = async (req, res) => {
    res.status(200).json({
        success: true,
        data: notifications.slice(0, 5)
    });
};

exports.getAnnouncementForm = async (req, res) => {
    res.status(200).json({
        success: true,
        data: {
            audienceOptions: ['all', 'engineering', 'marketing', 'hr'],
            priorityOptions: ['low', 'medium', 'high']
        }
    });
};

exports.createAnnouncement = async (req, res) => {
    const announcement = {
        id: makeId('note'),
        title: req.body.title,
        message: req.body.message,
        sentAt: new Date().toISOString(),
        recipients: req.body.recipients || 'all'
    };

    notifications.unshift(announcement);

    pushActivity('Announcement created', `${announcement.title} announcement was created.`);

    res.status(201).json({
        success: true,
        data: announcement
    });
};

exports.editAnnouncement = async (req, res) => {
    const announcement = notifications.find((item) => item.id === req.params.id);

    if (!announcement) {
        return res.status(404).json({ success: false, error: 'Announcement not found' });
    }

    if (req.body.title !== undefined) announcement.title = req.body.title;
    if (req.body.message !== undefined) announcement.message = req.body.message;

    pushActivity('Announcement edited', `${announcement.title} announcement was updated.`);

    res.status(200).json({
        success: true,
        data: announcement
    });
};

exports.resendAnnouncement = async (req, res) => {
    const announcement = notifications.find((item) => item.id === req.params.id);

    if (!announcement) {
        return res.status(404).json({ success: false, error: 'Announcement not found' });
    }

    announcement.sentAt = new Date().toISOString();

    pushActivity('Announcement resent', `${announcement.title} announcement was resent.`);

    res.status(200).json({
        success: true,
        data: announcement
    });
};

// Documents and Settings
exports.getDocuments = async (req, res) => {
    res.status(200).json({
        success: true,
        count: documents.length,
        data: documents
    });
};

exports.createDocument = async (req, res) => {
    const document = {
        id: makeId('doc'),
        title: req.body.title,
        content: req.body.content,
        createdAt: new Date().toISOString()
    };

    documents.unshift(document);

    pushActivity('Document created', `${document.title} document was created.`);

    res.status(201).json({
        success: true,
        data: document
    });
};

exports.deleteDocument = async (req, res) => {
    const initialCount = documents.length;
    documents = documents.filter((document) => document.id !== req.params.id);

    if (documents.length === initialCount) {
        return res.status(404).json({ success: false, error: 'Document not found' });
    }

    pushActivity('Document deleted', `Document ${req.params.id} was deleted.`);

    res.status(200).json({
        success: true,
        data: {}
    });
};

exports.getSystemSettings = async (req, res) => {
    res.status(200).json({
        success: true,
        data: systemSettings
    });
};

exports.updateSystemSettings = async (req, res) => {
    systemSettings = {
        ...systemSettings,
        ...req.body
    };

    pushActivity('System settings updated', 'System settings were updated.');

    res.status(200).json({
        success: true,
        data: systemSettings
    });
};

// Leave management
exports.getPendingLeaves = async (req, res) => {
    const pendingLeaves = leaves.filter((leave) => leave.status === 'Pending');

    res.status(200).json({
        success: true,
        count: pendingLeaves.length,
        data: pendingLeaves
    });
};

exports.handleLeaveAction = async (req, res) => {
    const leave = leaves.find((item) => item.id === req.body.leaveId);

    if (!leave) {
        return res.status(404).json({ success: false, error: 'Leave request not found' });
    }

    leave.status = req.body.action || leave.status;
    leave.action = req.body.action || null;

    pushActivity('Leave action processed', `${leave.employeeName} leave marked as ${leave.status}.`);

    res.status(200).json({
        success: true,
        data: leave
    });
};

// HR management
exports.getStaffDirectory = async (req, res, next) => {
    try {
        const staffDirectory = await getStaffDirectoryData();

        res.status(200).json({
            success: true,
            count: staffDirectory.length,
            data: staffDirectory
        });
    } catch (err) {
        next(err);
    }
};

exports.getHrStaff = async (req, res) => {
    res.status(200).json({
        success: true,
        count: hrStaff.length,
        data: hrStaff
    });
};

exports.updateHrPermissions = async (req, res) => {
    const member = hrStaff.find((item) => item.id === req.body.hrId);

    if (!member) {
        return res.status(404).json({ success: false, error: 'HR staff not found' });
    }

    member.permissions = Array.isArray(req.body.permissions)
        ? req.body.permissions
        : member.permissions;

    pushActivity('HR permissions updated', `${member.name} permissions were updated.`);

    res.status(200).json({
        success: true,
        data: member
    });
};

exports.deleteHrUser = async (req, res) => {
    const initialCount = hrStaff.length;
    hrStaff = hrStaff.filter((member) => member.id !== req.params.hrId);

    if (hrStaff.length === initialCount) {
        return res.status(404).json({ success: false, error: 'HR staff not found' });
    }

    pushActivity('HR user deleted', `HR user ${req.params.hrId} was removed.`);

    res.status(200).json({
        success: true,
        data: {}
    });
};

// Activities
exports.getRecentActivities = async (req, res) => {
    res.status(200).json({
        success: true,
        count: activities.length,
        data: activities
    });
};

exports.createActivity = async (req, res) => {
    const activity = {
        id: makeId('act'),
        title: req.body.title,
        description: req.body.description,
        createdAt: new Date().toISOString()
    };

    activities.unshift(activity);

    res.status(201).json({
        success: true,
        data: activity
    });
};
