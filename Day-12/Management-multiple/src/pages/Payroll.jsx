import React from "react";
import { useEmployees } from "../context/EmployeeContext";
import "../css/Payroll.css";

function Payroll() {
  const { employees } = useEmployees();

  const totalPayroll = employees.reduce(
    (sum, employee) => sum + Number(employee.salary),
    0
  );

  return (
    <div className="payroll-container">

      <h1>Payroll</h1>

      <div className="salary-card">

        <h2>Total Monthly Payroll</h2>

        <h1>₹ {totalPayroll.toLocaleString()}</h1>

      </div>

      {employees.map((employee) => (

        <div
          className="salary-card"
          key={employee.id}
        >

          <h3>{employee.name}</h3>

          <p>Department : {employee.department}</p>

          <p>Designation : {employee.designation}</p>

          <p>Salary : ₹ {employee.salary}</p>

        </div>

      ))}

    </div>
  );
}

export default Payroll;