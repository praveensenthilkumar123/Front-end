import React from "react";
import { useEmployees } from "../context/EmployeeContext";
import "../css/Dashboard.css";

function Dashboard() {
  const { employees } = useEmployees();

  const totalEmployees = employees.length;
  const activeEmployees = employees.filter(
    (emp) => emp.status === "Active"
  ).length;
  const presentEmployees = employees.filter(
    (emp) => emp.attendance === "Present"
  ).length;

  const totalSalary = employees.reduce(
    (sum, emp) => sum + Number(emp.salary),
    0
  );

  return (
    <div className="dashboard">
      <h1>Employee Dashboard</h1>

      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Employees</h3>
          <p>{totalEmployees}</p>
        </div>

        <div className="card">
          <h3>Active Employees</h3>
          <p>{activeEmployees}</p>
        </div>

        <div className="card">
          <h3>Present Today</h3>
          <p>{presentEmployees}</p>
        </div>

        <div className="card">
          <h3>Total Payroll</h3>
          <p>₹ {totalSalary.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;