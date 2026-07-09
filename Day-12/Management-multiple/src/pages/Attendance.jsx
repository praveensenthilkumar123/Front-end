import React from "react";
import { useEmployees } from "../context/EmployeeContext";
import "../css/Table.css";

function Attendance() {
  const { employees } = useEmployees();

  return (
    <div className="table-container">

      <h1>Attendance</h1>

      <table>

        <thead>

          <tr>

            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Attendance</th>

          </tr>

        </thead>

        <tbody>

          {employees.map((employee) => (

            <tr key={employee.id}>

              <td>{employee.id}</td>

              <td>{employee.name}</td>

              <td>{employee.department}</td>

              <td>

                <span
                  className={
                    employee.attendance === "Present"
                      ? "status-present"
                      : employee.attendance === "Absent"
                      ? "status-absent"
                      : "status-leave"
                  }
                >
                  {employee.attendance}
                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Attendance;