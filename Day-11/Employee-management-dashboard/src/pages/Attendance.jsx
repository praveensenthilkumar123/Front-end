import React from "react";

function Attendance() {

  const attendance = [
    { id: 101, name: "John", status: "Present" },
    { id: 102, name: "Emma", status: "Absent" },
    { id: 103, name: "David", status: "Present" },
    { id: 104, name: "Sophia", status: "Present" },
    { id: 105, name: "James", status: "Absent" },
  ];

  return (
    <div>

      <h1>Employee Attendance</h1>

      <table className="employee-table">

        <thead>

          <tr>

            <th>ID</th>
            <th>Name</th>
            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {attendance.map((emp) => (

            <tr key={emp.id}>

              <td>{emp.id}</td>

              <td>{emp.name}</td>

              <td>{emp.status}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Attendance;