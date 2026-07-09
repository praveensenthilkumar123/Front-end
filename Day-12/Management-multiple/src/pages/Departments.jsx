import React from "react";
import { useEmployees } from "../context/EmployeeContext";
import "../css/Dashboard.css";

function Departments() {
  const { employees } = useEmployees();

  const departments = {};

  employees.forEach((employee) => {
    departments[employee.department] =
      (departments[employee.department] || 0) + 1;
  });

  return (
    <div className="dashboard">

      <h1>Departments</h1>

      <div className="dashboard-cards">

        {Object.entries(departments).map(([department, count]) => (

          <div className="card" key={department}>

            <h3>{department}</h3>

            <p>{count} Employees</p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Departments;