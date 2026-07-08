import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import EmployeeList from "./pages/EmployeeList";
import AddEmployee from "./pages/AddEmployee";
import Attendance from "./pages/Attendance";
import Salary from "./pages/Salary";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <div className="layout">
        <Sidebar />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/addemployee" element={<AddEmployee />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/salary" element={<Salary />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;