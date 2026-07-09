import React from "react";
import { Link } from "react-router-dom";
import "../css/Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>MENU</h3>

      <ul>
        <li>
          <Link to="/">🏠 Dashboard</Link>
        </li>

        <li>
          <Link to="/employees">👨‍💼 Employees</Link>
        </li>

        <li>
          <Link to="/add">➕ Add Employee</Link>
        </li>

        <li>
          <Link to="/about">ℹ About</Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;