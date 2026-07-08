import React from "react";
import "../css/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <h1>Dashboard Overview</h1>

      <div className="card-container">

        <div className="card">
          <h3>Total Employees</h3>
          <h2>250</h2>
        </div>

        <div className="card">
          <h3>Present</h3>
          <h2>220</h2>
        </div>

        <div className="card">
          <h3>Absent</h3>
          <h2>30</h2>
        </div>

        <div className="card">
          <h3>Departments</h3>
          <h2>8</h2>
        </div>

      </div>

      <div className="dashboard-info">
        <h2>Welcome to Employee Management Dashboard</h2>

        <p>
          Manage employee records, attendance, salary details,
          and monitor organization performance from one place.
        </p>
      </div>

    </div>
  );
}

export default Dashboard;