import React from "react";

function Footer() {
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "15px",
        background: "#0f172a",
        color: "white",
        marginTop: "20px",
      }}
    >
      © {new Date().getFullYear()} Employee Management System
    </footer>
  );
}

export default Footer;