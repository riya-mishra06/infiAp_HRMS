import React, { createContext, useContext, useState } from 'react';

const EmployeeContext = createContext();

export const useEmployeeContext = () => {
  const context = useContext(EmployeeContext);
  if (!context) {
    throw new Error('useEmployeeContext must be used within an EmployeeProvider');
  }
  return context;
};

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([
    { id: 'EMP-1024', name: 'Arjun Mehta', email: 'arjun.mehta@hrms.in', role: 'Principal Engineer', department: 'Engineering', manager: 'Sneha Desai', status: 'Active', avatar: 'https://i.pravatar.cc/150?u=arjun' },
    { id: 'EMP-3621', name: 'Priya Sharma', email: 'p.sharma@hrms.in', role: 'UX Research Lead', department: 'Product & Design', manager: 'Sneha Desai', status: 'On Leave', avatar: 'https://i.pravatar.cc/150?u=priya' },
    { id: 'EMP-1102', name: 'Rohan Gupta', email: 'rohan.g@hrms.in', role: 'HR Business Partner', department: 'Human Resources', manager: 'Sneha Desai', status: 'Active', avatar: 'https://i.pravatar.cc/150?u=rohan' },
    { id: 'EMP-5543', name: 'Ananya Iyer', email: 'ananya.i@hrms.in', role: 'Marketing Manager', department: 'Marketing', manager: 'Sneha Desai', status: 'Active', avatar: 'https://i.pravatar.cc/150?u=ananya' },
    { id: 'EMP-8821', name: 'Ishaan Malhotra', email: 'i.malhotra@hrms.in', role: 'Staff Frontend Developer', department: 'Engineering', manager: 'Arjun Mehta', status: 'Active', avatar: 'https://i.pravatar.cc/150?u=ishaan' },
  ]);

  const addEmployee = (newEmployee) => {
    const id = `EMP-${Math.floor(1000 + Math.random() * 9000)}`;
    const employeeWithId = {
      ...newEmployee,
      id,
      status: 'Active',
      avatar: `https://i.pravatar.cc/150?u=${newEmployee.name.split(' ')[0].toLowerCase()}`
    };
    setEmployees(prev => [employeeWithId, ...prev]);
    return employeeWithId;
  };

  const removeEmployee = (id) => {
    setEmployees(prev => prev.filter(emp => emp.id !== id));
  };

  const updateEmployee = (id, updatedData) => {
    setEmployees(prev => prev.map(emp => 
      emp.id === id ? { ...emp, ...updatedData } : emp
    ));
  };

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee, removeEmployee, updateEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};
