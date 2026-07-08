import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <NavLink to="/">Dashboard</NavLink>
        </li>

        <li>
          <NavLink to="/employees">Employees</NavLink>
        </li>

        <li>
          <NavLink to="/addemployee">Add Employee</NavLink>
        </li>

        <li>
          <NavLink to="/attendance">Attendance</NavLink>
        </li>

        <li>
          <NavLink to="/salary">Salary</NavLink>
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;