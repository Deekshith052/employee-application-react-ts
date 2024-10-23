// src/components/EmployeeList.tsx
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Employee } from './Employee';

interface EmployeeListProps {
  employees: Employee[];
  onDeleteEmployee: (id: number) => void;
}

const EmployeeList: React.FC<EmployeeListProps> = ({ employees, onDeleteEmployee }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>(employees);

  const handleSearch = () => {
    const results = employees.filter((employee) =>
      employee.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredEmployees(results);
  };

  return (
    <div>
      <h2>Employee List</h2>
      <button id='add-button' ><Link className='white-link' to={`/`}>ADD</Link></button>

      <input className='search-input' 
      type="text"
      placeholder='search by name'
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className='search-button' onClick={handleSearch}>Search</button>

      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Salary</th>
            <th>Date Of Joining</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.department}</td>
              <td>{employee.designation}</td>
              <td>{employee.salary}</td>
              <td>{employee.dateOfJoining}</td>
              <td>{employee.location}</td>
              <td>
                <button id="edit-button"><Link className='white-link' to={`/edit/${employee.id}`}>Edit</Link></button><span>       </span>
                <button id="delete-button" onClick={() => onDeleteEmployee(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;