import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEmployees } from "../context/EmployeeContext";
import "../css/Employee.css";
import "../css/Table.css";

function EmployeeList() {
  const { employees, deleteEmployee } = useEmployees();

  const [search, setSearch] = useState("");

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="employee-container">

      <h1>Employees</h1>

      <input
        type="text"
        placeholder="Search employee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br /><br />

      <table>

        <thead>

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>

        </thead>

        <tbody>

          {filteredEmployees.map((employee) => (

            <tr key={employee.id}>

              <td>{employee.id}</td>

              <td>{employee.name}</td>

              <td>{employee.department}</td>

              <td>{employee.designation}</td>

              <td>₹ {employee.salary}</td>

              <td>

                <Link to={`/employee/${employee.id}`}>
                  <button>View</button>
                </Link>

                <Link to={`/edit/${employee.id}`}>
                  <button>Edit</button>
                </Link>

                <button
                  onClick={() => deleteEmployee(employee.id)}
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default EmployeeList;