import React from "react";
import { useEmployees } from "../context/EmployeeContext";
import "../css/Dashboard.css";

function Reports() {
  const { employees } = useEmployees();

  const totalEmployees = employees.length;
  const activeEmployees = employees.filter(
    (emp) => emp.status === "Active"
  ).length;
  const inactiveEmployees = employees.filter(
    (emp) => emp.status === "Inactive"
  ).length;
  const presentEmployees = employees.filter(
    (emp) => emp.attendance === "Present"
  ).length;
  const absentEmployees = employees.filter(
    (emp) => emp.attendance === "Absent"
  ).length;

  const totalPayroll = employees.reduce(
    (sum, emp) => sum + Number(emp.salary),
    0
  );

  return (
    <div className="dashboard">
      <h1>Employee Reports</h1>

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
          <h3>Inactive Employees</h3>
          <p>{inactiveEmployees}</p>
        </div>

        <div className="card">
          <h3>Present Today</h3>
          <p>{presentEmployees}</p>
        </div>

        <div className="card">
          <h3>Absent Today</h3>
          <p>{absentEmployees}</p>
        </div>

        <div className="card">
          <h3>Total Payroll</h3>
          <p>₹ {totalPayroll.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default Reports;