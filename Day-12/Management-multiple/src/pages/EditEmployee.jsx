import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEmployees } from "../context/EmployeeContext";
import "../css/Forms.css";

function EditEmployee() {

  const { id } = useParams();

  const navigate = useNavigate();

  const { getEmployeeById, updateEmployee } = useEmployees();

  const currentEmployee = getEmployeeById(id);

  const [employee, setEmployee] = useState(currentEmployee);

  if (!employee) {

    return <h2>Employee Not Found</h2>;

  }

  const handleChange = (e) => {

    setEmployee({

      ...employee,
      [e.target.name]: e.target.value

    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    updateEmployee(employee);

    navigate("/employees");

  };

  return (

    <div className="form-container">

      <h1>Edit Employee</h1>

      <form onSubmit={handleSubmit}>

        <input
          name="name"
          value={employee.name}
          onChange={handleChange}
        />

        <input
          name="department"
          value={employee.department}
          onChange={handleChange}
        />

        <input
          name="designation"
          value={employee.designation}
          onChange={handleChange}
        />

        <input
          type="number"
          name="salary"
          value={employee.salary}
          onChange={handleChange}
        />

        <input
          name="email"
          value={employee.email}
          onChange={handleChange}
        />

        <input
          name="phone"
          value={employee.phone}
          onChange={handleChange}
        />

        <button type="submit">

          Update Employee

        </button>

      </form>

    </div>

  );

}

export default EditEmployee;