import React, { createContext, useContext, useState } from 'react';

const DepartmentContext = createContext();

export const useDepartmentContext = () => {
  const context = useContext(DepartmentContext);
  if (!context) {
    throw new Error('useDepartmentContext must be used within a DepartmentProvider');
  }
  return context;
};

export const DepartmentProvider = ({ children }) => {
  const [departments, setDepartments] = useState([
    {
      name: 'Engineering',
      sub: 'TECH',
      head: 'Rahul Sharma',
      teams: 5,
      employees: 85,
      color: 'indigo'
    },
    {
      name: 'Marketing',
      sub: 'CREATIVE',
      head: 'Priya Kapur',
      teams: 3,
      employees: 42,
      color: 'orange'
    },
    {
      name: 'Human Resources',
      sub: 'ADMIN',
      head: 'Amit Verma',
      teams: 2,
      employees: 18,
      color: 'green'
    }
  ]);

  const addDepartment = (newDept) => {
    // Map manager ID to name for display
    const managerMap = {
      'rahul': 'Rahul Sharma',
      'priya': 'Priya Kapur',
      'amit': 'Amit Verma'
    };

    const formattedDept = {
      name: newDept.name,
      sub: 'NEW UNIT',
      head: managerMap[newDept.manager] || newDept.manager,
      teams: parseInt(newDept.teams) || 0,
      employees: 0,
      color: 'indigo' // Default color for new depts
    };

    setDepartments(prev => [...prev, formattedDept]);
  };

  const totals = {
    deptCount: departments.length,
    teamCount: departments.reduce((acc, current) => acc + current.teams, 0)
  };

  return (
    <DepartmentContext.Provider value={{ departments, addDepartment, totals }}>
      {children}
    </DepartmentContext.Provider>
  );
};
