import React from "react";
import "./EmployeeCard.css";

function EmployeeCard({ employee }) {
  return (
    <div className="employee-card">

      <div className="avatar">
        {employee.name.charAt(0)}
      </div>

      <h3>{employee.name}</h3>

      <p>
        <strong>ID:</strong> {employee.id}
      </p>

      <p>
        <strong>Department:</strong> {employee.department}
      </p>

      <p>
        <strong>Salary:</strong> ₹{employee.salary}
      </p>

      <button>Edit</button>
    </div>
  );
}

export default EmployeeCard;