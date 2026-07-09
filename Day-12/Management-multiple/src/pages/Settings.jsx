import React, { useState } from "react";
import "../css/Forms.css";

function Settings() {
  const [company, setCompany] = useState("ABC Technologies");
  const [email, setEmail] = useState("admin@gmail.com");
  const [phone, setPhone] = useState("9876543210");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Settings Saved Successfully!");
  };

  return (
    <div className="form-container">
      <h1>Settings</h1>

      <form onSubmit={handleSubmit}>
        <label>Company Name</label>
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />

        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Phone</label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
}

export default Settings;