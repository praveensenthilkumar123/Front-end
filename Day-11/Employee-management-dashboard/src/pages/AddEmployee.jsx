import React, { useState } from "react";
import "../css/Employee.css";

function AddEmployee() {
  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    department: "",
    salary: "",
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Employee Added Successfully!");

    console.log(employee);

    setEmployee({
      id: "",
      name: "",
      department: "",
      salary: "",
    });
  };

  return (
    <div className="form-container">
      <h2>Add Employee</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Employee ID</label>
          <input
            type="text"
            name="id"
            value={employee.id}
            onChange={handleChange}
            placeholder="Enter Employee ID"
            required
          />
        </div>

        <div className="form-group">
          <label>Employee Name</label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
            placeholder="Enter Employee Name"
            required
          />
        </div>

        <div className="form-group">
          <label>Department</label>
          <input
            type="text"
            name="department"
            value={employee.department}
            onChange={handleChange}
            placeholder="Enter Department"
            required
          />
        </div>

        <div className="form-group">
          <label>Salary</label>
          <input
            type="number"
            name="salary"
            value={employee.salary}
            onChange={handleChange}
            placeholder="Enter Salary"
            required
          />
        </div>

        <button type="submit" className="btn">
          Add Employee
        </button>
      </form>
    </div>
  );
}

export default AddEmployee;