import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEmployees } from "../context/EmployeeContext";
import "../css/Employee.css";

function EmployeeDetails() {
  const { id } = useParams();
  const { getEmployeeById } = useEmployees();

  const employee = getEmployeeById(id);

  if (!employee) {
    return (
      <div className="employee-container">
        <h2>Employee Not Found</h2>
      </div>
    );
  }

  return (
    <div className="employee-container">

      <h1>Employee Details</h1>

      <div className="employee-card">

        <img
          src={employee.image}
          alt={employee.name}
          style={{
            width: "150px",
            borderRadius: "50%",
            marginBottom: "20px",
          }}
        />

        <h2>{employee.name}</h2>

        <p><strong>ID:</strong> {employee.id}</p>
        <p><strong>Department:</strong> {employee.department}</p>
        <p><strong>Designation:</strong> {employee.designation}</p>
        <p><strong>Salary:</strong> ₹ {employee.salary}</p>
        <p><strong>Email:</strong> {employee.email}</p>
        <p><strong>Phone:</strong> {employee.phone}</p>
        <p><strong>Gender:</strong> {employee.gender}</p>
        <p><strong>Age:</strong> {employee.age}</p>
        <p><strong>Status:</strong> {employee.status}</p>
        <p><strong>Attendance:</strong> {employee.attendance}</p>
        <p><strong>Joining Date:</strong> {employee.joiningDate}</p>

        <br />

        <Link to="/employees">
          <button>Back</button>
        </Link>

      </div>

    </div>
  );
}

export default EmployeeDetails;