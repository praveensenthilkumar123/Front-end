import React from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>EMS</span>
      </div>

      <h2>Employee Management System</h2>

      <div className="profile">
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
        />
      </div>
    </nav>
  );
}

export default Navbar;