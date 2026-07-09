import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEmployees } from "../context/EmployeeContext";
import "../css/Forms.css";

function AddEmployee() {

  const navigate = useNavigate();

  const { addEmployee, employees } = useEmployees();

  const [employee, setEmployee] = useState({

    name: "",
    department: "",
    designation: "",
    salary: "",
    email: "",
    phone: ""

  });

  const handleChange = (e) => {

    setEmployee({

      ...employee,
      [e.target.name]: e.target.value

    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    addEmployee({

      id: employees.length + 1,
      ...employee,
      attendance: "Present",
      status: "Active"

    });

    navigate("/employees");

  };

  return (

    <div className="form-container">

      <h1>Add Employee</h1>

      <form onSubmit={handleSubmit}>

        <input
          name="name"
          placeholder="Employee Name"
          onChange={handleChange}
          required
        />

        <input
          name="department"
          placeholder="Department"
          onChange={handleChange}
          required
        />

        <input
          name="designation"
          placeholder="Designation"
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          required
        />

        <button type="submit">

          Add Employee

        </button>

      </form>

    </div>

  );

}

export default AddEmployee;