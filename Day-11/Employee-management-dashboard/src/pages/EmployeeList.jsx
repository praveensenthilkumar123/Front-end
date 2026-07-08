import { useContext } from "react";

function EmployeeList() {

  const { employees, deleteEmployee } = useContext(EmployeeContext);

  return (
    <div>

      <h2>Employee List</h2>

      <table className="employee-table">

        <thead>

          <tr>

            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Action</th>

          </tr>

        </thead>

        <tbody>

          {employees.map((emp) => (

            <tr key={emp.id}>

              <td>{emp.id}</td>

              <td>{emp.name}</td>

              <td>{emp.department}</td>

              <td>₹{emp.salary}</td>

              <td>

                <button
                  className="delete-btn"
                  onClick={() => deleteEmployee(emp.id)}
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