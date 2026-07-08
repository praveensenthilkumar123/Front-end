import React from "react";

function Salary() {

  const salary = [

    {
      id: 101,
      name: "John",
      department: "IT",
      salary: 45000,
    },

    {
      id: 102,
      name: "Emma",
      department: "HR",
      salary: 38000,
    },

    {
      id: 103,
      name: "David",
      department: "Finance",
      salary: 52000,
    },

    {
      id: 104,
      name: "Sophia",
      department: "Sales",
      salary: 41000,
    }

  ];

  return (
    <div>

      <h1>Salary Details</h1>

      <table className="employee-table">

        <thead>

          <tr>

            <th>ID</th>

            <th>Name</th>

            <th>Department</th>

            <th>Salary</th>

          </tr>

        </thead>

        <tbody>

          {salary.map((emp) => (

            <tr key={emp.id}>

              <td>{emp.id}</td>

              <td>{emp.name}</td>

              <td>{emp.department}</td>

              <td>₹ {emp.salary}</td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Salary;