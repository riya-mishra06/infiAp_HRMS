import React, { createContext, useContext, useState } from 'react';

const JobContext = createContext();

export const useJobContext = () => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error('useJobContext must be used within a JobProvider');
  }
  return context;
};

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([
    {
      id: 'JOB-2024-001',
      title: 'Senior Frontend Engineer',
      department: 'Engineering',
      type: 'Full-time',
      experience: 'Senior (6+ years)',
      salary: '$140k - $180k',
      location: 'Bangalore / Remote',
      deadline: '2024-05-30',
      status: 'Active',
      applicants: 42,
      postedDate: '2023-10-15'
    },
    {
      id: 'JOB-2024-002',
      title: 'UX / Product Designer',
      department: 'Design',
      type: 'Contract',
      experience: 'Mid (3-5 years)',
      salary: '$90k - $120k',
      location: 'Mumbai Hub',
      deadline: '2024-05-15',
      status: 'Active',
      applicants: 18,
      postedDate: '2023-11-20'
    },
    {
      id: 'JOB-2024-003',
      title: 'HR Business Partner',
      department: 'Human Resources',
      type: 'Full-time',
      experience: 'Mid (3-5 years)',
      salary: '$80k - $110k',
      location: 'Delhi',
      deadline: '2024-06-10',
      status: 'Reviewing',
      applicants: 65,
      postedDate: '2024-01-05'
    }
  ]);

  const addJob = (newJob) => {
    const id = `JOB-2024-0${jobs.length + 1}`;
    const formattedJob = {
      ...newJob,
      id,
      status: 'Active',
      applicants: 0,
      postedDate: new Date().toISOString().split('T')[0]
    };
    setJobs(prev => [formattedJob, ...prev]);
  };

  const totals = {
    activeCount: jobs.filter(j => j.status === 'Active').length,
    totalApplicants: jobs.reduce((acc, current) => acc + current.applicants, 0)
  };

  return (
    <JobContext.Provider value={{ jobs, addJob, totals }}>
      {children}
    </JobContext.Provider>
  );
};
